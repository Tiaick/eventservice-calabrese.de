"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconPfeil, IconSchliessen } from "@/components/icons";
import { galerie, galerieKategorien, type GalerieKategorie } from "@/lib/content";
import { cn } from "@/lib/utils";

type Filter = GalerieKategorie | "alle";

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("alle");
  const [offenerIndex, setOffenerIndex] = useState<number | null>(null);

  /* Der zuletzt fokussierte Auslöser, damit der Fokus nach dem Schließen
     der Lightbox wieder dort landet, wo er hergekommen ist. */
  const ausloeser = useRef<HTMLButtonElement | null>(null);
  const schliessenRef = useRef<HTMLButtonElement>(null);

  const bilder = galerie.filter(
    (bild) => filter === "alle" || bild.kategorie === filter,
  );

  const schliessen = useCallback(() => {
    setOffenerIndex(null);
    ausloeser.current?.focus();
  }, []);

  const blaettern = useCallback(
    (richtung: 1 | -1) => {
      setOffenerIndex((aktuell) => {
        if (aktuell === null) return aktuell;
        return (aktuell + richtung + bilder.length) % bilder.length;
      });
    },
    [bilder.length],
  );

  /* Tastatursteuerung der Lightbox */
  useEffect(() => {
    if (offenerIndex === null) return;

    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
      if (e.key === "ArrowRight") blaettern(1);
      if (e.key === "ArrowLeft") blaettern(-1);
    };

    document.addEventListener("keydown", beiTaste);
    document.body.style.overflow = "hidden";
    schliessenRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", beiTaste);
      document.body.style.overflow = "";
    };
  }, [offenerIndex, schliessen, blaettern]);

  const aktuellesBild = offenerIndex === null ? null : bilder[offenerIndex];

  return (
    <>
      {/* --- Filter ------------------------------------------------------- */}
      <div
        role="group"
        aria-label="Galerie nach Kategorie filtern"
        className="flex flex-wrap gap-2"
      >
        {galerieKategorien.map((kategorie) => {
          const aktiv = filter === kategorie.id;
          const anzahl =
            kategorie.id === "alle"
              ? galerie.length
              : galerie.filter((b) => b.kategorie === kategorie.id).length;

          return (
            <button
              key={kategorie.id}
              type="button"
              onClick={() => {
                setFilter(kategorie.id);
                setOffenerIndex(null);
              }}
              aria-pressed={aktiv}
              className={cn(
                "inline-flex items-center gap-2.5 border px-5 py-2.5 font-mono text-[0.7rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200",
                aktiv
                  ? "border-flare-500 bg-flare-500 text-ink-950"
                  : "border-ink-100/15 text-ink-300 hover:border-flare-500 hover:text-flare-400",
              )}
            >
              {kategorie.label}
              <span
                className={cn(
                  "text-[0.7rem] tabular-nums",
                  aktiv ? "text-ink-950/60" : "text-ink-500",
                )}
              >
                {anzahl}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- Raster ------------------------------------------------------- */}
      <div className="mt-10 gap-5 sm:columns-2 lg:columns-3">
        {bilder.map((bild, i) => (
          <button
            key={bild.src}
            type="button"
            onClick={(e) => {
              ausloeser.current = e.currentTarget;
              setOffenerIndex(i);
            }}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden border border-ink-100/12 transition-colors duration-300 hover:border-flare-500/50"
          >
            {/* PLATZHALTER-Bild – siehe public/images/PLATZHALTER-BILDER.md */}
            <Image
              src={bild.src}
              alt={bild.alt}
              width={bild.breite}
              height={bild.hoehe}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.05]"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
            />

            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left">
              <span>
                <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-flare-400 uppercase">
                  {galerieKategorien.find((k) => k.id === bild.kategorie)?.label}
                </span>
                <span className="mt-1.5 block font-display text-lg font-semibold uppercase text-white">
                  {bild.titel}
                </span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-ink-100/25 bg-ink-950/60 text-ink-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <IconPfeil className="h-4 w-4 -rotate-45" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {bilder.length === 0 ? (
        <p className="py-16 text-center text-ink-400">
          Für diese Kategorie sind noch keine Bilder hinterlegt.
        </p>
      ) : null}

      {/* --- Lightbox ----------------------------------------------------- */}
      {aktuellesBild ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${aktuellesBild.titel} – Bild ${(offenerIndex ?? 0) + 1} von ${bilder.length}`}
          className="fixed inset-0 z-100 flex flex-col bg-ink-950/97 backdrop-blur-md"
        >
          {/* Klickfläche zum Schließen hinter dem Bild */}
          <button
            type="button"
            aria-label="Lightbox schließen"
            tabIndex={-1}
            onClick={schliessen}
            className="absolute inset-0 cursor-zoom-out"
          />

          <div className="relative flex items-center justify-between gap-4 border-b border-ink-100/10 px-5 py-4 sm:px-8">
            <p className="min-w-0">
              <span className="block font-mono text-[0.6rem] tracking-[0.16em] text-flare-400 uppercase">
                {galerieKategorien.find((k) => k.id === aktuellesBild.kategorie)?.label}
              </span>
              <span className="mt-1 block truncate font-mono text-sm text-white">
                {aktuellesBild.titel}
              </span>
            </p>

            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-ink-400 tabular-nums">
                {(offenerIndex ?? 0) + 1} / {bilder.length}
              </p>
              <button
                ref={schliessenRef}
                type="button"
                onClick={schliessen}
                aria-label="Lightbox schließen"
                className="grid h-10 w-10 place-items-center border border-ink-100/15 text-ink-100 transition-colors hover:border-flare-500/60 hover:text-flare-400"
              >
                <IconSchliessen className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-4 sm:p-8">
            <Image
              src={aktuellesBild.src}
              alt={aktuellesBild.alt}
              width={aktuellesBild.breite}
              height={aktuellesBild.hoehe}
              sizes="90vw"
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>

          <div className="relative flex items-center justify-center gap-3 pb-8">
            <button
              type="button"
              onClick={() => blaettern(-1)}
              aria-label="Vorheriges Bild"
              className="grid h-12 w-12 place-items-center border border-ink-100/15 text-ink-100 transition-colors hover:border-flare-500/60 hover:text-flare-400"
            >
              <IconPfeil className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => blaettern(1)}
              aria-label="Nächstes Bild"
              className="grid h-12 w-12 place-items-center border border-ink-100/15 text-ink-100 transition-colors hover:border-flare-500/60 hover:text-flare-400"
            >
              <IconPfeil className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
