// TIGON IOT "Webhook Flows" lead delivery for BAY GOLF CARTS (https://baygolfcarts.com).
// This webhook belongs to this website only — never copy it to another site.
//
// By default the browser posts straight to the webhook (signatures are optional on it).
// To send leads through the signing server function instead (api/tigon-lead.js on Vercel),
// build with VITE_TIGON_LEAD_ENDPOINT=/api/tigon-lead. The signing secret only ever lives
// in the server's environment variables — never here.

export const TIGON_DIRECT_ENDPOINT =
  "https://tigoniot.com/hooks/F5y28LqREHp4EiiqJfH5uFeZNA6p7J2N";

const configured = (import.meta.env.VITE_TIGON_LEAD_ENDPOINT as string | undefined) || "";
export const TIGON_ENDPOINT = configured.trim() || TIGON_DIRECT_ENDPOINT;
const VIA_SERVER = TIGON_ENDPOINT !== TIGON_DIRECT_ENDPOINT;

export const DEFAULT_FORM_NAME = "Contact form";
export const HONEYPOT_FIELD = "website";

const MAX_FILE_MB = 10;
// Vercel functions accept at most 4.5 MB per request, so the signed route has a smaller cap.
const MAX_TOTAL_MB_VIA_SERVER = 4;
const IMAGE_FIELDS = ["image_1", "image_2", "image_3"];
const IMAGE_EXT = /\.(jpe?g|png|gif|webp|heic|heif)$/i;
const IMAGE_MIME = /^image\/(jpeg|png|gif|webp|heic|heif)$/i;

const TRACK = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const STORE_KEY = "tigon_first_touch";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

type Saved = { ts: number; v: Record<string, string> };

function readSaved(): Saved | null {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || "null") as Saved | null;
    if (!saved || !saved.ts || Date.now() - saved.ts > MAX_AGE_MS) return null;
    return saved;
  } catch {
    return null;
  }
}

// First-touch attribution: the first utm_*/gclid/fbclid seen are kept for 30 days.
// Called once on app start (so the landing page's query string is captured) and again on submit.
export function captureFirstTouch(): Record<string, string> {
  const current: Record<string, string> = {};
  let found = false;
  try {
    const q = new URLSearchParams(window.location.search);
    TRACK.forEach((k) => {
      const v = q.get(k);
      if (v) {
        current[k] = v;
        found = true;
      }
    });
  } catch {
    /* ignore */
  }
  let saved = readSaved();
  if (!saved && found) {
    saved = { ts: Date.now(), v: current };
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(saved));
    } catch {
      /* private mode */
    }
  }
  const out: Record<string, string> = {};
  TRACK.forEach((k) => {
    out[k] = saved?.v?.[k] || current[k] || "";
  });
  return out;
}

// Google Analytics client id from the _ga cookie: GA1.1.123456.789012 -> 123456.789012
function gaClientId(): string {
  const m = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
  if (!m) return "";
  const parts = decodeURIComponent(m[1]).split(".");
  return parts.length >= 4 ? parts.slice(-2).join(".") : "";
}

export function trackingFields(): Record<string, string> {
  return {
    ...captureFirstTouch(),
    url: window.location.href,
    referrer: document.referrer || "",
    ga_client_id: gaClientId(),
  };
}

export type LeadErrors = Partial<Record<string, string>>;

// Client-side checks. Returns field -> message; empty object means OK.
export function validateLead(fd: FormData): LeadErrors {
  const errors: LeadErrors = {};
  const val = (k: string) => String(fd.get(k) ?? "").trim();

  if (!val("first_name")) errors.first_name = "Please enter your first name.";
  if (!val("last_name")) errors.last_name = "Please enter your last name.";

  const email = val("email");
  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address.";

  const phone = val("phone1");
  if (!phone) errors.phone1 = "Please enter your phone number.";
  else if (phone.replace(/\D/g, "").length < 10) errors.phone1 = "Please enter a phone number with at least 10 digits.";

  const phone2 = val("phone2");
  if (phone2 && phone2.replace(/\D/g, "").length < 10) errors.phone2 = "Alternate phone needs at least 10 digits.";

  let total = 0;
  IMAGE_FIELDS.forEach((k) => {
    const f = fd.get(k);
    if (!(f instanceof File) || f.size === 0) return;
    total += f.size;
    if (f.size > MAX_FILE_MB * 1024 * 1024) errors[k] = `Each photo must be smaller than ${MAX_FILE_MB} MB.`;
    else if (!IMAGE_MIME.test(f.type) && !IMAGE_EXT.test(f.name)) errors[k] = "Photos must be JPG, PNG, GIF, WEBP or HEIC.";
  });
  if (VIA_SERVER && total > MAX_TOTAL_MB_VIA_SERVER * 1024 * 1024 && !IMAGE_FIELDS.some((k) => errors[k])) {
    errors.image_1 = `Photos together must be smaller than ${MAX_TOTAL_MB_VIA_SERVER} MB.`;
  }
  return errors;
}

// Builds the payload: drops empty file inputs, adds tracking fields, form_name and an empty spam trap.
export function buildLeadData(form: HTMLFormElement, formName: string): FormData {
  const fd = new FormData(form);
  IMAGE_FIELDS.forEach((k) => {
    const f = fd.get(k);
    if (!(f instanceof File) || f.size === 0) fd.delete(k);
  });
  const t = trackingFields();
  Object.keys(t).forEach((k) => fd.set(k, t[k]));
  fd.set("form_name", formName || DEFAULT_FORM_NAME);
  if (!fd.has(HONEYPOT_FIELD)) fd.set(HONEYPOT_FIELD, "");
  fd.delete("user_ip");
  fd.delete("user_agent");
  return fd;
}

export class LeadError extends Error {}

export async function sendLead(fd: FormData): Promise<string | undefined> {
  let res: Response;
  try {
    res = await fetch(TIGON_ENDPOINT, { method: "POST", body: fd, mode: "cors" });
  } catch {
    throw new LeadError("We couldn't reach our server. Please check your connection and try again, or call 1-844-844-6638.");
  }
  if (res.status === 429) {
    throw new LeadError("Too many tries — please wait a minute and try again.");
  }
  const body = await res.text();
  let data: { ok?: boolean; id?: string; error?: string; message?: string } | null = null;
  try {
    data = JSON.parse(body);
  } catch {
    data = null;
  }
  if (!res.ok || !data || data.ok !== true) {
    throw new LeadError(
      data?.error || data?.message || "Sorry, something went wrong. Please try again or call 1-844-844-6638."
    );
  }
  return data.id;
}
