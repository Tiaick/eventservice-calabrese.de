import Image from "next/image";
import type { ReactNode } from "react";

import { Sektionsmarke } from "@/components/plan";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  /** Blattnummer der Seite, wie auf einem Planblatt: "Blatt 02". */
  blatt: string;
  marke: string;
  titel: string;
  lead?: string;
  /** Optionales Kopfbild – ohne Bild bleibt der Kopf ruhig und typografisch. */
  bild?: string;
  bildAlt?: string;
  /** Rechte Randspalte: Kurzverzeichnis, Kennzahlen oder Eckdaten. */
  beiwerk?: ReactNode;
  children?: ReactNode;
};

/**
 * Seitenkopf der Unterseiten. Gleicht die Höhe des fixierten Headers aus und
 * hält Marke, Titel und Lead über alle Seiten auf derselben Position.
 */
export function PageHeader({
  blatt,
  marke,
  titel,
  lead,
  bild,
  bildAlt = "",
  beiwerk,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink-100/12">
      {bild ? (
        <>
          <Image
            src={bild}
            alt={bildAlt}
            fill
            sizes="100vw"
            priority
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/93 via-ink-950/86 to-ink-950"
          />
        </>
      ) : (
        <div aria-hidden="true" className="planraster absolute inset-0 -z-10" />
      )}

      <div
        className={cn(
          "container-page",
          /* Oberer Abstand gleicht den fixierten Header aus */
          bild ? "pt-38 pb-18 lg:pt-46 lg:pb-22" : "pt-34 pb-14 lg:pt-42 lg:pb-18",
        )}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className={cn(beiwerk ? "lg:col-span-7" : "max-w-4xl lg:col-span-9")}>
            <Sektionsmarke nummer={blatt}>{marke}</Sektionsmarke>

            <h1 className="mt-6 text-h1 text-balance uppercase text-white">{titel}</h1>

            {lead ? <p className="mt-6 max-w-2xl text-lead text-ink-300">{lead}</p> : null}

            {children}
          </div>

          {beiwerk ? (
            <div className="lg:col-span-5 lg:self-end lg:pb-1">{beiwerk}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
