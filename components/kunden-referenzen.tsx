import Image from "next/image";

import { referenzkunden } from "@/lib/content";

/**
 * Logo-Wand der Referenzkunden.
 *
 * Die Kacheln sind bewusst hell (ink-50), nicht im dunklen Seitenton: Reale
 * Kundenlogos kommen in völlig unterschiedlichen Farben, Formaten und
 * Hintergründen daher. Ein einheitlicher heller Träger macht sie nebeneinander
 * lesbar, ohne jedes Logo einzeln umfärben zu müssen – das ist das übliche
 * Verfahren für "Referenzen"-Leisten und funktioniert auch mit einem
 * Wappen, einer Wortmarke und einem Icon in derselben Reihe.
 *
 * Wo kein geprüftes Logo vorliegt, steht ein reiner Schriftzug in der Kachel
 * (siehe Kommentar bei `referenzkunden` in lib/content.ts) – kein geratenes
 * Bild einer möglicherweise falschen Firma.
 */
export function KundenReferenzen() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {referenzkunden.map((kunde) => (
        <li
          key={kunde.name}
          className="group flex aspect-3/2 flex-col items-center justify-center gap-2 border border-ink-100/12 bg-ink-50 p-4 transition-colors hover:border-flare-500/50"
        >
          {kunde.logo ? (
            <div className="relative h-10 w-full">
              <Image
                src={`/images/kunden/${kunde.logo}`}
                alt={kunde.logoAlt ?? kunde.name}
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
          ) : (
            <p className="text-center font-mono text-[0.7rem] leading-tight font-medium tracking-[0.04em] text-ink-800 uppercase">
              {kunde.name}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
