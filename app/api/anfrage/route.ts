import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "armin.gacanovic@web.de";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.firma || !data.ansprechpartner || !data.email || !data.datum) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const leistungenLabels: Record<string, string> = {
      location: "Location & Court-Buchung",
      organisation: "Turnierorganisation & Moderation",
      coaching: "Coaching & Warm-up",
      catering: "Catering & Getränke",
      entertainment: "DJ & Entertainment",
      branding: "Branding & Merchandise",
      networking: "Networking-Bereiche",
      siegerehrung: "Siegerehrung & Awards",
    };

    const leistungenText = data.leistungen
      .map((l: string) => `• ${leistungenLabels[l] || l}`)
      .join("\n");

    // E-Mail an dich (Benachrichtigung über neue Anfrage)
    await resend.emails.send({
      from: "Court & Company <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Neue Anfrage von ${data.firma}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #252525;">
          <div style="background: #1A4731; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🎾 Neue Event-Anfrage</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Court & Company</p>
          </div>
          <div style="background: #F5F0E8; padding: 32px; border-radius: 0 0 12px 12px;">

            <h2 style="color: #1A4731; font-size: 16px; margin: 0 0 16px;">Firmendaten</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Firma</td><td style="padding: 8px 0; font-weight: bold;">${data.firma}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Ansprechpartner</td><td style="padding: 8px 0; font-weight: bold;">${data.ansprechpartner}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1A4731;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Telefon</td><td style="padding: 8px 0;">${data.telefon || "—"}</td></tr>
            </table>

            <h2 style="color: #1A4731; font-size: 16px; margin: 0 0 16px;">Event-Details</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; color: #666; width: 140px;">Datum</td><td style="padding: 8px 0; font-weight: bold;">${data.datum}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Teilnehmer</td><td style="padding: 8px 0; font-weight: bold;">${data.teilnehmer}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Anlass</td><td style="padding: 8px 0; font-weight: bold;">${data.anlass}</td></tr>
            </table>

            <h2 style="color: #1A4731; font-size: 16px; margin: 0 0 12px;">Gewünschte Leistungen</h2>
            <div style="background: white; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.8; margin-bottom: 24px; white-space: pre-line;">${leistungenText}</div>

            ${data.nachricht ? `
            <h2 style="color: #1A4731; font-size: 16px; margin: 0 0 12px;">Anmerkungen</h2>
            <div style="background: white; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">${data.nachricht}</div>
            ` : ""}

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${data.email}" style="background: #1A4731; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Jetzt antworten →
              </a>
            </div>
          </div>
        </div>
      `,
    });

    // Bestätigungs-E-Mail an den Kunden
    await resend.emails.send({
      from: "Court & Company <onboarding@resend.dev>",
      to: data.email,
      subject: "Eure Anfrage ist bei uns eingegangen ✓",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #252525;">
          <div style="background: #1A4731; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Court & Company</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Corporate Padel Events</p>
          </div>
          <div style="background: #F5F0E8; padding: 32px; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1A4731;">Hallo ${data.ansprechpartner},</h2>
            <p style="line-height: 1.7; color: #444;">vielen Dank für eure Anfrage! Wir haben alle Details erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> mit einem maßgeschneiderten Angebot.</p>

            <div style="background: white; padding: 20px; border-radius: 8px; margin: 24px 0; font-size: 14px;">
              <p style="margin: 0 0 8px; font-weight: bold; color: #1A4731;">Eure Anfrage im Überblick:</p>
              <p style="margin: 4px 0; color: #666;">📅 Datum: <strong>${data.datum}</strong></p>
              <p style="margin: 4px 0; color: #666;">👥 Teilnehmer: <strong>${data.teilnehmer}</strong></p>
              <p style="margin: 4px 0; color: #666;">🎯 Anlass: <strong>${data.anlass}</strong></p>
              <p style="margin: 4px 0; color: #666;">✓ ${data.leistungen.length} Leistungen ausgewählt</p>
            </div>

            <p style="line-height: 1.7; color: #444;">Wir freuen uns darauf, euer Event zu einem unvergesslichen Erlebnis zu machen.</p>
            <p style="color: #444;">Viele Grüße,<br><strong>Das Court & Company Team</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-Mail Fehler:", error);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
