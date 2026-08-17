import { Reveal } from "@/components/reveal";
import { kennzahlen } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Kennzahlenband – trägt die Trust-Signale (15+ Jahre, 300+ Events, 98 %).
 * Liegt auf der Startseite bewusst direkt unter dem Hero.
 */
export function StatBar({ className }: { className?: string }) {
  return (
    <section
      aria-label="Zahlen zum Betrieb"
      className={cn("border-y border-ink-100/10 bg-ink-900", className)}
    >
      <div className="container-page">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {kennzahlen.map((zahl, i) => (
            <Reveal
              key={zahl.label}
              verzoegerung={i * 90}
              className={cn(
                "border-ink-100/10 px-2 py-10 sm:px-6 lg:py-14",
                /* Trennlinien nur zwischen den Feldern, nicht außen */
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t lg:border-t-0",
                i % 4 !== 0 && "lg:border-l",
              )}
            >
              <dt className="sr-only">{zahl.label}</dt>
              <dd>
                <span className="flex items-baseline gap-1.5">
                  <span className="font-display text-stat text-ink-50 tabular-nums">
                    {zahl.wert}
                  </span>
                  <span className="font-display text-lg font-semibold text-flare-500">
                    {zahl.einheit}
                  </span>
                </span>
                <span className="mt-4 block max-w-[22ch] text-sm leading-relaxed text-ink-400">
                  {zahl.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
