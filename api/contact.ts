import { Resend } from "resend";

type ContactPayload = Record<string, unknown> & {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (body: unknown) => void;
    end?: () => void;
  };
};

const TO_EMAIL = "support@tritonoils.com";
const FROM_EMAIL = "Triton Marine Lubricants <support@tritonoils.com>";
const SUBJECT = "New Website Enquiry - Triton Marine Lubricants";

const resend = new Resend(process.env.RESEND_API_KEY);

function isRecord(value: unknown): value is ContactPayload {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function labelFromKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map((item) => cleanString(item)).filter(Boolean).join(", ");
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return cleanString(value);
}

function buildEmailHtml(payload: ContactPayload): string {
  const rows = Object.entries(payload)
    .map(([key, value]) => [labelFromKey(key), formatValue(value)] as const)
    .filter(([, value]) => value.length > 0)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:700;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#111827;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #e5e7eb;">
                <tr>
                  <td style="padding:24px;background:#0e2a47;color:#ffffff;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#f97316;">Website enquiry</div>
                    <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">Triton Marine Lubricants</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;color:#475569;line-height:1.6;">
                    A new enquiry was submitted from the Triton Marine Lubricants website.
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 24px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-bottom:0;">
                      ${rows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service is not configured" });
  }

  let payload: unknown;

  try {
    payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  if (!isRecord(payload)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const name = cleanString(payload.name);
  const email = cleanString(payload.email);
  const message = cleanString(payload.message);

  if (!name || !email || !message || !isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid form submission" });
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: SUBJECT,
      html: buildEmailHtml(payload)
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Unable to send message" });
  }
}
