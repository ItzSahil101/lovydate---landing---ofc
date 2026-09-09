"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { normalizeContact } from "@/lib/contact.mjs";

export default function DownloadBanner() {
  const [contact, setContact] = useState("");
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);

  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    const normalized = normalizeContact(contact);
    if (!normalized) {
      setError("Enter a valid email address or phone number.");
      return;
    }
    pending.current = true;
    setState("loading");
    setError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: normalized }),
        signal: AbortSignal.timeout(18000),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.success !== true) {
        throw new Error(
          data?.error || "We couldn't save your details. Please try again."
        );
      }
      setState("success");
    } catch (err) {
      setState("idle");
      setError(
        err.name === "TimeoutError"
          ? "That took too long. Please try again."
          : err.message === "Failed to fetch"
          ? "Unable to connect. Check your connection and try again."
          : err.message
      );
    } finally {
      pending.current = false;
    }
  }

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="wrap waitlist-grid">
        <div className="waitlist-copy">
          <p className="eyebrow">YOUR NEXT CHAPTER IS CALLING</p>

          <h2>
            Make room for<br />
            <em>something real.</em>
          </h2>

          <p className="waitlist-desc">
            Be there for the first hellos. Join the Lovydate early access list for
            launch updates.
          </p>

          {state === "success" ? (
            <div className="signup-success" role="status">
              <Check size={24} />
              <div>
                <strong>You’re on the list.</strong>
                <p>Your details have been saved for early access updates.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="signup-form"
              aria-busy={state === "loading"}
            >
              <label htmlFor="waitlist-contact" className="sr-only">
                Email or phone number
              </label>
              <div className="signup-row">
                <input
                  id="waitlist-contact"
                  name="contact"
                  type="text"
                  autoComplete="email"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Email or phone number"
                  maxLength={254}
                  required
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "signup-error signup-note" : "signup-note"}
                />
                <button
                  className="button button-ink"
                  disabled={state === "loading"}
                  type="submit"
                >
                  {state === "loading" ? (
                    <>
                      Saving <LoaderCircle size={18} className="spin" />
                    </>
                  ) : (
                    <>
                      Count me in <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <p id="signup-error" className="signup-error" role="alert">
                  {error}
                </p>
              )}

              <p id="signup-note" className="signup-note">
                By joining, you agree to receive early access updates and launch news.
              </p>
            </form>
          )}
        </div>

        <div className="waitlist-mascot">
          <Image
            src="/assets/mascot_namaste_clean.png"
            alt="Lovydate Mascot"
            width={300}
            height={320}
            sizes="(max-width: 760px) 200px, 300px"
          />
          <span>See you at hello.</span>
        </div>
      </div>
    </section>
  );
}
