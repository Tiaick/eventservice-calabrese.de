import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  titel: string;
  lead?: string;
  /** Optionales Kopfbild – ohne Bild bleibt der Kopf ruhig und typografisch. */
  bild?: string;
  bildAlt?: string;
  /**
   * Inhalt für die rechte Spalte. Ohne Kopfbild trägt dieser Block die Fläche,
   * die sonst leer bliebe – etwa ein Kurzverzeichnis oder Kennzahlen.
   */
  beiwerk?: ReactNode;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  titel,
  lead,
  bild,
  bildAlt = "",
  beiwerk,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink-100/10">
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
            className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/92 via-ink-950/85 to-ink-950"
          />
        </>
      ) : (
        <div aria-hidden="true" className="spotlight absolute inset-0 -z-10" />
      )}

      <div
        className={cn(
          "container-page",
          /* Oberer Abstand gleicht den fixierten Header aus */
          bild ? "pt-38 pb-20 lg:pt-46 lg:pb-24" : "pt-34 pb-16 lg:pt-42 lg:pb-20",
        )}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={cn(beiwerk ? "lg:col-span-7" : "max-w-3xl lg:col-span-8")}>
            <p className="flex items-center gap-3 font-display text-eyebrow text-flare-400 uppercase">
              <span aria-hidden="true" className="h-px w-7 bg-flare-500" />
              {eyebrow}
            </p>

            <h1 className="mt-6 text-h1 text-balance text-white">{titel}</h1>

            {lead ? <p className="mt-6 text-lead text-ink-300">{lead}</p> : null}

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
