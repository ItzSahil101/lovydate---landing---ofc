export function normalizeContact(value) {
  if (typeof value !== "string") return null;
  const contact = value.trim();
  if (!contact || contact.length > 254 || /[\r\n\x00-\x1f]/.test(contact)) return null;
  if (/^[^\s@=+]+@[^\s@]+\.[^\s@]+$/.test(contact)) return contact;
  const phone = contact.replace(/[\s().-]/g, "");
  return /^\+?[0-9]{7,15}$/.test(phone) ? phone : null;
}
