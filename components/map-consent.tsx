"use client";

import { useState } from "react";

import { IconOrt } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { kontaktLinks, site } from "@/lib/site";

/**
 * Karte nach Klick statt Autoload.
 *
 * Vor der Zustimmung wird kein einziger Request an einen Kartendienst gestellt –
 * damit ist kein Cookie-Banner für die Karte nötig. Erst der Klick lädt die
 * OpenStreetMap-Einbettung; darauf wird vorher ausdrücklich hingewiesen.
 */
export function MapConsent() {
  const [geladen, setGeladen] = useState(false);

  const { lat, lng } = site.adresse;
  const spanne = 0.012;
  const bbox = [lng - spanne, lat - spanne / 2, lng + spanne, lat + spanne / 2].join(",");
  const karteUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="relative aspect-4/3 overflow-hidden border border-ink-100/12 sm:aspect-video lg:aspect-4/3">
      {geladen ? (
        <iframe
          src={karteUrl}
          title={`Karte mit dem Standort ${site.adresse.strasse}, ${site.adresse.plz} ${site.adresse.ort}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="h-full w-full border-0"
        />
      ) : (
        <div className="planraster-fein flex h-full flex-col items-center justify-center gap-5 bg-ink-950 p-8 text-center">
          {/* Angedeutetes Kartenraster als ruhiger Hintergrund */}
          <IconOrt className="relative h-8 w-8 text-flare-500" />

          <div className="relative">
            <p className="font-mono text-base text-white">
              {site.adresse.strasse}, {site.adresse.plz} {site.adresse.ort}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-400">
              Die Karte wird erst auf Klick geladen. Dabei baut Ihr Browser eine
              Verbindung zu OpenStreetMap auf und übermittelt Ihre IP-Adresse.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-3">
            <Button type="button" onClick={() => setGeladen(true)}>
              Karte laden
            </Button>
            <a
              href={kontaktLinks.route}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center border border-ink-100/20 px-5 font-mono text-[0.7rem] font-medium tracking-[0.12em] text-ink-100 uppercase transition-colors hover:border-flare-500 hover:text-flare-400"
            >
              In neuem Tab öffnen
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
