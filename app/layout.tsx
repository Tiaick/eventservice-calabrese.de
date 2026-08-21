import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocalBusinessSchema } from "@/components/structured-data";
import { site } from "@/lib/site";

import "./globals.css";

/* Schlagzeilen: schmal laufend, mit Plakatwirkung im großen Grad. */
const plexCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

/* Fließtext: ruhig und gut lesbar über lange Absätze. */
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Daten, Labels und Maßangaben – trägt den technischen Charakter der Seite. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Veranstaltungspartner Städte Gemeinden",
    "Stadtfest organisieren",
    "Veranstaltungsorganisation Kommune",
    "Bühne mieten",
    "Veranstaltungstechnik",
    "Standmanagement",
    "Sponsoring Stadtfest",
    "Bad Bramstedt",
    "Schleswig-Holstein",
    "Norddeutschland",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/platzhalter-hero-buehne-open-air.jpg",
        width: 2400,
        height: 1350,
        alt: "Open-Air-Bühne bei Nacht mit warmem Bühnenlicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    images: ["/images/platzhalter-hero-buehne-open-air.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${plexCondensed.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-flare-500 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
