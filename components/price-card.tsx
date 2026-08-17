import { IconCheck } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import type { Preispaket } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Preiskarte. Die hervorgehobene Variante trägt den warmen Akzent und einen
 * Lichtschein an der Oberkante – ein Bühnenlicht, das auf das Angebot fällt.
 */
export function PriceCard({ paket }: { paket: Preispaket }) {
  const hell = paket.hervorgehoben;

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card border p-7 transition-all duration-500 ease-out-soft lg:p-8",
        hell
          ? "border-flare-500/45 bg-ink-880 shadow-lift"
          : "border-ink-100/10 bg-ink-900/60 hover:border-ink-100/22 hover:bg-ink-880",
      )}
    >
      {hell ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-flare-400 to-transparent"
        />
      ) : null}

      {/* Feste Höhe, damit die Titel aller Karten auf einer Linie sitzen –
          auch bei Karten ohne Badge. */}
      <div className="flex min-h-7 items-center justify-between gap-4">
        <p className="font-display text-eyebrow text-ink-500 uppercase">
          {paket.kategorie}
        </p>
        {paket.badge ? (
          <p
            className={cn(
              "rounded-pill px-3 py-1 font-display text-[0.7rem] font-semibold tracking-[0.16em] uppercase",
              hell
                ? "bg-flare-500 text-ink-950"
                : "border border-flare-500/35 text-flare-400",
            )}
          >
            {paket.badge}
          </p>
        ) : null}
      </div>

      <h3 className="mt-5 text-h3 text-white">{paket.titel}</h3>

      <p className="mt-3 min-h-12 text-sm leading-relaxed text-ink-400">
        {paket.beschreibung}
      </p>

      <p className="mt-7 flex items-baseline gap-2">
        <span
          className={cn(
            "font-display text-4xl font-bold tracking-[-0.03em] tabular-nums",
            hell ? "text-flare-400" : "text-ink-50",
          )}
        >
          {paket.preis}
        </span>
        <span className="text-xs text-ink-500">{paket.preisZusatz}</span>
      </p>

      <ul className="mt-7 flex-1 space-y-3.5 border-t border-ink-100/10 pt-7">
        {paket.leistungen.map((punkt) => (
          <li key={punkt} className="flex items-start gap-3 text-sm text-ink-300">
            <IconCheck
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                hell ? "text-flare-400" : "text-flare-500/70",
              )}
            />
            {punkt}
          </li>
        ))}
      </ul>

      <ButtonLink
        href="/kontakt"
        variante={hell ? "primaer" : "sekundaer"}
        className="mt-8 w-full"
      >
        Angebot anfragen
      </ButtonLink>
    </article>
  );
}
