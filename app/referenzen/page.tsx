import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { KundenReferenzen } from "@/components/kunden-referenzen";
import { PageHeader } from "@/components/page-header";
import { Sektionsmarke } from "@/components/plan";
import { Reveal } from "@/components/reveal";
import { kennzahlen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Über 300 Veranstaltungen für Städte, Gemeinden, Unternehmen und Vereine in " +
    "Norddeutschland – darunter Hagebau, die Stadt Bad Bramstedt, das Amt Bad Bramstedt-Land " +
    "und die Auenlandklinik.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenSeite() {
  return (
    <>
      <PageHeader
        blatt="Blatt 03"
        marke="Referenzen"
        titel="Über 300 Veranstaltungen – ein Auszug"
        lead="Stadtfeste, Firmenjubiläen, Vereinsfeiern und Open Airs. Filtern Sie nach dem Gewerk, das Sie interessiert."
        beiwerk={
          <dl className="border-t border-ink-100/15">
            {kennzahlen.map((zahl) => (
              <div
                key={zahl.label}
                className="flex items-baseline justify-between gap-6 border-b border-ink-100/15 py-3.5"
              >
                <dt className="text-sm text-ink-400">{zahl.label}</dt>
                <dd className="shrink-0 font-mono text-lg font-medium text-white tabular-nums">
                  {zahl.wert}
                  <span className="ml-1.5 text-[0.7rem] tracking-[0.12em] text-flare-500 uppercase">
                    {zahl.einheit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* --- Auftraggeber ---------------------------------------------------- */}
      <section className="section-y-sm border-b border-ink-100/12">
        <div className="container-page">
          <Reveal>
            <Sektionsmarke nummer="01">Auftraggeber</Sektionsmarke>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-400">
              Eine Auswahl der Städte, Gemeinden, Unternehmen und Veranstaltungen, für die
              wir gearbeitet haben.
            </p>
          </Reveal>

          <Reveal verzoegerung={80} className="mt-8">
            <KundenReferenzen />
          </Reveal>
        </div>
      </section>

      {/* --- Galerie ---------------------------------------------------------- */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <Sektionsmarke nummer="02">Galerie</Sektionsmarke>
          </Reveal>

          <div className="mt-8">
            <GalleryGrid />
          </div>

          {/* Klarer Hinweis, solange noch Platzhalter zu sehen sind */}
          <p className="mt-12 border-l-2 border-ink-600 py-2 pl-5 text-sm leading-relaxed text-ink-400">
            <span className="font-mono text-[0.62rem] tracking-[0.14em] text-ink-300 uppercase">
              Hinweis zur Bildauswahl
            </span>
            <br />
            Die hier gezeigten Aufnahmen sind Platzhalter und werden vor dem Livegang
            durch eigene Eventfotos ersetzt.
          </p>
        </div>
      </section>

      <CTASection
        marke="Ihre Veranstaltung"
        titel="Als Nächstes gern Ihr Event"
        text="Ob Stadtfest, Firmenfeier oder Open Air – erzählen Sie uns, was Sie vorhaben. Wir sagen Ihnen, wie wir es umsetzen würden."
      />
    </>
  );
}
