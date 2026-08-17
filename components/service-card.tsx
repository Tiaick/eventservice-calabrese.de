import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { IconPfeil } from "@/components/icons";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
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
 * Leistungskarte mit Foto als Fläche statt als Beiwerk.
 * Das Bild sitzt hinter einem Scrim, damit Text immer sicher liest; beim Hover
 * zoomt das Motiv leicht und der Akzentstrich wächst durch.
 */
export function ServiceCard({
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
    <Link
      href={href}
      className={cn(
        "group relative isolate flex h-full min-h-90 flex-col justify-end overflow-hidden rounded-card",
        "border border-ink-100/10 transition-colors duration-500 hover:border-flare-500/45",
      )}
    >
      {/* Motiv */}
      <Image
        src={bild}
        alt={bildAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={prioritaet}
        className="-z-20 object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
      />

      {/* Abdunklung für Textkontrast */}
      <div
        aria-hidden="true"
        className="image-scrim absolute inset-0 -z-10 transition-opacity duration-500 group-hover:opacity-90"
      />

      <div className="relative p-7 lg:p-8">
        <span className="inline-grid h-11 w-11 place-items-center rounded-xs border border-flare-500/30 bg-ink-950/60 text-flare-400 backdrop-blur-sm transition-colors duration-500 group-hover:border-flare-500/70 group-hover:bg-flare-500 group-hover:text-ink-950">
          <Icon className="h-5 w-5" />
        </span>

        <h3 className="mt-5 text-h3 text-white">{titel}</h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-300">
          {beschreibung}
        </p>

        <span className="mt-6 flex items-center gap-3">
          {abPreis ? (
            <span className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-flare-400 uppercase">
              {abPreis}
            </span>
          ) : null}
          <span
            aria-hidden="true"
            className="h-px flex-1 origin-left scale-x-25 bg-flare-500/60 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
          />
          <IconPfeil className="h-4 w-4 shrink-0 text-ink-400 transition-all duration-500 group-hover:translate-x-1 group-hover:text-flare-400" />
        </span>
      </div>
    </Link>
  );
}
