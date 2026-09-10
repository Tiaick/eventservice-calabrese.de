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
  /**
   * Die eine Kennzahl, die unter dem Bild als Maßangabe steht – kurz genug,
   * um in eine Bemaßungslinie zu passen.
   */
  kenngroesse?: string;
  abPreis?: string;
  bild: string;
  bildAlt: string;
};

export const leistungen: Leistung[] = [
  {
    id: "konzeption",
    label: "Konzeption",
    eyebrow: "Konzeption",
    titel: "Vom ersten Gespräch zum tragfähigen Konzept",
    lead: "Wir entwickeln aus Anlass, Ort und Budget ein Veranstaltungskonzept, das sich genehmigen, finanzieren und umsetzen lässt.",
    text: [
      "Am Anfang steht selten eine fertige Vorstellung, sondern ein Termin, ein Platz und ein Budget. Wir sehen uns die Fläche an, klären, was dort tatsächlich möglich ist, und machen daraus einen Vorschlag: Wo steht die Bühne, wie laufen die Besucherströme, wo liegen Rettungswege, welche Gewerke werden gebraucht.",
      "Sie bekommen von uns einen Flächenplan, einen Ablauf und einen Budgetrahmen, mit dem Sie in die Gremien gehen können. Was nicht genehmigungsfähig oder nicht finanzierbar ist, sagen wir vorher – nicht, wenn der Termin schon feststeht.",
    ],
    details: [
      { titel: "Bestandsaufnahme", wert: "Ortsbegehung, Flächen, Zufahrten, Stromversorgung" },
      { titel: "Planung", wert: "Flächenplan, Bühnenstandort, Besucherführung" },
      { titel: "Budget", wert: "belastbarer Kostenrahmen für die Gremienvorlage" },
      { titel: "Genehmigung", wert: "Abstimmung auf die Auflagen von Ordnungsamt und Feuerwehr" },
    ],
    kenngroesse: "Konzept · Flächenplan · Budgetrahmen",
    bild: "/images/platzhalter-konzeption.jpg",
    bildAlt:
      "Vier Personen sitzen dicht an einem Tisch zusammen und sichten gemeinsam ausgedruckte Fotos und Unterlagen zur Planung",
  },
  {
    id: "veranstaltungsorganisation",
    label: "Veranstaltungsorganisation",
    eyebrow: "Organisation",
    titel: "Einer koordiniert – und ist am Veranstaltungstag vor Ort",
    lead: "Wir übernehmen die Ablaufplanung, die Abstimmung mit den Behörden und die Koordination aller Gewerke. Sie behalten die Entscheidungen, wir das Klein-Klein.",
    text: [
      "Eine Veranstaltung besteht aus vielen Beteiligten, die alle zur richtigen Zeit am richtigen Platz sein müssen: Technik, Gastronomie, Beschicker, Sicherheitsdienst, Sanitäter, Reinigung. Wir bauen daraus einen Zeit- und Aufbauplan, holen die nötigen Abstimmungen ein und sorgen dafür, dass niemand vor verschlossenem Tor steht.",
      "Am Veranstaltungstag ist eine feste Ansprechperson von uns durchgehend vor Ort – erreichbar für Sie, für die Behörden und für alle Gewerke. Wenn etwas nicht nach Plan läuft, wird es dort entschieden und nicht erst am Montag besprochen.",
    ],
    details: [
      { titel: "Ablaufplanung", wert: "Zeit- und Aufbauplan über alle Gewerke" },
      { titel: "Behörden", wert: "Abstimmung mit Ordnungsamt, Feuerwehr und Polizei" },
      { titel: "Sicherheit", wert: "Sicherheitskonzept, Rettungswege, Verkehrsführung" },
      { titel: "Vor Ort", wert: "feste Ansprechperson während der gesamten Veranstaltung" },
    ],
    kenngroesse: "eine Ansprechperson · alle Gewerke",
    bild: "/images/platzhalter-organisation.jpg",
    bildAlt:
      "Veranstaltung in einem großen Saal mit Traversenkonstruktion, Leinwand und zahlreichen Gästen",
  },
  {
    id: "buehnen",
    label: "Bühne",
    eyebrow: "Bühnenbau",
    titel: "Bühnen, die tragen",
    lead: "Vom Dorffest bis zum Stadtfest mit mehreren tausend Besuchern – wir bauen die Bühne, die zu Ihrer Veranstaltung passt, und liefern die Statik gleich mit.",
    text: [
      "Unser Arbeitspferd ist die Pultus 48: 6 × 8 Meter, 48 Quadratmeter bespielbare Fläche, komplett mit Treppe, Geländer und Gaze. Sie ist in wenigen Stunden aufgebaut, wetterfest und für die allermeisten Stadtfeste, Jubiläen und Bürgerempfänge genau die richtige Größe.",
      "Reicht das nicht, geht mehr: Für kleinere Programme haben wir eine kompakte Variante um 30 Quadratmeter, für große Produktionen bauen wir Bühnen jenseits von 60 Quadratmetern inklusive Dach und Traversenkonstruktion. Statik, Ballastierung und Aufbaupläne kommen von uns – Sie bekommen eine Bühne, die abgenommen werden kann.",
    ],
    details: [
      { titel: "Pultus 48", wert: "6 × 8 m, 48 m² – inkl. Treppe, Geländer, Gaze" },
      { titel: "Kompaktbühne", wert: "rund 30 m² für kleinere Programme" },
      { titel: "Bühne XXL", wert: "über 60 m² mit Dach und Traversenkonstruktion" },
      { titel: "Nachweise", wert: "Statik, Ballastierungsplan, Aufbaudokumentation" },
    ],
    kenngroesse: "6,00 × 8,00 m · 48 m²",
    abPreis: "ab 400 €",
    bild: "/images/buehne-volksparkstadion.jpg",
    bildAlt:
      "Bühnenaufbau mit Traversendach im Volksparkstadion Hamburg, Zuschauerränge im Hintergrund",
  },
  {
    id: "lichttechnik",
    label: "Licht",
    eyebrow: "Licht",
    titel: "Licht macht aus einer Bühne eine Show",
    lead: "Movingheads, Beams, Washes, Blinder und Hazer – abgestimmt programmiert statt wahllos blinkend. Auf Wunsch mit Effekten und zertifizierter Lasershow.",
    text: [
      "Unser Lichtpaket XL bringt alles mit, was eine Bühne zum Leuchten braucht: Movingheads für bewegte Gobos, Beams für scharfe Lichtkegel, Washes für die Flächen, Blinder für die Momente, in denen es knallen soll, und einen Hazer, damit man die Lichtstrahlen überhaupt sieht.",
      "Dazu kommt auf Wunsch alles, was den Abend zuspitzt: Explo-Flamer mit Feuerbällen von sechs bis zwanzig Metern, CO₂-Jets, Streamer und Konfetti sowie eine zertifizierte Lasershow, gefahren von geschulten Laserschutzbeauftragten. Effekte sind bei uns keine Deko, sondern werden auf den Ablauf getaktet – und laufen immer nach Sicherheitskonzept.",
    ],
    details: [
      { titel: "Lichtpaket XL", wert: "Movingheads, Beams, Washes, Blinder, Hazer" },
      { titel: "Special Effects", wert: "Flammeneffekte 6 – 20 m, CO₂, Streamer, Konfetti" },
      { titel: "Lasershow", wert: "zertifizierte Anlagen, geschulte Laserschutzbeauftragte" },
      { titel: "Personal", wert: "Lichttechniker fährt die Show auf Wunsch live" },
    ],
    kenngroesse: "Licht · Effekte · Lasershow",
    bild: "/images/platzhalter-lichttechnik.jpg",
    bildAlt:
      "Mehrere Movingheads auf einer dunklen Bühne, farbige Lichtstrahlen kreuzen sich über der Fläche",
  },
  {
    id: "tontechnik",
    label: "Ton",
    eyebrow: "Beschallung",
    titel: "Ton, der bis nach hinten trägt",
    lead: "Line-Array-Systeme von RCF und L-Acoustics für Flächen, auf denen die Ansprache vorn nicht wehtun und hinten trotzdem ankommen soll.",
    text: [
      "Beschallung ist kein Zufall, sondern Planung. Wir rechnen die Fläche durch, hängen das passende System und richten es so ein, dass der Pegel an den Anwohnergrenzen eingehalten wird und im Publikum trotzdem alles verständlich bleibt. Für große Open Airs setzen wir Line Arrays ein, die bis zu 5.000 Personen sauber versorgen.",
      "Für Bürgerempfänge, Ansprachen und kleinere Bühnenprogramme tut es ein konventionelles System – auch das haben wir im Lager, inklusive Rednerpult-Mikrofonen, Funkstrecken und Mischpult. Auf Wunsch übernimmt einer unserer Techniker den ganzen Tag am FOH-Platz.",
    ],
    details: [
      { titel: "Line Arrays", wert: "RCF und L-Acoustics, bis 5.000 Personen Open Air" },
      { titel: "Konventionelle Systeme", wert: "für Säle, Zelte und Ansprachen" },
      { titel: "Zubehör", wert: "Funkstrecken, Rednermikrofone, Monitoring, Mischpult" },
      { titel: "Pegel", wert: "Einmessung mit Blick auf die Auflagen zum Immissionsschutz" },
    ],
    kenngroesse: "bis 5.000 Personen Open Air",
    bild: "/images/platzhalter-tontechnik.jpg",
    bildAlt:
      "Line-Array-Lautsprecher im Vordergrund, dahinter ein Sänger mit Mikrofon auf der Bühne",
  },
  {
    id: "gastronomie",
    label: "Gastronomie",
    eyebrow: "Gastronomie",
    titel: "Ausschank und Versorgung im eigenen Betrieb",
    lead: "Bis zu 15 Schankwagen mit Personal, Kühlung und Abrechnung – auf Wunsch als Kooperation, bei der die Technik über den Getränkeverkauf finanziert wird.",
    text: [
      "Die Gastronomie entscheidet mit darüber, ob ein Fest funktioniert: zu wenig Ausschank bedeutet lange Schlangen, zu viel bedeutet unnötige Kosten. Wir planen die Zahl der Ausschankstellen nach erwarteter Besucherzahl und Programmdauer, stellen die Wagen, das Personal und die Kühlung und rechnen am Ende sauber ab.",
      "Für Kommunen und Vereine mit knappem Budget bieten wir zusätzlich ein Kooperationsmodell an: Wir stellen Bühne und Technik ohne Mietkosten und übernehmen dafür den Getränkeausschank. Ob das für Ihre Veranstaltung aufgeht, rechnen wir vorher gemeinsam durch – das Modell trägt nicht bei jeder Größe.",
    ],
    details: [
      { titel: "Schankwagen", wert: "bis zu 15 Wagen, je nach Größe der Veranstaltung" },
      { titel: "Personal", wert: "Ausschankpersonal, Kühlung, Logistik" },
      { titel: "Abrechnung", wert: "vollständige Abrechnung und Nachweis" },
      { titel: "Kooperation", wert: "Technik gegen Getränkeausschank – nach gemeinsamer Kalkulation" },
    ],
    kenngroesse: "bis 15 Schankwagen",
    bild: "/images/platzhalter-gastronomie.jpg",
    bildAlt:
      "Reich gedeckter Catering-Tisch mit Aufschnitt, Käse, Oliven und Baguette bei einer Veranstaltung",
  },
  {
    id: "standmanagement",
    label: "Standmanagement",
    eyebrow: "Standmanagement",
    titel: "Standflächen vergeben, aufplanen und betreuen",
    lead: "Wir übernehmen die Beschickerverwaltung: Ausschreibung der Standflächen, Aufplanung, Verträge, Anlieferung und Betreuung vor Ort.",
    text: [
      "Wer schon einmal ein Stadtfest beschickt hat, kennt den Aufwand: Anfragen sichten, Flächen vergeben, Verträge schließen, Strom und Wasser zuordnen, Anlieferzeiten staffeln und am Aufbautag alle einweisen. Diesen Teil nehmen wir Ihnen ab – von der Ausschreibung bis zur Standabnahme.",
      "Sie legen fest, welche Art von Ständen Sie auf Ihrem Fest haben möchten und welche nicht. Wir setzen das um, halten die Belegung nach und sind am Aufbautag der Ansprechpartner für die Beschicker.",
    ],
    details: [
      { titel: "Vergabe", wert: "Ausschreibung, Auswahl und Verträge der Beschicker" },
      { titel: "Aufplanung", wert: "Standflächen, Strom- und Wasseranschlüsse, Zufahrten" },
      { titel: "Anlieferung", wert: "gestaffelte Aufbauzeiten und Einweisung vor Ort" },
      { titel: "Betreuung", wert: "Ansprechpartner für Beschicker während der Veranstaltung" },
    ],
    kenngroesse: "Vergabe · Aufplanung · Betreuung",
    bild: "/images/platzhalter-standmanagement.jpg",
    bildAlt:
      "Blick von oben auf ein Veranstaltungsgelände mit Ständen, Bannern und Besuchern",
  },
  {
    id: "sponsoring",
    label: "Sponsoring",
    eyebrow: "Sponsoring",
    titel: "Damit sich die Veranstaltung mitfinanziert",
    lead: "Wir sprechen Sponsoren an, entwickeln Werbeflächen und Gegenleistungen und setzen sie auf der Veranstaltung sichtbar um.",
    text: [
      "Kaum ein Stadtfest trägt sich allein aus dem Haushalt. Wir entwickeln deshalb ein Sponsoringkonzept, das zu Ihrer Veranstaltung und zu Ihrer Kommune passt: Welche Flächen und Nennungen gibt es, was ist eine angemessene Gegenleistung, und welche Unternehmen aus der Region kommen dafür infrage.",
      "Die Ansprache übernehmen wir auf Wunsch komplett, ebenso die Umsetzung vor Ort – von der Bannerfläche an der Bühne bis zur Nennung in der Moderation. Was am Ende zusammengekommen ist, weisen wir Ihnen nachvollziehbar aus.",
    ],
    details: [
      { titel: "Konzept", wert: "Sponsoringpakete mit klaren Gegenleistungen" },
      { titel: "Akquise", wert: "Ansprache regionaler Unternehmen auf Wunsch durch uns" },
      { titel: "Umsetzung", wert: "Werbeflächen, Banner, Nennungen im Programm" },
      { titel: "Nachweis", wert: "Auswertung und Abrechnung der Sponsorenleistungen" },
    ],
    kenngroesse: "Konzept · Akquise · Umsetzung",
    bild: "/images/platzhalter-sponsoring.jpg",
    bildAlt:
      "Straßenfest am Abend mit Lichterketten über der Menschenmenge",
  },
];

/**
 * Ablauf einer Zusammenarbeit mit Städten und Gemeinden.
 * Die Reihenfolge entspricht dem, was Kommunen für eine Gremienvorlage brauchen.
 */
export const kommunenAblauf = [
  {
    titel: "Ortstermin und Bestandsaufnahme",
    text: "Wir sehen uns die Fläche gemeinsam an: Zufahrten, Stromversorgung, Rettungswege, Nachbarschaft. Danach wissen beide Seiten, was dort realistisch möglich ist.",
  },
  {
    titel: "Konzept und Kostenrahmen",
    text: "Sie erhalten einen Flächenplan, einen Ablauf und ein Angebot mit klaren Positionen – in einer Form, die Sie direkt in die Gremien geben können.",
  },
  {
    titel: "Abstimmung und Genehmigung",
    text: "Wir stimmen Sicherheitskonzept, Verkehrsführung und Auflagen mit Ordnungsamt, Feuerwehr und Polizei ab und liefern die nötigen Nachweise.",
  },
  {
    titel: "Aufbau und Durchführung",
    text: "Alle Gewerke laufen über einen Zeitplan. Am Veranstaltungstag ist eine feste Ansprechperson von uns durchgehend vor Ort.",
  },
  {
    titel: "Abbau und Abrechnung",
    text: "Rückbau, Übergabe der Fläche und eine Abrechnung, die den Positionen des Angebots folgt – inklusive Nachweis über Gastronomie- und Sponsoringerlöse.",
  },
];

/** Kennzahlen für die Stat-Bar. */
export const kennzahlen = [
  { wert: "15+", einheit: "Jahre", label: "Erfahrung in der Veranstaltungsbranche" },
  { wert: "300+", einheit: "Events", label: "vom Bürgerempfang bis zum Stadtfest" },
  { wert: "8", einheit: "Gewerke", label: "aus einer Hand – ein Ansprechpartner" },
  { wert: "98", einheit: "%", label: "zufriedene Kundinnen und Kunden" },
];

export type Preispaket = {
  id: string;
  kategorie: "Bühne" | "Technik" | "Komplett" | "Betreuung";
  titel: string;
  /** Entweder ein Ab-Preis wie "790 €" oder "auf Anfrage". */
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
    preis: "auf Anfrage",
    preisZusatz: "individuelles Angebot",
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
    preis: "auf Anfrage",
    preisZusatz: "individuelles Angebot",
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
    preis: "auf Anfrage",
    preisZusatz: "individuelles Angebot",
    beschreibung:
      "Feuer, CO₂ und Konfetti – einzeln buchbar oder als abgestimmte Effektstrecke.",
    leistungen: [
      "Explo-Flamer, Feuerbälle 6 – 20 m",
      "CO₂-Jets",
      "Streamerkanonen und Konfetti",
      "Sicherheitskonzept und Betreuung",
    ],
    anker: "/leistungen#lichttechnik",
  },
  {
    id: "gesamtbetreuung",
    kategorie: "Betreuung",
    titel: "Veranstaltung komplett",
    preis: "auf Anfrage",
    preisZusatz: "individuelles Angebot",
    beschreibung:
      "Konzeption, Organisation und alle Gewerke für Städte, Gemeinden und Großveranstaltungen – von der ersten Planung bis zur Abrechnung.",
    leistungen: [
      "Konzeption, Flächenplan und Kostenrahmen",
      "Behördenabstimmung und Sicherheitskonzept",
      "Bühne, Licht und Ton inklusive Personal",
      "Gastronomie, Standmanagement und Sponsoring",
    ],
    badge: "Für Kommunen",
    anker: "/leistungen#konzeption",
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

/**
 * Häufige Fragen – als sichtbarer Q&A-Block je Seite UND als Grundlage für das
 * FAQPage-Schema (components/faq-section.tsx). Jede Antwort muss deshalb für
 * sich stehen: kurz, faktentreu und ohne Verweis auf "siehe oben".
 *
 * `kategorie` steuert, auf welcher Seite ein Eintrag erscheint – ein Eintrag
 * kann mehreren Seiten zugeordnet sein.
 */
export type FAQEintrag = {
  frage: string;
  antwort: string;
  kategorie: ("preise" | "leistungen")[];
};

export const faq: FAQEintrag[] = [
  {
    frage: "Was kostet eine Bühne mieten bei Eventservice Calabrese?",
    antwort:
      "Die kompakte Bühne mit rund 30 m² kostet ab 400 € netto pro Tag, unsere meistgebuchte " +
      "Pultus 48 mit 6 × 8 Metern ab 790 € und die Bühne XXL mit Dach und Traversenkonstruktion " +
      "ab 1.200 €. In allen Preisen sind Anlieferung sowie Auf- und Abbau durch unser Team enthalten.",
    kategorie: ["preise", "leistungen"],
  },
  {
    frage: "Sind die genannten Preise netto oder brutto?",
    antwort:
      "Alle Preise auf dieser Website sind Nettopreise zuzüglich der gesetzlichen Umsatzsteuer.",
    kategorie: ["preise"],
  },
  {
    frage: "Ist die Anfahrt im Preis enthalten?",
    antwort:
      "Innerhalb von 50 km um unseren Standort Bad Bramstedt ist die Anfahrt in den genannten " +
      "Preisen enthalten. Darüber hinaus rechnen wir sie transparent als eigene Position im Angebot aus.",
    kategorie: ["preise"],
  },
  {
    frage: "Was kostet eine Veranstaltung, die mehrere Tage dauert?",
    antwort:
      "Beim Komplettpaket XXL wird jeder weitere Veranstaltungstag mit 50 % des Tagespreises " +
      "berechnet. Bei allen anderen Paketen kalkulieren wir mehrtägige Veranstaltungen individuell.",
    kategorie: ["preise"],
  },
  {
    frage: "Warum stehen nicht bei allen Leistungen feste Preise?",
    antwort:
      "Ab-Preise nennen wir ausschließlich bei den Bühnen, weil sich diese Position am klarsten " +
      "kalkulieren lässt. Licht, Ton, Special Effects, Gastronomie, Standmanagement und Sponsoring " +
      "hängen zu stark von Fläche, Gästezahl und Programm ab – die kalkulieren wir individuell, " +
      "aber immer mit klaren, nachvollziehbaren Positionen im Angebot statt einer Pauschale.",
    kategorie: ["preise", "leistungen"],
  },
  {
    frage: "In welchem Gebiet ist Eventservice Calabrese tätig?",
    antwort:
      "Von unserem Standort in Bad Bramstedt aus sind wir in ganz Schleswig-Holstein, Hamburg, " +
      "Niedersachsen und Mecklenburg-Vorpommern für Veranstaltungen im Einsatz.",
    kategorie: ["leistungen"],
  },
  {
    frage: "Übernehmen Sie auch die komplette Organisation, nicht nur die Technik?",
    antwort:
      "Ja. Neben Bühne, Licht und Ton übernehmen wir auf Wunsch die gesamte Konzeption, die " +
      "Abstimmung mit Ordnungsamt, Feuerwehr und Polizei sowie die Koordination aller Gewerke. " +
      "Am Veranstaltungstag ist eine feste Ansprechperson von uns durchgehend vor Ort.",
    kategorie: ["leistungen"],
  },
  {
    frage: "Arbeiten Sie nur mit Städten und Gemeinden, oder auch mit Vereinen und Unternehmen?",
    antwort:
      "Wir sind Gesamtdienstleister für Veranstaltungen jeder Art. Städte und Gemeinden sind ein " +
      "Schwerpunkt, weil dort besonders viele Gewerke koordiniert werden müssen – Vereinsfeiern, " +
      "Firmenevents und private Feiern schließen wir dabei ausdrücklich nicht aus.",
    kategorie: ["leistungen"],
  },
  {
    frage: "Ist die Lasershow zertifiziert und rechtlich abgesichert?",
    antwort:
      "Ja. Wir setzen ausschließlich zertifizierte Laseranlagen ein, die von geschulten " +
      "Laserschutzbeauftragten nach Sicherheitskonzept gefahren werden.",
    kategorie: ["leistungen"],
  },
  {
    frage: "Wie viele Besucherinnen und Besucher können Sie beschallen?",
    antwort:
      "Mit Line-Array-Systemen von RCF und L-Acoustics versorgen wir Open-Air-Flächen für bis zu " +
      "5.000 Personen. Für Säle, Zelte und Ansprachen setzen wir kleinere, konventionelle " +
      "Beschallungssysteme ein.",
    kategorie: ["leistungen"],
  },
  {
    frage: "Gibt es ein Modell ohne Mietkosten für Vereine oder Kommunen mit knappem Budget?",
    antwort:
      "Ja, unsere Gastronomie-Kooperation: Wir stellen Bühne und Technik ohne Mietkosten und " +
      "übernehmen dafür den Getränkeausschank. Ob das für die jeweilige Veranstaltung aufgeht, " +
      "rechnen wir vorher gemeinsam durch – das Modell trägt nicht bei jeder Größe.",
    kategorie: ["leistungen", "preise"],
  },
];

/** Technikmarken als Vertrauenssignal. */
export const marken = [
  { name: "RCF", beschreibung: "Line Arrays und Beschallung" },
  { name: "L-Acoustics", beschreibung: "Line Arrays für große Flächen" },
  { name: "Pultus", beschreibung: "Bühnensysteme" },
  { name: "Explo", beschreibung: "Flammeneffekte" },
];

/**
 * Referenzkunden – die "Logo-Wand" auf /referenzen.
 *
 * Alle 14 genannten Auftraggeber sind enthalten, zehn davon mit echtem,
 * geprüftem Logo. Bei "Kaltenkirchener Wiesn", "Match Börner Open Air" und
 * "Musikfest Schleswig-Holstein" steht die Identität fest, aber es ließ
 * sich (noch) kein sauberes Logo-Bild beschaffen. Nur "Volker Mohr GmbH"
 * bleibt komplett offen: Zwei gleichnamige Firmen wurden gefunden, keine
 * davon war die richtige – ein falsches Logo als "Kunde" zu zeigen wäre für
 * die betroffene Firma und für Eventservice Calabrese ein größeres Problem
 * als ein Textfeld ohne Logo. Diese Einträge tragen deshalb vorerst nur
 * einen Schriftzug (`logo: undefined`) statt eines geratenen Bildes.
 *
 * "famila" ist eine gemeinsame Marke zweier unabhängiger Regionalhändler
 * (Nordost/Nordwest) – siehe Kommentar beim Eintrag. "Bundespolizei" ist ein
 * Hoheitszeichen: Die Nutzung als Referenzlogo sollte vor dem Livegang noch
 * einmal ausdrücklich vom Kunden bestätigt werden, da für Bundes-/Landes-
 * wappen eigene presserechtliche Regeln gelten können, unabhängig vom
 * Urheberrecht.
 *
 * Zum Nachtragen: Datei nach public/images/kunden/ legen, hier `logo` und
 * `logoAlt` ergänzen. Empfohlenes Format: freigestellt oder auf hellem
 * Grund, möglichst breiter als hoch – die Kachel ist bewusst hell, damit
 * unterschiedlichste Logo-Farben und -Formate nebeneinander funktionieren.
 */
export type Referenzkunde = {
  name: string;
  /** Pfad unter /public, ohne führendes "/images/kunden/" wird ergänzt */
  logo?: string;
  logoAlt?: string;
  /** Kurzform für die Bildunterschrift, z. B. "Stadt" oder "Festival" */
  kategorie?: string;
};

export const referenzkunden: Referenzkunde[] = [
  { name: "Hagebau", logo: "hagebau.svg", logoAlt: "Logo von Hagebau", kategorie: "Handel" },
  {
    name: "Stadt Bad Bramstedt",
    logo: "stadt-bad-bramstedt.jpg",
    logoAlt: "Wortmarke der Stadt Bad Bramstedt",
    kategorie: "Kommune",
  },
  {
    name: "Amt Bad Bramstedt-Land",
    logo: "amt-bad-bramstedt-land.png",
    logoAlt: "Wappen des Amts Bad Bramstedt-Land",
    kategorie: "Kommune",
  },
  {
    name: "Bandel Automobiltechnik",
    logo: "bandel-automobiltechnik.svg",
    logoAlt: "Logo von Bandel Automobiltechnik GmbH",
    kategorie: "Gewerbe",
  },
  {
    name: "Kaltenkirchener Wiesn",
    /* Bestätigte Identität ("Kaki" = Kaltenkirchen), aber kaki-wiesn.de war
       beim Abruf nicht erreichbar (503/TLS-Fehler) – kein Logo gesichert. */
    kategorie: "Veranstaltung",
  },
  {
    name: "Match Börner Open Air",
    kategorie: "Festival",
  },
  { name: "Weihnachtsmarkt Bad Bramstedt", kategorie: "Veranstaltung" },
  {
    name: "HamCan Hamburg",
    logo: "hamcan.png",
    logoAlt: "Logo von HamCan – Expo and Festival",
    kategorie: "Veranstaltung",
  },
  {
    name: "Auenlandklinik",
    logo: "auenlandklinik.png",
    logoAlt: "Logo der Auenlandklinik Bad Bramstedt",
    kategorie: "Klinik",
  },
  { name: "Volker Mohr GmbH", kategorie: "Gewerbe" },
  {
    name: "famila",
    /* famila ist eine gemeinsame Marke zweier unabhängiger Regionalhändler.
       Bad Bramstedt liegt im Gebiet von famila Nordost (Bartels-Langness,
       Kiel) – famila Nordwest (Bünting-Gruppe) deckt Bremen/West-Niedersachsen
       ab und kommt geografisch nicht infrage. Logo daher von famila-nordost.de. */
    logo: "famila.png",
    logoAlt: "Logo von famila",
    kategorie: "Handel",
  },
  {
    name: "Wacken Brauerei",
    logo: "wacken-brauerei.png",
    logoAlt: "Logo der Wacken Brauerei",
    kategorie: "Gewerbe",
  },
  {
    name: "Musikfest Schleswig-Holstein",
    /* Identität geklärt (Schleswig-Holstein Musik Festival, shmf.de), aber
       kein sauberes Logo-Bild verfügbar: Der Name steht auf der Website nur
       als gestylter Text, das Favicon ist ein abstraktes Muster, und die
       einzigen Logo-Dateien im Footer sind fremde Förderer-Logos (Kulturstaats-
       ministerin, "Der echte Norden", Neustart Kultur) – nicht das SHMF selbst. */
    kategorie: "Festival",
  },
  {
    name: "Bundespolizei",
    /* Auf Kundenwunsch bewusst ohne Wappen, nur als Schriftzug – das Wappen
       ist ein Hoheitszeichen mit eigenen presserechtlichen Regeln. */
    kategorie: "Behörde",
  },
  {
    name: "Pferdeklinik Bilsen",
    /* Logo von pferdeklinik-bilsen.de bezogen, von CMYK nach sRGB konvertiert
       (das Original-JPEG war im Druck-Farbraum und hätte im Browser verfälscht
       gewirkt). Bilsen liegt wie mehrere andere Referenzen im unmittelbaren
       Einzugsgebiet um Kaltenkirchen/Bad Bramstedt. */
    logo: "pferdeklinik-bilsen.png",
    logoAlt: "Logo der Pferdeklinik Bilsen mit Pferdekopf und Äskulapstab",
    kategorie: "Tierklinik",
  },
  {
    name: "Reiterhof Bühring",
    /* Firmiert auf der eigenen Website als "Hof Bühring" (reiterhofbuehring.de,
       Alveslohe) – Logo entsprechend beschriftet. Nur in geringer Auflösung
       verfügbar (150 × 96 px), eine größere Version war auf der Kundenseite
       nicht auffindbar. */
    logo: "hof-buehring.png",
    logoAlt: "Logo von Hof Bühring mit Pferdekopf-Silhouette",
    kategorie: "Reiterhof",
  },
  {
    name: "Stiftung Anscharhöhe Eppendorf",
    /* Vom Kunden als "Stiftung Ancherhöhe" genannt – korrekte Schreibweise
       laut Wikipedia und eigener Website ist "Anscharhöhe" (nach der Kirche
       St. Anschar). Das SVG-Logo von anscharhoehe.de ist die aktuell dort
       aktive Jubiläumsversion ("140 Jahre", Stiftungsgründung 1972,
       diakonische Arbeit seit 1885) – falls die Stiftung nach dem
       Jubiläumsjahr auf ihr reguläres Logo zurückwechselt, hier nachziehen. */
    logo: "stiftung-anscharhoehe.svg",
    logoAlt: "Jubiläums-Logo der Stiftung Anscharhöhe Eppendorf, 140 Jahre",
    kategorie: "Stiftung",
  },
];
