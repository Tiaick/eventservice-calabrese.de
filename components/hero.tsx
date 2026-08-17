import Image from "next/image";

import { IconWhatsapp } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { marken } from "@/lib/content";
import { kontaktLinks, site } from "@/lib/site";

/**
 * Hero der Startseite. Das Foto trägt die Fläche, der Text sitzt unten links im
 * ruhigsten Bildbereich – wie auf dem Aufmacher eines Produktionskatalogs.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[clamp(38rem,92svh,58rem)] flex-col justify-end overflow-hidden">
      {/* PLATZHALTER-Bild – siehe public/images/PLATZHALTER-BILDER.md */}
      <Image
        src="/images/platzhalter-hero-buehne-open-air.jpg"
        alt="Open-Air-Bühne bei Nacht: Scheinwerfer strahlen in warmem Orange über das Publikum"
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        quality={82}
        className="-z-20 object-cover object-center"
      />

      {/* Abdunklung: unten kräftig für den Text, oben nur so viel, dass der
          Header lesbar bleibt. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-ink-950)_2%,color-mix(in_oklab,var(--color-ink-950)_84%,transparent)_28%,color-mix(in_oklab,var(--color-ink-950)_30%,transparent)_64%,color-mix(in_oklab,var(--color-ink-950)_62%,transparent)_100%)]"
      />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 -z-10"
      />

      <div className="container-page relative pt-32 pb-14 lg:pb-18">
        <p className="flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
          <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
          Veranstaltungstechnik · Norddeutschland
        </p>

        {/* text-balance würde die beiden gesetzten Zeilen erneut umbrechen –
            hier bestimmt der Zeilenumbruch die Aussage, also bleibt er manuell. */}
        <h1 className="mt-7 text-hero text-white">
          Wir bauen die Bühne.
          <br />
          <span className="text-flare-400">Sie liefern den Moment.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lead text-ink-200">
          Bühnen, Ton, Licht und Effekte aus einer Hand – seit über 15 Jahren.
          Von {site.adresse.ort} aus in ganz Norddeutschland unterwegs, mit eigenem
          Equipment und einem Team, das Sie beim Namen kennt.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/kontakt" groesse="lg" className="w-full sm:w-auto">
            Jetzt Angebot anfragen
          </ButtonLink>

          <a
            href={kontaktLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-xs border border-ink-100/25 bg-ink-950/40 px-7 font-display text-xs font-semibold tracking-[0.09em] text-ink-50 uppercase backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-flare-500/60 hover:bg-flare-500/10 hover:text-white sm:w-auto"
          >
            <IconWhatsapp className="h-4 w-4" />
            Per WhatsApp fragen
          </a>
        </div>

        {/* Equipment-Marken als leises Vertrauenssignal direkt unter den CTAs */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink-100/12 pt-7">
          <p className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-ink-400 uppercase">
            Wir arbeiten mit
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {marken.map((marke) => (
              <li
                key={marke.name}
                className="font-display text-sm font-semibold tracking-[0.08em] text-ink-300 uppercase"
              >
                {marke.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
