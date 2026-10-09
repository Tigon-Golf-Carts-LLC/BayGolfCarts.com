// Vercel serverless function: POST /api/tigon-lead
// Forwards a BAY GOLF CARTS lead to TIGON IOT Webhook Flows and signs it with this
// webhook's own secret:  X-Tigon-Signature: sha256=<hex HMAC-SHA256 of the raw body>
//
// The secret is read from the TIGON_WEBHOOK_SECRET environment variable
// (Vercel → Project → Settings → Environment Variables). Never commit it to git.
// The browser only uses this route when the site is built with
// VITE_TIGON_LEAD_ENDPOINT=/api/tigon-lead (see client/src/lib/tigonLead.ts).
import { createHmac } from "node:crypto";

const TIGON_ENDPOINT =
  process.env.TIGON_WEBHOOK_URL || "https://tigoniot.com/hooks/F5y28LqREHp4EiiqJfH5uFeZNA6p7J2N";
const ALLOWED_ORIGINS = ["https://baygolfcarts.com", "https://www.baygolfcarts.com"];
const MAX_BODY_BYTES = 4.5 * 1024 * 1024; // Vercel's request body limit

export const config = { api: { bodyParser: false } };

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error("too large"), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ ok: false, error: "Origin not allowed." });
  }

  const secret = process.env.TIGON_WEBHOOK_SECRET;
  if (!secret) {
    console.error("TIGON_WEBHOOK_SECRET is not set");
    return res.status(500).json({ ok: false, error: "Lead service is not configured. Please call 1-844-844-6638." });
  }

  let body;
  try {
    body = await readRawBody(req);
  } catch (err) {
    if (err.status === 413) {
      return res.status(413).json({ ok: false, error: "Photos are too large. Please send smaller photos (under 4 MB in total)." });
    }
    return res.status(400).json({ ok: false, error: "Could not read the form." });
  }

  const signature = "sha256=" + createHmac("sha256", secret).update(body).digest("hex");
  const headers = {
    "Content-Type": req.headers["content-type"] || "application/octet-stream",
    "X-Tigon-Signature": signature,
  };
  // Pass the visitor's details through so TIGON records them instead of Vercel's.
  if (req.headers["user-agent"]) headers["User-Agent"] = req.headers["user-agent"];
  if (req.headers["x-forwarded-for"]) headers["X-Forwarded-For"] = req.headers["x-forwarded-for"];
  if (origin) headers["Origin"] = origin;

  try {
    const upstream = await fetch(TIGON_ENDPOINT, { method: "POST", headers, body });
    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    return res.send(text);
  } catch (err) {
    console.error("TIGON webhook request failed", err);
    return res.status(502).json({ ok: false, error: "Sorry, something went wrong. Please try again or call 1-844-844-6638." });
  }
}
