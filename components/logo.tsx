import { cn } from "@/lib/utils";

/**
 * Typografische Wortmarke als Platzhalter-Logo.
 * PLATZHALTER: Sobald ein echtes Logo vorliegt, hier gegen die SVG-Datei tauschen –
 * Header und Footer greifen beide auf diese Komponente zu.
 *
 * Das Zeichen ist ein Bühnengrundriss in Draufsicht, wie er auf jedem
 * Stageplot steht: Rechteck, Vorderkante markiert, zwei Hängepunkte.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative grid h-10 w-10 shrink-0 place-items-center border border-ink-100/20"
      >
        <svg viewBox="0 0 40 40" className="h-full w-full">
          {/* Bühnenfläche in Draufsicht */}
          <rect
            x="8.5"
            y="11.5"
            width="23"
            height="17"
            fill="none"
            stroke="var(--color-ink-300)"
            strokeWidth="1.4"
          />
          {/* Vorderkante – die Seite zum Publikum */}
          <path
            d="M8.5 28.5h23"
            stroke="var(--color-flare-500)"
            strokeWidth="2.4"
          />
          {/* Hängepunkte */}
          <circle cx="14" cy="16" r="1.6" fill="var(--color-ink-400)" />
          <circle cx="26" cy="16" r="1.6" fill="var(--color-ink-400)" />
          {/* Maßhilfslinie oben */}
          <path
            d="M8.5 7.5v2M31.5 7.5v2M8.5 8.5h23"
            stroke="var(--color-ink-600)"
            strokeWidth="1"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-mono text-[0.55rem] font-medium tracking-[0.26em] text-ink-500 uppercase">
          Eventservice
        </span>
        <span className="mt-1.5 font-display text-xl font-bold tracking-[0.01em] text-ink-50 uppercase">
          Calabrese
        </span>
      </span>
    </span>
  );
}
