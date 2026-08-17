"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IconMenue, IconSchliessen, IconTelefon, IconWhatsapp } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { kontaktLinks, navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pfad = usePathname();
  const [gescrollt, setGescrollt] = useState(false);
  const [menueOffen, setMenueOffen] = useState(false);

  /* Der Header liegt zu Beginn transparent über dem Hero und bekommt beim
     Scrollen eine Fläche, damit die Navigation immer lesbar bleibt. */
  useEffect(() => {
    const beiScroll = () => setGescrollt(window.scrollY > 24);
    beiScroll();
    window.addEventListener("scroll", beiScroll, { passive: true });
    return () => window.removeEventListener("scroll", beiScroll);
  }, []);

  /* Hintergrund nicht scrollen lassen, solange das Menü offen ist */
  useEffect(() => {
    document.body.style.overflow = menueOffen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menueOffen]);

  useEffect(() => {
    if (!menueOffen) return;
    const beiEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenueOffen(false);
    };
    window.addEventListener("keydown", beiEscape);
    return () => window.removeEventListener("keydown", beiEscape);
  }, [menueOffen]);

  const istAktiv = (href: string) =>
    href === "/" ? pfad === "/" : pfad.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft",
        gescrollt || menueOffen
          ? "border-b border-ink-100/10 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-out-soft",
            gescrollt ? "h-18" : "h-22",
          )}
        >
          <Link
            href="/"
            aria-label={`${site.name} – zur Startseite`}
            className="shrink-0 rounded-xs"
          >
            <Logo />
          </Link>

          {/* Desktop-Navigation */}
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((eintrag) => (
                <li key={eintrag.href}>
                  <Link
                    href={eintrag.href}
                    aria-current={istAktiv(eintrag.href) ? "page" : undefined}
                    className={cn(
                      "relative block rounded-xs px-4 py-2 font-display text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-200",
                      istAktiv(eintrag.href)
                        ? "text-flare-400"
                        : "text-ink-300 hover:text-ink-50",
                    )}
                  >
                    {eintrag.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-flare-500 transition-transform duration-300 ease-out-expo",
                        istAktiv(eintrag.href) ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={kontaktLinks.telefon}
              className="hidden items-center gap-2 rounded-xs px-3 py-2 font-display text-[0.78rem] font-semibold tracking-[0.06em] text-ink-200 uppercase transition-colors hover:text-flare-400 xl:inline-flex"
            >
              <IconTelefon className="h-4 w-4" />
              {site.telefon.anzeige}
            </a>

            {/* Der Wrapper blendet aus, nicht der Button selbst: dessen Basis
                bringt `inline-flex` mit, das ein `hidden` an derselben
                Komponente in der Utility-Reihenfolge überstimmen würde. */}
            <span className="hidden sm:block">
              <ButtonLink href="/kontakt">Angebot anfragen</ButtonLink>
            </span>

            <button
              type="button"
              onClick={() => setMenueOffen((offen) => !offen)}
              aria-expanded={menueOffen}
              aria-controls="mobilmenue"
              aria-label={menueOffen ? "Menü schließen" : "Menü öffnen"}
              className="grid h-11 w-11 place-items-center rounded-xs border border-ink-100/15 text-ink-100 transition-colors hover:border-flare-500/60 hover:text-flare-400 lg:hidden"
            >
              {menueOffen ? (
                <IconSchliessen className="h-5 w-5" />
              ) : (
                <IconMenue className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobiles Menü */}
      {/* Füllt die Resthöhe unter der Kopfleiste, damit die Seite darunter nicht
          durchscheint – der Body ist währenddessen im Scrollen gesperrt. */}
      <div
        id="mobilmenue"
        hidden={!menueOffen}
        className="min-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-ink-100/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Hauptnavigation mobil" className="container-page py-6">
          <ul className="flex flex-col">
            {navigation.map((eintrag, i) => (
              <li key={eintrag.href} className="border-b border-ink-100/8 last:border-0">
                <Link
                  href={eintrag.href}
                  aria-current={istAktiv(eintrag.href) ? "page" : undefined}
                  /* Schließt beim Navigieren – zuverlässiger als ein Effect auf
                     den Pfad, der auch beim Klick auf die aktive Seite greifen muss. */
                  onClick={() => setMenueOffen(false)}
                  className={cn(
                    "flex items-baseline gap-4 py-4 font-display text-2xl font-bold tracking-[-0.02em]",
                    istAktiv(eintrag.href) ? "text-flare-400" : "text-ink-50",
                  )}
                >
                  <span className="font-sans text-[0.7rem] font-medium text-ink-500 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {eintrag.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink
              href="/kontakt"
              groesse="lg"
              className="w-full"
              onClick={() => setMenueOffen(false)}
            >
              Angebot anfragen
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={kontaktLinks.telefon}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xs border border-ink-100/20 font-display text-xs font-semibold tracking-[0.09em] text-ink-100 uppercase transition-colors hover:border-flare-500/60 hover:text-flare-400"
              >
                <IconTelefon className="h-4 w-4" />
                Anrufen
              </a>
              <a
                href={kontaktLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xs border border-ink-100/20 font-display text-xs font-semibold tracking-[0.09em] text-ink-100 uppercase transition-colors hover:border-flare-500/60 hover:text-flare-400"
              >
                <IconWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
