import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variante = "primaer" | "sekundaer" | "geist";
type Groesse = "md" | "lg";

/* Schaltflächen tragen Monospace wie eine Beschriftung am Gerät, keine Rundung
   und eine kurze, harte Zustandsänderung statt eines weichen Schwebens. */
const basis =
  "group/btn relative inline-flex items-center justify-center gap-2.5 font-mono font-medium " +
  "tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-200 " +
  "disabled:pointer-events-none disabled:opacity-50";

const varianten: Record<Variante, string> = {
  primaer: "bg-flare-500 text-ink-950 hover:bg-flare-400",
  /* Haarlinie statt Fläche – der Rahmen wird beim Zeigen zur Akzentlinie. */
  sekundaer:
    "border border-ink-100/20 text-ink-100 hover:border-flare-500 hover:text-flare-400",
  geist: "text-ink-400 hover:text-flare-400",
};

const groessen: Record<Groesse, string> = {
  md: "h-11 px-5 text-[0.7rem]",
  lg: "h-13 px-7 text-[0.75rem]",
};

type GemeinsameProps = {
  variante?: Variante;
  groesse?: Groesse;
  children: ReactNode;
  className?: string;
};

export function Button({
  variante = "primaer",
  groesse = "md",
  className,
  children,
  ...props
}: GemeinsameProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(basis, varianten[variante], groessen[groesse], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variante = "primaer",
  groesse = "md",
  className,
  children,
  href,
  ...props
}: GemeinsameProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(basis, varianten[variante], groessen[groesse], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
