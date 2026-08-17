import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { IconCheck } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { PriceCard } from "@/components/price-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { preispakete } from "@/lib/content";

export const metadata: Metadata = {
  title: "Preise & Pakete",
  description:
    "Bühnen ab 400 €, Pultus 48 ab 790 €, Lichtpaket XL ab 700 €, PA-Beschallung ab 900 € " +
    "und das Komplettpaket XXL ab 1.490 € pro Tag. Alle Preise netto als Beispielangebote.",
  alternates: { canonical: "/preise" },
};

const enthalten = [
  "Anlieferung, Aufbau und Abbau durch unser Team",
  "Einweisung vor Ort und Betreuung während der Veranstaltung",
  "geprüftes Equipment mit gültigen Nachweisen",
  "Absprache mit Ordnungsamt und Feuerwehr, wo nötig",
];

const hinweise = [
  {
    titel: "Nettopreise",
    text: "Alle genannten Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer.",
  },
  {
    titel: "Ab-Preise",
    text: "Es sind Beispielangebote für einen Veranstaltungstag. Der tatsächliche Preis hängt von Umfang, Termin und Aufwand ab.",
  },
  {
    titel: "Anfahrt",
    text: "Bis 50 km um Bad Bramstedt ist die Anfahrt enthalten. Darüber hinaus rechnen wir sie transparent aus.",
  },
  {
    titel: "Folgetage",
    text: "Jeder weitere Veranstaltungstag wird beim Komplettpaket mit 50 % des Tagespreises berechnet.",
  },
];

export default function PreiseSeite() {
  return (
    <>
      <PageHeader
        eyebrow="Preise & Pakete"
        titel="Was es kostet – bevor Sie fragen müssen"
        lead="Wir halten unsere Preise offen. Die folgenden Pakete decken den größten Teil unserer Anfragen ab; alles darüber hinaus rechnen wir Ihnen individuell aus."
        bild="/images/platzhalter-preise-mainstage.jpg"
        bildAlt="Große Festivalbühne mit Traversentürmen in violettem Licht"
      />

      {/* --- Preisraster ---------------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {preispakete.map((paket, i) => (
              <Reveal
                key={paket.id}
                verzoegerung={(i % 3) * 90}
                className={paket.hervorgehoben ? "lg:col-span-3" : undefined}
              >
                {paket.hervorgehoben ? (
                  <div className="grid gap-5 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <KomplettpaketBanner />
                    </div>
                    <PriceCard paket={paket} />
                  </div>
                ) : (
                  <PriceCard paket={paket} />
                )}
              </Reveal>
            ))}
          </div>

          {/* Hinweisblock – rechtlich sauber und gut sichtbar */}
          <Reveal className="mt-14">
            <div className="rounded-card border border-ink-100/10 bg-ink-900 p-8 lg:p-10">
              <h2 className="text-h3 text-white">Gut zu wissen</h2>
              <dl className="mt-8 grid gap-8 sm:grid-cols-2">
                {hinweise.map((hinweis) => (
                  <div key={hinweis.titel}>
                    <dt className="font-display text-[0.7rem] font-semibold tracking-[0.16em] text-flare-400 uppercase">
                      {hinweis.titel}
                    </dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-ink-300">
                      {hinweis.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Was immer dabei ist -------------------------------------------- */}
      <section className="border-y border-ink-100/10 bg-ink-900">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Immer inklusive"
                  titel="In jedem Preis enthalten"
                  lead="Damit Sie Angebote wirklich vergleichen können: Das hier steckt bei uns grundsätzlich drin und taucht nicht später als Zusatzposition auf."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal verzoegerung={110}>
                <ul className="space-y-px overflow-hidden rounded-card border border-ink-100/10">
                  {enthalten.map((punkt) => (
                    <li
                      key={punkt}
                      className="flex items-start gap-4 bg-ink-880 px-6 py-5 text-ink-200"
                    >
                      <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-flare-500" />
                      {punkt}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-ink-400">
                  Was wir <span className="text-ink-200">nicht</span> stillschweigend
                  berechnen: Wartezeiten, die wir selbst verursachen, und Material, das
                  Sie am Ende gar nicht brauchen. Wenn wir bei der Planung merken, dass
                  eine Nummer kleiner reicht, sagen wir das.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Individuelles Angebot"
        titel="Ihre Veranstaltung passt in keine Preiskarte?"
        text="Die meisten Anfragen sind ohnehin Einzelfälle. Schildern Sie uns Anlass, Ort, Termin und ungefähre Gästezahl – Sie bekommen ein Angebot mit klaren Positionen."
      />
    </>
  );
}

/**
 * Erklärt das Komplettpaket neben der hervorgehobenen Preiskarte, damit die
 * teuerste Karte nicht unkommentiert im Raster steht.
 */
function KomplettpaketBanner() {
  return (
    <div className="flex h-full flex-col justify-center rounded-card border border-ink-100/10 bg-ink-900/60 p-8 lg:p-10">
      <p className="flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
        <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
        Alles zusammen
      </p>

      <h2 className="mt-5 text-h2 text-white">
        Bühne, Licht und Ton – ein Aufbau, ein Angebot
      </h2>

      <p className="mt-5 max-w-xl leading-relaxed text-ink-300">
        Die meisten Veranstalter buchen am Ende alle drei Gewerke. Als Paket ist das
        nicht nur günstiger als die Einzelpositionen, sondern vor allem einfacher: ein
        Team, ein Aufbautag, ein Ansprechpartner für alles. Jeder weitere
        Veranstaltungstag kostet 50 % des Tagespreises.
      </p>

      <dl className="mt-9 grid gap-6 sm:grid-cols-3">
        {[
          { wert: "3", label: "Gewerke aus einer Hand" },
          { wert: "1", label: "Ansprechpartner" },
          { wert: "+50 %", label: "je weiterer Tag" },
        ].map((zahl) => (
          <div key={zahl.label}>
            <dt className="sr-only">{zahl.label}</dt>
            <dd>
              <span className="font-display text-3xl font-bold text-flare-500 tabular-nums">
                {zahl.wert}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-ink-400">
                {zahl.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
