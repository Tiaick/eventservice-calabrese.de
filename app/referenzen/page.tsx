import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { kennzahlen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Eindrücke aus über 300 Veranstaltungen: Bühnenaufbauten, Lichtdesign, Beschallung, " +
    "Special Effects und Lasershows von Eventservice Calabrese.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenSeite() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        titel="Über 300 Veranstaltungen – ein Auszug"
        lead="Stadtfeste, Firmenjubiläen, Vereinsfeiern und Open Airs. Filtern Sie nach dem Gewerk, das Sie interessiert."
        beiwerk={
          <dl className="divide-y divide-ink-100/10 overflow-hidden rounded-card border border-ink-100/10 bg-ink-900/50">
            {kennzahlen.map((zahl) => (
              <div
                key={zahl.label}
                className="flex items-baseline justify-between gap-6 px-6 py-4"
              >
                <dt className="text-sm text-ink-400">{zahl.label}</dt>
                <dd className="shrink-0 font-display text-xl font-bold text-white tabular-nums">
                  {zahl.wert}
                  <span className="ml-1 text-flare-500">{zahl.einheit}</span>
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section-y">
        <div className="container-page">
          <GalleryGrid />

          {/* Klarer Hinweis, solange noch Platzhalter zu sehen sind */}
          <p className="mt-12 rounded-card border border-ink-100/10 bg-ink-900 px-6 py-5 text-sm leading-relaxed text-ink-400">
            <span className="font-semibold text-ink-200">Hinweis zur Bildauswahl:</span>{" "}
            Die hier gezeigten Aufnahmen sind Platzhalter und werden vor dem Livegang
            durch eigene Eventfotos ersetzt.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Ihre Veranstaltung"
        titel="Als Nächstes gern Ihr Event"
        text="Ob Stadtfest, Firmenfeier oder Open Air – erzählen Sie uns, was Sie vorhaben. Wir sagen Ihnen, wie wir es umsetzen würden."
      />
    </>
  );
}
