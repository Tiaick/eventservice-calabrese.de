import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { Preistabelle } from "@/components/price-table";
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
  { k: "Logistik", v: "Anlieferung, Aufbau und Abbau durch unser Team" },
  { k: "Betreuung", v: "Einweisung vor Ort und Betreuung während der Veranstaltung" },
  { k: "Material", v: "geprüftes Equipment mit gültigen Nachweisen" },
  { k: "Behörden", v: "Absprache mit Ordnungsamt und Feuerwehr, wo nötig" },
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
        blatt="Blatt 02"
        marke="Preise & Pakete"
        titel="Was es kostet – bevor Sie fragen müssen"
        lead="Wir halten unsere Preise offen. Die folgenden Positionen decken den größten Teil unserer Anfragen ab; alles darüber hinaus rechnen wir Ihnen individuell aus."
        bild="/images/platzhalter-preise-mainstage.jpg"
        bildAlt="Große Festivalbühne mit Traversentürmen in violettem Licht"
      />

      {/* --- Positionstabelle ---------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <Preistabelle pakete={preispakete} />
          </Reveal>

          {/* Hinweise – rechtlich sauber und gut sichtbar */}
          <Reveal className="mt-16">
            <h2 className="font-mono text-label text-ink-500 uppercase">Gut zu wissen</h2>
            <dl className="mt-6 grid gap-x-10 gap-y-7 border-t border-ink-100/12 pt-7 sm:grid-cols-2">
              {hinweise.map((hinweis) => (
                <div key={hinweis.titel} className="flex gap-5">
                  <dt className="w-24 shrink-0 font-mono text-[0.62rem] tracking-[0.14em] text-flare-400 uppercase">
                    {hinweis.titel}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-300">{hinweis.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* --- Immer inklusive ------------------------------------------------ */}
      <section className="planraster border-y border-ink-100/12 bg-ink-900">
        <div className="container-page section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  nummer="—"
                  marke="Immer inklusive"
                  titel="In jedem Preis enthalten"
                  lead="Damit Sie Angebote wirklich vergleichen können: Das hier steckt bei uns grundsätzlich drin und taucht nicht später als Zusatzposition auf."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <dl className="border-t border-ink-100/15">
                  {enthalten.map((punkt) => (
                    <div
                      key={punkt.k}
                      className="flex flex-col gap-1 border-b border-ink-100/15 py-4 sm:flex-row sm:gap-6"
                    >
                      <dt className="font-mono text-label text-flare-400 uppercase sm:w-28 sm:shrink-0 sm:pt-0.5">
                        {punkt.k}
                      </dt>
                      <dd className="text-datum text-ink-200">{punkt.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-7 text-sm leading-relaxed text-ink-400">
                  Was wir <span className="text-ink-100">nicht</span> stillschweigend
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
        marke="Individuelles Angebot"
        titel="Ihre Veranstaltung passt in keine Position?"
        text="Die meisten Anfragen sind ohnehin Einzelfälle. Schildern Sie uns Anlass, Ort, Termin und ungefähre Gästezahl – Sie bekommen ein Angebot mit klaren Positionen."
      />
    </>
  );
}
