import Image from "next/image";

import { IconTelefon, IconWhatsapp } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { kontaktLinks, site } from "@/lib/site";

type CTASectionProps = {
  eyebrow?: string;
  titel?: string;
  text?: string;
};

/**
 * Abschließender Handlungsaufruf vor dem Footer. Steht auf jeder Seite und
 * bietet drei Wege an: Formular, Telefon, WhatsApp.
 */
export function CTASection({
  eyebrow = "Anfrage",
  titel = "Erzählen Sie uns von Ihrer Veranstaltung",
  text = "Ein kurzer Anruf reicht oft schon, um zu klären, was Sie brauchen. Sie bekommen von uns ein Angebot mit klaren Positionen – ohne Überraschungen auf der Rechnung.",
}: CTASectionProps) {
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink-950/88 backdrop-blur-[2px]"
      />
      <div aria-hidden="true" className="spotlight absolute inset-0 -z-10" />

      <div className="container-page section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
            <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
            {eyebrow}
          </p>

          <h2 className="mt-6 text-h1 text-balance text-white">{titel}</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lead text-ink-300">{text}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/kontakt" groesse="lg" className="w-full sm:w-auto">
              Angebot anfragen
            </ButtonLink>

            <a
              href={kontaktLinks.telefon}
              className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-xs border border-ink-100/20 px-7 font-display text-xs font-semibold tracking-[0.09em] text-ink-100 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-flare-500/60 hover:text-flare-400 sm:w-auto"
            >
              <IconTelefon className="h-4 w-4" />
              {site.telefon.anzeige}
            </a>

            <a
              href={kontaktLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-xs border border-ink-100/20 px-7 font-display text-xs font-semibold tracking-[0.09em] text-ink-100 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-flare-500/60 hover:text-flare-400 sm:w-auto"
            >
              <IconWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
