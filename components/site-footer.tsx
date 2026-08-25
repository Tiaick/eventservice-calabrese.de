import Link from "next/link";

import { Logo } from "@/components/logo";
import { leistungen } from "@/lib/content";
import { kontaktLinks, navigation, rechtlicheNavigation, site } from "@/lib/site";

/**
 * Fußzeile im Aufbau eines Planblattfußes: Spalten mit Monospace-Bezeichnern,
 * durchgehende Haarlinien, keine Flächen.
 */
export function SiteFooter() {
  const jahr = new Date().getFullYear();

  const spalten = [
    {
      titel: "Leistungen",
      eintraege: leistungen.map((l) => ({
        label: l.label,
        href: `/leistungen#${l.id}` as const,
      })),
    },
    {
      titel: "Seiten",
      eintraege: navigation.map((n) => ({ label: n.label, href: n.href })),
    },
  ];

  return (
    <footer className="border-t border-ink-100/15 bg-ink-900">
      <div className="container-page">
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-18">
          {/* Marke */}
          <div className="lg:col-span-4">
            <Logo className="h-11 sm:h-12" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-400">
              Bühnen, Ton, Licht und Effekte für Veranstaltungen in ganz Norddeutschland.
              Seit über 15 Jahren – vom Vereinsfest bis zum Open Air.
            </p>

            <ul className="mt-7 flex gap-6">
              {site.social.map((profil) => (
                <li key={profil.label}>
                  <a
                    href={profil.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-400 uppercase transition-colors hover:text-flare-400"
                  >
                    {profil.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verzeichnisse */}
          {spalten.map((spalte) => (
            <nav
              key={spalte.titel}
              aria-label={spalte.titel}
              className="lg:col-span-2"
            >
              <h2 className="border-b border-ink-100/15 pb-3 font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
                {spalte.titel}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {spalte.eintraege.map((eintrag) => (
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
          ))}

          {/* Kontakt als Datenblock */}
          <div className="lg:col-span-4">
            <h2 className="border-b border-ink-100/15 pb-3 font-mono text-[0.6rem] tracking-[0.18em] text-ink-500 uppercase">
              Kontakt
            </h2>
            <dl className="mt-4 space-y-3 font-mono text-datum">
              {[
                { k: "Tel", v: site.telefon.anzeige, href: kontaktLinks.telefon, extern: false },
                { k: "WA", v: "WhatsApp schreiben", href: kontaktLinks.whatsapp, extern: true },
                { k: "Mail", v: site.email, href: kontaktLinks.email, extern: false },
              ].map((z) => (
                <div key={z.k} className="flex gap-4">
                  <dt className="w-10 shrink-0 text-[0.6rem] tracking-[0.14em] text-ink-500 uppercase">
                    {z.k}
                  </dt>
                  <dd className="min-w-0">
                    <a
                      href={z.href}
                      {...(z.extern
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="break-all text-ink-200 transition-colors hover:text-flare-400"
                    >
                      {z.v}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="flex gap-4">
                <dt className="w-10 shrink-0 text-[0.6rem] tracking-[0.14em] text-ink-500 uppercase">
                  Ort
                </dt>
                <dd className="text-ink-300">
                  <address className="not-italic">
                    {site.adresse.strasse}
                    <br />
                    {site.adresse.plz} {site.adresse.ort}
                  </address>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Blattfuß */}
        <div className="flex flex-col gap-3 border-t border-ink-100/15 py-6 font-mono text-[0.65rem] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {jahr} {site.legalName} · Website von{" "}
            <a
              href="https://keep-it-fair.de"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flare-400"
            >
              keep-it-fair.de
            </a>
          </p>
          <ul className="flex flex-wrap gap-6">
            {rechtlicheNavigation.map((eintrag) => (
              <li key={eintrag.href}>
                <Link
                  href={eintrag.href}
                  className="uppercase transition-colors hover:text-flare-400"
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
