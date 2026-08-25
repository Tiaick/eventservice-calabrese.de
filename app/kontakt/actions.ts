"use server";

/**
 * Diese Datei darf ausschließlich async-Funktionen exportieren.
 * Typen und Startzustand liegen deshalb in lib/kontakt-formular.ts.
 */

import type { Feldname, FormularZustand } from "@/lib/kontakt-formular";
import { sendeKontaktMail } from "@/lib/mail";

const EMAIL_MUSTER = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function text(formData: FormData, feld: string): string {
  const wert = formData.get(feld);
  return typeof wert === "string" ? wert.trim() : "";
}

export async function kontaktAbsenden(
  _bisher: FormularZustand,
  formData: FormData,
): Promise<FormularZustand> {
  /* Honeypot: Ein für Menschen unsichtbares Feld. Ist es ausgefüllt, war es ein
     Bot – wir melden Erfolg, versenden aber nichts. */
  if (text(formData, "webseite")) {
    return { status: "erfolg", meldung: "Vielen Dank für Ihre Anfrage." };
  }

  const werte = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    telefon: text(formData, "telefon"),
    anlass: text(formData, "anlass"),
    datum: text(formData, "datum"),
    nachricht: text(formData, "nachricht"),
  };

  const datenschutz = formData.get("datenschutz") === "ja";
  const fehler: Partial<Record<Feldname, string>> = {};

  if (werte.name.length < 2) {
    fehler.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!EMAIL_MUSTER.test(werte.email)) {
    fehler.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (werte.nachricht.length < 10) {
    fehler.nachricht = "Bitte beschreiben Sie Ihr Vorhaben in ein paar Worten.";
  }
  if (werte.nachricht.length > 5000) {
    fehler.nachricht = "Bitte fassen Sie sich etwas kürzer (maximal 5.000 Zeichen).";
  }
  if (!datenschutz) {
    fehler.datenschutz = "Ohne Ihre Einwilligung dürfen wir die Anfrage nicht verarbeiten.";
  }

  if (Object.keys(fehler).length > 0) {
    return {
      status: "fehler",
      meldung: "Bitte prüfen Sie die markierten Felder.",
      fehler,
      werte,
    };
  }

  try {
    await sendeKontaktMail(werte);
  } catch (ursache) {
    /* Serverseitig laut loggen, damit eine fehlende Resend-Konfiguration im
       Deployment sofort auffällt und keine Anfrage still verloren geht. */
    console.error("Kontaktformular konnte nicht versendet werden:", ursache);

    return {
      status: "fehler",
      meldung:
        "Ihre Anfrage konnte technisch nicht zugestellt werden. " +
        "Bitte rufen Sie uns kurz an oder schreiben Sie uns per WhatsApp – wir kümmern uns sofort darum.",
      werte,
    };
  }

  return {
    status: "erfolg",
    meldung:
      "Vielen Dank für Ihre Anfrage. Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen.",
  };
}
