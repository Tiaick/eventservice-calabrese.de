import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { Eckmarken, Masslinie } from "@/components/plan";
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
        blatt="Blatt 04"
        marke="Über uns"
        titel="Der Betrieb hinter der Bühne"
        lead="Eventservice Calabrese ist ein Familienbetrieb aus Bad Bramstedt. Seit über 15 Jahren bauen wir Bühnen auf, hängen Line Arrays und fahren Lichtshows – in Schleswig-Holstein, Hamburg und dem norddeutschen Umland."
        beiwerk={
          <dl className="border-t border-ink-100/15">
            {[
              { label: "Standort", wert: `${site.adresse.ort}, ${site.adresse.region}` },
              { label: "Einzugsgebiet", wert: "Schleswig-Holstein, Hamburg, Umland" },
              { label: "Im Geschäft seit", wert: "über 15 Jahren" },
              { label: "Eigenes Material", wert: "Bühnen, PA, Licht, Effekte" },
            ].map((fakt) => (
              <div
                key={fakt.label}
                className="flex flex-col gap-1 border-b border-ink-100/15 py-3.5 sm:flex-row sm:gap-6"
              >
                <dt className="font-mono text-label text-ink-500 uppercase sm:w-36 sm:shrink-0 sm:pt-0.5">
                  {fakt.label}
                </dt>
                <dd className="font-mono text-datum text-ink-100">{fakt.wert}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* --- Portrait ------------------------------------------------------ */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative aspect-4/5 overflow-hidden border border-ink-100/12">
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
                <Eckmarken className="absolute inset-0" />
              </div>
              <Masslinie className="mt-4 text-ink-500">
                Halle, Werkstatt und Fuhrpark
              </Masslinie>
            </Reveal>

            <Reveal verzoegerung={90} className="lg:col-span-6 lg:col-start-7">
              <SectionHeading
                nummer="01"
                marke="Unsere Geschichte"
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

              {/* Werte als nummerierte Positionen */}
              <div className="mt-12 border-t border-ink-100/15">
                {werte.map((wert, i) => (
                  <div
                    key={wert.titel}
                    className="flex gap-6 border-b border-ink-100/15 py-6"
                  >
                    <span className="w-8 shrink-0 font-mono text-label text-flare-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-h4 uppercase text-white">
                        {wert.titel}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                        {wert.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBar />

      {/* --- Equipment und Standort ---------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  nummer="02"
                  marke="Equipment"
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

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                {/* Materialliste statt Logokacheln */}
                <dl className="border-t border-ink-100/15">
                  {marken.map((marke, i) => (
                    <div
                      key={marke.name}
                      className="flex items-baseline gap-5 border-b border-ink-100/15 py-4"
                    >
                      <span className="font-mono text-[0.62rem] text-ink-500 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <dt className="w-36 shrink-0 font-display text-lg font-semibold tracking-[0.02em] text-white uppercase">
                        {marke.name}
                      </dt>
                      <dd className="text-sm text-ink-400">{marke.beschreibung}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 border-l-2 border-flare-500 py-1 pl-5">
                  <h3 className="font-mono text-label text-flare-400 uppercase">
                    Halle, Werkstatt und Fuhrpark
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    Unser Standort in {site.adresse.ort} ist Lager und Werkstatt
                    zugleich. Hier werden Bühnenteile geprüft, Kabel konfektioniert und
                    Scheinwerfer gewartet, bevor sie auf den Lkw gehen. Für die Anfahrt
                    zu Ihrer Veranstaltung sind wir mit eigenen Fahrzeugen unterwegs –
                    auch das gehört zur Verlässlichkeit.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        marke="Kennenlernen"
        titel="Lieber einmal telefonieren als lange lesen"
        text="Der schnellste Weg zu einer belastbaren Einschätzung ist ein Anruf. Danach wissen Sie, ob wir zu Ihrer Veranstaltung passen."
      />
    </>
  );
}
