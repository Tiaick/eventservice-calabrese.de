import { cn } from "@/lib/utils";

/**
 * Typografische Wortmarke als Platzhalter-Logo.
 * PLATZHALTER: Sobald ein echtes Logo vorliegt, hier gegen die SVG-Datei tauschen –
 * Header und Footer greifen beide auf diese Komponente zu.
 *
 * Das Zeichen links zitiert einen Lichtkegel, der aus einem Scheinwerfer austritt.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xs bg-ink-800 ring-1 ring-ink-100/10"
      >
        <svg viewBox="0 0 36 36" className="h-full w-full">
          <defs>
            <linearGradient id="logo-beam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-flare-300)" />
              <stop offset="100%" stopColor="var(--color-flare-600)" />
            </linearGradient>
          </defs>
          {/* Scheinwerfer */}
          <rect x="6" y="6" width="9" height="5.5" rx="1.2" fill="var(--color-ink-300)" />
          {/* Lichtkegel */}
          <path d="M15 7.5 32 4v10.5L15 11Z" fill="url(#logo-beam)" opacity="0.95" />
          <path d="M14.6 11.5 30 20v7L14.2 14Z" fill="url(#logo-beam)" opacity="0.4" />
          {/* Stativ */}
          <path
            d="M10.5 11.5v16M5 30h11"
            stroke="var(--color-ink-400)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.58rem] font-semibold tracking-[0.3em] text-flare-400 uppercase">
          Eventservice
        </span>
        <span className="mt-1 font-display text-lg font-bold tracking-[-0.02em] text-ink-50 uppercase">
          Calabrese
        </span>
      </span>
    </span>
  );
}
