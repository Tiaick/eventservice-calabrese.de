import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { PlatzhalterHinweis } from "@/components/platzhalter-hinweis";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${site.name}.`,
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumSeite() {
  return (
    <>
      <PageHeader
        blatt="Blatt 06"
        marke="Rechtliches"
        titel="Impressum"
        lead="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      />

      <section className="section-y">
        <div className="container-page">
          <PlatzhalterHinweis>
            Die Steuernummer wurde vom Schwesterbetrieb Restaurant Calabrese (gleicher
            Inhaber, gleiche Anschrift) übernommen, da für Eventservice Calabrese keine
            eigene vorlag. Bitte vor der Veröffentlichung bestätigen, dass sie auch für
            diesen Geschäftsbereich gilt, und den gesamten Text durch die zuständige
            Rechtsberatung prüfen lassen.
          </PlatzhalterHinweis>

          <div className="rechtstext">
            <h2>Diensteanbieter</h2>
            <address>
              {site.legalName}
              <br />
              Inhaber: Calvin Corniche
              <br />
              {site.adresse.strasse}
              <br />
              {site.adresse.plz} {site.adresse.ort}
              <br />
              {site.adresse.land}
            </address>

            <h3>Vertreten durch</h3>
            <p>Calvin Corniche</p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${site.telefon.link}`}>{site.telefon.anzeige}</a>
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>

            <h2>Registereintrag und Steuerangaben</h2>
            <p>
              Rechtsform: Einzelunternehmen
              <br />
              Steuernummer: 11/031/06109
            </p>

            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich im Sinne von § 18 Abs. 2 Medienstaatsvertrag (MStV):
              <br />
              Calvin Corniche, Anschrift wie oben.
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8
              bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
              Rechtsverletzungen entfernen wir diese Inhalte umgehend.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              beziehungsweise Erstellers.
            </p>

            <h3>Bildnachweise</h3>
            <p>
              Ein Teil der auf dieser Website verwendeten Fotos stammt von Unsplash
              (Unsplash-Lizenz, kostenlose kommerzielle Nutzung). Die übrigen Aufnahmen
              sind eigene Fotos von Eventservice Calabrese.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
