import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, lane, org, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "RoadShield Website";
    const adminEmail = process.env.ADMIN_EMAIL_PRIMARY;
    const adminCc = process.env.ADMIN_EMAIL_CC;
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (!apiKey || !senderEmail || !adminEmail) {
      console.error(
        "Contact API misconfigured — missing BREVO_API_KEY, BREVO_SENDER_EMAIL, or ADMIN_EMAIL_PRIMARY",
      );
      return NextResponse.json(
        { error: "Email service configuration missing" },
        { status: 500 },
      );
    }

    const laneLabel = lane === "4W" ? "Four Wheeler · Drive Smart" : "Two Wheeler · Ride Smart";
    const row = (label: string, value: string) =>
      value
        ? `<tr>
             <td style="padding:10px;border:1px solid #eee;background:#f7f8fb;font-weight:bold;width:32%;">${label}</td>
             <td style="padding:10px;border:1px solid #eee;">${value}</td>
           </tr>`
        : "";

    const operations: Promise<Response>[] = [];

    const sendEmail = fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: adminEmail, name: "RoadShield Team" }],
        ...(adminCc ? { cc: [{ email: adminCc }] } : {}),
        replyTo: { email, name },
        subject: `New RoadShield Inquiry from ${name} [${laneLabel}]`,
        htmlContent: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1b1c20; max-width: 600px; border: 1px solid #eee; padding: 24px;">
            <h2 style="color: #1b2a4a; border-bottom: 2px solid #da1f26; padding-bottom: 10px;">New Website Inquiry</h2>
            <p>You have received a new inquiry from the <strong>${source || "RoadShield Contact Form"}</strong>.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              ${row("Name", name)}
              ${row("Email", email)}
              ${row("Phone", phone)}
              ${row("Lane", laneLabel)}
              ${row("Organisation / Fleet Size", org)}
              ${row("Message", message)}
            </table>
            <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
              This is an automated notification from the RoadShield website.
            </p>
          </div>
        `,
      }),
    });
    operations.push(sendEmail);

    if (googleSheetUrl) {
      const sendToSheet = fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          lane: laneLabel,
          org,
          message,
          source: source || "RoadShield Website",
          timestamp: new Date().toLocaleString(),
        }),
      })
        .then((res) => {
          if (!res.ok) console.error("Google Sheets response not ok:", res.status);
          return res;
        })
        .catch((err) => {
          console.error("Google Sheets fetch error:", err);
          return { ok: false, status: 500 } as Response;
        });
      operations.push(sendToSheet);
    }

    const results = await Promise.allSettled(operations);
    const emailSuccess =
      results[0].status === "fulfilled" && (results[0].value as Response).ok;
    const sheetSuccess =
      googleSheetUrl && results[1]?.status === "fulfilled" && (results[1].value as Response).ok;

    if (!emailSuccess) {
      console.error("Brevo email send failed");
      return NextResponse.json(
        { error: "Failed to send your inquiry. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      details: { email: emailSuccess, sheet: !!sheetSuccess },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
