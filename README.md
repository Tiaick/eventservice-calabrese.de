# Eventservice Calabrese – Website

Relaunch der Website von Eventservice Calabrese (Veranstaltungstechnik, Bad Bramstedt).
Next.js 16 mit App Router und Turbopack, Tailwind CSS 4 in CSS-first-Konfiguration,
TypeScript im Strict Mode.

## Schnellstart

```bash
npm install
cp .env.example .env.local   # Resend-Zugang eintragen, siehe unten
npm run dev                  # http://localhost:3000
```

Weitere Skripte: `npm run build`, `npm run start`, `npm run lint`.

## Aufbau

```
app/                 Seiten (App Router), sitemap.ts, robots.ts
  kontakt/actions.ts Server Action des Kontaktformulars
components/          Wiederverwendbare Bausteine (Header, Footer, Karten, Formular)
lib/
  site.ts            Stammdaten: Adresse, Telefon, E-Mail, Navigation
  content.ts         Redaktionelle Inhalte: Leistungen, Preise, Galerie, Kennzahlen
  mail.ts            Mailversand über Resend
public/images/       Bilder – derzeit Platzhalter, siehe PLATZHALTER-BILDER.md
```

Texte und Preise werden in `lib/content.ts` gepflegt, Kontaktdaten zentral in
`lib/site.ts`. Beides ist bewusst von den Komponenten getrennt, damit Inhalte ohne
Layoutänderungen aktualisiert werden können.

## Positionierung

Die Website tritt als **Gesamtdienstleister für Städte und Gemeinden** auf, nicht als
Technikverleih. Der Leistungskatalog in `lib/content.ts` umfasst acht Bereiche in fester
Reihenfolge: Konzeption, Veranstaltungsorganisation, Bühne, Licht, Ton, Gastronomie,
Standmanagement, Sponsoring.

- **Konzeption und Organisation stehen bewusst vorn** – sie tragen die Aussage
  „ein Ansprechpartner für die ganze Veranstaltung".
- **Bühnenbau bleibt der Kern**: Auf der Startseite hat er einen eigenen Abschnitt mit
  Größen, Maßen und Ab-Preisen, unabhängig vom Leistungsraster.
- **Special Effects und Lasershow** sind keine eigenen Bereiche mehr, sondern stehen als
  Leistungen innerhalb von *Licht* (`lib/content.ts`, Eintrag `lichttechnik`). Die
  Preisposition „Special Effects" bleibt bestehen.
- **Gastronomie und Sponsoring** sind auf der Startseite zusätzlich als Abschnitt
  *Refinanzierung* zusammengefasst – das ist das Argument für knappe Haushalte.
- Der Ablauf einer Zusammenarbeit mit Verwaltungen liegt in `kommunenAblauf`.
- **Die oberste Zeile der Startseite nennt bewusst keine Zielgruppe** („Veranstaltungen
  jeder Art"). Städte und Gemeinden bleiben als Schwerpunkt in Abschnitt 03 und im
  Paket „Veranstaltung komplett" sichtbar, schließen aber keine anderen Anlässe aus.

### Preise: nur Bühnen öffentlich

Ab-Preise stehen **ausschließlich bei den Bühnen** (Startseite, `/leistungen#buehnen`,
`/preise`). Licht, Ton, Special Effects, Gastronomie, Standmanagement, Sponsoring und
die Gesamtbetreuung sind auf `auf Anfrage` gesetzt – so gewünscht, weil der Aufwand zu
stark vom Einzelfall abhängt. Wer weitere Positionen öffnen oder schließen will, ändert
in `lib/content.ts` das Feld `preis` (Preistabelle) beziehungsweise `abPreis`
(Leistungskarten). Ausgenommen ist bewusst das Komplettpaket XXL: Es trägt weiterhin
einen Paketpreis, weil es als Gesamtangebot und nicht als Einzelposition auftritt.

## Design-System

Gestalterische Leitidee ist der **technische Rider**: Die Seite borgt sich die
Formensprache aus Bühnenplänen und Materiallisten, statt dem üblichen Muster aus
abgerundeten Karten auf dunklem Grund zu folgen.

Alle Tokens stehen im `@theme`-Block in `app/globals.css` – Farben, Typografie-Skala,
Radien, Timing. Es gibt keine `tailwind.config.js`.

- **Schriften:** IBM Plex Sans Condensed für Schlagzeilen, IBM Plex Sans für Fließtext,
  IBM Plex Mono für alle Daten, Labels und Maßangaben. Über `next/font` selbst gehostet,
  keine Verbindung zu Google Fonts zur Laufzeit.
- **Kanten:** Sämtliche Radien sind auf `0` gesetzt, auch die Tailwind-Standardwerte.
  Technische Zeichnungen kennen keine Rundungen – `rounded-*` bleibt deshalb wirkungslos.
- **Farbwelt:** `ink-*` (tiefes Anthrazit) als Basis, `flare-*` (Signalorange) als
  Akzent. Der Akzent ist bewusst sparsam eingesetzt: Handlungsaufforderung, aktiver
  Zustand, die eine Zahl, auf die es ankommt – nicht als Dauerton auf jedem Label.
- **Gliederung:** Haarlinien statt Kartenflächen. Wiederkehrende Bauteile liegen in
  `components/plan.tsx`: `Sektionsmarke` (`01 / BÜHNEN ────`), `Masslinie` für
  Maßangaben am Bild, `Eckmarken` und `Datenliste`.
- Die Seite ist bewusst nur dunkel gestaltet (`color-scheme: dark`).
- `ink-400` und `ink-500` sind auf mindestens 4,5:1 Kontrast eingestellt (WCAG AA);
  `ink-600` ist ausschließlich für Nicht-Text zugelassen. Beim Nachjustieren der
  Palette bitte erneut prüfen.
- **Zeilenhöhen** der Display-Grade sind nicht enger als `0.95` gesetzt: In Versalien
  brauchen die Umlaute Ä, Ö und Ü Platz über der Versalhöhe, sonst kappt die Zeile
  darüber die Punkte.

## Kontaktformular

Der Versand läuft über eine Server Action und [Resend](https://resend.com) (`lib/mail.ts`).
Es ist kein Formular-Widget eines Drittanbieters eingebunden.

Nötige Umgebungsvariablen (siehe `.env.example`): `RESEND_API_KEY`, `RESEND_FROM`,
`KONTAKT_EMPFAENGER`. `RESEND_FROM` muss eine Adresse auf einer bei Resend
**verifizierten Domain** sein (dashboard.resend.com/domains) – sonst weist die API den
Versand ab.

Fehlen diese Werte, nimmt das Formular keine Anfragen an: Die Besucher bekommen eine
verständliche Fehlermeldung mit Verweis auf Telefon und WhatsApp, und der Fehler wird
serverseitig geloggt. So geht keine Anfrage still verloren – **die Variablen müssen vor
dem Livegang gesetzt sein.**

## Datenschutz

- Keine Analyse- oder Werbe-Cookies, kein Tracking – daher kein Cookie-Banner nötig
- Schriften werden lokal ausgeliefert
- Die Karte auf der Kontaktseite lädt **erst nach ausdrücklichem Klick**; vorher geht
  kein Request an OpenStreetMap (per Test verifiziert)
- Der WhatsApp-Link ist ein reiner Link, kein eingebettetes Skript

## Referenzkunden (/referenzen)

`lib/content.ts`, Konstante `referenzkunden`, zeigt eine Logo-Wand mit 14 genannten
Auftraggebern. Neun davon haben ein echtes, geprüftes Logo: Hagebau, Stadt Bad Bramstedt,
Amt Bad Bramstedt-Land, Bandel Automobiltechnik, HamCan Hamburg, Auenlandklinik, famila
und Wacken Brauerei.

Vier Namen tragen weiterhin nur einen Schriftzug statt eines Logos:

- **Kaltenkirchener Wiesn** – Identität bestätigt (Kaki = Kaltenkirchen, offizielle Domain
  `kaki-wiesn.de`), aber die Seite war beim Abruf nicht erreichbar (503/TLS-Fehler). Logo
  bei Gelegenheit nachtragen.
- **Match Börner Open Air** – Identität sicher (bekanntes Festival in Norderstedt), aber
  auf der Website ließ sich kein sauberes Logo-Bild finden, nur ein Line-up-Poster.
- **Musikfest Schleswig-Holstein** – Identität sicher (`shmf.de`), aber die Website trägt
  den Namen nur als gestylten Text; die einzigen Logo-Dateien dort sind fremde
  Förderer-Logos (Kulturstaatsministerin, „Der echte Norden“, Neustart Kultur), nicht das
  SHMF selbst.
- **Bundespolizei** – auf ausdrücklichen Kundenwunsch bewusst nur als Schriftzug, kein
  Wappen. Das Bundespolizei-Wappen ist ein Hoheitszeichen, für das presserechtlich eigene
  Nutzungsregeln gelten können, unabhängig vom Urheberrecht.

**Weiterhin ungeklärt: Volker Mohr GmbH.** Zwei unterschiedliche Firmen dieses Namens
gefunden (Kaltenkirchen und Dollern) – laut Rückmeldung des Kunden ist **keine von beiden**
die richtige. Ort, Branche oder direkt das Logo nachreichen, dann wird es ergänzt.

„Weihnachtsmarkt Bad Bramstedt" hat vermutlich kein eigenes Logo und trägt bewusst nur
den Namen.

**Hinweis zu famila:** Die Marke gehört zwei unabhängigen Regionalhändlern. Bad Bramstedt
liegt im Gebiet von famila Nordost (Bartels-Langness, Kiel) – famila Nordwest
(Bünting-Gruppe) deckt Bremen/West-Niedersachsen ab und kommt geografisch nicht infrage.
Das eingebundene Logo stammt von `famila-nordost.de`; vom Kunden bestätigt.

**Um echte Logos nachzutragen:** Datei nach `public/images/kunden/` legen, in
`referenzkunden` bei `logo` und `logoAlt` eintragen.

## Referenzen-Laufband (Startseite)

Zwischen dem Kennzahlenblock und der Leistungsübersicht zeigt `components/
referenzen-laufband.tsx` dieselben Referenzkunden-Kacheln wie `/referenzen`, aber als
endlos durchlaufendes Band statt als Raster. Technik: Der Kachel-Track enthält die Liste
zweimal hintereinander, eine CSS-Animation (`animate-laufband`, definiert in
`app/globals.css`) verschiebt ihn um exakt -50% seiner eigenen Breite – das entspricht
einer Kopie, wodurch die Schleife ohne sichtbaren Sprung schließt. Pausiert bei Hover,
respektiert `prefers-reduced-motion` über die bestehende globale Regel.

## Offene Punkte vor dem Livegang

1. **Die Texte der vier neuen Bereiche** (Konzeption, Veranstaltungsorganisation,
   Standmanagement, Sponsoring) sind fachlich plausibel formuliert, aber nicht mit dem
   Betrieb abgestimmt. Vor dem Livegang inhaltlich prüfen – besonders, welche Leistungen
   tatsächlich selbst erbracht und welche zugekauft werden.
2. **Volker Mohr GmbH** braucht noch die richtige Zuordnung, die Logos von
   Kaltenkirchener Wiesn, Match Börner Open Air und Musikfest Schleswig-Holstein fehlen
   noch – siehe Abschnitt „Referenzkunden“ oben.
3. **Bilder** in `public/images/` gegen echte Eventfotos tauschen –
   Anforderungen in `public/images/PLATZHALTER-BILDER.md`
4. **Impressum und Datenschutzerklärung**: Inhaber, Anschrift und Kontakt sind
   eingetragen (Impressum vom Schwesterbetrieb Restaurant Calabrese übernommen, gleicher
   Inhaber und gleiche Adresse). Die Steuernummer sollte vom Kunden für diesen
   Geschäftsbereich noch bestätigt werden. In der Datenschutzerklärung fehlen noch
   Hosting-Anbieter/Serverstandort und das Stand-Datum (gekennzeichnete Platzhalter). Der
   gesamte Text sollte vor dem Livegang rechtlich geprüft werden.
5. **Social-Media-Profile** in `lib/site.ts` eintragen oder entfernen
6. **Resend-Zugang** im Deployment hinterlegen (Domain bei Resend verifizieren, API-Key
   erzeugen, die drei Umgebungsvariablen setzen)

## Deployment

Als Node-Anwendung gebaut (`npm run build`, Start über `npm run start`), passend für das
bestehende Coolify-Setup. Die Umgebungsvariablen für Resend dort als Environment
Variables hinterlegen. Alle Seiten werden statisch vorgerendert; dynamisch ist allein die
Server Action des Kontaktformulars.
