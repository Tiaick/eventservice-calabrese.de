"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type Ref,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Verzögerung in Millisekunden – staffelt Elemente einer Reihe. */
  verzoegerung?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Blendet Inhalte beim Hereinscrollen sanft ein.
 *
 * Die Klasse `reveal` steht immer im Markup; versteckt wird der Inhalt nur
 * innerhalb von `@media (scripting: enabled)` (siehe globals.css). Ohne
 * JavaScript – und in Browsern ohne dieses Media-Feature – bleibt der Inhalt
 * damit sichtbar, ohne dass beim Mounten ein Statuswechsel nötig wäre.
 */
export function Reveal({
  children,
  verzoegerung = 0,
  className,
  as: Element = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const knoten = ref.current;
    if (!knoten) return;

    /* Bereits sichtbare Elemente zeigt der Observer sofort an, statt auf ein
       Scroll-Ereignis zu warten. */
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) {
          setSichtbar(true);
          beobachter.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    beobachter.observe(knoten);
    return () => beobachter.disconnect();
  }, []);

  return (
    <Element
      ref={ref as Ref<never>}
      className={cn("reveal", className)}
      data-revealed={sichtbar ? "true" : undefined}
      style={
        verzoegerung
          ? ({ "--reveal-delay": `${verzoegerung}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Element>
  );
}
