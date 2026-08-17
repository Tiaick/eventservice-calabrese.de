import type { ReactNode } from "react";

import { Sektionsmarke } from "@/components/plan";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Laufende Nummer der Sektion, z. B. "02". */
  nummer?: string;
  marke?: string;
  titel: ReactNode;
  lead?: ReactNode;
  /** Überschriftenebene, damit die Dokumentstruktur stimmt. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/**
 * Einheitlicher Sektionskopf: durchnummerierte Marke mit auslaufender Linie,
 * Überschrift, Lead. Hält den Rhythmus über alle Seiten konstant.
 */
export function SectionHeading({
  nummer,
  marke,
  titel,
  lead,
  as: Ueberschrift = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {marke ? <Sektionsmarke nummer={nummer}>{marke}</Sektionsmarke> : null}

      <Ueberschrift
        className={cn(
          "text-balance uppercase",
          Ueberschrift === "h1" ? "text-h1" : "text-h2",
          marke ? "mt-6" : undefined,
        )}
      >
        {titel}
      </Ueberschrift>

      {lead ? <p className="mt-6 text-lead text-ink-300">{lead}</p> : null}
    </div>
  );
}
