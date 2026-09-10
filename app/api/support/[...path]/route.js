async function proxy(request, context) {
  const { path } = await context.params;
  const route = path.join("/");
  const allowed = request.method === "GET"
    ? /^tickets\/[a-zA-Z0-9-]+$/.test(route)
    : route === "tickets" || /^tickets\/[a-zA-Z0-9-]+\/messages$/.test(route);
  if (!allowed) return Response.json({ error: { message: "Not found." } }, { status: 404 });
  const origin = request.headers.get("origin");
  if (origin) {
    let originHost = "";
    try {
      const originUrl = new URL(origin);
      originHost = originUrl.hostname.toLowerCase().replace(/^www\./, "");
    } catch {
      originHost = "";
    }
    if (request.method !== "GET" && originHost !== "lovydate.fun") {
      return Response.json({ error: { message: "This request isn't allowed." } }, { status: 403 });
    }
  }
  const configured = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  let base;
  try {
    base = new URL(configured);
    if (!["http:", "https:"].includes(base.protocol) || base.username || base.password) throw new Error();
  } catch {
    return Response.json({ error: { message: "Support is temporarily unavailable. Please try again later." } }, { status: 503 });
  }
  const apiBase = base.toString().replace(/\/$/, "").replace(/\/api\/v1$/, "") + "/api/v1";
  const headers = { "Content-Type": "application/json", Accept: "application/json" };
  const token = request.headers.get("X-Support-Token");
  if (token) headers["X-Support-Token"] = token;
  let body;
  if (request.method === "POST") {
    if (Number(request.headers.get("content-length")) > 4500000) return Response.json({ error: { message: "Attachments are too large." } }, { status: 413 });
    body = await request.text();
    if (body.length > 4500000) return Response.json({ error: { message: "Attachments are too large." } }, { status: 413 });
    try { JSON.parse(body); } catch { return Response.json({ error: { message: "Invalid request." } }, { status: 400 }); }
  }
  try {
    const response = await fetch(apiBase + "/support/" + route, {
      method: request.method, headers, ...(body ? { body } : {}),
      cache: "no-store", signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => null);
    if (!data) return Response.json({ error: { message: "Support is temporarily unavailable. Please try again." } }, { status: 502 });
    return Response.json(data, { status: response.status, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: { message: "Unable to reach support. Please try again." } }, { status: 502 });
  }
}
export const GET = proxy;
export const POST = proxy;
