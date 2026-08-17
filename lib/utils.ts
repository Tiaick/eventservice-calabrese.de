/**
 * Minimaler Klassen-Merger. Bewusst ohne zusätzliche Abhängigkeit –
 * wir brauchen nur das Zusammenfügen bedingter Klassenlisten.
 */
export function cn(...klassen: (string | false | null | undefined)[]): string {
  return klassen.filter(Boolean).join(" ");
}
