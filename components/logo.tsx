import Image from "next/image";

import logoMarke from "@/public/images/logo-kompakt.png";
import { cn } from "@/lib/utils";

/**
 * Echtes Markenlogo des Kunden: Icon + Wortmarke, freigestellt aus
 * public/images/Logo.png (Original bleibt zur Referenz erhalten). Die
 * Leistungs-Zeile aus der Originaldatei ("Bühnenbau | Veranstaltung | …")
 * ist bewusst weggeschnitten – bei Header- oder Footer-Höhe wäre sie nicht
 * mehr lesbar, und dieselben Leistungen stehen im Footer bereits als Text.
 *
 * Für dunklen Grund gestaltet (weiße Schrift), passend zum ausschließlich
 * dunklen Farbschema der Seite.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logoMarke}
      alt=""
      priority
      className={cn("h-9 w-auto sm:h-10", className)}
    />
  );
}
