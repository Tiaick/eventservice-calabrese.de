import "server-only";

import nodemailer from "nodemailer";

/**
 * Mailversand über den bestehenden SMTP-Anbieter (z. B. Brevo, Mailjet, eigener
 * Server). Es wird bewusst kein Drittanbieter-Formular-Widget eingebunden –
 * die Daten verlassen den eigenen Server nur zum Mailanbieter.
 *
 * Nötige Umgebungsvariablen (siehe .env.example):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, KONTAKT_EMPFAENGER
 */

export type MailDaten = {
  name: string;
  email: string;
  telefon?: string;
  anlass?: string;
  datum?: string;
  nachricht: string;
};

function smtpKonfiguration() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const an = process.env.KONTAKT_EMPFAENGER;

  if (!host || !user || !pass || !from || !an) return null;

  return { host, port, user, pass, from, an };
}

/** Erlaubt der Kontaktseite, fehlende Konfiguration früh zu erkennen. */
export function istMailKonfiguriert(): boolean {
  return smtpKonfiguration() !== null;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendeKontaktMail(daten: MailDaten): Promise<void> {
  const konfiguration = smtpKonfiguration();

  if (!konfiguration) {
    throw new Error(
      "SMTP ist nicht konfiguriert. Bitte SMTP_HOST, SMTP_PORT, SMTP_USER, " +
        "SMTP_PASSWORD, SMTP_FROM und KONTAKT_EMPFAENGER setzen.",
    );
  }

  const transporter = nodemailer.createTransport({
    host: konfiguration.host,
    port: konfiguration.port,
    /* Port 465 spricht implizites TLS, 587 startet mit STARTTLS. */
    secure: konfiguration.port === 465,
    auth: { user: konfiguration.user, pass: konfiguration.pass },
  });

  const zeilen: [string, string | undefined][] = [
    ["Name", daten.name],
    ["E-Mail", daten.email],
    ["Telefon", daten.telefon],
    ["Anlass", daten.anlass],
    ["Wunschtermin", daten.datum],
  ];

  const textTeile = zeilen
    .filter(([, wert]) => wert)
    .map(([label, wert]) => `${label}: ${wert}`)
    .join("\n");

  await transporter.sendMail({
    from: konfiguration.from,
    to: konfiguration.an,
    /* Antworten gehen direkt an die anfragende Person. */
    replyTo: `${daten.name} <${daten.email}>`,
    subject: `Anfrage über die Website${daten.anlass ? ` – ${daten.anlass}` : ""}`,
    text: `${textTeile}\n\nNachricht:\n${daten.nachricht}\n`,
    html: `
      <h2 style="font-family:sans-serif">Neue Anfrage über die Website</h2>
      <table style="font-family:sans-serif;border-collapse:collapse">
        ${zeilen
          .filter(([, wert]) => wert)
          .map(
            ([label, wert]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#666">${label}</td>` +
              `<td style="padding:4px 0"><strong>${escapeHtml(wert as string)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(daten.nachricht)}</p>
    `,
  });
}
