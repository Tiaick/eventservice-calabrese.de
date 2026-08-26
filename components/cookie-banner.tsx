"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  einwilligungSpeichern,
  gespeicherteEinwilligung,
  type Einwilligungsstatus,
} from "@/lib/consent";

/**
 * Cookie-Hinweis. Aktuell setzt diese Seite keine Analyse- oder
 * Werbe-Cookies – der Banner speichert nur die Entscheidung selbst lokal im
 * Browser (kein Cookie, kein Server-Request). Er ist Vorbereitung für
 * künftige Tools wie Google Analytics: Deren Skripte dürfen dann nur laden,
 * wenn `hatAnalyseEinwilligung()` (siehe lib/consent.ts) zustimmt.
 */
export function CookieBanner() {
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    /* localStorage existiert erst nach der Hydration im Browser – die
       Anfangsausgabe (unsichtbar) muss serverseitig und beim ersten
       Client-Render identisch bleiben, deshalb hier statt in useState. */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSichtbar(gespeicherteEinwilligung() === null);
  }, []);

  const entscheiden = (status: Einwilligungsstatus) => {
    einwilligungSpeichern(status);
    setSichtbar(false);
  };

  if (!sichtbar) return null;

  return (
    <div
      role="region"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-90 border-t border-ink-100/15 bg-ink-950/97 backdrop-blur-md"
    >
      <div className="container-page flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ink-300">
          Wir nutzen aktuell keine Analyse- oder Werbe-Cookies. Für künftige Auswertungswerkzeuge
          bitten wir Sie hier vorab um Ihre Einwilligung – mehr dazu in der{" "}
          <Link href="/datenschutz" className="underline underline-offset-4 hover:text-flare-400">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variante="sekundaer" groesse="md" onClick={() => entscheiden("abgelehnt")}>
            Ablehnen
          </Button>
          <Button variante="primaer" groesse="md" onClick={() => entscheiden("akzeptiert")}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
