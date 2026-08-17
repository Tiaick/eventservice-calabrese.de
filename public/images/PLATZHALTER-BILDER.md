# Platzhalter-Bilder

**Alle Dateien in diesem Ordner sind Platzhalter und müssen vor dem Livegang durch
echte Eventfotos von Eventservice Calabrese ersetzt werden.**

Quelle der Platzhalter: [Unsplash](https://unsplash.com) (Unsplash-Lizenz, kostenlose
kommerzielle Nutzung ohne Bildnachweis-Pflicht). Sie dienen ausschließlich dazu, das
Layout in der richtigen Bildsprache zu zeigen.

## Austausch – worauf achten

| Datei | Verwendung | Empfohlenes Format | Motiv |
| --- | --- | --- | --- |
| `platzhalter-hero-buehne-open-air.jpg` | Hero Startseite | 2400 × 1350 (16:9) | Open-Air-Bühne bei Nacht, warmes Gegenlicht |
| `platzhalter-cta-mainstage-nacht.jpg` | CTA-Block Startseite | 2000 × 1125 (16:9) | Mainstage total, viel dunkle Fläche für Text |
| `platzhalter-preise-mainstage.jpg` | Kopfbereich /preise | 2000 × 1125 (16:9) | Große Bühne mit Traversen |
| `platzhalter-buehnen.jpg` | Sektion Bühnen | 1600 × 1067 (3:2) | Pultus 48 im Aufbau oder bespielt |
| `platzhalter-tontechnik.jpg` | Sektion Tontechnik | 1600 × 1067 (3:2) | Line-Array im Flug, FOH-Platz |
| `platzhalter-lichttechnik.jpg` | Sektion Lichttechnik | 1600 × 1067 (3:2) | Movingheads/Beams im Haze |
| `platzhalter-special-effects.jpg` | Sektion Special Effects | 1600 × 1067 (3:2) | Flammeneffekte, CO2, Konfetti |
| `platzhalter-lasershow.jpg` | Sektion Lasershow | 1600 × 1067 (3:2) | Laserfächer über Publikum |
| `platzhalter-gastro-kooperation.jpg` | Sektion Gastro | 1600 × 1067 (3:2) | Schankwagen, Gäste, Ausschank |
| `platzhalter-ueber-uns-werkstatt.jpg` | Über uns | 1600 × 1067 (3:2) | Werkstatt, Lager, Fuhrpark, Team |
| `referenz-*.jpg` | Galerie /referenzen | 1200 × 800 quer, 900 × 1200 hoch | echte Eventfotos je Kategorie |

Die Galerie-Dateien folgen dem Schema `referenz-<kategorie>-<nr>.jpg` mit den Kategorien
`buehne`, `licht`, `ton`, `effects`, `laser`. Neue Bilder werden in
`lib/content.ts` (Konstante `galerie`) eingetragen – dort stehen auch Alt-Text und
Kategorie.

## Hinweise für die echten Fotos

- Querformat 3:2, Hochformat 3:4 – dazwischen schneidet das Layout mittig zu.
- Nachtaufnahmen und Gegenlicht wirken im dunklen Layout am stärksten.
- Motive mit ruhiger, dunkler Fläche eignen sich für Bilder mit Textauflage.
- Vor der Veröffentlichung: Einwilligung abgebildeter Personen einholen (DSGVO / KUG).
