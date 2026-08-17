import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatBar } from "@/components/stat-bar";
import { ButtonLink } from "@/components/ui/button";
import { marken } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Eventservice Calabrese aus Bad Bramstedt: Familienbetrieb mit über 15 Jahren Erfahrung " +
    "in Veranstaltungstechnik, eigenem Equipment, Werkstatt und Fuhrpark.",
  alternates: { canonical: "/ueber-uns" },
};

const werte = [
  {
    titel: "Zuverlässigkeit",
    text: "Zugesagte Aufbauzeiten halten wir ein. Wenn wir sagen, dass die Bühne um 14 Uhr steht, dann steht sie um 14 Uhr – auch wenn wir dafür früher anfangen müssen.",
  },
  {
    titel: "Saubere Planung",
    text: "Stromwege, Anfahrtswege, Statik, Sicherheitsabstände: Das klären wir vorher am Telefon oder bei einer Ortsbegehung, nicht erst am Veranstaltungstag.",
  },
  {
    titel: "Ehrliche Beratung",
    text: "Wenn ein kleineres Paket für Ihre Veranstaltung reicht, sagen wir das. Uns ist ein zufriedener Stammkunde lieber als ein einmalig großes Angebot.",
  },
];

export default function UeberUnsSeite() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        titel="Der Betrieb hinter der Bühne"
        lead="Eventservice Calabrese ist ein Familienbetrieb aus Bad Bramstedt. Seit über 15 Jahren bauen wir Bühnen auf, hängen Line Arrays und fahren Lichtshows – in Schleswig-Holstein, Hamburg und dem norddeutschen Umland."
        beiwerk={
          <dl className="divide-y divide-ink-100/10 overflow-hidden rounded-card border border-ink-100/10 bg-ink-900/50">
            {[
              { label: "Standort", wert: `${site.adresse.ort}, ${site.adresse.region}` },
              { label: "Einzugsgebiet", wert: "Schleswig-Holstein, Hamburg, Umland" },
              { label: "Im Geschäft seit", wert: "über 15 Jahren" },
              { label: "Eigenes Material", wert: "Bühnen, PA, Licht, Effekte" },
            ].map((fakt) => (
              <div key={fakt.label} className="px-6 py-4">
                <dt className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
                  {fakt.label}
                </dt>
                <dd className="mt-1.5 text-sm text-ink-100">{fakt.wert}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* --- Portrait ------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative aspect-4/5 overflow-hidden rounded-card border border-ink-100/10 lg:col-span-5 lg:sticky lg:top-28">
              {/* PLATZHALTER-Bild – gegen ein echtes Foto von Werkstatt, Lager oder Team tauschen */}
              <Image
                src="/images/platzhalter-ueber-uns-werkstatt.jpg"
                alt="Abgedunkelter Proberaum mit Instrumenten und Technik im Gegenlicht"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent"
              />
            </Reveal>

            <Reveal verzoegerung={110} className="lg:col-span-7">
              <SectionHeading
                eyebrow="Unsere Geschichte"
                titel="Angefangen mit einer Anlage im Transporter"
              />

              <div className="mt-8 space-y-5 leading-relaxed text-ink-300">
                <p>
                  Angefangen hat alles mit einer Beschallungsanlage, einem Transporter
                  und Wochenenden auf Dorffesten in der Umgebung. Aus den ersten
                  Aufträgen wurden Stammkunden, aus den Stammkunden wurde ein Betrieb
                  mit eigener Halle, Werkstatt und Fuhrpark.
                </p>
                <p>
                  Geblieben ist die Arbeitsweise: Wir sind selbst mit auf dem Platz, wir
                  bauen selbst mit auf, und wir sind die Ansprechpartner, wenn während
                  der Veranstaltung eine Frage aufkommt. Bei uns bekommen Sie keine
                  wechselnde Subunternehmerkette, sondern dieselben Gesichter wie beim
                  letzten Mal.
                </p>
                <p>
                  Über 300 Veranstaltungen sind seitdem zusammengekommen – vom
                  Feuerwehrfest mit 200 Gästen bis zum Open Air mit mehreren tausend
                  Besuchern. Was sich dabei bewährt hat: gutes Material, ein
                  eingespieltes Team und Absprachen, auf die man sich verlassen kann.
                </p>
              </div>

              {/* --- Werte --- */}
              <div className="mt-12 space-y-px overflow-hidden rounded-card border border-ink-100/10">
                {werte.map((wert, i) => (
                  <div key={wert.titel} className="bg-ink-900 p-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-bold text-flare-500 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-h4 text-white">{wert.titel}</h3>
                    </div>
                    <p className="mt-3 pl-9 text-sm leading-relaxed text-ink-400">
                      {wert.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBar />

      {/* --- Equipment & Standort ------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Equipment"
                  titel="Womit wir arbeiten"
                  lead="Wir kaufen Technik, die hält – und pflegen sie in der eigenen Werkstatt. Das meiste Material steht bei uns in der Halle und muss nicht erst zugemietet werden."
                />
                <div className="mt-10">
                  <ButtonLink href="/leistungen" variante="sekundaer">
                    Zu den Leistungen
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal verzoegerung={110}>
                <ul className="grid gap-px overflow-hidden rounded-card border border-ink-100/10 bg-ink-100/10 sm:grid-cols-2">
                  {marken.map((marke) => (
                    <li key={marke.name} className="bg-ink-950 p-7">
                      <p className="font-display text-xl font-bold tracking-[0.04em] text-white uppercase">
                        {marke.name}
                      </p>
                      <p className="mt-2 text-sm text-ink-400">{marke.beschreibung}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-card border border-ink-100/10 bg-ink-900 p-7">
                  <h3 className="text-h4 text-white">Halle, Werkstatt und Fuhrpark</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">
                    Unser Standort in {site.adresse.ort} ist Lager und Werkstatt
                    zugleich. Hier werden Bühnenteile geprüft, Kabel konfektioniert und
                    Scheinwerfer gewartet, bevor sie auf den Lkw gehen. Für die
                    Anfahrt zu Ihrer Veranstaltung sind wir mit eigenen Fahrzeugen
                    unterwegs – auch das gehört zur Verlässlichkeit.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Kennenlernen"
        titel="Lieber einmal telefonieren als lange lesen"
        text="Der schnellste Weg zu einer belastbaren Einschätzung ist ein Anruf. Danach wissen Sie, ob wir zu Ihrer Veranstaltung passen."
      />
    </>
  );
}
