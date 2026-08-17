import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();

  const seiten: { pfad: string; prioritaet: number; frequenz: "monthly" | "yearly" }[] = [
    { pfad: "", prioritaet: 1, frequenz: "monthly" },
    { pfad: "/leistungen", prioritaet: 0.9, frequenz: "monthly" },
    { pfad: "/preise", prioritaet: 0.9, frequenz: "monthly" },
    { pfad: "/referenzen", prioritaet: 0.7, frequenz: "monthly" },
    { pfad: "/ueber-uns", prioritaet: 0.6, frequenz: "yearly" },
    { pfad: "/kontakt", prioritaet: 0.8, frequenz: "yearly" },
    { pfad: "/impressum", prioritaet: 0.2, frequenz: "yearly" },
    { pfad: "/datenschutz", prioritaet: 0.2, frequenz: "yearly" },
  ];

  return seiten.map((seite) => ({
    url: `${site.url}${seite.pfad}`,
    lastModified: stand,
    changeFrequency: seite.frequenz,
    priority: seite.prioritaet,
  }));
}
