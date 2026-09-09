"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCheck,
  Clock,
  Heart,
  Image as ImageIcon,
  LoaderCircle,
  MessageCircle,
  Paperclip,
  Plus,
  Send,
  ShieldAlert,
  X,
} from "lucide-react";

const storageKey = "lovydate_support_tickets_v2";
const categories = [
  "Account & Login",
  "Verification & Photos",
  "Matches & Discovery",
  "Safety & Reporting",
  "Feedback & Suggestions",
];

const safeImage = (value) =>
  typeof value === "string" &&
  (/^data:image\/(png|jpeg|webp);base64,[a-zA-Z0-9+/=]+$/.test(value) ||
    /^https:\/\//.test(value));

async function supportRequest(path, { token, body, signal } = {}) {
  const response = await fetch("/api/support/" + path, {
    method: body ? "POST" : "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "X-Support-Token": token } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: signal || AbortSignal.timeout(20000),
  });
  const json = await response.json().catch(() => null);
  if (!response.ok || !json?.data) {
    const error = new Error(
      json?.error?.message || "Unable to reach support. Please try again."
    );
    error.code = json?.error?.code;
    throw error;
  }
  return json.data;
}

export default function FloatingMascot() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("home"); // "home" | "new" | "chat"
  const [tickets, setTickets] = useState([]);
  const [active, setActive] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [busy, setBusy] = useState(false);
  const [reading, setReading] = useState(false);
  const [error, setError] = useState("");
  const [storageWarning, setStorageWarning] = useState("");
  const dialog = useRef(null);
  const launcher = useRef(null);
  const stream = useRef(null);
  const pending = useRef(false);
  const readPending = useRef(false);
  const currentView = useRef(view);
  currentView.current = view;

  // Load saved tickets from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(stored)) {
        setTickets(
          stored
            .filter(
              (t) =>
                t &&
                typeof t.id === "string" &&
                typeof t.accessToken === "string"
            )
            .slice(0, 15)
        );
      }
    } catch {
      /* Device storage fallback */
    }
  }, []);

  // Sync dialog modal open/close
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    }
  }, [open]);

  // Poll for messages in active chat
  useEffect(() => {
    if (!open || view !== "chat" || !active) return;
    const controller = new AbortController();
    let timer;
    async function poll() {
      try {
        const data = await supportRequest(
          "tickets/" + encodeURIComponent(active.id),
          {
            token: active.accessToken,
            signal: AbortSignal.any([
              controller.signal,
              AbortSignal.timeout(18000),
            ]),
          }
        );
        if (!controller.signal.aborted) {
          setTicket(data);
          setError("");
        }
      } catch (err) {
        if (!controller.signal.aborted) setError(err.message);
      } finally {
        if (!controller.signal.aborted) timer = setTimeout(poll, 5000);
      }
    }
    poll();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [open, view, active]);

  // Auto-scroll stream on new message
  const lastMessageId = ticket?.messages?.at(-1)?.id;
  useEffect(() => {
    if (stream.current) {
      stream.current.scrollTop = stream.current.scrollHeight;
    }
  }, [lastMessageId, busy]);

  function close() {
    dialog.current?.close();
    setOpen(false);
    launcher.current?.focus();
  }

  function changeView(next) {
    if (pending.current || readPending.current) return;
    setView(next);
    setError("");
    setAttachments([]);
    if (next !== "chat") {
      setActive(null);
      setTicket(null);
    }
  }

  function activate(saved) {
    setActive(saved);
    setTicket(null);
    setReply("");
    setAttachments([]);
    setError("");
    setView("chat");
  }

  async function attach(event) {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length || readPending.current) return;
    if (
      attachments.length + files.length > 3 ||
      files.some(
        (file) =>
          !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
          file.size > 1000000
      )
    ) {
      setError("Attach up to 3 PNG, JPG, or WebP images, each under 1 MB.");
      return;
    }
    readPending.current = true;
    setReading(true);
    setError("");
    const startView = view;
    try {
      const images = await Promise.all(
        files.map(
          (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      );
      if (currentView.current === startView) {
        setAttachments((previous) => [...previous, ...images]);
      }
    } catch {
      setError("Couldn't read that image. Please try another file.");
    } finally {
      readPending.current = false;
      setReading(false);
    }
  }

  async function submit(event) {
    event.preventDefault();
    if (pending.current || readPending.current) return;
    const creating = view === "new";
    const text = creating ? message.trim() : reply.trim();
    if (!text && !attachments.length) return;
    pending.current = true;
    setBusy(true);
    setError("");
    try {
      if (creating) {
        const created = await supportRequest("tickets", {
          body: {
            name: name.trim(),
            email: email.trim(),
            category,
            subject: category,
            message: text,
            attachments,
          },
        });
        if (!created.id || !created.accessToken) {
          throw new Error(
            "Support couldn't return secure access to your conversation. Please try again later."
          );
        }
        const saved = {
          id: created.id,
          accessToken: created.accessToken,
          subject: created.subject,
          createdAt: created.createdAt,
        };
        const updated = [
          saved,
          ...tickets.filter((t) => t.id !== saved.id),
        ].slice(0, 15);
        setTickets(updated);
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch {
          setStorageWarning(
            "Your browser couldn't save this conversation. Keep this page open to receive replies."
          );
        }
        setActive(saved);
        setTicket({
          ...created,
          messages: created.initialMessage ? [created.initialMessage] : [],
        });
        setView("chat");
        setMessage("");
      } else {
        const sent = await supportRequest(
          "tickets/" + encodeURIComponent(active.id) + "/messages",
          {
            token: active.accessToken,
            body: { name: name.trim(), message: text, attachments },
          }
        );
        setTicket((previous) => ({
          ...previous,
          messages: [
            ...(previous?.messages || []).filter(
              (item) => item.id !== sent.id
            ),
            sent,
          ],
        }));
        setReply("");
      }
      setAttachments([]);
    } catch (err) {
      setError(err.message);
      if (err.code === "TICKET_RESOLVED") {
        setTicket((previous) => ({ ...previous, status: "resolved" }));
      }
      if (err.code === "MESSAGING_RESTRICTED") {
        setTicket((previous) => ({ ...previous, isRestricted: true }));
      }
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  const ended = ["resolved", "closed"].includes(ticket?.status);

  const attachmentPreviews = attachments.length > 0 && (
    <div className="support-attachment-tray">
      {attachments.map((url, index) => (
        <div key={index} className="support-attachment-preview">
          <img src={url} alt={`Attachment ${index + 1}`} />
          <button
            type="button"
            className="support-attachment-remove"
            aria-label={`Remove attachment ${index + 1}`}
            disabled={busy || reading}
            onClick={() =>
              setAttachments((prev) => prev.filter((_, i) => i !== index))
            }
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Compact Circular Floating Action Button */}
      <button
        ref={launcher}
        className="support-launcher-circle"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Open Lovydate Support Chat"
        title="Lovydate Support"
      >
        <Image
          src="/assets/mascot_icon.png"
          alt="Lovydate Mascot"
          width={32}
          height={32}
          className="launcher-mascot-img"
        />
        <span className="support-launcher-pulse" aria-hidden="true" />
      </button>

      {/* Support Dialog Modal */}
      {open && (
        <dialog
          ref={dialog}
          className="support-dialog"
          aria-labelledby="support-dialog-title"
          onCancel={close}
          onClose={() => {
            setOpen(false);
            launcher.current?.focus();
          }}
        >
          {/* Header */}
          <div className="support-header">
            <div className="support-header-left">
              {view !== "home" && (
                <button
                  className="support-icon-btn support-back-btn"
                  type="button"
                  onClick={() => changeView("home")}
                  disabled={busy || reading}
                  aria-label="Back to support home"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              <div className="support-header-avatar">
                <Image
                  src="/assets/mascot_icon.png"
                  alt="Lovydate Mascot"
                  width={34}
                  height={34}
                />
              </div>
              <div className="support-header-info">
                <h2 id="support-dialog-title">Lovydate Support</h2>
              </div>
            </div>
            <button
              type="button"
              className="support-icon-btn support-close-btn"
              aria-label="Close support dialog"
              onClick={close}
            >
              <X size={19} />
            </button>
          </div>

          {/* Banner Notifications */}
          {error && (
            <div className="support-alert-banner" role="alert">
              <ShieldAlert size={16} />
              <span>{error}</span>
            </div>
          )}
          {storageWarning && (
            <div className="support-alert-banner warning" role="status">
              <span>{storageWarning}</span>
            </div>
          )}

          {/* VIEW: Home */}
          {view === "home" && (
            <div className="support-body support-home-view">
              <div className="support-welcome-card">
                <div className="welcome-tag">
                  <Heart size={13} fill="currentColor" /> Lovydate Helpdesk
                </div>
                <h3>How can we help today?</h3>
                <p>
                  Questions about your profile, verification, match settings, or
                  safety? Our team is right here.
                </p>
                <button
                  className="support-cta-btn"
                  onClick={() => changeView("new")}
                >
                  <div className="cta-icon-box">
                    <Plus size={18} />
                  </div>
                  <div className="cta-text">
                    <strong>Start a new conversation</strong>
                    <span>Send a direct message to our support staff</span>
                  </div>
                  <ArrowUpRight size={18} className="cta-arrow" />
                </button>
              </div>

              {tickets.length > 0 && (
                <div className="support-history-section">
                  <div className="history-header">
                    <Clock size={15} />
                    <h4>Recent Conversations</h4>
                  </div>
                  <div className="support-history-list">
                    {tickets.map((saved) => (
                      <button
                        key={saved.id}
                        className="support-history-item"
                        onClick={() => activate(saved)}
                      >
                        <div className="history-item-content">
                          <span className="history-topic">
                            {saved.subject || "Support Request"}
                          </span>
                          <span className="history-date">
                            {saved.createdAt
                              ? new Date(saved.createdAt).toLocaleDateString(
                                  undefined,
                                  {
                                    month: "short",
                                    day: "numeric",
                                  }
                                )
                              : "Recent"}
                          </span>
                        </div>
                        <ArrowUpRight size={16} className="history-arrow" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="support-quick-topics">
                <span className="topics-label">Common Topics</span>
                <div className="topics-chips">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className="topic-chip"
                      onClick={() => {
                        setCategory(cat);
                        changeView("new");
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <p className="support-footer-note">
                <Heart size={12} fill="currentColor" /> Conversations are saved
                locally in your browser.
              </p>
            </div>
          )}

          {/* VIEW: New Conversation Form */}
          {view === "new" && (
            <form
              className="support-body support-form-view"
              onSubmit={submit}
            >
              <div className="form-intro">
                <h3>Start a conversation</h3>
                <p>Fill out the details below and we’ll get back to you shortly.</p>
              </div>

              <div className="form-group">
                <label htmlFor="support-name">Your Name</label>
                <input
                  id="support-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Aayush Sharma"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="support-email">Email Address</label>
                <input
                  id="support-email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="support-topic">Topic</label>
                <div className="custom-select-wrapper">
                  <select
                    id="support-topic"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="support-message">Message</label>
                <textarea
                  id="support-message"
                  rows={4}
                  maxLength={5000}
                  placeholder="Describe what you need help with..."
                  required={!attachments.length}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Attachments Section */}
              {attachmentPreviews}

              <div className="form-attachments-bar">
                <label className="attach-button-label">
                  <Paperclip size={16} />
                  <span>
                    {reading ? "Reading image…" : "Attach screenshots (Max 3)"}
                  </span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    disabled={busy || reading}
                    onChange={attach}
                  />
                </label>
              </div>

              <div className="form-submit-row">
                <button
                  className="support-submit-btn"
                  type="submit"
                  disabled={busy || reading}
                >
                  {busy ? (
                    <>
                      <span>Sending message</span>
                      <LoaderCircle className="spin" size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send to Support</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* VIEW: Active Chat */}
          {view === "chat" && (
            <div className="support-chat-wrapper">
              {/* Ticket Context Subheader */}
              <div className="support-chat-subbar">
                <div className="subbar-info">
                  <span className="subbar-title">
                    {ticket?.subject || active?.subject || "Support Ticket"}
                  </span>
                  <span className="subbar-id">
                    #{active?.id ? active.id.slice(0, 8) : "Live"}
                  </span>
                </div>
                <div
                  className={`subbar-status-chip ${
                    ended
                      ? "status-closed"
                      : ticket?.status === "in_progress"
                      ? "status-progress"
                      : "status-open"
                  }`}
                >
                  <span className="status-indicator-dot" />
                  <span>
                    {ended
                      ? "Resolved"
                      : ticket?.status
                      ? ticket.status.replace("_", " ")
                      : "Open"}
                  </span>
                </div>
              </div>

              {/* Messages Stream */}
              <div
                className="support-message-stream"
                ref={stream}
                aria-live="polite"
                aria-relevant="additions"
              >
                {!ticket && (
                  <div className="chat-loading-state">
                    <LoaderCircle className="spin" size={24} />
                    <p>Connecting to your conversation…</p>
                  </div>
                )}

                {ticket?.messages?.length === 0 && (
                  <div className="chat-empty-state">
                    <p>No messages yet. Send a message to get started.</p>
                  </div>
                )}

                {ticket?.messages?.map((item) => {
                  const isStaff = item.senderType === "admin";
                  const formattedTime = item.createdAt
                    ? new Date(item.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "";

                  return (
                    <article
                      key={item.id}
                      className={`support-message-row ${
                        isStaff ? "staff-row" : "user-row"
                      }`}
                    >
                      {isStaff && (
                        <div className="message-avatar">
                          <Image
                            src="/assets/mascot_icon.png"
                            alt="Support Agent"
                            width={30}
                            height={30}
                          />
                        </div>
                      )}

                      <div
                        className={`support-bubble ${
                          isStaff ? "staff-bubble" : "user-bubble"
                        }`}
                      >
                        {isStaff && (
                          <div className="bubble-sender-name">
                            <span>
                              {item.senderName || "Lovydate Support"}
                            </span>
                            <span className="verified-badge" title="Official Staff">
                              <Check size={11} strokeWidth={3} />
                            </span>
                          </div>
                        )}

                        {item.message && (
                          <p className="bubble-text">{item.message}</p>
                        )}

                        {Array.isArray(item.attachments) &&
                          item.attachments.filter(safeImage).map((url, idx) => (
                            <a
                              key={idx}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bubble-attachment-link"
                            >
                              <img
                                src={url}
                                alt={`Attachment ${idx + 1}`}
                                className="bubble-attachment-img"
                              />
                            </a>
                          ))}

                        <div className="bubble-meta">
                          <time dateTime={item.createdAt}>{formattedTime}</time>
                          {!isStaff && (
                            <span className="message-status-icon" aria-label="Delivered">
                              <CheckCheck size={14} />
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Reply Input Bar or Closed State */}
              {ended || ticket?.isRestricted ? (
                <div className="chat-ended-box">
                  <div className="ended-icon-wrapper">
                    <Check size={18} />
                  </div>
                  <div className="ended-copy">
                    <strong>
                      {ticket?.isRestricted
                        ? "Messaging Restricted"
                        : "Conversation Resolved"}
                    </strong>
                    <p>
                      {ticket?.isRestricted
                        ? "Messaging is restricted on this support session."
                        : "This ticket has been marked as resolved. Need more help?"}
                    </p>
                  </div>
                  <button
                    className="start-new-link-btn"
                    onClick={() => changeView("new")}
                  >
                    Start a new conversation <ArrowUpRight size={15} />
                  </button>
                </div>
              ) : (
                <form className="support-reply-dock" onSubmit={submit}>
                  {attachmentPreviews}

                  <div className="reply-dock-inner">
                    <label className="reply-attach-btn" title="Attach an image">
                      <ImageIcon size={18} />
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        disabled={busy || reading}
                        onChange={attach}
                      />
                    </label>

                    <textarea
                      id="support-reply"
                      rows={1}
                      maxLength={5000}
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your reply here…"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          if (
                            !busy &&
                            !reading &&
                            (reply.trim() || attachments.length)
                          ) {
                            submit(e);
                          }
                        }
                      }}
                    />

                    <button
                      type="submit"
                      className="reply-send-btn"
                      aria-label="Send message"
                      disabled={
                        busy ||
                        reading ||
                        !ticket ||
                        (!reply.trim() && !attachments.length)
                      }
                    >
                      {busy ? (
                        <LoaderCircle size={18} className="spin" />
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </dialog>
      )}
    </>
  );
}
