import type { SVGProps } from "react";

/**
 * Eigener Icon-Satz statt Icon-Library: einheitlich 24er-Raster, 1.5 Strichstärke,
 * runde Enden. Die Leistungs-Icons sind bewusst auf unser Equipment gezeichnet
 * (Bühne, Line Array, Movinghead, Flamer, Laser, Schankwagen).
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Leistungen -------------------------------------------------------- */

/* Die Leistungs-Icons erscheinen bei 20 px Kantenlänge. Sie sind deshalb auf
   wenige, große Formen reduziert – Details verschlämmen in dieser Größe. */

/** Bühne: Podest mit Traverse darüber */
export function IconBuehne(props: IconProps) {
  return (
    <Icon {...props}>
      {/* Traverse */}
      <path d="M3 4.5h18" />
      <path d="M7 4.5v2.5M17 4.5v2.5" />
      {/* Podest mit Beinen */}
      <path d="M3 13.5h18v3.5H3z" />
      <path d="M6 17v3.5M18 17v3.5" />
    </Icon>
  );
}

/** Tontechnik: Lautsprecher mit abstrahlenden Wellen */
export function IconTon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 9.5h3.5L12 5v14l-5.5-4.5H3z" />
      <path d="M16.5 9a4.5 4.5 0 0 1 0 6" />
      <path d="M19.5 6.5a8.5 8.5 0 0 1 0 11" />
    </Icon>
  );
}

/** Lichttechnik: Scheinwerfer mit Lichtkegel */
export function IconLicht(props: IconProps) {
  return (
    <Icon {...props}>
      {/* Gehäuse */}
      <rect x="7.5" y="3" width="9" height="5.5" rx="1.2" />
      {/* Lichtkegel */}
      <path d="M6 21 8.5 8.5h7L18 21z" />
    </Icon>
  );
}

/** Special Effects: Flammeneffekt */
export function IconEffects(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2.5c2.5 3.4 4.2 5.8 4.2 8.2 0 1.6-.8 2.9-2 3.6.4-1.6.1-3.2-1.2-4.6-.3 2.4-1.6 3.2-2.8 4.4-1 1-1.7 2-1.7 3.3 0 .6.1 1.1.4 1.6-1.6-1-2.9-2.9-2.9-5.3 0-2.1 1-3.7 2.1-5.2.3 1 .9 1.7 1.7 2.1-.5-2.9.6-5.6 2.2-8.1Z" />
      <path d="M6 21h12" />
    </Icon>
  );
}

/** Lasershow: Quelle unten links mit auffächernden Strahlen */
export function IconLaser(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="4.5" cy="19.5" r="2" />
      <path d="M6 18 20 4" />
      <path d="M6.2 17 19 10.5" />
      <path d="M5.5 17.5 13 3.5" />
    </Icon>
  );
}

/** Gastro-Kooperation: Bierkrug */
export function IconGastro(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 7h11v13a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 20z" />
      <path d="M16 10h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H16" />
      <path d="M5 7a3 3 0 0 1 3-3 2.6 2.6 0 0 1 2.4-2 2.6 2.6 0 0 1 2.5 1.8A2.7 2.7 0 0 1 16 7" />
    </Icon>
  );
}

/* --- Kontakt und Navigation -------------------------------------------- */

export function IconTelefon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13.1 10.9 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1.2 1.2 0 0 0-1-1.2l-3-.6a1.2 1.2 0 0 0-1.2.5l-1 1.4a13.6 13.6 0 0 1-5.4-5.4l1.4-1a1.2 1.2 0 0 0 .5-1.2l-.6-3a1.2 1.2 0 0 0-1.2-1Z" />
    </Icon>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.36 5.1L2 22.2l5.4-1.5a9.8 9.8 0 0 0 4.64 1.18h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.96h-.01a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.07.85.82-3-.2-.3a8.1 8.1 0 0 1-1.24-4.34c0-4.5 3.66-8.16 8.15-8.16a8.1 8.1 0 0 1 5.76 2.39 8.1 8.1 0 0 1 2.38 5.77c0 4.5-3.66 8.11-8.15 8.11Zm4.47-6.07c-.24-.13-1.45-.72-1.67-.8-.23-.08-.39-.12-.55.12s-.63.8-.78.97c-.14.16-.28.18-.52.06a6.66 6.66 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
    </Icon>
  );
}

export function IconOrt(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function IconPfeil(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Icon>
  );
}

export function IconMenue(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </Icon>
  );
}

export function IconSchliessen(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
    </Icon>
  );
}

export function IconUhr(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </Icon>
  );
}

export function IconSchild(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2.8 4.5 6v6c0 4.6 3.2 8.2 7.5 9.3 4.3-1.1 7.5-4.7 7.5-9.3V6Z" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.6" />
    </Icon>
  );
}
