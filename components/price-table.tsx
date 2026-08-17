import { ButtonLink } from "@/components/ui/button";
import type { Preispaket } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Preise als Positionstabelle statt als Kartengitter.
 *
 * Aufgebaut wie das Angebot, das die Kundschaft später bekommt: laufende
 * Position, Leistung, Umfang, Ab-Preis. Auf schmalen Viewports klappt jede
 * Position in einen Block, die Reihenfolge der Angaben bleibt gleich.
 */
export function Preistabelle({ pakete }: { pakete: Preispaket[] }) {
  return (
    <div className="border-t border-ink-100/12">
      {/* Tabellenkopf – ab Tablet sichtbar, darunter tragen die Blöcke sich selbst */}
      <div className="hidden grid-cols-12 gap-6 border-b border-ink-100/12 py-3 font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase lg:grid">
        <span className="col-span-1">Pos</span>
        <span className="col-span-4">Leistung</span>
        <span className="col-span-5">Umfang</span>
        <span className="col-span-2 text-right">Ab, netto</span>
      </div>

      {pakete.map((paket, i) => (
        <article
          key={paket.id}
          className={cn(
            "group relative grid grid-cols-1 gap-x-6 gap-y-4 border-b border-ink-100/12 py-8 transition-colors duration-200 lg:grid-cols-12 lg:py-7",
            paket.hervorgehoben ? "bg-flare-500/[0.05]" : "hover:bg-ink-100/[0.02]",
          )}
        >
          {/* Akzentkante an der hervorgehobenen Position */}
          {paket.hervorgehoben ? (
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-3 w-0.5 bg-flare-500 lg:-left-4"
            />
          ) : null}

          {/* Position */}
          <div className="lg:col-span-1">
            <span className="font-mono text-label text-ink-500 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Leistung */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase">
              {paket.kategorie}
              {paket.badge ? (
                <span className="ml-3 text-flare-500">· {paket.badge}</span>
              ) : null}
            </p>
            <h3 className="mt-2 font-display text-h3 text-white">{paket.titel}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-400">
              {paket.beschreibung}
            </p>
          </div>

          {/* Umfang */}
          <div className="lg:col-span-5">
            <p className="mb-2 font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase lg:hidden">
              Umfang
            </p>
            <ul className="space-y-1.5">
              {paket.leistungen.map((punkt) => (
                <li
                  key={punkt}
                  className="flex items-baseline gap-2.5 text-sm text-ink-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-2.5 shrink-0 bg-flare-500/70"
                  />
                  {punkt}
                </li>
              ))}
            </ul>
          </div>

          {/* Preis */}
          <div className="lg:col-span-2 lg:text-right">
            <p
              className={cn(
                "font-mono text-2xl font-medium tabular-nums",
                paket.hervorgehoben ? "text-flare-400" : "text-ink-50",
              )}
            >
              {paket.preis}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] tracking-[0.12em] text-ink-500 uppercase">
              {paket.preisZusatz}
            </p>
            <ButtonLink
              href="/kontakt"
              variante={paket.hervorgehoben ? "primaer" : "sekundaer"}
              className="mt-4 w-full lg:w-auto"
            >
              Anfragen
            </ButtonLink>
          </div>
        </article>
      ))}
    </div>
  );
}
