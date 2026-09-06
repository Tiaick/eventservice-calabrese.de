import { IconPlus } from "@/components/icons";
import { Sektionsmarke } from "@/components/plan";
import { Reveal } from "@/components/reveal";
import type { FAQEintrag } from "@/lib/content";
import { cn } from "@/lib/utils";

type FAQSectionProps = {
  nummer?: string;
  marke?: string;
  titel: string;
  lead?: string;
  eintraege: FAQEintrag[];
  className?: string;
};

/**
 * Frage-Antwort-Block, aufgebaut aus nativen <details>/<summary>-Elementen –
 * funktioniert ohne Client-JavaScript und ist per Tastatur bedienbar.
 *
 * Das FAQPage-Schema wird direkt aus `eintraege` erzeugt, damit sichtbarer
 * Inhalt und strukturierte Daten nie auseinanderlaufen können.
 */
export function FAQSection({
  nummer,
  marke = "Häufige Fragen",
  titel,
  lead,
  eintraege,
  className,
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eintraege.map((eintrag) => ({
      "@type": "Question",
      name: eintrag.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: eintrag.antwort,
      },
    })),
  };

  return (
    <section className={cn("section-y border-t border-ink-100/12", className)}>
      <div className="container-page">
        <Reveal>
          <Sektionsmarke nummer={nummer}>{marke}</Sektionsmarke>
          <h2 className="mt-6 max-w-3xl text-h2 uppercase text-white">{titel}</h2>
          {lead ? <p className="mt-6 max-w-2xl text-lead text-ink-300">{lead}</p> : null}
        </Reveal>

        <Reveal verzoegerung={90} className="mt-12 max-w-3xl border-t border-ink-100/15">
          {eintraege.map((eintrag, i) => (
            <details key={eintrag.frage} className="group border-b border-ink-100/15 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4">
                  <span className="w-7 shrink-0 font-mono text-label text-flare-500 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-h4 uppercase text-white">
                    {eintrag.frage}
                  </span>
                </span>
                <IconPlus className="mt-1.5 h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 pl-11 leading-relaxed text-ink-400">{eintrag.antwort}</p>
            </details>
          ))}
        </Reveal>
      </div>

      {/* JSON-LD wird 1:1 aus den sichtbaren Einträgen oben erzeugt. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
