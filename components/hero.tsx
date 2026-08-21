import Image from "next/image";

import { IconWhatsapp } from "@/components/icons";
import { Masslinie } from "@/components/plan";
import { ButtonLink } from "@/components/ui/button";
import { leistungen } from "@/lib/content";
import { kontaktLinks, site } from "@/lib/site";

/**
 * Hero der Startseite.
 *
 * Der Satzspiegel ist bewusst unsymmetrisch: Die Schlagzeile beginnt links am
 * Raster, die Randspalte rechts trägt technische Eckdaten wie die Kopfzeile
 * eines Bühnenplans. Unter beidem läuft die Leistungskette als Band – sie ist
 * das Versprechen, um das es geht: alle Gewerke aus einer Hand.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[clamp(40rem,94svh,60rem)] flex-col justify-end overflow-hidden">
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

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-ink-950)_2%,color-mix(in_oklab,var(--color-ink-950)_87%,transparent)_32%,color-mix(in_oklab,var(--color-ink-950)_34%,transparent)_68%,color-mix(in_oklab,var(--color-ink-950)_66%,transparent)_100%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 -z-10" />

      {/* Maßangabe über die volle Bildbreite – Notation aus dem Aufbauplan */}
      <div className="pointer-events-none absolute inset-x-0 top-28 -z-10 hidden lg:block">
        <div className="container-page">
          <Masslinie className="text-ink-100/25">Spielfläche bis 60 m²</Masslinie>
        </div>
      </div>

      <div className="container-page relative pt-32 pb-12 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          {/* Schlagzeile */}
          <div className="lg:col-span-8">
            <p className="font-mono text-label text-flare-400 uppercase">
              Veranstaltungspartner für Städte &amp; Gemeinden
            </p>

            {/* Der Zeilenumbruch trägt die Aussage und bleibt deshalb manuell. */}
            <h1 className="mt-6 text-hero uppercase text-white">
              Ein Partner
              <br />
              für die ganze
              <br />
              <span className="text-flare-500">Veranstaltung.</span>
            </h1>
          </div>

          {/* Randspalte mit Eckdaten */}
          <div className="lg:col-span-4 lg:pb-3">
            <p className="max-w-md text-lead text-ink-200">
              Konzeption, Organisation und alle Gewerke aus einer Hand – von der
              ersten Planung bis zur Abrechnung. Von {site.adresse.ort} aus in ganz
              Norddeutschland.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-100/15 pt-6">
              {[
                { k: "Für", v: "Städte & Gemeinden" },
                { k: "Gewerke", v: "8 aus einer Hand" },
                { k: "Seit", v: "über 15 Jahren" },
                { k: "Events", v: "300+" },
              ].map((d) => (
                <div key={d.k}>
                  <dt className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase">
                    {d.k}
                  </dt>
                  <dd className="mt-1.5 font-mono text-datum text-ink-100">{d.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink
                href="/kontakt"
                groesse="lg"
                className="w-full sm:w-auto lg:w-full xl:w-auto"
              >
                Angebot anfragen
              </ButtonLink>

              <a
                href={kontaktLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 border border-ink-100/25 px-6 font-mono text-[0.75rem] font-medium tracking-[0.12em] text-ink-50 uppercase transition-colors hover:border-flare-500 hover:text-flare-400 sm:w-auto lg:w-full xl:w-auto"
              >
                <IconWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Leistungskette – das Versprechen in einer Zeile */}
        <ul className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-100/15 pt-5">
          {leistungen.map((leistung, i) => (
            <li
              key={leistung.id}
              className="flex items-center gap-5 font-mono text-[0.72rem] tracking-[0.08em] text-ink-300 uppercase"
            >
              {i > 0 ? (
                <span aria-hidden="true" className="text-ink-500">
                  ·
                </span>
              ) : null}
              {leistung.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
