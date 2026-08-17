/**
 * Stammdaten des Betriebs – eine Quelle für Header, Footer, Kontaktseite,
 * strukturierte Daten und Metadaten.
 *
 * PLATZHALTER: Telefonnummer und WhatsApp-Nummer sind noch nicht die echten
 * Anschlussnummern. Vor dem Livegang hier zentral ersetzen, dann ziehen alle
 * tel:- und wa.me-Links automatisch nach.
 */

export const site = {
  name: "Eventservice Calabrese",
  legalName: "Eventservice Calabrese",
  tagline: "Veranstaltungstechnik aus Norddeutschland",
  description:
    "Bühnen, Ton, Licht, Special Effects und Lasershows aus Bad Bramstedt. " +
    "Seit über 15 Jahren der verlässliche Partner für Stadtfeste, Firmenevents und Open Airs in Norddeutschland.",
  url: "https://eventservice-calabrese.de",

  adresse: {
    strasse: "Hamburger Str. 54",
    plz: "24576",
    ort: "Bad Bramstedt",
    land: "Deutschland",
    landCode: "DE",
    region: "Schleswig-Holstein",
    /* Koordinaten von Bad Bramstedt – für strukturierte Daten und Kartenlink */
    lat: 53.9214,
    lng: 9.8877,
  },

  /* PLATZHALTER – echte Rufnummer eintragen */
  telefon: {
    anzeige: "04192 000000",
    link: "+494192000000",
  },
  whatsapp: {
    anzeige: "WhatsApp",
    /* wa.me erwartet die Nummer international, ohne + und ohne Leerzeichen */
    nummer: "494192000000",
  },
  email: "info@eventservice-calabrese.de",

  oeffnungszeiten: [
    { tage: "Montag – Freitag", zeit: "09:00 – 18:00 Uhr" },
    { tage: "Samstag", zeit: "nach Absprache" },
    { tage: "Sonntag", zeit: "Eventbetreuung" },
  ],

  /* PLATZHALTER – echte Profil-URLs eintragen oder Eintrag entfernen */
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
} as const;

export const navigation = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const rechtlicheNavigation = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;

/** Fertige Link-Ziele für Direktkontakt – überall identisch verwendbar. */
export const kontaktLinks = {
  telefon: `tel:${site.telefon.link}`,
  email: `mailto:${site.email}`,
  whatsapp: `https://wa.me/${site.whatsapp.nummer}?text=${encodeURIComponent(
    "Hallo Eventservice Calabrese, ich interessiere mich für ein Angebot.",
  )}`,
  route: `https://www.openstreetmap.org/?mlat=${site.adresse.lat}&mlon=${site.adresse.lng}#map=16/${site.adresse.lat}/${site.adresse.lng}`,
} as const;
