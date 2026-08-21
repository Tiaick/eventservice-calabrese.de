import { preispakete } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Strukturierte Daten für die lokale Suche. Als LocalBusiness ausgezeichnet,
 * mit Leistungskatalog und Einzugsgebiet.
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organisation`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: `+${site.whatsapp.nummer}`,
    email: site.email,
    image: `${site.url}/images/platzhalter-hero-buehne-open-air.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.adresse.strasse,
      postalCode: site.adresse.plz,
      addressLocality: site.adresse.ort,
      addressRegion: site.adresse.region,
      addressCountry: site.adresse.landCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.adresse.lat,
      longitude: site.adresse.lng,
    },
    areaServed: [
      { "@type": "State", name: "Schleswig-Holstein" },
      { "@type": "State", name: "Hamburg" },
      { "@type": "State", name: "Niedersachsen" },
      { "@type": "State", name: "Mecklenburg-Vorpommern" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Veranstaltungstechnik",
      /* Positionen ohne bezifferten Preis ("auf Anfrage") werden ohne
         Preisangabe ausgezeichnet – ein leeres price-Feld wäre ungültig. */
      itemListElement: preispakete.map((paket) => {
        const ziffern = paket.preis.replace(/[^\d]/g, "");

        return {
          "@type": "Offer",
          name: paket.titel,
          description: paket.beschreibung,
          ...(ziffern
            ? {
                priceCurrency: "EUR",
                price: ziffern,
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "EUR",
                  minPrice: ziffern,
                  valueAddedTaxIncluded: false,
                },
              }
            : { availability: "https://schema.org/InStock" }),
        };
      }),
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD wird als Text eingebettet; der Inhalt stammt vollständig aus
      // unseren eigenen Konstanten.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
