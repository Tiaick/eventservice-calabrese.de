import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import {
  IconBuehne,
  IconGastro,
  IconKonzeption,
  IconLicht,
  IconOrganisation,
  IconSchild,
  IconSponsoring,
  IconStand,
  IconTon,
} from "@/components/icons";
import { Eckmarken, Masslinie, Sektionsmarke } from "@/components/plan";
import { ReferenzenLaufband } from "@/components/referenzen-laufband";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatBar } from "@/components/stat-bar";
import { ButtonLink } from "@/components/ui/button";
import { kommunenAblauf, leistungen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Veranstaltungen jeder Art – aus einer Hand",
  description:
    "Konzeption, Veranstaltungsorganisation, Bühne, Licht, Ton, Gastronomie, Standmanagement " +
    "und Sponsoring aus einer Hand – für Veranstaltungen jeder Art in Norddeutschland, von der " +
    "Vereinsfeier bis zum Stadtfest.",
  alternates: { canonical: "/" },
};

/* Icons den Leistungen zuordnen – die Inhalte selbst bleiben in lib/content.ts */
const leistungsIcons = {
  konzeption: IconKonzeption,
  veranstaltungsorganisation: IconOrganisation,
  buehnen: IconBuehne,
  lichttechnik: IconLicht,
  tontechnik: IconTon,
  gastronomie: IconGastro,
  standmanagement: IconStand,
  sponsoring: IconSponsoring,
} as const;

/** Bühnengrößen – Bühnenbau ist der Kern des Angebots und steht deshalb eigens. */
const buehnen = [
  {
    name: "Kompaktbühne",
    mass: "ca. 30 m²",
    einsatz: "Bürgerempfänge, Ansprachen, kleinere Programme",
    preis: "ab 400 €",
  },
  {
    name: "Pultus 48",
    mass: "6,00 × 8,00 m · 48 m²",
    einsatz: "Stadtfeste, Jubiläen, Vereinsfeiern",
    preis: "ab 790 €",
    hervorgehoben: true,
  },
  {
    name: "Bühne XXL",
    mass: "über 60 m²",
    einsatz: "Großveranstaltungen mit Dach und Traversen",
    preis: "ab 1.200 €",
  },
];

const versprechen = [
  {
    titel: "Ein Ansprechpartner",
    text: "Von der ersten Anfrage bis zur Abrechnung dieselbe Person – auch am Veranstaltungstag vor Ort.",
  },
  {
    titel: "Eigenes Material",
    text: "Bühnen, PA, Licht und Schankwagen stehen in unserer Halle. Was wir anbieten, können wir liefern.",
  },
  {
    titel: "Prüfbare Nachweise",
    text: "Statik, Sicherheitskonzept und Laserschutz gehören zur Planung, nicht zur Nacharbeit.",
  },
  {
    titel: "Angebote für Gremien",
    text: "Klare Positionen, die sich vergleichen und in eine Vorlage übernehmen lassen.",
  },
];

export default function Startseite() {
  return (
    <>
      <Hero />
      <StatBar />

      {/* --- Auftraggeber (Laufband) ---------------------------------------- */}
      <section className="section-y-sm border-b border-ink-100/12 bg-ink-900">
        <div className="container-page">
          <Reveal>
            <Sektionsmarke>Auftraggeber</Sektionsmarke>
          </Reveal>
        </div>

        <Reveal verzoegerung={80} className="mt-8">
          <ReferenzenLaufband />
        </Reveal>
      </section>

      {/* --- 01 Leistungsübersicht ---------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              nummer="01"
              marke="Leistungen"
              titel="Acht Gewerke – ein Ansprechpartner"
              lead="Sie können alles zusammen beauftragen oder einzelne Bereiche herausnehmen. Der Vorteil bleibt derselbe: Es gibt eine Stelle, die den Überblick hat und am Veranstaltungstag geradesteht."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
            {leistungen.map((leistung, i) => (
              <Reveal key={leistung.id} verzoegerung={(i % 4) * 70}>
                <ServiceCard
                  nummer={String(i + 1).padStart(2, "0")}
                  titel={leistung.label}
                  beschreibung={leistung.lead}
                  href={`/leistungen#${leistung.id}`}
                  bild={leistung.bild}
                  bildAlt={leistung.bildAlt}
                  icon={leistungsIcons[leistung.id as keyof typeof leistungsIcons]}
                  abPreis={leistung.abPreis}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-t border-ink-100/12 pt-8">
            <ButtonLink href="/leistungen" variante="sekundaer" groesse="lg">
              Alle Leistungen im Detail
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* --- 02 Bühnenbau -------------------------------------------------- */}
      <section className="planraster border-y border-ink-100/12 bg-ink-900">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-4/3 overflow-hidden border border-ink-100/12">
                {/* Echtes Kundenfoto, kein Stockbild */}
                <Image
                  src="/images/buehne-volksparkstadion.jpg"
                  alt="Bühnenaufbau mit Traversendach im Volksparkstadion Hamburg, Zuschauerränge im Hintergrund"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent"
                />
                <Eckmarken className="absolute inset-0" />
              </div>
              <Masslinie className="mt-4 text-ink-500">6,00 × 8,00 m · 48 m²</Masslinie>
            </Reveal>

            <Reveal verzoegerung={90} className="lg:col-span-7">
              <SectionHeading
                nummer="02"
                marke="Bühnenbau"
                titel="Die Bühne ist unser Kerngeschäft"
                lead="Alles andere baut darauf auf. Wir liefern die Bühne, die zur Fläche und zum Programm passt – mit Statik, Ballastierungsplan und einem Team, das sie selbst aufbaut."
              />

              {/* Bühnengrößen als Positionsliste */}
              <div className="mt-10 border-t border-ink-100/15">
                <div className="hidden grid-cols-12 gap-4 border-b border-ink-100/15 py-2.5 font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase sm:grid">
                  <span className="col-span-3">Bühne</span>
                  <span className="col-span-3">Maß</span>
                  <span className="col-span-4">Typischer Einsatz</span>
                  <span className="col-span-2 text-right">Ab, netto</span>
                </div>

                {buehnen.map((buehne) => (
                  <div
                    key={buehne.name}
                    className="grid grid-cols-1 gap-x-4 gap-y-1 border-b border-ink-100/15 py-4 sm:grid-cols-12 sm:items-baseline"
                  >
                    <p
                      className={
                        "sm:col-span-3 font-display text-lg font-semibold uppercase " +
                        (buehne.hervorgehoben ? "text-flare-400" : "text-white")
                      }
                    >
                      {buehne.name}
                    </p>
                    <p className="font-mono text-datum text-ink-200 sm:col-span-3">
                      {buehne.mass}
                    </p>
                    <p className="text-sm text-ink-400 sm:col-span-4">{buehne.einsatz}</p>
                    <p className="font-mono text-datum text-ink-100 sm:col-span-2 sm:text-right">
                      {buehne.preis}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/leistungen#buehnen">Bühnen im Detail</ButtonLink>
                <ButtonLink href="/preise" variante="sekundaer">
                  Preise ansehen
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- 03 Ablauf für Kommunen ---------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  nummer="03"
                  marke="Für Städte & Gemeinden"
                  titel="Wie eine Zusammenarbeit abläuft"
                  lead="Verwaltungen brauchen belastbare Unterlagen, klare Zuständigkeiten und eine Abrechnung, die zum Angebot passt. Darauf ist unser Ablauf ausgelegt."
                />

                <div className="mt-10 flex items-start gap-4 border-l-2 border-flare-500 bg-flare-500/[0.06] p-5">
                  <IconSchild className="mt-0.5 h-5 w-5 shrink-0 text-flare-400" />
                  <p className="text-sm leading-relaxed text-ink-200">
                    <span className="font-medium text-white">
                      Nachweise gehören zum Angebot.
                    </span>{" "}
                    Statik, Sicherheits- und Verkehrskonzept, Laserschutz und
                    Versicherungsnachweise liefern wir mit – nicht auf Nachfrage.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="border-t border-ink-100/15">
                {kommunenAblauf.map((schritt, i) => (
                  <Reveal
                    key={schritt.titel}
                    verzoegerung={i * 60}
                    as="li"
                    className="flex gap-6 border-b border-ink-100/15 py-6"
                  >
                    <span className="w-8 shrink-0 font-mono text-label text-flare-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-h4 uppercase text-white">
                        {schritt.titel}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                        {schritt.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Versprechen als kompakte Zeile. Bewusst ohne senkrechte Trennlinien:
              Bei vier Spalten stünden sie zu dicht am Text der Nachbarspalte. */}
          <div className="mt-16 grid gap-x-10 gap-y-8 border-t border-ink-100/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {versprechen.map((punkt, i) => (
              <Reveal key={punkt.titel} verzoegerung={i * 60}>
                <h3 className="font-mono text-label text-flare-400 uppercase">
                  {punkt.titel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{punkt.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04 Refinanzierung --------------------------------------------- */}
      <section className="border-y border-ink-100/12 bg-ink-900">
        <div className="container-page section-y">
          <Reveal>
            <Sektionsmarke nummer="04">Refinanzierung</Sektionsmarke>
            <h2 className="mt-6 max-w-3xl text-h2 uppercase text-white">
              Was die Veranstaltung selbst tragen kann
            </h2>
            <p className="mt-6 max-w-2xl text-lead text-ink-300">
              Kaum ein Fest trägt sich allein aus dem Haushalt. Zwei unserer Bereiche
              sind genau dafür da – und beide rechnen wir vorher mit Ihnen durch.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {[
              {
                nummer: "A",
                titel: "Gastronomie",
                bild: "/images/platzhalter-gastronomie.jpg",
                alt: "Reich gedeckter Catering-Tisch mit Aufschnitt, Käse und Gebäck bei einer Veranstaltung",
                text: "Wir übernehmen den Getränkeausschank mit bis zu 15 Schankwagen, Personal und Abrechnung. Auf Wunsch als Kooperation: Bühne und Technik ohne Mietkosten, dafür der Ausschank über uns.",
                href: "/leistungen#gastronomie" as const,
              },
              {
                nummer: "B",
                titel: "Sponsoring",
                bild: "/images/platzhalter-sponsoring.jpg",
                alt: "Straßenfest am Abend mit Lichterketten über der Menschenmenge",
                text: "Wir entwickeln Sponsoringpakete mit klaren Gegenleistungen, sprechen Unternehmen aus der Region an und setzen die Werbeflächen auf der Veranstaltung um.",
                href: "/leistungen#sponsoring" as const,
              },
            ].map((block, i) => (
              <Reveal key={block.titel} verzoegerung={i * 90}>
                <div className="relative aspect-16/9 overflow-hidden border border-ink-100/12">
                  {/* PLATZHALTER-Bild */}
                  <Image
                    src={block.bild}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent"
                  />
                  <Eckmarken className="absolute inset-0" />
                </div>

                <p className="mt-5 flex items-baseline gap-3 font-mono text-label uppercase">
                  <span className="text-flare-500">{block.nummer}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100/12" />
                </p>

                <h3 className="mt-4 font-display text-h3 uppercase text-white">
                  {block.titel}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-400">{block.text}</p>

                <div className="mt-6">
                  <ButtonLink href={block.href} variante="sekundaer">
                    Mehr dazu
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        marke="Anfrage"
        titel="Erzählen Sie uns von Ihrer Veranstaltung"
        text="Ein kurzer Anruf reicht oft schon, um zu klären, was Sie brauchen. Sie bekommen von uns ein Angebot mit klaren Positionen – in einer Form, die sich in eine Gremienvorlage übernehmen lässt."
      />
    </>
  );
}
