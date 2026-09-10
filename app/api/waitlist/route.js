import { saveWaitlistContact } from "@/lib/waitlist.mjs";

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin) {
    const requestUrl = new URL(request.url);
    let sameSiteOrigin = false;
    try {
      const originUrl = new URL(origin);
      const normalizeHost = (host) => host.replace(/^www\./, "");
      sameSiteOrigin = originUrl.protocol === requestUrl.protocol &&
        normalizeHost(originUrl.hostname) === normalizeHost(requestUrl.hostname);
    } catch {
      sameSiteOrigin = false;
    }
    if (!sameSiteOrigin) {
      return Response.json({ error: "This request isn't allowed." }, { status: 403 });
    }
  }
  if (Number(request.headers.get("content-length")) > 2048) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }
  let body;
  try {
    const text = await request.text();
    if (text.length > 2048) return Response.json({ error: "Request is too large." }, { status: 413 });
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "Please send a valid registration." }, { status: 400 });
  }
  const result = await saveWaitlistContact(body?.contact, {
    url: process.env.GOOGLE_SHEET_WEBAPP_URL,
    secret: process.env.WAITLIST_WEBHOOK_SECRET,
  });
  return Response.json(result.body, { status: result.status, headers: { "Cache-Control": "no-store" } });
}
