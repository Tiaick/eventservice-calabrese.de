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

      {/* --- Leistungsübersicht ------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Leistungen"
              titel="Alles für die Veranstaltung – aus einer Halle"
              lead="Sechs Bereiche, die einzeln buchbar sind und zusammen erst recht funktionieren. Sagen Sie uns, was stattfindet, und wir stellen zusammen, was dafür nötig ist."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3">
            {leistungen.map((leistung, i) => (
              <Reveal key={leistung.id} verzoegerung={(i % 3) * 110}>
                <ServiceCard
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

          <Reveal className="mt-12 flex justify-center">
            <ButtonLink href="/leistungen" variante="sekundaer" groesse="lg">
              Alle Leistungen im Detail
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* --- Vertrauensblock ---------------------------------------------- */}
      <section className="relative border-y border-ink-100/10 bg-ink-900">
        <div className="container-page section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Warum wir"
                  titel="Familienbetrieb mit dem Anspruch einer großen Produktion"
                  lead="Wir sind kein Konzern und wollen keiner werden. Was uns von größeren Anbietern unterscheidet: Sie erreichen uns direkt, und wir kennen Ihre Veranstaltung, bevor wir anrücken."
                />

                <div className="mt-10 flex items-start gap-4 rounded-card border border-flare-500/25 bg-flare-500/[0.06] p-6">
                  <IconSchild className="mt-0.5 h-6 w-6 shrink-0 text-flare-400" />
                  <p className="text-sm leading-relaxed text-ink-200">
                    <span className="font-semibold text-white">
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

            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-card border border-ink-100/10 bg-ink-100/10 sm:grid-cols-2">
                {versprechen.map((punkt, i) => (
                  <Reveal
                    key={punkt.titel}
                    verzoegerung={i * 90}
                    className="bg-ink-900 p-7 lg:p-8"
                  >
                    <span className="font-display text-sm font-bold text-flare-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-h4 text-white">{punkt.titel}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400">
                      {punkt.text}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gastro-Modell als eigener Aufmacher ---------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-4/3 overflow-hidden rounded-card border border-ink-100/10 lg:aspect-3/2">
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
                className="absolute inset-0 bg-gradient-to-tr from-ink-950/70 via-transparent to-transparent"
              />
            </Reveal>

            <Reveal verzoegerung={120}>
              <SectionHeading
                eyebrow="Gastro-Kooperation"
                titel="Bühne und Technik – ohne Technikrechnung"
                lead="Unser Modell für Vereine, Stadtfeste und Veranstalter mit knappem Budget: Wir stellen Bühne, Ton und Licht kostenlos und übernehmen dafür den Getränkeausschank."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Bühne, Ton und Licht ohne Mietkosten",
                  "bis zu 15 Schankwagen inklusive Personal",
                  "Kühlung und Abrechnung übernehmen wir",
                  "vorher gemeinsam durchgerechnet",
                ].map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3.5 text-ink-200">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-flare-500"
                    />
                    {punkt}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
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
