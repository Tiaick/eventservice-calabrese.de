import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Echtes Markenlogo des Kunden: Icon + Wortmarke, freigestellt aus
 * public/images/Logo.png (Original bleibt zur Referenz erhalten). Die
 * Leistungs-Zeile aus der Originaldatei ("Bühnenbau | Veranstaltung | …")
 * ist bewusst weggeschnitten – bei Header- oder Footer-Höhe wäre sie nicht
 * mehr lesbar, und dieselben Leistungen stehen im Footer bereits als Text.
 *
 * Für dunklen Grund gestaltet (weiße Schrift), passend zum ausschließlich
 * dunklen Farbschema der Seite. Bildpfad als String statt Modul-Import,
 * konsistent zu jedem anderen next/image-Aufruf im Projekt.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-kompakt.png"
      alt=""
      width={1555}
      height={412}
      priority
      className={cn("h-9 w-auto sm:h-10", className)}
    />
  );
}
