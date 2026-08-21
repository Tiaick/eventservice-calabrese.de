"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef } from "react";

import { kontaktAbsenden } from "@/app/kontakt/actions";
import { IconCheck } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { startZustand } from "@/lib/kontakt-formular";
import { cn } from "@/lib/utils";

const feldBasis =
  "w-full border bg-ink-950 px-4 py-3.5 font-mono text-datum text-ink-100 transition-colors duration-200 " +
  "placeholder:text-ink-500 hover:border-ink-100/25 focus:border-flare-500 focus:outline-none";

export function ContactForm() {
  const [zustand, absenden, laeuft] = useActionState(kontaktAbsenden, startZustand);
  const formRef = useRef<HTMLFormElement>(null);
  const meldungRef = useRef<HTMLDivElement>(null);
  const id = useId();

  /* Nach dem Absenden das Formular leeren und die Rückmeldung anfahren, damit
     der Erfolg auch auf dem Handy sichtbar wird. */
  useEffect(() => {
    if (zustand.status === "erfolg") {
      formRef.current?.reset();
    }
    if (zustand.status !== "leer") {
      meldungRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [zustand]);

  const feldFehler = (feld: keyof NonNullable<typeof zustand.fehler>) =>
    zustand.fehler?.[feld];

  return (
    <div>
      {/* Statusmeldung – für Screenreader angekündigt */}
      <div ref={meldungRef} aria-live="polite" aria-atomic="true">
        {zustand.status !== "leer" && zustand.meldung ? (
          <div
            className={cn(
              "mb-8 flex items-start gap-4 border-l-2 p-5",
              zustand.status === "erfolg"
                ? "border-flare-500 bg-flare-500/[0.07]"
                : "border-red-500 bg-red-500/[0.07]",
            )}
          >
            {zustand.status === "erfolg" ? (
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-flare-400" />
            ) : (
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-red-400 font-mono text-xs font-medium text-red-400"
              >
                !
              </span>
            )}
            <p
              className={cn(
                "text-sm leading-relaxed",
                zustand.status === "erfolg" ? "text-ink-100" : "text-red-200",
              )}
            >
              {zustand.meldung}
            </p>
          </div>
        ) : null}
      </div>

      <form ref={formRef} action={absenden} noValidate className="space-y-6">
        {/* Honeypot – für Menschen unsichtbar, für Bots verlockend */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${id}-webseite`}>Webseite (bitte frei lassen)</label>
          <input
            id={`${id}-webseite`}
            type="text"
            name="webseite"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Feld
            id={`${id}-name`}
            name="name"
            label="Name"
            pflicht
            autoComplete="name"
            placeholder="Ihr Name"
            fehler={feldFehler("name")}
            standard={zustand.werte?.name}
          />
          <Feld
            id={`${id}-email`}
            name="email"
            type="email"
            label="E-Mail"
            pflicht
            autoComplete="email"
            placeholder="name@beispiel.de"
            fehler={feldFehler("email")}
            standard={zustand.werte?.email}
          />
          <Feld
            id={`${id}-telefon`}
            name="telefon"
            type="tel"
            label="Telefon"
            hinweis="optional"
            autoComplete="tel"
            placeholder="Für kurze Rückfragen"
            standard={zustand.werte?.telefon}
          />
          <Feld
            id={`${id}-datum`}
            name="datum"
            type="date"
            label="Wunschtermin"
            hinweis="optional"
            standard={zustand.werte?.datum}
          />
        </div>

        {/* Anlass */}
        <div>
          <label
            htmlFor={`${id}-anlass`}
            className="mb-2.5 flex items-baseline gap-2 font-mono text-label text-ink-300 uppercase"
          >
            Anlass
            <span className="font-sans text-[0.7rem] tracking-normal text-ink-500 normal-case">
              optional
            </span>
          </label>
          <select
            id={`${id}-anlass`}
            name="anlass"
            defaultValue={zustand.werte?.anlass ?? ""}
            className={cn(feldBasis, "border-ink-100/15 appearance-none")}
          >
            <option value="">Bitte auswählen</option>
            <option>Stadt- oder Gemeindefest</option>
            <option>Bürgerempfang oder Jubiläum</option>
            <option>Großveranstaltung / Open Air</option>
            <option>Vereinsfest</option>
            <option>Firmenevent</option>
            <option>Nur Technik (Bühne, Licht, Ton)</option>
            <option>Gastronomie oder Standmanagement</option>
            <option>Etwas anderes</option>
          </select>
        </div>

        {/* Nachricht */}
        <div>
          <label
            htmlFor={`${id}-nachricht`}
            className="mb-2.5 flex items-baseline gap-2 font-mono text-label text-ink-300 uppercase"
          >
            Nachricht
            <span aria-hidden="true" className="text-flare-500">
              *
            </span>
          </label>
          <textarea
            id={`${id}-nachricht`}
            name="nachricht"
            rows={6}
            required
            defaultValue={zustand.werte?.nachricht}
            aria-invalid={feldFehler("nachricht") ? true : undefined}
            aria-describedby={
              feldFehler("nachricht") ? `${id}-nachricht-fehler` : undefined
            }
            placeholder="Wo findet die Veranstaltung statt, wie viele Gäste erwarten Sie, und was brauchen Sie von uns?"
            className={cn(
              feldBasis,
              "resize-y",
              feldFehler("nachricht") ? "border-red-500/70" : "border-ink-100/15",
            )}
          />
          {feldFehler("nachricht") ? (
            <p id={`${id}-nachricht-fehler`} className="mt-2 text-sm text-red-400">
              {feldFehler("nachricht")}
            </p>
          ) : null}
        </div>

        {/* Einwilligung */}
        <div>
          <label
            htmlFor={`${id}-datenschutz`}
            className="flex cursor-pointer items-start gap-3.5"
          >
            <input
              id={`${id}-datenschutz`}
              type="checkbox"
              name="datenschutz"
              value="ja"
              required
              aria-invalid={feldFehler("datenschutz") ? true : undefined}
              aria-describedby={
                feldFehler("datenschutz") ? `${id}-datenschutz-fehler` : undefined
              }
              className={cn(
                "mt-0.5 h-5 w-5 shrink-0 appearance-none border bg-ink-950 transition-colors",
                "checked:border-flare-500 checked:bg-flare-500",
                "checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2308090b%22 stroke-width=%223%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m4.5 12.5 5 5 10-11%22/></svg>')] checked:bg-contain checked:bg-center checked:bg-no-repeat",
                feldFehler("datenschutz") ? "border-red-500/70" : "border-ink-100/25",
              )}
            />
            <span className="text-sm leading-relaxed text-ink-300">
              Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner
              Anfrage verarbeitet werden. Weitere Hinweise dazu in der{" "}
              <Link
                href="/datenschutz"
                className="text-flare-400 underline underline-offset-4 hover:text-flare-300"
              >
                Datenschutzerklärung
              </Link>
              .{" "}
              <span aria-hidden="true" className="text-flare-500">
                *
              </span>
            </span>
          </label>
          {feldFehler("datenschutz") ? (
            <p id={`${id}-datenschutz-fehler`} className="mt-2 text-sm text-red-400">
              {feldFehler("datenschutz")}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-2">
          <Button type="submit" groesse="lg" disabled={laeuft}>
            {laeuft ? "Wird gesendet …" : "Anfrage absenden"}
          </Button>
          <p className="text-xs text-ink-500">
            <span aria-hidden="true" className="text-flare-500">
              *
            </span>{" "}
            Pflichtfelder
          </p>
        </div>
      </form>
    </div>
  );
}

/** Einzelnes Textfeld mit Label, Pflichtkennzeichnung und Fehlermeldung. */
function Feld({
  id,
  name,
  label,
  type = "text",
  pflicht = false,
  hinweis,
  placeholder,
  autoComplete,
  fehler,
  standard,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  pflicht?: boolean;
  hinweis?: string;
  placeholder?: string;
  autoComplete?: string;
  fehler?: string;
  standard?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 flex items-baseline gap-2 font-mono text-label text-ink-300 uppercase"
      >
        {label}
        {pflicht ? (
          <span aria-hidden="true" className="text-flare-500">
            *
          </span>
        ) : null}
        {hinweis ? (
          <span className="font-sans text-[0.7rem] tracking-normal text-ink-500 normal-case">
            {hinweis}
          </span>
        ) : null}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={pflicht}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={standard}
        aria-invalid={fehler ? true : undefined}
        aria-describedby={fehler ? `${id}-fehler` : undefined}
        className={cn(feldBasis, fehler ? "border-red-500/70" : "border-ink-100/15")}
      />

      {fehler ? (
        <p id={`${id}-fehler`} className="mt-2 text-sm text-red-400">
          {fehler}
        </p>
      ) : null}
    </div>
  );
}
