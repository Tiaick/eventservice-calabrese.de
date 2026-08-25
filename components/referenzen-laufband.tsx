import Image from "next/image";

import { referenzkunden } from "@/lib/content";

/**
 * Laufband der Referenzkunden für die Startseite: dieselben hellen Kacheln
 * wie auf /referenzen (`KundenReferenzen`), aber in fester Breite und
 * endlos durchlaufend statt im Raster.
 *
 * Der Track enthält die Kachelreihe zweimal hintereinander; die Animation
 * verschiebt ihn um exakt -50% seiner eigenen (doppelten) Breite – das
 * entspricht einer Kopie, wodurch die Schleife ohne sichtbaren Sprung
 * schließt. Die zweite Kopie ist rein optisch und daher vor Screenreadern
 * versteckt.
 */
export function ReferenzenLaufband() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2rem,black_calc(100%-2rem),transparent)]">
      <div className="flex w-max animate-laufband gap-3 hover:[animation-play-state:paused]">
        <ul aria-label="Auftraggeber (Auswahl)" className="flex shrink-0 gap-3">
          {referenzkunden.map((kunde) => (
            <li key={kunde.name}>
              <ReferenzKachel kunde={kunde} />
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className="flex shrink-0 gap-3">
          {referenzkunden.map((kunde) => (
            <li key={kunde.name}>
              <ReferenzKachel kunde={kunde} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ReferenzKachel({
  kunde,
}: {
  kunde: (typeof referenzkunden)[number];
}) {
  return (
    <div className="flex aspect-3/2 w-36 flex-col items-center justify-center gap-2 border border-ink-100/12 bg-ink-50 p-4 sm:w-44">
      {kunde.logo ? (
        <div className="relative h-9 w-full">
          <Image
            src={`/images/kunden/${kunde.logo}`}
            alt={kunde.logoAlt ?? kunde.name}
            fill
            sizes="176px"
            className="object-contain"
          />
        </div>
      ) : (
        <p className="text-center font-mono text-[0.6rem] leading-tight font-medium tracking-[0.04em] text-ink-800 uppercase">
          {kunde.name}
        </p>
      )}
    </div>
  );
}
