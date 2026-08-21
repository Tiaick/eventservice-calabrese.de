import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { IconPfeil } from "@/components/icons";
import { Eckmarken } from "@/components/plan";

type ServiceCardProps = {
  /** Positionsnummer in der Leistungsliste, z. B. "01". */
  nummer: string;
  titel: string;
  beschreibung: string;
  href: string;
  bild: string;
  bildAlt: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  abPreis?: string;
  prioritaet?: boolean;
};

/**
 * Eine Position der Leistungsliste.
 *
 * Kein Kartenkörper: Das Bild steht als abgegrenzte Fläche mit Eckmarken oben,
 * darunter folgt der Text direkt auf dem Seitenhintergrund, getrennt durch eine
 * Haarlinie. Beim Zeigen wandert die Linie in den Akzent – das ist die ganze
 * Bewegung, die es braucht.
 */
export function ServiceCard({
  nummer,
  titel,
  beschreibung,
  href,
  bild,
  bildAlt,
  icon: Icon,
  abPreis,
  prioritaet = false,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group flex h-full flex-col">
      {/* Motiv */}
      <div className="relative aspect-4/3 overflow-hidden border border-ink-100/12 transition-colors duration-300 group-hover:border-flare-500/50">
        <Image
          src={bild}
          alt={bildAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={prioritaet}
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent"
        />
        <Eckmarken className="absolute inset-0" />

        <span className="absolute top-4 left-4 grid h-9 w-9 place-items-center border border-ink-100/25 bg-ink-950/70 text-ink-100 backdrop-blur-sm transition-colors duration-300 group-hover:border-flare-500 group-hover:bg-flare-500 group-hover:text-ink-950">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>

      {/* Kopfzeile: Position und Ab-Preis */}
      <p className="mt-5 flex items-baseline gap-3 font-mono text-label uppercase">
        <span className="text-ink-500">{nummer}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-ink-100/12" />
        {abPreis ? <span className="text-flare-400">{abPreis}</span> : null}
      </p>

      {/* Silbentrennung ist hier nicht optional: In der schmalen Spalte läuft
          ein Wort wie "Veranstaltungsorganisation" sonst in die Nachbarspalte.
          Getrennt wird nach den Regeln von lang="de" aus dem Root-Element. */}
      <h3 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-[-0.01em] break-words hyphens-auto text-white transition-colors duration-200 group-hover:text-flare-400">
        {titel}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-400">{beschreibung}</p>

      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] text-ink-300 uppercase transition-colors duration-200 group-hover:text-flare-400">
        Details
        <IconPfeil className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
