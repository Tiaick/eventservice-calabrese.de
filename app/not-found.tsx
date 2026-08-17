import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
import { kontaktLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NichtGefunden() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden">
      <div aria-hidden="true" className="spotlight absolute inset-0 -z-10" />

      <div className="container-page py-32 text-center">
        <p className="font-display text-eyebrow text-flare-400 uppercase">Fehler 404</p>

        <h1 className="mt-6 text-h1 text-white">Diese Seite steht nicht auf dem Plan</h1>

        <p className="mx-auto mt-6 max-w-xl text-lead text-ink-300">
          Die aufgerufene Adresse gibt es nicht – vielleicht wurde sie verschoben oder
          hat sich ein Tippfehler eingeschlichen. Über die Startseite finden Sie alles
          Weitere.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" groesse="lg">
            Zur Startseite
          </ButtonLink>
          <ButtonLink href="/leistungen" variante="sekundaer" groesse="lg">
            Zu den Leistungen
          </ButtonLink>
        </div>

        <p className="mt-10 text-sm text-ink-500">
          Sie suchen etwas Bestimmtes? Rufen Sie uns an:{" "}
          <a
            href={kontaktLinks.telefon}
            className="text-flare-400 underline underline-offset-4 hover:text-flare-300"
          >
            {site.telefon.anzeige}
          </a>
        </p>
      </div>
    </section>
  );
}
