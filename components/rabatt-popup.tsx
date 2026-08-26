"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { IconSchliessen } from "@/components/icons";
import { Eckmarken } from "@/components/plan";
import { ButtonLink } from "@/components/ui/button";

/**
 * Neukunden-Rabatt-Popup, befristet bis Jahresende. Nach `GUELTIG_BIS`
 * rendert die Komponente nichts mehr – kein manuelles Deaktivieren nötig.
 * Einmal geschlossen, bleibt es für diesen Browser dauerhaft weg
 * (localStorage), damit es Besucher nicht bei jedem Seitenaufruf stört.
 */
const GUELTIG_BIS = new Date("2026-12-31T23:59:59+01:00");
const SPEICHERSCHLUESSEL = "rabatt-popup-geschlossen";
const VERZOEGERUNG_MS = 1200;

export function RabattPopup() {
  const [offen, setOffen] = useState(false);
  const schliessenRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (new Date() > GUELTIG_BIS) return;
    if (window.localStorage.getItem(SPEICHERSCHLUESSEL)) return;

    const timer = window.setTimeout(() => setOffen(true), VERZOEGERUNG_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const schliessen = useCallback(() => {
    window.localStorage.setItem(SPEICHERSCHLUESSEL, "1");
    setOffen(false);
  }, []);

  useEffect(() => {
    if (!offen) return;
    schliessenRef.current?.focus();

    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
    };
    window.addEventListener("keydown", beiTaste);
    return () => window.removeEventListener("keydown", beiTaste);
  }, [offen, schliessen]);

  if (!offen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rabatt-popup-titel"
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink-950/80 p-5 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) schliessen();
      }}
    >
      <div className="relative w-full max-w-md border border-ink-100/15 bg-ink-900 p-8 sm:p-10">
        <Eckmarken />

        <button
          ref={schliessenRef}
          type="button"
          onClick={schliessen}
          aria-label="Hinweis schließen"
          className="absolute top-4 right-4 text-ink-400 transition-colors hover:text-flare-400"
        >
          <IconSchliessen className="h-5 w-5" />
        </button>

        <p className="font-mono text-label text-flare-500 uppercase">Für Neukunden</p>
        <p id="rabatt-popup-titel" className="mt-4 font-display text-h3 text-white uppercase">
          15&nbsp;% Rabatt auf Ihre erste Veranstaltung
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-300">
          Fragen Sie bis zum 31.12.2026 ein Angebot an und sichern Sie sich 15&nbsp;% Nachlass auf
          Ihre erste gebuchte Veranstaltung mit uns.
        </p>

        <ButtonLink href="/kontakt" variante="primaer" groesse="lg" className="mt-7 w-full">
          Angebot anfragen
        </ButtonLink>
      </div>
    </div>
  );
}
