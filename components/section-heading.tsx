import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  titel: ReactNode;
  lead?: ReactNode;
  /** Zentriert die Überschrift – für Sektionen ohne Bild daneben. */
  zentriert?: boolean;
  /** Überschriftenebene, damit die Dokumentstruktur stimmt. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/**
 * Einheitlicher Sektionskopf: Eyebrow mit Akzentstrich, Überschrift, Lead.
 * Hält den typografischen Rhythmus über alle Seiten hinweg konstant.
 */
export function SectionHeading({
  eyebrow,
  titel,
  lead,
  zentriert = false,
  as: Ueberschrift = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", zentriert && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase",
            zentriert && "justify-center",
          )}
        >
          <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
          {eyebrow}
        </p>
      ) : null}

      <Ueberschrift
        className={cn(
          "text-balance",
          Ueberschrift === "h1" ? "text-h1" : "text-h2",
          eyebrow ? "mt-5" : undefined,
        )}
      >
        {titel}
      </Ueberschrift>

      {lead ? (
        <p
          className={cn(
            "mt-6 text-lead text-ink-300",
            zentriert && "mx-auto max-w-2xl",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
