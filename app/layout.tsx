import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LocalBusinessSchema } from "@/components/structured-data";
import { site } from "@/lib/site";

import "./globals.css";

/* Display-Schrift mit Bühnenpräsenz – trägt Headlines und Zahlen. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

/* Ruhige Fließtext-Schrift mit guter Lesbarkeit in langen Absätzen. */
const inter = Inter({
  variable: "--font-inter",
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
    "Veranstaltungstechnik",
    "Bühne mieten",
    "Tontechnik",
    "Lichttechnik",
    "Lasershow",
    "Special Effects",
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
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-xs focus:bg-flare-500 focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-ink-950"
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
