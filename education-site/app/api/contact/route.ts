import { NextRequest, NextResponse } from "next/server";

const AEGIS_URL = "https://mailer.navchetna.tech/send";
const AEGIS_KEY = process.env.AEGIS_MAILER_API_KEY!;

export async function POST(req: NextRequest) {
  if (!AEGIS_KEY) {
    return NextResponse.json({ success: false, error: "Missing API key" }, { status: 500 });
  }

  const { name, email, phone, org, orgType, size, message } = await req.json();

  const html = `
    <div style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 32px; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="font-size: 22px; font-weight: 600; color: #000; margin-bottom: 24px; letter-spacing: -0.02em;">New Enterprise Enquiry — Osmium AI</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af; width: 160px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${name}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af;">Work Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${email}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${phone || "—"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af;">Organisation</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${org}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af;">Org Type</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${orgType}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #9ca3af;">Learners</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #000;">${size || "—"}</td></tr>
        <tr><td style="padding: 10px 0; font-size: 13px; color: #9ca3af; vertical-align: top;">Requirements</td><td style="padding: 10px 0; font-size: 14px; color: #000; line-height: 1.6;">${message || "—"}</td></tr>
      </table>
      <p style="margin-top: 32px; font-size: 11px; color: #9ca3af;">Sent via Osmium AI enterprise enquiry form.</p>
    </div>
  `;

  try {
    const res = await fetch(AEGIS_URL, {
      method: "POST",
      headers: {
        "x-api-key": AEGIS_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "navchetna.official.llp@gmail.com",
        from: "hello@navchetna.tech",
        replyTo: email,
        subject: `New Enterprise Enquiry from ${org}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("AegisMailer error:", err);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
