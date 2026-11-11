import { contentFormats, deliverables, whatsappLink } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionTitle } from "@/components/SectionTitle";

export function Formats() {
  return (
    <section id="formatos" className="relative isolate overflow-hidden bg-offwhite">
      <SectionBackground
        desktop="/generated/satin-formats.webp"
        mobile="/generated/satin-formats-mobile.webp"
        frameClassName="inset-x-0 bottom-0 aspect-[9/16] lg:inset-0 lg:aspect-auto"
        className="object-cover object-bottom opacity-80 [mask-image:linear-gradient(to_bottom,transparent,black_35%)] lg:object-left-bottom lg:opacity-60 lg:[mask-image:none]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-offwhite from-55% to-offwhite/10 lg:bg-gradient-to-br lg:from-offwhite/90 lg:from-0% lg:via-offwhite/80 lg:to-offwhite/40" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-20 sm:px-10 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:py-32">
        <div>
          <Reveal>
            <SectionTitle index="05&nbsp;&nbsp;&nbsp;•" eyebrow="O que eu crio" title="Formatos" />
          </Reveal>
          <Reveal delay={120}>
            <ol className="mt-12 border-t border-marsala/15">
              {contentFormats.map((format, index) => (
                <li key={format} className="flex items-baseline gap-5 border-b border-marsala/15 py-3.5">
                  <span className="w-6 shrink-0 text-xs text-marsala/60 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl text-ink/85 italic sm:text-[1.7rem]">{format}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pt-4">
          <div className="flex items-end justify-between gap-6 pb-4">
            <p className="eyebrow text-marsala">Entregas</p>
            <p className="eyebrow text-ink/40">Valores sob consulta</p>
          </div>
          <ul>
            {deliverables.map((item) => (
              <li key={item.format}>
                <a
                  href={whatsappLink(`Olá, Jéssica! Vi seu mídia kit e quero consultar o valor de: ${item.format}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar valor de ${item.format} pelo WhatsApp`}
                  className="group flex items-center gap-3 py-4"
                >
                  <span className="min-w-0">
                    <span className="block text-[17px] text-ink transition-colors group-hover:text-marsala">
                      {item.format}
                    </span>
                    {item.note && <span className="mt-1 block text-sm text-ink/55">{item.note}</span>}
                  </span>
                  <span aria-hidden className="min-w-4 flex-1 border-b border-dotted border-ink/25" />
                  <span
                    aria-hidden
                    className="inline-flex shrink-0 rounded-full border border-marsala/35 px-3.5 py-1.5 text-xs font-semibold text-marsala transition-colors group-hover:border-marsala group-hover:bg-marsala group-hover:text-offwhite"
                  >
                    Consultar<span className="hidden sm:inline">&nbsp;valor</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-5 rounded-sm border border-marsala/15 bg-offwhite/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-ink/65">
              Valores sob consulta, com pacotes e condições
              <br className="hidden sm:block" /> montados sob medida para cada marca.
            </p>
            <a
              href={whatsappLink("Olá, Jéssica! Vi seu mídia kit e quero consultar valores e pacotes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-marsala px-6 py-3 text-sm font-semibold text-offwhite transition-colors hover:bg-ink sm:self-auto"
            >
              Consultar valores
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
