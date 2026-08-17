import Image from "next/image";

import { IconMail, IconTelefon, IconWhatsapp } from "@/components/icons";
import { Sektionsmarke } from "@/components/plan";
import { ButtonLink } from "@/components/ui/button";
import { kontaktLinks, site } from "@/lib/site";

type CTASectionProps = {
  marke?: string;
  titel?: string;
  text?: string;
};

/**
 * Abschließender Handlungsaufruf vor dem Footer. Steht auf jeder Seite und
 * bietet drei Wege an: Formular, Telefon, WhatsApp – als Kontaktzeile
 * aufgereiht statt als zentrierter Block.
 */
export function CTASection({
  marke = "Anfrage",
  titel = "Erzählen Sie uns von Ihrer Veranstaltung",
  text = "Ein kurzer Anruf reicht oft schon, um zu klären, was Sie brauchen. Sie bekommen von uns ein Angebot mit klaren Positionen – ohne Überraschungen auf der Rechnung.",
}: CTASectionProps) {
  const wege = [
    {
      icon: IconTelefon,
      label: "Telefon",
      wert: site.telefon.anzeige,
      href: kontaktLinks.telefon,
      extern: false,
    },
    {
      icon: IconWhatsapp,
      label: "WhatsApp",
      wert: "Nachricht schreiben",
      href: kontaktLinks.whatsapp,
      extern: true,
    },
    {
      icon: IconMail,
      label: "E-Mail",
      wert: site.email,
      href: kontaktLinks.email,
      extern: false,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      {/* PLATZHALTER-Bild – siehe public/images/PLATZHALTER-BILDER.md */}
      <Image
        src="/images/platzhalter-cta-mainstage-nacht.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/90" />
      <div aria-hidden="true" className="planraster absolute inset-0 -z-10" />

      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Sektionsmarke>{marke}</Sektionsmarke>
            <h2 className="mt-6 text-h2 text-balance uppercase text-white">{titel}</h2>
            <p className="mt-6 max-w-xl text-lead text-ink-300">{text}</p>

            <div className="mt-9">
              <ButtonLink href="/kontakt" groesse="lg">
                Angebot anfragen
              </ButtonLink>
            </div>
          </div>

          {/* Direkte Wege als Kontaktzeilen */}
          <div className="lg:col-span-5 lg:self-end">
            <ul className="border-t border-ink-100/15">
              {wege.map((weg) => (
                <li key={weg.label}>
                  <a
                    href={weg.href}
                    {...(weg.extern
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 border-b border-ink-100/15 py-4 transition-colors hover:border-flare-500/50"
                  >
                    <weg.icon className="h-4 w-4 shrink-0 text-flare-500" />
                    <span className="w-24 shrink-0 font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 uppercase">
                      {weg.label}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-mono text-datum text-ink-100 transition-colors group-hover:text-flare-400">
                      {weg.wert}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
