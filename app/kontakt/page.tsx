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
        blatt="Blatt 05"
        marke="Kontakt"
        titel="Sprechen wir über Ihre Veranstaltung"
        lead="Schildern Sie uns kurz, was Sie vorhaben. Sie bekommen von uns eine ehrliche Einschätzung und ein Angebot mit klaren Positionen – in der Regel innerhalb eines Werktags."
        beiwerk={
          <div>
            <p className="flex items-center gap-2.5 border-b border-ink-100/15 pb-3 font-mono text-label text-ink-500 uppercase">
              <IconUhr className="h-4 w-4 text-flare-500" />
              Erreichbarkeit
            </p>
            <dl>
              {site.oeffnungszeiten.map((zeit) => (
                <div
                  key={zeit.tage}
                  className="flex justify-between gap-4 border-b border-ink-100/15 py-3.5"
                >
                  <dt className="text-sm text-ink-400">{zeit.tage}</dt>
                  <dd className="text-right font-mono text-datum text-ink-100">
                    {zeit.zeit}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-l-2 border-flare-500 py-1 pl-5 text-sm leading-relaxed text-ink-300">
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
              <h2 className="text-h3 uppercase text-white">Anfrage senden</h2>
              <p className="mt-3 mb-10 text-ink-400">
                Je mehr wir vorab wissen, desto genauer wird das Angebot.
              </p>
              <ContactForm />
            </Reveal>

            {/* --- Direktkontakt ------------------------------------------- */}
            <Reveal verzoegerung={120} className="lg:col-span-5">
              <h2 className="text-h3 uppercase text-white">Direkt erreichen</h2>
              <p className="mt-3 mb-10 text-ink-400">
                Lieber persönlich? Kein Problem – wir gehen ans Telefon.
              </p>

              <ul className="border-t border-ink-100/15">
                {direktkontakt.map((eintrag) => (
                  <li key={eintrag.label}>
                    <a
                      href={eintrag.href}
                      {...(eintrag.extern
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-start gap-4 border-b border-ink-100/15 py-5 transition-colors hover:border-flare-500/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-flare-500/30 text-flare-400 transition-colors group-hover:border-flare-500 group-hover:bg-flare-500 group-hover:text-ink-950">
                        <eintrag.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase">
                          {eintrag.label}
                        </span>
                        <span className="mt-1.5 block font-mono text-base break-words text-white transition-colors group-hover:text-flare-400">
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
              <div className="mt-8">
                <p className="flex items-center gap-2.5 border-b border-ink-100/15 pb-3 font-mono text-label text-ink-500 uppercase">
                  <IconOrt className="h-4 w-4 text-flare-500" />
                  Anschrift
                </p>
                <address className="mt-4 font-mono text-datum leading-relaxed text-ink-200 not-italic">
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
      <section className="planraster section-y-sm border-t border-ink-100/12 bg-ink-900">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-label text-flare-400 uppercase">Standort</p>
              <h2 className="mt-5 text-h3 uppercase text-white">
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
