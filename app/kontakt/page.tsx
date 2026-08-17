import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { IconMail, IconOrt, IconTelefon, IconUhr, IconWhatsapp } from "@/components/icons";
import { MapConsent } from "@/components/map-consent";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { kontaktLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    `Eventservice Calabrese, ${site.adresse.strasse}, ${site.adresse.plz} ${site.adresse.ort}. ` +
    "Anfrage per Formular, Telefon oder WhatsApp – Antwort in der Regel innerhalb eines Werktags.",
  alternates: { canonical: "/kontakt" },
};

const direktkontakt = [
  {
    icon: IconTelefon,
    label: "Telefon",
    wert: site.telefon.anzeige,
    href: kontaktLinks.telefon,
    hinweis: "Am schnellsten – auch für kurze Rückfragen",
    extern: false,
  },
  {
    icon: IconWhatsapp,
    label: "WhatsApp",
    wert: "Nachricht schreiben",
    href: kontaktLinks.whatsapp,
    hinweis: "Ideal, um Fotos vom Veranstaltungsort zu schicken",
    extern: true,
  },
  {
    icon: IconMail,
    label: "E-Mail",
    wert: site.email,
    href: kontaktLinks.email,
    hinweis: "Für ausführliche Anfragen mit Unterlagen",
    extern: false,
  },
];

export default function KontaktSeite() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        titel="Sprechen wir über Ihre Veranstaltung"
        lead="Schildern Sie uns kurz, was Sie vorhaben. Sie bekommen von uns eine ehrliche Einschätzung und ein Angebot mit klaren Positionen – in der Regel innerhalb eines Werktags."
        beiwerk={
          <div className="overflow-hidden rounded-card border border-ink-100/10 bg-ink-900/50">
            <p className="flex items-center gap-2.5 border-b border-ink-100/10 px-6 py-4 font-display text-[0.7rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
              <IconUhr className="h-4 w-4 text-flare-500" />
              Erreichbarkeit
            </p>
            <dl className="divide-y divide-ink-100/10">
              {site.oeffnungszeiten.map((zeit) => (
                <div key={zeit.tage} className="flex justify-between gap-4 px-6 py-3.5">
                  <dt className="text-sm text-ink-400">{zeit.tage}</dt>
                  <dd className="text-right text-sm text-ink-100">{zeit.zeit}</dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-ink-100/10 bg-flare-500/[0.06] px-6 py-4 text-sm leading-relaxed text-ink-200">
              Während laufender Veranstaltungen sind wir am Platz – dann antworten wir,
              sobald der Aufbau steht.
            </p>
          </div>
        }
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* --- Formular ------------------------------------------------ */}
            <Reveal className="lg:col-span-7">
              <h2 className="text-h3 text-white">Anfrage senden</h2>
              <p className="mt-3 mb-10 text-ink-400">
                Je mehr wir vorab wissen, desto genauer wird das Angebot.
              </p>
              <ContactForm />
            </Reveal>

            {/* --- Direktkontakt ------------------------------------------- */}
            <Reveal verzoegerung={120} className="lg:col-span-5">
              <h2 className="text-h3 text-white">Direkt erreichen</h2>
              <p className="mt-3 mb-10 text-ink-400">
                Lieber persönlich? Kein Problem – wir gehen ans Telefon.
              </p>

              <ul className="space-y-px overflow-hidden rounded-card border border-ink-100/10">
                {direktkontakt.map((eintrag) => (
                  <li key={eintrag.label}>
                    <a
                      href={eintrag.href}
                      {...(eintrag.extern
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-start gap-4 bg-ink-900 p-6 transition-colors hover:bg-ink-880"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xs border border-flare-500/25 bg-flare-500/8 text-flare-400 transition-colors group-hover:bg-flare-500 group-hover:text-ink-950">
                        <eintrag.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[0.7rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
                          {eintrag.label}
                        </span>
                        <span className="mt-1.5 block font-display text-base font-semibold break-words text-white transition-colors group-hover:text-flare-400">
                          {eintrag.wert}
                        </span>
                        <span className="mt-1.5 block text-xs text-ink-500">
                          {eintrag.hinweis}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Anschrift – die Zeiten stehen bereits im Seitenkopf */}
              <div className="mt-5 rounded-card border border-ink-100/10 bg-ink-900 p-6">
                <p className="flex items-center gap-2.5 font-display text-[0.7rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
                  <IconOrt className="h-4 w-4 text-flare-500" />
                  Anschrift
                </p>
                <address className="mt-3 text-sm leading-relaxed text-ink-200 not-italic">
                  {site.legalName}
                  <br />
                  {site.adresse.strasse}
                  <br />
                  {site.adresse.plz} {site.adresse.ort}
                </address>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Karte ---------------------------------------------------------- */}
      <section className="section-y-sm border-t border-ink-100/10 bg-ink-900">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-4">
              <p className="flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
                <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
                Standort
              </p>
              <h2 className="mt-5 text-h3 text-white">
                Halle und Werkstatt in {site.adresse.ort}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-400">
                Von hier aus fahren wir in ganz Schleswig-Holstein, nach Hamburg und ins
                norddeutsche Umland. Ein Besuch ist nach Absprache jederzeit möglich –
                melden Sie sich einfach kurz vorher an.
              </p>
            </div>

            <div className="lg:col-span-8">
              <MapConsent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
