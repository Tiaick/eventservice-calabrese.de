import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Bauteile der Rider-Formensprache.
 *
 * Diese Elemente ersetzen die üblichen Karten- und Eyebrow-Muster: eine
 * durchnummerierte Sektionsmarke mit auslaufender Linie, Maßangaben am Bild,
 * Eckmarken wie auf einer technischen Zeichnung und Datenzeilen in Monospace.
 */

/* --------------------------------------------------------------------------
   Sektionsmarke:  01 / BÜHNEN ────────────────────────────────
   -------------------------------------------------------------------------- */

export function Sektionsmarke({
  nummer,
  children,
  className,
  hell = false,
}: {
  /** Laufende Nummer, z. B. "01". Ohne Angabe entfällt die Ziffer. */
  nummer?: string;
  children: ReactNode;
  className?: string;
  /** Akzentuiert die Ziffer – für die jeweils wichtigste Sektion einer Seite. */
  hell?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-label uppercase",
        className,
      )}
    >
      {nummer ? (
        <span className={hell ? "text-flare-500" : "text-ink-500"}>{nummer}</span>
      ) : null}
      {nummer ? (
        <span aria-hidden="true" className="text-ink-500">
          /
        </span>
      ) : null}
      <span className="text-ink-300">{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-ink-100/12" />
    </p>
  );
}

/* --------------------------------------------------------------------------
   Maßlinie:  ├──────── 8,00 m ────────┤
   -------------------------------------------------------------------------- */

export function Masslinie({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.08em] text-ink-200",
        className,
      )}
    >
      <span aria-hidden="true" className="h-2.5 w-px shrink-0 bg-current" />
      <span aria-hidden="true" className="h-px flex-1 bg-current" />
      <span className="shrink-0 whitespace-nowrap">{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-current" />
      <span aria-hidden="true" className="h-2.5 w-px shrink-0 bg-current" />
    </span>
  );
}

/* --------------------------------------------------------------------------
   Eckmarken – die vier Winkel einer technischen Zeichnung
   -------------------------------------------------------------------------- */

export function Eckmarken({ className }: { className?: string }) {
  const winkel = "absolute h-3 w-3 border-ink-100/35";
  return (
    <span aria-hidden="true" className={cn("pointer-events-none", className)}>
      <span className={cn(winkel, "top-2 left-2 border-t border-l")} />
      <span className={cn(winkel, "top-2 right-2 border-t border-r")} />
      <span className={cn(winkel, "bottom-2 left-2 border-b border-l")} />
      <span className={cn(winkel, "right-2 bottom-2 border-r border-b")} />
    </span>
  );
}

/* --------------------------------------------------------------------------
   Datenliste – Schlüssel/Wert wie in einer Materialliste
   -------------------------------------------------------------------------- */

export function Datenliste({
  eintraege,
  className,
}: {
  eintraege: { titel: string; wert: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("border-t border-ink-100/12", className)}>
      {eintraege.map((eintrag) => (
        <div
          key={eintrag.titel}
          className="flex flex-col gap-1 border-b border-ink-100/12 py-3.5 sm:flex-row sm:gap-6"
        >
          <dt className="font-mono text-label text-ink-500 uppercase sm:w-40 sm:shrink-0 sm:pt-0.5">
            {eintrag.titel}
          </dt>
          <dd className="text-datum text-ink-200">{eintrag.wert}</dd>
        </div>
      ))}
    </dl>
  );
}
