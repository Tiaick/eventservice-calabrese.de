import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { Datenliste, Eckmarken, Masslinie, Sektionsmarke } from "@/components/plan";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { leistungen } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Bühnen, Tontechnik, Lichttechnik, Special Effects, Lasershow und Gastro-Kooperation – " +
    "alle Leistungen von Eventservice Calabrese im Detail.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenSeite() {
  return (
    <>
      <PageHeader
        blatt="Blatt 01"
        marke="Leistungen"
        titel="Was wir für Ihre Veranstaltung aufbauen"
        lead="Sechs Bereiche, einzeln buchbar oder als Komplettpaket. Alles Equipment steht in unserer eigenen Halle – was hier steht, können wir auch liefern."
        beiwerk={
          /* Kein Wiederholen der Sprungnavigation darunter, sondern der Hinweis
             auf das Paket, in dem die meisten Anfragen enden. */
          <div className="border-l-2 border-flare-500 bg-flare-500/[0.05] p-6">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] text-flare-400 uppercase">
              Am häufigsten gebucht
            </p>
            <h2 className="mt-3 font-display text-h3 uppercase text-white">
              Komplettpaket XXL
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Bühne, Lichtpaket XL und PA-Beschallung zusammen – ein Aufbautag, ein
              Team, ein Angebot.
            </p>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-medium text-flare-400 tabular-nums">
                ab 1.490 €
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.12em] text-ink-500 uppercase">
                netto/Tag
              </span>
            </p>
            <ButtonLink href="/preise" variante="sekundaer" className="mt-5 w-full">
              Alle Preise ansehen
            </ButtonLink>
          </div>
        }
      />

      {/* Sprungnavigation – bleibt beim Scrollen unter dem Header stehen */}
      <nav
        aria-label="Sprung zu den Leistungen"
        className="sticky top-18 z-30 border-b border-ink-100/12 bg-ink-950/92 backdrop-blur-xl"
      >
        <div className="container-page">
          <ul className="flex gap-6 overflow-x-auto py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {leistungen.map((leistung, i) => (
              <li key={leistung.id}>
                <a
                  href={`#${leistung.id}`}
                  className="group flex items-baseline gap-2 font-mono text-label whitespace-nowrap text-ink-400 uppercase transition-colors hover:text-flare-400"
                >
                  <span className="text-[0.6rem] text-ink-500 transition-colors group-hover:text-flare-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {leistung.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {leistungen.map((leistung, i) => {
        const bildRechts = i % 2 === 1;
        const nummer = String(i + 1).padStart(2, "0");

        return (
          <section
            key={leistung.id}
            id={leistung.id}
            className={cn(
              "section-y border-b border-ink-100/12",
              i % 2 === 1 && "bg-ink-900",
            )}
          >
            <div className="container-page">
              {/* Sektionsmarke über die volle Breite – gliedert wie ein Planblatt */}
              <Reveal>
                <Sektionsmarke nummer={nummer}>{leistung.eyebrow}</Sektionsmarke>
              </Reveal>

              <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
                {/* Bild mit Maßangabe */}
                <Reveal className={cn("lg:col-span-6", bildRechts && "lg:order-2")}>
                  <div className="relative aspect-4/3 overflow-hidden border border-ink-100/12">
                    {/* PLATZHALTER-Bild – siehe public/images/PLATZHALTER-BILDER.md */}
                    <Image
                      src={leistung.bild}
                      alt={leistung.bildAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/55 to-transparent"
                    />
                    <Eckmarken className="absolute inset-0" />
                  </div>

                  {/* Kenngröße unter dem Bild, wie eine Bemaßung am Plan */}
                  {leistung.kenngroesse ? (
                    <Masslinie className="mt-4 text-ink-500">
                      {leistung.kenngroesse}
                    </Masslinie>
                  ) : null}
                </Reveal>

                {/* Text */}
                <Reveal verzoegerung={90} className="lg:col-span-6">
                  <h2 className="text-h2 uppercase text-white">{leistung.titel}</h2>

                  <p className="mt-6 text-lead text-ink-200">{leistung.lead}</p>

                  <div className="mt-6 space-y-4 text-ink-400">
                    {leistung.text.map((absatz) => (
                      <p key={absatz.slice(0, 40)} className="leading-relaxed">
                        {absatz}
                      </p>
                    ))}
                  </div>

                  <Datenliste eintraege={leistung.details} className="mt-9" />

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <ButtonLink href="/kontakt">Angebot anfragen</ButtonLink>
                    {leistung.abPreis ? (
                      <p className="font-mono text-label text-ink-400 uppercase">
                        {leistung.abPreis} netto
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        marke="Noch unsicher?"
        titel="Sagen Sie uns, was stattfindet – wir sagen, was Sie brauchen"
        text="Nicht jede Veranstaltung braucht das größte Paket. Rufen Sie an, schildern Sie kurz Anlass, Ort und ungefähre Gästezahl. Wir sagen Ihnen ehrlich, was sinnvoll ist."
      />
    </>
  );
}
