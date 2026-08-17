/**
 * Typen und Startzustand des Kontaktformulars.
 *
 * Bewusst getrennt von app/kontakt/actions.ts: Eine Datei mit "use server"
 * darf ausschließlich async-Funktionen exportieren – ein exportiertes Objekt
 * wie `startZustand` lässt die Server Action zur Laufzeit fehlschlagen.
 */

export type Feldname =
  | "name"
  | "email"
  | "telefon"
  | "anlass"
  | "datum"
  | "nachricht"
  | "datenschutz";

export type FormularZustand = {
  status: "leer" | "erfolg" | "fehler";
  meldung?: string;
  /** Feldbezogene Fehlermeldungen, damit sie direkt am Eingabefeld stehen. */
  fehler?: Partial<Record<Feldname, string>>;
  /** Eingaben zurückgeben, damit bei einem Fehler nichts neu getippt werden muss. */
  werte?: Partial<Record<Feldname, string>>;
};

export const startZustand: FormularZustand = { status: "leer" };
