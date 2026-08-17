import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { IconPfeil } from "@/components/icons";
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
        eyebrow="Leistungen"
        titel="Was wir für Ihre Veranstaltung aufbauen"
        lead="Sechs Bereiche, einzeln buchbar oder als Komplettpaket. Alles Equipment steht in unserer eigenen Halle – was hier steht, können wir auch liefern."
        beiwerk={
          /* Bewusst kein Wiederholen der Sprungnavigation darunter, sondern der
             Hinweis auf das Paket, in dem die meisten Anfragen enden. */
          <div className="overflow-hidden rounded-card border border-flare-500/30 bg-ink-900/60">
            <p className="border-b border-flare-500/20 bg-flare-500/[0.07] px-6 py-3.5 font-display text-[0.7rem] font-semibold tracking-[0.18em] text-flare-400 uppercase">
              Am häufigsten gebucht
            </p>

            <div className="p-6">
              <h2 className="text-h3 text-white">Komplettpaket XXL</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Bühne, Lichtpaket XL und PA-Beschallung zusammen – ein Aufbautag, ein
                Team, ein Angebot.
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-flare-400 tabular-nums">
                  ab 1.490 €
                </span>
                <span className="text-xs text-ink-500">netto pro Tag</span>
              </p>

              <ButtonLink href="/preise" variante="sekundaer" className="mt-6 w-full">
                Alle Preise ansehen
              </ButtonLink>
            </div>
          </div>
        }
      />

      {/* Sprungnavigation – bleibt beim Scrollen unter dem Header stehen */}
      <nav
        aria-label="Sprung zu den Leistungen"
        className="sticky top-18 z-30 border-b border-ink-100/10 bg-ink-950/88 backdrop-blur-xl"
      >
        <div className="container-page">
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {leistungen.map((leistung) => (
              <li key={leistung.id}>
                <a
                  href={`#${leistung.id}`}
                  className="block rounded-xs px-4 py-2 font-display text-[0.72rem] font-semibold tracking-[0.08em] whitespace-nowrap text-ink-400 uppercase transition-colors hover:bg-ink-100/5 hover:text-flare-400"
                >
                  {leistung.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {leistungen.map((leistung, i) => {
        const bildRechts = i % 2 === 1;

        return (
          <section
            key={leistung.id}
            id={leistung.id}
            className={cn(
              "section-y border-b border-ink-100/10",
              i % 2 === 1 && "bg-ink-900",
            )}
          >
            <div className="container-page">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Bild */}
                <Reveal
                  className={cn(
                    "relative aspect-4/3 overflow-hidden rounded-card border border-ink-100/10 lg:col-span-6",
                    bildRechts && "lg:order-2",
                  )}
                >
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
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent",
                    )}
                  />
                  {leistung.abPreis ? (
                    <p className="absolute bottom-5 left-5 rounded-xs bg-ink-950/85 px-4 py-2 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-flare-400 uppercase backdrop-blur-sm">
                      {leistung.abPreis} netto
                    </p>
                  ) : null}
                </Reveal>

                {/* Text */}
                <Reveal verzoegerung={110} className="lg:col-span-6">
                  <p className="flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
                    <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
                    {leistung.eyebrow}
                  </p>

                  <h2 className="mt-5 text-h2 text-white">{leistung.titel}</h2>

                  <p className="mt-6 text-lead text-ink-200">{leistung.lead}</p>

                  <div className="mt-6 space-y-4 text-ink-400">
                    {leistung.text.map((absatz) => (
                      <p key={absatz.slice(0, 40)} className="leading-relaxed">
                        {absatz}
                      </p>
                    ))}
                  </div>

                  <dl className="mt-9 grid gap-px overflow-hidden rounded-card border border-ink-100/10 bg-ink-100/10 sm:grid-cols-2">
                    {leistung.details.map((detail) => (
                      <div
                        key={detail.titel}
                        className={cn("p-5", i % 2 === 1 ? "bg-ink-900" : "bg-ink-950")}
                      >
                        <dt className="font-display text-[0.7rem] font-semibold tracking-[0.16em] text-ink-500 uppercase">
                          {detail.titel}
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-ink-200">
                          {detail.wert}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <ButtonLink href="/kontakt">Angebot anfragen</ButtonLink>
                    <ButtonLink href="/preise" variante="sekundaer">
                      Preise ansehen
                      <IconPfeil className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        eyebrow="Noch unsicher?"
        titel="Sagen Sie uns, was stattfindet – wir sagen, was Sie brauchen"
        text="Nicht jede Veranstaltung braucht das größte Paket. Rufen Sie an, schildern Sie kurz Anlass, Ort und ungefähre Gästezahl. Wir sagen Ihnen ehrlich, was sinnvoll ist."
      />
    </>
  );
}
