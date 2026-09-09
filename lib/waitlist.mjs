import { normalizeContact } from "./contact.mjs";

export async function saveWaitlistContact(value, { url, secret, fetcher = fetch } = {}) {
  const contact = normalizeContact(value);
  if (!contact) return { status: 400, body: { error: "Enter a valid email address or phone number." } };
  let endpoint;
  try {
    endpoint = new URL(url);
    if (endpoint.protocol !== "https:" || endpoint.username || endpoint.password) throw new Error();
  } catch {
    return { status: 503, body: { error: "Early access registration is temporarily unavailable. Please try again later." } };
  }
  const now = new Date();
  const timestamp = now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
  const sheetDb = endpoint.hostname === "sheetdb.io" || endpoint.hostname.endsWith(".sheetdb.io");
  // Keep phone numbers and contacts as literal spreadsheet cells, never formulas.
  const cell = /^[=+\-@]/.test(contact) ? "'" + contact : contact;
  const payload = sheetDb
    ? { data: [{ "Timestamp": timestamp, "Email / Phone Number": cell, "ISO Date": now.toISOString() }] }
    : { contact: cell, timestamp, isoDate: now.toISOString(), ...(secret ? { secret } : {}) };
  try {
    const response = await fetcher(endpoint.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    const result = await response.json().catch(() => null);
    const confirmed = sheetDb ? Number(result?.created) === 1 : result?.result === "success";
    if (!response.ok || !confirmed) {
      return { status: 502, body: { error: "We couldn't confirm your registration. Please try again." } };
    }
    return { status: 200, body: { success: true, message: "You're on the list. Your details have been saved." } };
  } catch {
    return { status: 502, body: { error: "We couldn't reach the registration service. Please try again." } };
  }
}
