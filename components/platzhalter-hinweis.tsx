/**
 * Deutlich sichtbarer Hinweis auf noch zu ersetzende Rechtstexte.
 * Vor dem Livegang entfernen, sobald die geprüften Texte eingesetzt sind.
 */
export function PlatzhalterHinweis({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="mb-14 rounded-card border border-flare-500/45 bg-flare-500/8 p-6 lg:p-7"
    >
      <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-flare-400 uppercase">
        Platzhalter – vor Veröffentlichung ersetzen
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-200">{children}</p>
    </div>
  );
}
