/**
 * Deutlich sichtbarer Hinweis auf noch zu ersetzende Rechtstexte.
 * Vor dem Livegang entfernen, sobald die geprüften Texte eingesetzt sind.
 */
export function PlatzhalterHinweis({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="mb-14 border-l-2 border-flare-500 bg-flare-500/[0.06] p-6 lg:p-7"
    >
      <p className="font-mono text-label text-flare-400 uppercase">
        Platzhalter – vor Veröffentlichung ersetzen
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-200">{children}</p>
    </div>
  );
}
