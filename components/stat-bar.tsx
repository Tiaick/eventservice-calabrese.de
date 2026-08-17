import { kennzahlen } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Kennzahlenband. Aufgebaut wie eine Messwertzeile: Bezeichner in Monospace
 * darüber, Zahl darunter, getrennt durch Haarlinien statt durch Kartenflächen.
 */
export function StatBar({ className }: { className?: string }) {
  return (
    <section
      aria-label="Zahlen zum Betrieb"
      className={cn("border-y border-ink-100/12 bg-ink-900", className)}
    >
      <div className="container-page">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {kennzahlen.map((zahl, i) => (
            <div
              key={zahl.label}
              className={cn(
                "border-ink-100/12 py-9 pr-4 lg:py-12",
                i % 2 === 1 && "border-l pl-6 sm:pl-8",
                i >= 2 && "border-t lg:border-t-0",
                i % 4 !== 0 && "lg:border-l lg:pl-8",
              )}
            >
              <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase">
                {String(i + 1).padStart(2, "0")} · {zahl.einheit}
              </dt>
              <dd>
                <span className="mt-4 block font-display text-stat text-ink-50 tabular-nums">
                  {zahl.wert}
                </span>
                <span className="mt-3 block max-w-[24ch] text-sm leading-relaxed text-ink-400">
                  {zahl.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
