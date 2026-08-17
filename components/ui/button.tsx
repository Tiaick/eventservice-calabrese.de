import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variante = "primaer" | "sekundaer" | "geist";
type Groesse = "md" | "lg";

const basis =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-xs font-display font-semibold " +
  "uppercase tracking-[0.09em] whitespace-nowrap transition-all duration-300 ease-out-soft " +
  "disabled:pointer-events-none disabled:opacity-50";

const varianten: Record<Variante, string> = {
  /* Bühnenlicht-Akzent: der eine Button, der auf jeder Seite führt. */
  primaer:
    "bg-flare-500 text-ink-950 shadow-[0_10px_30px_-14px_var(--color-flare-600)] " +
    "hover:bg-flare-400 hover:shadow-[0_16px_44px_-16px_var(--color-flare-500)] hover:-translate-y-0.5 " +
    "active:translate-y-0",
  /* Zurückhaltend, aber nicht schwach – feine Linie auf Dunkel. */
  sekundaer:
    "border border-ink-100/20 bg-ink-100/[0.03] text-ink-100 backdrop-blur-sm " +
    "hover:border-flare-500/60 hover:bg-flare-500/10 hover:text-white hover:-translate-y-0.5 " +
    "active:translate-y-0",
  geist:
    "text-ink-300 hover:text-flare-400",
};

const groessen: Record<Groesse, string> = {
  md: "h-11 px-5 text-[0.7rem]",
  lg: "h-13 px-7 text-xs",
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
