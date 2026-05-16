"use server";

import { Resend } from "resend";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScbbYsOGM3cK0Fgal-pd9xqLk4DQtl1NCOv3QkH-Nr1R-PF4w/formResponse";

const GOOGLE_FORM_ENTRIES = {
  name: "entry.798262969",
  phone: "entry.2034387381",
  email: "entry.1732231777",
  project: "entry.902552580",
} as const;

const LIMITS = { name: 200, phone: 50, email: 320, project: 5000 } as const;

import type { QuoteFormState } from "./submit-quote-types";

function clean(input: FormDataEntryValue | null, max: number): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function mirrorToGoogleForm(fields: {
  name: string;
  phone: string;
  email: string;
  project: string;
}): Promise<boolean> {
  const body = new URLSearchParams({
    [GOOGLE_FORM_ENTRIES.name]: fields.name,
    [GOOGLE_FORM_ENTRIES.phone]: fields.phone,
    [GOOGLE_FORM_ENTRIES.email]: fields.email,
    [GOOGLE_FORM_ENTRIES.project]: fields.project,
  });
  try {
    const res = await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      redirect: "manual",
    });
    return res.status >= 200 && res.status < 400;
  } catch (err) {
    console.error("[submit-quote] Google Form mirror failed:", err);
    return false;
  }
}

async function sendNotificationEmail(fields: {
  name: string;
  phone: string;
  email: string;
  project: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[submit-quote] RESEND_API_KEY not set — skipping email notification");
    return false;
  }
  const to = process.env.LEAD_NOTIFICATION_EMAIL || "corevancesales@gmail.com";
  const from = process.env.RESEND_FROM || "Corevance Leads <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: fields.email,
      subject: `New FRP quote request — ${fields.name}`,
      html: buildEmailHtml(fields),
    });
    if (error) {
      console.error("[submit-quote] Resend returned error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[submit-quote] Resend send threw:", err);
    return false;
  }
}

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(fields: {
  name: string;
  phone: string;
  email: string;
  project: string;
}): string {
  return `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e3a5f;">
      <h2 style="margin:0 0 16px;color:#ff6b35;">New FRP Quote Request</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;font-weight:600;width:100px;">Name</td><td>${escape(fields.name)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Phone</td><td><a href="tel:${escape(fields.phone)}">${escape(fields.phone)}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Email</td><td><a href="mailto:${escape(fields.email)}">${escape(fields.email)}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600;vertical-align:top;">Project</td><td style="white-space:pre-wrap;">${escape(fields.project)}</td></tr>
      </table>
      <p style="margin-top:24px;font-size:12px;color:#6b7280;">Submitted from corevance.ca · Reply to this email to respond directly.</p>
    </div>
  `;
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  if (clean(formData.get("company"), 1)) {
    return { ok: true };
  }

  const name = clean(formData.get("name"), LIMITS.name);
  const phone = clean(formData.get("phone"), LIMITS.phone);
  const email = clean(formData.get("email"), LIMITS.email);
  const project = clean(formData.get("project"), LIMITS.project);

  const values = { name, phone, email, project };

  if (!name || !phone || !email || !project) {
    return { ok: false, error: "Please fill in all fields.", values };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address.", values };
  }

  const [emailed, mirrored] = await Promise.all([
    sendNotificationEmail(values),
    mirrorToGoogleForm(values),
  ]);

  if (!emailed && !mirrored) {
    return {
      ok: false,
      error: "We couldn't send your message. Please try again or call 437-849-3781.",
      values,
    };
  }

  return { ok: true };
}
