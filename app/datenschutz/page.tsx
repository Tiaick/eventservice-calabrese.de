import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { PlatzhalterHinweis } from "@/components/platzhalter-hinweis";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website von ${site.name}.`,
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzSeite() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        titel="Datenschutzerklärung"
        lead="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und 14 DSGVO."
      />

      <section className="section-y">
        <div className="container-page">
          <PlatzhalterHinweis>
            Dieser Text ist ein Platzhalter. Er beschreibt zwar die tatsächliche
            technische Umsetzung dieser Website, ersetzt aber keine Rechtsberatung. Vor
            der Veröffentlichung müssen die Angaben zum Verantwortlichen vervollständigt,
            der Hosting-Anbieter mit Auftragsverarbeitungsvertrag benannt und der
            gesamte Text durch die zuständige Rechtsberatung geprüft werden.
          </PlatzhalterHinweis>

          <div className="rechtstext">
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <address>
              {site.legalName}
              <br />
              {site.adresse.strasse}
              <br />
              {site.adresse.plz} {site.adresse.ort}
              <br />
              Telefon: <a href={`tel:${site.telefon.link}`}>{site.telefon.anzeige}</a>
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
            <p>
              <strong>
                [Platzhalter: Falls ein Datenschutzbeauftragter benannt ist, hier
                Kontaktdaten ergänzen.]
              </strong>
            </p>

            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird bei{" "}
              <strong>[Platzhalter: Hosting-Anbieter und Serverstandort eintragen]</strong>{" "}
              gehostet. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach
              Art. 28 DSGVO.
            </p>
            <p>
              Beim Aufruf der Website werden automatisch Informationen in sogenannten
              Server-Logfiles gespeichert, die Ihr Browser übermittelt:
            </p>
            <ul>
              <li>aufgerufene Seite und Datum sowie Uhrzeit des Zugriffs</li>
              <li>übertragene Datenmenge und Meldung über den erfolgreichen Abruf</li>
              <li>Browsertyp und Browserversion sowie verwendetes Betriebssystem</li>
              <li>Referrer-URL und IP-Adresse des zugreifenden Systems</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
              berechtigtes Interesse liegt im technisch fehlerfreien Betrieb und in der
              Sicherheit der Website. Die Daten werden nach{" "}
              <strong>[Platzhalter: Speicherdauer eintragen, üblicherweise 7 bis 30 Tagen]</strong>{" "}
              gelöscht.
            </p>

            <h2>3. Kontaktaufnahme</h2>
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns das Kontaktformular auf dieser Website senden, verarbeiten wir
              die von Ihnen angegebenen Daten – Name, E-Mail-Adresse sowie freiwillig
              Telefonnummer, Anlass, Wunschtermin und Ihre Nachricht – ausschließlich zur
              Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Die Übermittlung erfolgt über unseren eigenen Server; es ist kein
              Formular-Dienst eines Drittanbieters eingebunden. Von dort wird Ihre Anfrage
              per E-Mail an unser Postfach weitergeleitet.
            </p>
            <p>
              Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die
              Sie über die Checkbox im Formular erteilen und jederzeit für die Zukunft
              widerrufen können. Zielt Ihre Anfrage auf den Abschluss eines Vertrages, ist
              zusätzlich Art. 6 Abs. 1 lit. b DSGVO Rechtsgrundlage.
            </p>
            <p>
              Wir speichern die Daten, bis Ihre Anfrage abschließend bearbeitet ist und
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3>Telefon, E-Mail und WhatsApp</h3>
            <p>
              Wenn Sie uns anrufen oder per E-Mail schreiben, verarbeiten wir Ihre Angaben
              zur Bearbeitung Ihres Anliegens auf denselben Rechtsgrundlagen.
            </p>
            <p>
              Der auf dieser Website angebotene WhatsApp-Link führt zu einem Dienst der
              WhatsApp Ireland Limited. Beim Klick auf den Link wird eine Verbindung zu
              deren Servern aufgebaut; auf die dortige Datenverarbeitung haben wir keinen
              Einfluss. Bitte beachten Sie die{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzhinweise von WhatsApp
              </a>
              . Wenn Sie das vermeiden möchten, nutzen Sie bitte Telefon, E-Mail oder das
              Kontaktformular.
            </p>

            <h2>4. Kartendarstellung (OpenStreetMap)</h2>
            <p>
              Auf der Kontaktseite binden wir eine Karte von OpenStreetMap ein. Diese wird{" "}
              <strong>erst nach Ihrem ausdrücklichen Klick</strong> geladen. Vor Ihrem
              Klick findet keinerlei Verbindung zu OpenStreetMap statt.
            </p>
            <p>
              Klicken Sie auf „Karte laden“, wird Ihre IP-Adresse an die OpenStreetMap
              Foundation übermittelt. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6
              Abs. 1 lit. a DSGVO, die Sie durch den Klick erteilen. Näheres in der{" "}
              <a
                href="https://osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung der OpenStreetMap Foundation
              </a>
              .
            </p>

            <h2>5. Cookies und Reichweitenmessung</h2>
            <p>
              Diese Website setzt <strong>keine Cookies zu Analyse- oder Werbezwecken</strong>{" "}
              ein. Es findet keine Reichweitenmessung und kein Tracking statt. Ein
              Cookie-Banner ist daher nicht erforderlich.
            </p>
            <p>
              Schriftarten werden lokal von unserem eigenen Server ausgeliefert. Es besteht
              keine Verbindung zu Google Fonts oder einem anderen externen Font-Dienst.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>Sie haben uns gegenüber jederzeit folgende Rechte:</p>
            <ul>
              <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>
                Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7
                Abs. 3 DSGVO)
              </li>
            </ul>
            <p>
              Wenden Sie sich dafür formlos an die oben genannten Kontaktdaten. Zudem steht
              Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere beim{" "}
              <a
                href="https://www.datenschutzzentrum.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein
              </a>
              .
            </p>

            <h2>7. SSL- beziehungsweise TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile Ihres
              Browsers mit „https://“ beginnt. Bei aktiver Verschlüsselung können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h2>8. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, sobald Änderungen an der Website
              oder an der Rechtslage dies erforderlich machen.
            </p>
            <p>
              Stand: <strong>[Platzhalter: Datum der letzten Aktualisierung eintragen]</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
