import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const enquiryTypes = new Set([
  "Product partnership",
  "Technology development",
  "US staffing",
  "Recruitment solutions",
  "Payroll and workforce",
  "Early product access",
  "Other",
]);

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  enquiryType?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
  source?: unknown;
};

type ContactSource = {
  page: string;
  service: string;
  location: string;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeSourceValue(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[^\w\s./#:-]/g, "").trim().slice(0, 120);
}

function getSource(value: unknown): ContactSource {
  if (!value || typeof value !== "object") {
    return { page: "", service: "", location: "" };
  }

  const source = value as Record<string, unknown>;

  return {
    page: sanitizeSourceValue(source.page),
    service: sanitizeSourceValue(source.service),
    location: sanitizeSourceValue(source.location),
  };
}

function getIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= rateLimitMax) {
    return true;
  }

  current.count += 1;
  return false;
}

function validatePayload(payload: ContactPayload) {
  const enquiryType = getString(payload.enquiryType);
  const name = getString(payload.name);
  const email = getString(payload.email);
  const company = getString(payload.company);
  const message = getString(payload.message);
  const website = getString(payload.website);
  const source = getSource(payload.source);

  if (website) {
    return { ok: false as const };
  }

  if (!enquiryType || !enquiryTypes.has(enquiryType)) {
    return { ok: false as const };
  }

  if (!name || name.length > 100) {
    return { ok: false as const };
  }

  if (!email || !isValidEmail(email)) {
    return { ok: false as const };
  }

  if (company.length > 120) {
    return { ok: false as const };
  }

  if (!message || message.length > 3000) {
    return { ok: false as const };
  }

  return {
    ok: true as const,
    data: { enquiryType, name, email, company, message, source },
  };
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json({ error: "Email is not configured" }, { status: 500 });
  }

  const submittedAt = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") || "unknown";
  const { enquiryType, name, email, company, message, source } = validation.data;
  const rows = [
    ["Enquiry Type", enquiryType],
    ["Name", name],
    ["Email", email],
    ["Company", company || "Not provided"],
    ["Message", message],
    ["Source Page", source.page || "Not provided"],
    ["Source Service", source.service || "Not provided"],
    ["Source Location", source.location || "Not provided"],
    ["Submitted timestamp", submittedAt],
    ["User IP", ip],
    ["User Agent", userAgent],
  ];

  const html = `
    <h1>New Website Enquiry - Auxil IT Solutions</h1>
    <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th align="left" valign="top" style="border: 1px solid #e5e0d8;">${escapeHtml(label)}</th>
                <td valign="top" style="border: 1px solid #e5e0d8; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "Auxil Website <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: "New Website Enquiry - Auxil IT Solutions",
      html,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
