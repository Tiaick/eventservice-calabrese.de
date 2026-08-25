import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AGB",
  description:
    `Allgemeine Geschäftsbedingungen von ${site.name} für die Vermietung, Lieferung ` +
    "sowie den Auf- und Abbau mobiler Veranstaltungsbühnen.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function AgbSeite() {
  return (
    <>
      <PageHeader
        blatt="Blatt 08"
        marke="Rechtliches"
        titel="AGB"
        lead="Allgemeine Geschäftsbedingungen für die Vermietung, Lieferung sowie den Auf- und Abbau mobiler Veranstaltungsbühnen."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="rechtstext">
            <address>
              Calabrese Eventservice
              <br />
              Inhaber: Calvin Corniche
              <br />
              {site.adresse.strasse}
              <br />
              {site.adresse.plz} {site.adresse.ort}
            </address>
            <p>– nachfolgend „Vermieter“ genannt –</p>

            <h2>§ 1 Geltungsbereich</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Verträge über
                die Vermietung, Lieferung, den Auf- und Abbau sowie gegebenenfalls die
                technische Betreuung von mobilen Bühnen, Bühnendächern,
                Veranstaltungstechnik und sonstigem Veranstaltungsequipment durch
                Calabrese Eventservice.
              </li>
              <li>
                Abweichende Geschäftsbedingungen des Kunden gelten nur, wenn der
                Vermieter deren Geltung ausdrücklich in Textform bestätigt hat.
              </li>
              <li>
                Individuelle Vereinbarungen im Angebot, Auftrag oder Vertrag haben
                Vorrang vor diesen Allgemeinen Geschäftsbedingungen.
              </li>
            </ol>

            <h2>§ 2 Vertragsschluss und Leistungsumfang</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Maßgeblich für Art und Umfang der Leistungen ist das jeweilige Angebot
                beziehungsweise die Auftragsbestätigung des Vermieters.
              </li>
              <li>
                Ein Vertrag kommt durch schriftliche oder elektronische
                Auftragsbestätigung, Unterzeichnung des Angebots oder ausdrückliche
                Annahme durch den Kunden zustande.
              </li>
              <li>
                Änderungen oder Erweiterungen des vereinbarten Leistungsumfangs bedürfen
                der Zustimmung des Vermieters und können gesondert berechnet werden.
              </li>
              <li>
                Abbildungen, technische Angaben, Maße und Darstellungen dienen der
                Beschreibung. Technisch notwendige oder sicherheitsbedingte Änderungen
                bleiben vorbehalten, sofern hierdurch der Vertragszweck nicht wesentlich
                beeinträchtigt wird.
              </li>
            </ol>

            <h2>§ 3 Zufahrt, Aufbaufläche und Mitwirkungspflichten des Kunden</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Der Kunde ist dafür verantwortlich, dass der Veranstaltungsort, die
                Zufahrt sowie die für die Bühne vorgesehene Aufbau- und Rangierfläche für
                die Anlieferung, den Aufbau, den Betrieb und den späteren Abbau der
                gebuchten Bühne geeignet sind.
              </li>
              <li>
                Insbesondere hat der Kunde sicherzustellen, dass:
                <ul>
                  <li>
                    eine ausreichende Zufahrtsmöglichkeit für die eingesetzten
                    Zugfahrzeuge, Transportfahrzeuge, Anhänger und gegebenenfalls LKW
                    besteht,
                  </li>
                  <li>ausreichende Durchfahrtsbreiten und Durchfahrtshöhen vorhanden sind,</li>
                  <li>
                    Tore, Zufahrten, Wege und Rangierflächen nicht durch Fahrzeuge,
                    Poller, Bäume, Äste, Schilder, Baustellen, Zäune oder sonstige
                    Hindernisse blockiert werden,
                  </li>
                  <li>die Zufahrt ausreichend befestigt und tragfähig ist,</li>
                  <li>ein gefahrloses Rangieren sowie Auf- und Abfahren möglich ist,</li>
                  <li>die vorgesehene Standfläche ausreichend groß, eben und tragfähig ist,</li>
                  <li>
                    der Untergrund die auftretenden Lasten der Bühne sowie
                    gegebenenfalls erforderlicher Ballastierungen und Abstützungen
                    aufnehmen kann,
                  </li>
                  <li>
                    keine dem Aufbau entgegenstehenden Leitungen, Schächte,
                    unterirdischen Einrichtungen oder sonstigen Hindernisse vorhanden
                    sind,
                  </li>
                  <li>
                    der Aufbau der Bühne auf der vorgesehenen Fläche rechtlich und
                    tatsächlich zulässig ist.
                  </li>
                </ul>
              </li>
              <li>
                Der Kunde ist verpflichtet, den Vermieter vor Vertragsschluss
                beziehungsweise unverzüglich nach Bekanntwerden über besondere
                Zufahrtsbedingungen, Bodenverhältnisse, Gefälle,
                Durchfahrtsbeschränkungen, Gewichtsbeschränkungen, enge Kurven,
                unbefestigte Flächen oder sonstige mögliche Hindernisse zu informieren.
              </li>
              <li>
                Vom Kunden übersandte Fotos, Videos, Pläne oder Beschreibungen ersetzen
                grundsätzlich keine Vor-Ort-Besichtigung und stellen keine verbindliche
                Bestätigung des Vermieters über die Eignung des Veranstaltungsortes dar,
                sofern eine solche Bestätigung nicht ausdrücklich in Textform erfolgt.
              </li>
              <li>
                Die endgültige Entscheidung darüber, ob die Zufahrt, Aufbaufläche und die
                örtlichen Gegebenheiten einen technisch und sicherheitstechnisch
                verantwortbaren Aufbau zulassen, trifft der Vermieter beziehungsweise
                dessen verantwortliches Fachpersonal vor Ort.
              </li>
              <li>
                Bestehen aus Sicht des Vermieters Zweifel an der Tragfähigkeit,
                Standsicherheit, Erreichbarkeit oder allgemeinen Sicherheit, ist der
                Vermieter berechtigt, den Aufbau zu verweigern oder abzubrechen.
              </li>
            </ol>

            <h2>§ 4 Nicht möglicher Aufbau aufgrund der örtlichen Gegebenheiten</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Kann die gebuchte Bühne am Veranstaltungsort nicht oder nicht vollständig
                aufgebaut werden, weil die Zufahrt, Durchfahrt, Rangiermöglichkeit,
                Aufbaufläche, Bodenbeschaffenheit, Tragfähigkeit, Platzverhältnisse oder
                sonstige vom Kunden beziehungsweise Grundstückseigentümer
                bereitzustellende Voraussetzungen nicht ausreichend oder ungeeignet sind,
                fällt dies grundsätzlich in den Verantwortungsbereich des Kunden.
              </li>
              <li>
                Dies gilt insbesondere dann, wenn:
                <ul>
                  <li>die Bühne oder das Transportfahrzeug den Veranstaltungsort nicht erreichen kann,</li>
                  <li>
                    die Zufahrt zu eng, zu niedrig, nicht ausreichend tragfähig oder
                    anderweitig ungeeignet ist,
                  </li>
                  <li>ein gefahrloses Rangieren nicht möglich ist,</li>
                  <li>die vorgesehene Fläche zu klein ist,</li>
                  <li>die Fläche ein zu starkes Gefälle aufweist,</li>
                  <li>der Untergrund nicht ausreichend tragfähig ist,</li>
                  <li>notwendige Abstützungen oder Ballastierungen nicht möglich sind,</li>
                  <li>Hindernisse einen sicheren Aufbau verhindern,</li>
                  <li>
                    der Kunde unrichtige oder unvollständige Angaben über die örtlichen
                    Verhältnisse gemacht hat,
                  </li>
                  <li>notwendige Flächen nicht rechtzeitig freigehalten wurden oder</li>
                  <li>
                    behördliche beziehungsweise grundstücksbezogene Voraussetzungen
                    nicht vorliegen, deren Beschaffung dem Kunden obliegt.
                  </li>
                </ul>
              </li>
              <li>
                In diesen Fällen bleibt die vereinbarte Vergütung grundsätzlich
                geschuldet. Bereits geleistete Zahlungen werden grundsätzlich nicht
                zurückerstattet, soweit dem keine zwingenden gesetzlichen Vorschriften
                entgegenstehen. Gesetzlich zwingend anzurechnende ersparte Aufwendungen
                oder anderweitige Vorteile bleiben unberührt.
              </li>
              <li>
                Der Kunde hat insbesondere keinen Anspruch auf Rückzahlung allein
                deshalb, weil die Bühne aufgrund ungeeigneter oder unzureichender
                Zufahrts-, Platz- oder Bodenverhältnisse nicht aufgebaut werden konnte,
                sofern diese Umstände nicht vom Vermieter zu vertreten sind.
              </li>
              <li>
                Entstehen durch einen erfolglosen Aufbauversuch, Wartezeiten,
                zusätzliche Anfahrten, notwendige Umplanungen, Rangiermaßnahmen,
                Personalmehrkosten oder einen späteren erneuten Aufbau weitere Kosten,
                können diese dem Kunden zusätzlich berechnet werden.
              </li>
              <li>
                Ist ein Aufbau an einer anderen Stelle des Veranstaltungsgeländes
                möglich, kann der Vermieter dem Kunden alternativ einen anderen
                Aufbauort anbieten. Ein Anspruch hierauf besteht nicht.
              </li>
              <li>
                Erstattet der Vermieter trotz fehlender rechtlicher Verpflichtung einen
                Teil oder die Gesamtheit bereits gezahlter Beträge, erfolgt diese
                Erstattung ausschließlich freiwillig und aus Kulanz.
              </li>
              <li>
                Eine Kulanzzahlung stellt weder ein Anerkenntnis einer Rechtspflicht noch
                ein Schuldanerkenntnis dar und begründet keinen Anspruch auf
                vergleichbare Erstattungen bei zukünftigen Aufträgen.
              </li>
            </ol>

            <h2>§ 5 Vor-Ort-Besichtigung</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Auf Wunsch des Kunden kann vor der Veranstaltung eine
                Vor-Ort-Besichtigung vereinbart werden.
              </li>
              <li>
                Kosten einer gesondert vereinbarten Vor-Ort-Besichtigung können
                zusätzlich berechnet werden.
              </li>
              <li>
                Ändern sich die örtlichen Verhältnisse nach der Besichtigung,
                insbesondere durch Baustellen, Absperrungen, aufgeweichte Flächen,
                abgestellte Fahrzeuge oder sonstige Hindernisse, liegt dies nicht im
                Verantwortungsbereich des Vermieters.
              </li>
            </ol>

            <h2>§ 6 Genehmigungen und behördliche Anforderungen</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Soweit im Angebot nicht ausdrücklich anders vereinbart, ist der Kunde
                beziehungsweise Veranstalter für sämtliche erforderlichen
                Genehmigungen, Anzeigen, Sondernutzungserlaubnisse und sonstigen
                behördlichen Anforderungen verantwortlich.
              </li>
              <li>
                Der Kunde hat insbesondere sicherzustellen, dass die Veranstaltung und
                das Aufstellen der Bühne am vorgesehenen Standort zulässig sind.
              </li>
              <li>
                Soweit erforderlich, sind Zufahrtsgenehmigungen, Straßensperrungen,
                Durchfahrtsgenehmigungen oder sonstige Genehmigungen durch den Kunden
                rechtzeitig zu beschaffen.
              </li>
              <li>
                Kann die Bühne wegen einer fehlenden Genehmigung, behördlichen
                Untersagung oder einer vom Kunden zu verantwortenden fehlenden
                Voraussetzung nicht aufgebaut werden, gelten die Regelungen aus § 4
                entsprechend.
              </li>
            </ol>

            <h2>§ 7 Auf- und Abbau</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Der Auf- und Abbau der Bühne darf ausschließlich durch den Vermieter
                oder durch vom Vermieter beauftragte beziehungsweise autorisierte
                Personen durchgeführt werden, soweit nichts anderes ausdrücklich
                vereinbart wurde.
              </li>
              <li>
                Der Kunde darf an tragenden Bauteilen, Dachkonstruktionen,
                Abspannungen, Stützen, Ballastierungen oder sicherheitsrelevanten
                Einrichtungen keine Veränderungen vornehmen.
              </li>
              <li>
                Vorgaben des Vermieters hinsichtlich der zulässigen Belastung und
                Nutzung der Bühne sind zwingend einzuhalten.
              </li>
              <li>Eigenmächtige Veränderungen können zur sofortigen Stilllegung der Bühne führen.</li>
              <li>
                Verzögerungen beim Aufbau, die durch den Kunden, andere Gewerke,
                fehlende Zufahrtsmöglichkeiten oder nicht freigehaltene Flächen
                verursacht werden, können zusätzlich berechnet werden.
              </li>
            </ol>

            <h2>§ 8 Nutzung der Bühne</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>Die Bühne darf ausschließlich für den vereinbarten Zweck verwendet werden.</li>
              <li>
                Die zulässigen Belastungen der Bühne und insbesondere des Bühnendaches
                dürfen nicht überschritten werden.
              </li>
              <li>
                Das Anbringen zusätzlicher Lasten wie:
                <ul>
                  <li>Lautsprecher,</li>
                  <li>LED-Wände,</li>
                  <li>Traversen,</li>
                  <li>Beleuchtungstechnik,</li>
                  <li>Banner,</li>
                  <li>Werbeanlagen,</li>
                  <li>Dekorationen,</li>
                  <li>Lautsprecher-Arrays oder</li>
                  <li>sonstiger hängender Lasten</li>
                </ul>
                bedarf der vorherigen Zustimmung des Vermieters.
              </li>
              <li>
                Der Kunde darf die Bühne ohne Zustimmung des Vermieters weder verändern
                noch an Dritte weitervermieten.
              </li>
            </ol>

            <h2>§ 9 Wetter und sicherheitsbedingte Maßnahmen</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Bei Veranstaltungen im Freien können Wetterbedingungen Einfluss auf den
                sicheren Betrieb der Bühne haben.
              </li>
              <li>
                Sicherheitsrelevante Entscheidungen über den Betrieb der Bühne trifft der
                Vermieter beziehungsweise eine von ihm eingesetzte fachkundige Person
                unter Berücksichtigung der technischen Vorgaben der Bühne.
              </li>
              <li>
                Bei starken Windbelastungen, Sturm, Gewitter oder sonstigen
                sicherheitsgefährdenden Wetterbedingungen kann der Vermieter
                insbesondere verlangen:
                <ul>
                  <li>Seitenplanen zu öffnen oder zu entfernen,</li>
                  <li>Banner und Werbeflächen zu entfernen,</li>
                  <li>Dachlasten zu reduzieren,</li>
                  <li>Veranstaltungen zu unterbrechen,</li>
                  <li>die Bühne zu räumen,</li>
                  <li>technische Einrichtungen außer Betrieb zu nehmen oder</li>
                  <li>die Bühne vollständig außer Betrieb zu nehmen.</li>
                </ul>
              </li>
              <li>
                Der Kunde und dessen Mitarbeiter haben solchen Sicherheitsanweisungen
                unverzüglich Folge zu leisten.
              </li>
              <li>
                Die Entscheidung über eine Absage oder Unterbrechung der Veranstaltung
                als solche liegt, soweit keine unmittelbare Gefahr besteht, beim
                Veranstalter.
              </li>
              <li>
                Gesetzliche Rechte der Vertragsparteien bei höherer Gewalt oder
                sonstiger nicht zu vertretender Unmöglichkeit bleiben unberührt.
              </li>
            </ol>

            <h2>§ 10 Beschädigungen und Haftung des Kunden</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>
                Der Kunde haftet nach den gesetzlichen Vorschriften für Schäden an der
                Bühne und dem sonstigen Mietmaterial, die von ihm, seinen Mitarbeitern,
                Beauftragten, Künstlern, Dienstleistern oder sonstigen Personen aus
                seinem Verantwortungsbereich verursacht werden.
              </li>
              <li>Schäden sind dem Vermieter unverzüglich mitzuteilen.</li>
              <li>
                Die Kosten für Reparaturen, Ersatzbeschaffungen, notwendige Prüfungen
                sowie gegebenenfalls entstehenden Nutzungsausfall können dem Kunden im
                gesetzlich zulässigen Umfang in Rechnung gestellt werden.
              </li>
              <li>Normale vertragsgemäße Abnutzung stellt keinen Schaden dar.</li>
            </ol>

            <h2>§ 11 Preise und Zahlungsbedingungen</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>Es gelten die im jeweiligen Angebot beziehungsweise Auftrag vereinbarten Preise.</li>
              <li>
                Zusätzliche Leistungen, die nicht Bestandteil des ursprünglichen
                Angebots sind, werden gesondert berechnet.
              </li>
              <li>
                Hierzu können insbesondere zählen:
                <ul>
                  <li>zusätzliche Anfahrten,</li>
                  <li>zusätzliche Personalstunden,</li>
                  <li>Wartezeiten,</li>
                  <li>zusätzliche Auf- oder Abbautage,</li>
                  <li>zusätzliche Ballastierung,</li>
                  <li>Änderungen des ursprünglich vereinbarten Aufbaus,</li>
                  <li>zusätzliche Transportleistungen oder</li>
                  <li>zusätzliche Veranstaltungstechnik.</li>
                </ul>
              </li>
              <li>Rechnungen sind innerhalb der auf der Rechnung angegebenen Zahlungsfrist ohne Abzug zu begleichen.</li>
              <li>Der Vermieter ist berechtigt, eine Anzahlung oder vollständige Vorauszahlung zu verlangen.</li>
            </ol>

            <h2>§ 12 Stornierung durch den Kunden</h2>
            <p>
              Storniert der Kunde einen bereits verbindlich gebuchten Auftrag, kann der
              Vermieter unter Berücksichtigung ersparter Aufwendungen eine angemessene
              Stornierungsentschädigung verlangen.
            </p>
            <p>
              Sofern im Angebot keine abweichende Regelung vereinbart wurde, beträgt
              diese:
            </p>
            <ul>
              <li>bis 30 Kalendertage vor dem vereinbarten Aufbautermin: 30 %</li>
              <li>15 bis 29 Kalendertage vorher: 50 %</li>
              <li>7 bis 14 Kalendertage vorher: 75 %</li>
              <li>weniger als 7 Kalendertage vorher: 90 %</li>
            </ul>
            <p>der vereinbarten Auftragssumme.</p>
            <p>
              Dem Kunden bleibt ausdrücklich der Nachweis gestattet, dass dem Vermieter
              kein oder ein wesentlich geringerer Schaden entstanden ist.
            </p>
            <p>Dem Vermieter bleibt der Nachweis eines tatsächlich höheren Schadens vorbehalten.</p>
            <p>
              Kann die Bühne für denselben Zeitraum anderweitig vermietet werden, sind
              hierdurch erzielte beziehungsweise gesetzlich anzurechnende Vorteile zu
              berücksichtigen.
            </p>

            <h2>§ 13 Haftung des Vermieters</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>Der Vermieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit.</li>
              <li>
                Ebenfalls unbeschränkt haftet der Vermieter bei Schäden aus der
                Verletzung des Lebens, des Körpers oder der Gesundheit nach Maßgabe der
                gesetzlichen Vorschriften.
              </li>
              <li>
                Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist
                die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt,
                soweit dies gesetzlich zulässig ist.
              </li>
              <li>
                Eine Haftung des Vermieters für Umstände, die ausschließlich aus dem
                Verantwortungsbereich des Kunden, Veranstalters, Grundstückseigentümers
                oder anderer vom Kunden eingesetzter Dienstleister stammen, ist
                ausgeschlossen, soweit gesetzlich zulässig.
              </li>
            </ol>

            <h2>§ 14 Veranstaltungsausfall</h2>
            <p>
              Das allgemeine wirtschaftliche Risiko der Veranstaltung, insbesondere
              geringe Besucherzahlen, Künstlerausfälle, Programmänderungen oder eine
              vom Veranstalter vorgenommene Absage, liegt grundsätzlich beim Kunden.
            </p>
            <p>
              Gesetzliche Rechte bei höherer Gewalt oder sonstigen Umständen, für die
              keine der Parteien verantwortlich ist, bleiben hiervon unberührt.
            </p>

            <h2>§ 15 Eigentum</h2>
            <p>Sämtliche vermieteten Gegenstände bleiben Eigentum des Vermieters.</p>
            <p>
              Eine Veräußerung, Verpfändung, Untervermietung oder sonstige Weitergabe
              ohne Zustimmung des Vermieters ist untersagt.
            </p>

            <h2>§ 16 Aufrechnung und Zurückbehaltungsrechte</h2>
            <p>Für Aufrechnung und Zurückbehaltungsrechte gelten die gesetzlichen Bestimmungen.</p>

            <h2>§ 17 Gerichtsstand und anwendbares Recht</h2>
            <ol className="list-decimal pl-6 marker:text-flare-500">
              <li>Es gilt das Recht der Bundesrepublik Deutschland.</li>
              <li>
                Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder
                öffentlich-rechtliches Sondervermögen, wird für sämtliche
                Streitigkeiten aus dem Vertragsverhältnis – soweit gesetzlich zulässig –
                der Sitz des Vermieters als Gerichtsstand vereinbart.
              </li>
              <li>Gegenüber Verbrauchern gelten die gesetzlichen Gerichtsstandsregelungen.</li>
            </ol>

            <h2>§ 18 Schlussbestimmungen</h2>
            <p>
              Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen
              unwirksam oder undurchführbar sein oder werden, bleiben die übrigen
              Bestimmungen davon unberührt. Anstelle der unwirksamen Bestimmung gelten
              die gesetzlichen Vorschriften.
            </p>
            <p>Stand: August 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
