/**
 * Redaktionelle Inhalte der Website – Leistungen, Preise, Galerie, Kennzahlen.
 * Bewusst getrennt von den Komponenten, damit Texte und Preise gepflegt werden
 * können, ohne Layout anzufassen.
 *
 * Alle Preise sind Nettopreise und Ab-Preise (Beispielangebote).
 */

export type Leistung = {
  /** Ankername auf /leistungen, z. B. /leistungen#buehnen */
  id: string;
  /** Kurzlabel für Navigation und Karten auf der Startseite */
  label: string;
  eyebrow: string;
  titel: string;
  lead: string;
  /** Fließtext, ein Absatz je Eintrag */
  text: string[];
  /** Stichpunkte – tragen die konkreten technischen Fakten */
  details: { titel: string; wert: string }[];
  abPreis?: string;
  bild: string;
  bildAlt: string;
};

export const leistungen: Leistung[] = [
  {
    id: "buehnen",
    label: "Bühnen",
    eyebrow: "Bühnenbau",
    titel: "Bühnen, die tragen",
    lead: "Vom Dorffest bis zum Open Air mit mehreren tausend Besuchern – wir bauen die Bühne, die zu Ihrer Veranstaltung passt, und bringen sie sicher über die Bühne.",
    text: [
      "Unser Arbeitspferd ist die Pultus 48: 6 × 8 Meter, 48 Quadratmeter bespielbare Fläche, komplett mit Treppe, Geländer und Gaze. Sie ist in wenigen Stunden aufgebaut, wetterfest und für die allermeisten Stadtfeste, Vereinsjubiläen und Firmenfeiern genau die richtige Größe.",
      "Reicht das nicht, geht mehr: Für kleinere Bühnenprogramme haben wir eine kompakte Variante um 30 Quadratmeter, für große Produktionen bauen wir Bühnen jenseits von 60 Quadratmetern inklusive Dach und Traversenkonstruktion. Statik, Ballastierung und Aufbaupläne kommen von uns – Sie bekommen eine Bühne, die abgenommen werden kann.",
    ],
    details: [
      { titel: "Pultus 48", wert: "6 × 8 m, 48 m² – inkl. Treppe, Geländer, Gaze" },
      { titel: "Kompaktbühne", wert: "rund 30 m² für kleinere Programme" },
      { titel: "Bühne XXL", wert: "über 60 m² mit Dach und Traversenkonstruktion" },
      { titel: "Aufbau", wert: "durch eigenes, eingespieltes Team" },
    ],
    abPreis: "ab 400 €",
    bild: "/images/platzhalter-buehnen.jpg",
    bildAlt:
      "Bühne bei Nacht, von warmem Gegenlicht ausgeleuchtet, davor Publikum in Silhouette",
  },
  {
    id: "tontechnik",
    label: "Tontechnik",
    eyebrow: "Beschallung",
    titel: "Ton, der bis nach hinten trägt",
    lead: "Line-Array-Systeme von RCF und L-Acoustics für Flächen, auf denen es auch in der letzten Reihe noch gut klingen soll.",
    text: [
      "Beschallung ist kein Zufall, sondern Planung. Wir rechnen die Fläche durch, hängen das passende System und richten es so ein, dass der Pegel vorn nicht wehtut und hinten trotzdem ankommt. Für große Open Airs setzen wir Line Arrays ein, die bis zu 5.000 Personen sauber versorgen.",
      "Für kleinere Veranstaltungen tut es oft ein konventionelles System – auch das haben wir im Lager, inklusive Monitoring, Funkstrecken und Mischpult. Auf Wunsch übernimmt einer unserer Techniker den ganzen Abend am FOH-Platz, damit sich niemand aus Ihrem Team um den Sound kümmern muss.",
    ],
    details: [
      { titel: "Line Arrays", wert: "RCF und L-Acoustics, bis 5.000 Personen Open Air" },
      { titel: "Konventionelle Systeme", wert: "für Säle, Zelte und kleinere Flächen" },
      { titel: "Zubehör", wert: "Monitoring, Funkstrecken, Mischpult, FOH-Platz" },
      { titel: "Personal", wert: "Tontechniker auf Wunsch für die ganze Veranstaltung" },
    ],
    abPreis: "ab 900 €",
    bild: "/images/platzhalter-tontechnik.jpg",
    bildAlt:
      "Konzertbühne in blau-violettem Licht, Musiker am Pult, Publikum mit erhobenen Händen",
  },
  {
    id: "lichttechnik",
    label: "Lichttechnik",
    eyebrow: "Licht",
    titel: "Licht macht aus einer Bühne eine Show",
    lead: "Movingheads, Beams, Washes, Blinder und Hazer – abgestimmt programmiert statt wahllos blinkend.",
    text: [
      "Unser Lichtpaket XL bringt alles mit, was eine Bühne zum Leuchten braucht: Movingheads für bewegte Gobos, Beams für scharfe Lichtkegel, Washes für die Flächen, Blinder für die Momente, in denen es knallen soll, und einen Hazer, damit man die Lichtstrahlen überhaupt sieht.",
      "Wichtiger als die Geräteliste ist, was daraus wird. Wir programmieren das Licht auf Ihr Programm – ruhig und warm für die Ansprache, druckvoll für die Band, farbig für die Party danach. Auf Wunsch fährt ein Lichttechniker die Show live mit.",
    ],
    details: [
      { titel: "Lichtpaket XL", wert: "Movingheads, Beams, Washes, Blinder, Hazer" },
      { titel: "Programmierung", wert: "auf Ablauf und Programm abgestimmt" },
      { titel: "Traversen", wert: "Ground Support und Bühnendach-Rigging" },
      { titel: "Personal", wert: "Lichttechniker fährt die Show auf Wunsch live" },
    ],
    abPreis: "ab 700 €",
    bild: "/images/platzhalter-lichttechnik.jpg",
    bildAlt:
      "Traversenkonstruktion mit goldgelben Scheinwerfern über einer Konzertbühne",
  },
  {
    id: "special-effects",
    label: "Special Effects",
    eyebrow: "Effekte",
    titel: "Der Moment, über den danach geredet wird",
    lead: "Feuerbälle bis 20 Meter, CO₂-Jets, Streamerkanonen und Konfetti – auf die Sekunde getimt.",
    text: [
      "Unsere Explo-Flamer schicken Feuerbälle zwischen sechs und zwanzig Metern in den Himmel. Dazu kommen CO₂-Jets für den kalten Nebelstoß, Streamerkanonen und Konfetti für den Schlussakkord. Effekte sind bei uns keine Deko, sondern werden auf den Ablauf getaktet – der Refrain, der Anstoß, der Countdown.",
      "Alles läuft nach Sicherheitskonzept: Abstände, Windgrenzen, Brandwache und Abstimmung mit Ordnungsamt und Feuerwehr klären wir vorab mit Ihnen. Wer Feuer einsetzt, muss wissen, was er tut – wir tun das seit über 15 Jahren.",
    ],
    details: [
      { titel: "Explo-Flamer", wert: "Feuerbälle von 6 bis 20 Metern Höhe" },
      { titel: "CO₂-Jets", wert: "kalter Nebelstoß für Bühne und Tanzfläche" },
      { titel: "Streamer & Konfetti", wert: "Kanonen für den großen Schlussmoment" },
      { titel: "Sicherheit", wert: "Sicherheitskonzept, Abstände, Abstimmung mit Behörden" },
    ],
    abPreis: "ab 150 €",
    bild: "/images/platzhalter-special-effects.jpg",
    bildAlt: "Konfettiregen über einer Menschenmenge vor blau beleuchteter Bühne",
  },
  {
    id: "lasershow",
    label: "Lasershow",
    eyebrow: "Laser",
    titel: "Lasershow – zertifiziert und sicher",
    lead: "Weite Laserfächer über dem Publikum, gefahren von geschultem Personal nach geltenden Sicherheitsvorgaben.",
    text: [
      "Eine Lasershow ist der Effekt mit der größten Fernwirkung – und derjenige mit den strengsten Auflagen. Unsere Anlagen sind zertifiziert, unser Personal ist als Laserschutzbeauftragte geschult, und jede Show wird vor Ort eingemessen, bevor der erste Strahl über die Köpfe geht.",
      "Wir fahren die Show passend zur Musik, kombiniert mit Haze und Licht, damit die Strahlen im Raum stehen. Ob als eigener Programmpunkt oder als Finale über der Bühne – wir stimmen das mit Ihnen und dem Veranstaltungsablauf ab.",
    ],
    details: [
      { titel: "Zertifiziert", wert: "geprüfte Anlagen nach geltenden Sicherheitsvorgaben" },
      { titel: "Laserschutz", wert: "geschulte Laserschutzbeauftragte vor Ort" },
      { titel: "Einmessung", wert: "Justage und Publikumsabstand vor jeder Show" },
      { titel: "Umsetzung", wert: "musiksynchron, kombiniert mit Haze und Licht" },
    ],
    bild: "/images/platzhalter-lasershow.jpg",
    bildAlt: "Weiße Lichtfächer strahlen über eine dunkle Halle voller Menschen",
  },
  {
    id: "gastro-kooperation",
    label: "Gastro-Kooperation",
    eyebrow: "Kooperation",
    titel: "Bühne und Technik ohne Rechnung",
    lead: "Unser Modell für Vereine und Veranstalter: Sie bekommen Bühne und Technik kostenlos, wir übernehmen den Getränkeausschank.",
    text: [
      "Viele Feste scheitern nicht an der Idee, sondern am Budget. Deshalb bieten wir ein Modell an, das ohne Technikrechnung auskommt: Wir stellen Bühne, Ton und Licht kostenlos, und im Gegenzug übernehmen wir den Getränkeverkauf auf Ihrer Veranstaltung.",
      "Dafür bringen wir bis zu 15 Schankwagen mit, dazu Personal, Kühlung und Abrechnung. Für Sie bleibt der Aufwand klein und das Risiko überschaubar – Sie kümmern sich um Programm und Gäste, wir um Technik und Theke. Ob das Modell für Ihre Veranstaltung aufgeht, rechnen wir vorher gemeinsam durch.",
    ],
    details: [
      { titel: "Das Modell", wert: "Bühne und Technik kostenlos gegen Getränkeausschank" },
      { titel: "Schankwagen", wert: "bis zu 15 Wagen, je nach Größe der Veranstaltung" },
      { titel: "Inklusive", wert: "Ausschankpersonal, Kühlung, Abrechnung" },
      { titel: "Vorab", wert: "gemeinsame Kalkulation, ob das Modell für Sie trägt" },
    ],
    bild: "/images/platzhalter-gastro-kooperation.jpg",
    bildAlt: "Gäste stoßen bei einer Abendveranstaltung mit Weingläsern an",
  },
];

/** Kennzahlen für die Stat-Bar. */
export const kennzahlen = [
  { wert: "15+", einheit: "Jahre", label: "Erfahrung in der Veranstaltungstechnik" },
  { wert: "300+", einheit: "Events", label: "von der Dorfbühne bis zum Open Air" },
  { wert: "98", einheit: "%", label: "zufriedene Kundinnen und Kunden" },
  { wert: "5.000", einheit: "Gäste", label: "maximale Beschallung im Open Air" },
];

export type Preispaket = {
  id: string;
  kategorie: "Bühne" | "Technik" | "Komplett";
  titel: string;
  preis: string;
  preisZusatz: string;
  beschreibung: string;
  leistungen: string[];
  /** Hebt eine Karte visuell hervor – genau eine pro Grid. */
  hervorgehoben?: boolean;
  badge?: string;
  /** Verweist auf den passenden Abschnitt unter /leistungen */
  anker: string;
};

export const preispakete: Preispaket[] = [
  {
    id: "buehne-klein",
    kategorie: "Bühne",
    titel: "Bühne kompakt",
    preis: "400 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Rund 30 m² Bühnenfläche für Vereinsfeste, Ansprachen und kleinere Programme.",
    leistungen: [
      "ca. 30 m² Bühnenfläche",
      "Treppe und Geländer",
      "Aufbau und Abbau durch unser Team",
      "Höhe nach Bedarf abgestuft",
    ],
    anker: "/leistungen#buehnen",
  },
  {
    id: "pultus-48",
    kategorie: "Bühne",
    titel: "Pultus 48",
    preis: "790 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Unsere meistgebuchte Bühne: 6 × 8 Meter, komplett ausgestattet und in wenigen Stunden bespielbar.",
    leistungen: [
      "6 × 8 m – 48 m² Bühnenfläche",
      "Treppe, Geländer und Gaze inklusive",
      "wetterfeste Ausführung",
      "Aufbau und Abbau durch unser Team",
    ],
    badge: "Meistgebucht",
    anker: "/leistungen#buehnen",
  },
  {
    id: "buehne-xxl",
    kategorie: "Bühne",
    titel: "Bühne XXL",
    preis: "1.200 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Über 60 m² für große Produktionen – mit Dach, Traversen und geprüfter Statik.",
    leistungen: [
      "über 60 m² Bühnenfläche",
      "Bühnendach und Traversenkonstruktion",
      "Statik- und Ballastierungsplan",
      "Rigging für Licht und Ton",
    ],
    anker: "/leistungen#buehnen",
  },
  {
    id: "lichtpaket-xl",
    kategorie: "Technik",
    titel: "Lichtpaket XL",
    preis: "700 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Das komplette Lichtset für eine Bühne, programmiert auf Ihren Programmablauf.",
    leistungen: [
      "Movingheads, Beams und Washes",
      "Blinder und Hazer",
      "Traversen und Stative",
      "Programmierung auf den Ablauf",
    ],
    anker: "/leistungen#lichttechnik",
  },
  {
    id: "pa-xxl",
    kategorie: "Technik",
    titel: "PA-Beschallung XXL",
    preis: "900 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Line-Array-System für große Flächen – bis zu 5.000 Personen im Open Air.",
    leistungen: [
      "Line Arrays von RCF oder L-Acoustics",
      "Subwoofer und Monitoring",
      "Mischpult und Funkstrecken",
      "Einmessung der Fläche vor Ort",
    ],
    anker: "/leistungen#tontechnik",
  },
  {
    id: "special-effects",
    kategorie: "Technik",
    titel: "Special Effects",
    preis: "150 €",
    preisZusatz: "ab, netto pro Einsatz",
    beschreibung:
      "Feuer, CO₂ und Konfetti – einzeln buchbar oder als abgestimmte Effektstrecke.",
    leistungen: [
      "Explo-Flamer, Feuerbälle 6 – 20 m",
      "CO₂-Jets",
      "Streamerkanonen und Konfetti",
      "Sicherheitskonzept und Betreuung",
    ],
    anker: "/leistungen#special-effects",
  },
  {
    id: "komplettpaket-xxl",
    kategorie: "Komplett",
    titel: "Komplettpaket XXL",
    preis: "1.490 €",
    preisZusatz: "ab, netto pro Tag",
    beschreibung:
      "Bühne, Licht und PA aus einer Hand – ein Ansprechpartner, ein Aufbau, ein Angebot.",
    leistungen: [
      "Bühne inklusive Auf- und Abbau",
      "Lichtpaket XL",
      "PA-Beschallung",
      "jeder weitere Veranstaltungstag +50 %",
    ],
    hervorgehoben: true,
    badge: "Bestes Gesamtpaket",
    anker: "/leistungen#buehnen",
  },
];

export type GalerieKategorie = "buehne" | "licht" | "ton" | "effects" | "laser";

export const galerieKategorien: { id: GalerieKategorie | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "buehne", label: "Bühne" },
  { id: "licht", label: "Licht" },
  { id: "ton", label: "Ton" },
  { id: "effects", label: "Effects" },
  { id: "laser", label: "Lasershow" },
];

export type GalerieBild = {
  src: string;
  alt: string;
  kategorie: GalerieKategorie;
  titel: string;
  breite: number;
  hoehe: number;
};

/** PLATZHALTER – gegen echte Eventfotos tauschen, siehe public/images/PLATZHALTER-BILDER.md */
export const galerie: GalerieBild[] = [
  {
    src: "/images/referenz-buehne-01.jpg",
    alt: "Große Open-Air-Bühne mit Traversentürmen in violettem Licht, davor dichtes Publikum",
    kategorie: "buehne",
    titel: "Open Air, Hauptbühne",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-buehne-02.jpg",
    alt: "Bühne im warmen Gegenlicht, Lichtleiste über der Spielfläche",
    kategorie: "buehne",
    titel: "Stadtfest, Pultus 48",
    breite: 900,
    hoehe: 1200,
  },
  {
    src: "/images/referenz-buehne-03.jpg",
    alt: "Nächtliche Festivalbühne mit hellem Gegenlicht und Konfetti über dem Publikum",
    kategorie: "buehne",
    titel: "Sommerfest, Bühne XXL",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-licht-01.jpg",
    alt: "Goldgelb ausgeleuchtete Traversenkonstruktion über einer Konzertbühne",
    kategorie: "licht",
    titel: "Lichtpaket XL im Einsatz",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-licht-02.jpg",
    alt: "Movingheads werfen violette Lichtkegel über eine Menschenmenge",
    kategorie: "licht",
    titel: "Movingheads und Beams",
    breite: 900,
    hoehe: 1200,
  },
  {
    src: "/images/referenz-licht-03.jpg",
    alt: "Warm ausgeleuchtete Bühne, Publikum formt mit den Händen ein Herz",
    kategorie: "licht",
    titel: "Warmes Bühnenlicht",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-ton-01.jpg",
    alt: "Bühne in blau-violettem Licht mit Musikern am Mischpult",
    kategorie: "ton",
    titel: "Beschallung Clubformat",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-ton-02.jpg",
    alt: "Künstler mit erhobenen Händen im Bühnennebel",
    kategorie: "ton",
    titel: "Live-Set mit Line Array",
    breite: 900,
    hoehe: 1200,
  },
  {
    src: "/images/referenz-effects-01.jpg",
    alt: "Dichter Konfettiregen über dem Publikum vor blauer Bühnenbeleuchtung",
    kategorie: "effects",
    titel: "Konfettikanonen zum Finale",
    breite: 900,
    hoehe: 1200,
  },
  {
    src: "/images/referenz-effects-02.jpg",
    alt: "Funkensprühende Effekte vor abendlichem Himmel",
    kategorie: "effects",
    titel: "Effektstrecke am Abend",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-laser-01.jpg",
    alt: "Weiße Laserfächer strahlen über eine dunkle Halle voller Menschen",
    kategorie: "laser",
    titel: "Lasershow über dem Publikum",
    breite: 1200,
    hoehe: 800,
  },
  {
    src: "/images/referenz-laser-02.jpg",
    alt: "Erhobene Hände im Lichtstrahl eines Verfolgers",
    kategorie: "laser",
    titel: "Strahlen im Haze",
    breite: 900,
    hoehe: 1200,
  },
];

/** Technikmarken als Vertrauenssignal. */
export const marken = [
  { name: "RCF", beschreibung: "Line Arrays und Beschallung" },
  { name: "L-Acoustics", beschreibung: "Line Arrays für große Flächen" },
  { name: "Pultus", beschreibung: "Bühnensysteme" },
  { name: "Explo", beschreibung: "Flammeneffekte" },
];
