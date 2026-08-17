import Link from "next/link";

import { IconMail, IconOrt, IconTelefon, IconWhatsapp } from "@/components/icons";
import { Logo } from "@/components/logo";
import { leistungen } from "@/lib/content";
import { kontaktLinks, navigation, rechtlicheNavigation, site } from "@/lib/site";

export function SiteFooter() {
  const jahr = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-100/10 bg-ink-900">
      {/* Warmer Lichtschein an der Oberkante – schließt die Seite mit dem
          gleichen Bühnenlicht ab, mit dem sie oben beginnt. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flare-500/50 to-transparent"
      />

      <div className="container-page">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Marke */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-400">
              Bühnen, Ton, Licht und Effekte für Veranstaltungen in ganz Norddeutschland.
              Seit über 15 Jahren – vom Vereinsfest bis zum Open Air.
            </p>

            <div className="mt-8 flex gap-3">
              {site.social.map((profil) => (
                <a
                  key={profil.label}
                  href={profil.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xs border border-ink-100/12 px-4 py-2 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-ink-300 uppercase transition-colors hover:border-flare-500/60 hover:text-flare-400"
                >
                  {profil.label}
                </a>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <nav aria-labelledby="footer-leistungen" className="lg:col-span-3">
            <h2
              id="footer-leistungen"
              className="font-display text-eyebrow text-ink-500 uppercase"
            >
              Leistungen
            </h2>
            <ul className="mt-6 space-y-3">
              {leistungen.map((leistung) => (
                <li key={leistung.id}>
                  <Link
                    href={`/leistungen#${leistung.id}`}
                    className="text-sm text-ink-300 transition-colors hover:text-flare-400"
                  >
                    {leistung.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Seiten */}
          <nav aria-labelledby="footer-seiten" className="lg:col-span-2">
            <h2
              id="footer-seiten"
              className="font-display text-eyebrow text-ink-500 uppercase"
            >
              Seiten
            </h2>
            <ul className="mt-6 space-y-3">
              {navigation.map((eintrag) => (
                <li key={eintrag.href}>
                  <Link
                    href={eintrag.href}
                    className="text-sm text-ink-300 transition-colors hover:text-flare-400"
                  >
                    {eintrag.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-eyebrow text-ink-500 uppercase">Kontakt</h2>
            <address className="mt-6 space-y-4 text-sm not-italic">
              <a
                href={kontaktLinks.telefon}
                className="flex items-start gap-3 text-ink-200 transition-colors hover:text-flare-400"
              >
                <IconTelefon className="mt-0.5 h-4 w-4 shrink-0 text-flare-500" />
                {site.telefon.anzeige}
              </a>
              <a
                href={kontaktLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-ink-200 transition-colors hover:text-flare-400"
              >
                <IconWhatsapp className="mt-0.5 h-4 w-4 shrink-0 text-flare-500" />
                WhatsApp schreiben
              </a>
              <a
                href={kontaktLinks.email}
                className="flex items-start gap-3 break-all text-ink-200 transition-colors hover:text-flare-400"
              >
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-flare-500" />
                {site.email}
              </a>
              <p className="flex items-start gap-3 text-ink-300">
                <IconOrt className="mt-0.5 h-4 w-4 shrink-0 text-flare-500" />
                <span>
                  {site.adresse.strasse}
                  <br />
                  {site.adresse.plz} {site.adresse.ort}
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* Fußzeile */}
        <div className="flex flex-col gap-4 border-t border-ink-100/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {jahr} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-6">
            {rechtlicheNavigation.map((eintrag) => (
              <li key={eintrag.href}>
                <Link
                  href={eintrag.href}
                  className="text-xs text-ink-500 transition-colors hover:text-flare-400"
                >
                  {eintrag.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
