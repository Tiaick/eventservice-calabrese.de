/**
 * Cookie-Einwilligung – vorbereitet für künftige Analyse-Tools (z. B. Google
 * Analytics), die es zum jetzigen Zeitpunkt noch nicht gibt. Die Zustimmung
 * wird nur lokal im Browser gespeichert, nicht an einen Server übertragen.
 *
 * Sobald ein echtes Analyse-Tool eingebunden wird, muss dessen Skript vor
 * dem Laden `hatAnalyseEinwilligung()` prüfen, damit es nur nach
 * ausdrücklicher Zustimmung startet.
 */

const SPEICHERSCHLUESSEL = "cookie-einwilligung";

export type Einwilligungsstatus = "akzeptiert" | "abgelehnt";

export function gespeicherteEinwilligung(): Einwilligungsstatus | null {
  if (typeof window === "undefined") return null;
  const wert = window.localStorage.getItem(SPEICHERSCHLUESSEL);
  return wert === "akzeptiert" || wert === "abgelehnt" ? wert : null;
}

export function einwilligungSpeichern(status: Einwilligungsstatus): void {
  window.localStorage.setItem(SPEICHERSCHLUESSEL, status);
}

/** Für spätere Analyse-Skripte: erst laden, wenn dies `true` zurückgibt. */
export function hatAnalyseEinwilligung(): boolean {
  return gespeicherteEinwilligung() === "akzeptiert";
}
