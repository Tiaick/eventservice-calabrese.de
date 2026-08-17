import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import {
  IconBuehne,
  IconEffects,
  IconGastro,
  IconLaser,
  IconLicht,
  IconSchild,
  IconTon,
} from "@/components/icons";
import { Eckmarken, Masslinie } from "@/components/plan";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatBar } from "@/components/stat-bar";
import { ButtonLink } from "@/components/ui/button";
import { leistungen } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} – ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

/* Icons den Leistungen zuordnen – die Inhalte selbst bleiben in lib/content.ts */
const leistungsIcons = {
  buehnen: IconBuehne,
  tontechnik: IconTon,
  lichttechnik: IconLicht,
  "special-effects": IconEffects,
  lasershow: IconLaser,
  "gastro-kooperation": IconGastro,
} as const;

const versprechen = [
  {
    titel: "Ein Ansprechpartner",
    text: "Von der ersten Anfrage bis zum Abbau begleitet Sie dieselbe Person. Kein Weiterreichen, keine Rückfragen, die im Sande verlaufen.",
  },
  {
    titel: "Eigenes Equipment",
    text: "Bühnen, PA, Licht und Effekte stehen in unserer Halle. Was wir anbieten, können wir auch liefern – ohne Zwischenhändler.",
  },
  {
    titel: "Saubere Planung",
    text: "Aufbauzeiten, Stromwege, Statik und Sicherheitsabstände klären wir vorher. Am Veranstaltungstag steht die Technik, wenn sie stehen soll.",
  },
  {
    titel: "Klare Angebote",
    text: "Sie bekommen Positionen, die Sie nachvollziehen können. Was nicht drin ist, steht auch nicht drin.",
  },
];

export default function Startseite() {
  return (
    <>
      <Hero />
      <StatBar />

      {/* --- 01 Leistungsübersicht ---------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              nummer="01"
              marke="Leistungen"
              titel="Alles für die Veranstaltung – aus einer Halle"
              lead="Sechs Bereiche, die einzeln buchbar sind und zusammen erst recht funktionieren. Sagen Sie uns, was stattfindet, und wir stellen zusammen, was dafür nötig ist."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3">
            {leistungen.map((leistung, i) => (
              <Reveal key={leistung.id} verzoegerung={(i % 3) * 80}>
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

      {/* --- 02 Vertrauensblock ------------------------------------------- */}
      <section className="planraster border-y border-ink-100/12 bg-ink-900">
        <div className="container-page section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  nummer="02"
                  marke="Warum wir"
                  titel="Familienbetrieb mit dem Anspruch einer großen Produktion"
                  lead="Wir sind kein Konzern und wollen keiner werden. Was uns von größeren Anbietern unterscheidet: Sie erreichen uns direkt, und wir kennen Ihre Veranstaltung, bevor wir anrücken."
                />

                <div className="mt-10 flex items-start gap-4 border-l-2 border-flare-500 bg-flare-500/[0.06] p-5">
                  <IconSchild className="mt-0.5 h-5 w-5 shrink-0 text-flare-400" />
                  <p className="text-sm leading-relaxed text-ink-200">
                    <span className="font-medium text-white">
                      Geprüfte Technik, geschultes Personal.
                    </span>{" "}
                    Bühnenstatik, Laserschutz und Sicherheitsabstände bei
                    Flammeneffekten sind bei uns kein Nebenschauplatz, sondern Teil
                    der Planung.
                  </p>
                </div>

                <div className="mt-10">
                  <ButtonLink href="/ueber-uns" variante="sekundaer">
                    Mehr über uns
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-ink-100/15">
                {versprechen.map((punkt, i) => (
                  <Reveal
                    key={punkt.titel}
                    verzoegerung={i * 70}
                    className="flex gap-6 border-b border-ink-100/15 py-7"
                  >
                    <span className="w-8 shrink-0 font-mono text-label text-flare-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-h4 text-white uppercase">
                        {punkt.titel}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                        {punkt.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 03 Gastro-Modell --------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden border border-ink-100/12">
                {/* PLATZHALTER-Bild */}
                <Image
                  src="/images/platzhalter-gastro-kooperation.jpg"
                  alt="Gäste stoßen bei einer Abendveranstaltung mit Gläsern an"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent"
                />
                <Eckmarken className="absolute inset-0" />
              </div>
              <Masslinie className="mt-4 text-ink-500">
                bis 15 Schankwagen
              </Masslinie>
            </Reveal>

            <Reveal verzoegerung={100} className="lg:col-span-6">
              <SectionHeading
                nummer="03"
                marke="Gastro-Kooperation"
                titel="Bühne und Technik – ohne Technikrechnung"
                lead="Unser Modell für Vereine, Stadtfeste und Veranstalter mit knappem Budget: Wir stellen Bühne, Ton und Licht kostenlos und übernehmen dafür den Getränkeausschank."
              />

              <ul className="mt-8 border-t border-ink-100/15">
                {[
                  { k: "Technik", v: "Bühne, Ton und Licht ohne Mietkosten" },
                  { k: "Ausschank", v: "bis zu 15 Schankwagen inklusive Personal" },
                  { k: "Betrieb", v: "Kühlung und Abrechnung übernehmen wir" },
                  { k: "Vorab", v: "gemeinsam durchgerechnet, ob das Modell trägt" },
                ].map((punkt) => (
                  <li
                    key={punkt.k}
                    className="flex flex-col gap-1 border-b border-ink-100/15 py-3.5 sm:flex-row sm:gap-6"
                  >
                    <span className="font-mono text-label text-ink-500 uppercase sm:w-28 sm:shrink-0 sm:pt-0.5">
                      {punkt.k}
                    </span>
                    <span className="text-datum text-ink-200">{punkt.v}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <ButtonLink href="/leistungen#gastro-kooperation" variante="sekundaer">
                  Wie das Modell funktioniert
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
