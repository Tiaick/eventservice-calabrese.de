# Eventservice Calabrese – Website

Relaunch der Website von Eventservice Calabrese (Veranstaltungstechnik, Bad Bramstedt).
Next.js 16 mit App Router und Turbopack, Tailwind CSS 4 in CSS-first-Konfiguration,
TypeScript im Strict Mode.

## Schnellstart

```bash
npm install
cp .env.example .env.local   # SMTP-Zugang eintragen, siehe unten
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
  mail.ts            SMTP-Versand
public/images/       Bilder – derzeit Platzhalter, siehe PLATZHALTER-BILDER.md
```

Texte und Preise werden in `lib/content.ts` gepflegt, Kontaktdaten zentral in
`lib/site.ts`. Beides ist bewusst von den Komponenten getrennt, damit Inhalte ohne
Layoutänderungen aktualisiert werden können.

## Design-System

Alle Tokens stehen im `@theme`-Block in `app/globals.css` – Farben, Typografie-Skala,
Radien, Schatten, Timing. Es gibt keine `tailwind.config.js`.

- Farbwelt: `ink-*` (tiefes Anthrazit) als Basis, `flare-*` (Bühnenlicht-Orange) als Akzent
- Schriften: Archivo für Headlines, Inter für Fließtext – beide über `next/font` selbst
  gehostet, keine Verbindung zu Google Fonts zur Laufzeit
- Die Seite ist bewusst nur dunkel gestaltet (`color-scheme: dark`)
- `ink-400` und `ink-500` sind auf mindestens 4,5:1 Kontrast eingestellt (WCAG AA);
  beim Nachjustieren der Palette bitte erneut prüfen

## Kontaktformular

Der Versand läuft über eine Server Action und `nodemailer` gegen den bestehenden
SMTP-Anbieter. Es ist kein Formular-Widget eines Drittanbieters eingebunden.

Nötige Umgebungsvariablen (siehe `.env.example`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, `SMTP_FROM`, `KONTAKT_EMPFAENGER`.

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

## Offene Punkte vor dem Livegang

1. **Telefon- und WhatsApp-Nummer** in `lib/site.ts` sind Platzhalter
2. **Bilder** in `public/images/` gegen echte Eventfotos tauschen –
   Anforderungen in `public/images/PLATZHALTER-BILDER.md`
3. **Impressum und Datenschutzerklärung** enthalten gekennzeichnete Platzhalter und
   müssen rechtlich geprüft werden
4. **Logo**: `components/logo.tsx` ist eine typografische Wortmarke als Platzhalter
5. **Social-Media-Profile** in `lib/site.ts` eintragen oder entfernen
6. **SMTP-Zugang** im Deployment hinterlegen

## Deployment

Als Node-Anwendung gebaut (`npm run build`, Start über `npm run start`), passend für das
bestehende Coolify-Setup. Die Umgebungsvariablen für SMTP dort als Environment Variables
hinterlegen. Alle Seiten werden statisch vorgerendert; dynamisch ist allein die Server
Action des Kontaktformulars.
