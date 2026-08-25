import "server-only";

import { Resend } from "resend";

/**
 * Mailversand über Resend (resend.com). Es wird bewusst kein Drittanbieter-
 * Formular-Widget eingebunden – die Daten verlassen den eigenen Server nur
 * zum Mailanbieter.
 *
 * Nötige Umgebungsvariablen (siehe .env.example):
 *   RESEND_API_KEY, RESEND_FROM, KONTAKT_EMPFAENGER
 *
 * RESEND_FROM muss eine Adresse auf einer bei Resend verifizierten Domain
 * sein (dashboard.resend.com/domains) – sonst weist die API den Versand ab.
 */

export type MailDaten = {
  name: string;
  email: string;
  telefon?: string;
  anlass?: string;
  datum?: string;
  nachricht: string;
};

function resendKonfiguration() {
  const apiKey = process.env.RESEND_API_KEY;
  const von = process.env.RESEND_FROM;
  const an = process.env.KONTAKT_EMPFAENGER;

  if (!apiKey || !von || !an) return null;

  return { apiKey, von, an };
}

/** Erlaubt der Kontaktseite, fehlende Konfiguration früh zu erkennen. */
export function istMailKonfiguriert(): boolean {
  return resendKonfiguration() !== null;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendeKontaktMail(daten: MailDaten): Promise<void> {
  const konfiguration = resendKonfiguration();

  if (!konfiguration) {
    throw new Error(
      "Resend ist nicht konfiguriert. Bitte RESEND_API_KEY, RESEND_FROM und " +
        "KONTAKT_EMPFAENGER setzen.",
    );
  }

  const resend = new Resend(konfiguration.apiKey);

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

  const { error } = await resend.emails.send({
    from: konfiguration.von,
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

  if (error) {
    throw new Error(`Resend-Versand fehlgeschlagen: ${error.message}`);
  }
}
