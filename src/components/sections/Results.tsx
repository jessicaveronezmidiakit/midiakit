import Image from "next/image";
import { creator, results } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

const maxCase = Math.max(...results.cases.map((item) => item.value));
const casesTotal = results.cases.reduce((sum, item) => sum + item.value, 0);
const casesTotalDisplay = `R$ ${(Math.floor(casesTotal / 100) / 10).toLocaleString("pt-BR")} mi`;

export function Results() {
  return (
    <section id="resultados" className="grain relative isolate overflow-hidden bg-marsala text-offwhite">
      <Image
        src="/generated/velvet-results.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/15 via-transparent to-ink/25" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:py-32">
        <div>
          <Reveal>
            <SectionTitle index="04&nbsp;&nbsp;&nbsp;•" eyebrow="Vendas geradas para marcas" title="Resultados" tone="light" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mt-14 text-offwhite/60">{results.gmvPrefix}</p>
            <p className="mt-3 font-display text-[clamp(3rem,6vw,5.5rem)] leading-none whitespace-nowrap text-offwhite">
              {results.gmv}
            </p>
            <p className="mt-3 text-offwhite/75">{results.gmvLabel}</p>
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-2 divide-x divide-offwhite/20 border-y border-offwhite/20">
              <div className="py-6 pr-6">
                <dt className="text-[13px] text-offwhite/60">Marcas atendidas</dt>
                <dd className="mt-1 font-display text-4xl">{creator.brandsServed}</dd>
              </div>
              <div className="py-6 pl-6">
                <dt className="text-[13px] text-offwhite/60">Principais redes de conversão</dt>
                <dd className="mt-1 font-display text-2xl leading-tight">{results.conversion}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="rounded-sm bg-offwhite px-6 py-8 text-ink shadow-[0_40px_90px_-40px_rgba(28,8,13,0.75)] sm:px-10 sm:py-10">
            <div className="flex items-end justify-between gap-6">
              <p className="eyebrow text-marsala">Cases em destaque</p>
              <p className="text-right text-[13px] text-ink/55">
                <span className="font-display text-2xl text-ink">{casesTotalDisplay}</span>
                <br />
                somados nos cases abaixo
              </p>
            </div>
            <ol className="mt-7 border-t border-marsala/20">
              {results.cases.map((item, index) => (
                <li key={item.brand} className="group border-b border-marsala/10 py-4 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline gap-4">
                    <span className="w-6 shrink-0 font-display text-sm text-marsala/50 tabular-nums italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 flex-1">
                      <span className="font-display text-2xl transition-colors group-hover:text-marsala sm:text-[1.7rem]">
                        {item.brand}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-ink/55 sm:mt-0 sm:ml-3 sm:inline">
                        {item.product}
                      </span>
                    </p>
                    <p className="shrink-0 font-semibold tabular-nums text-marsala">{item.display}</p>
                  </div>
                  <div className="mt-3 ml-10 h-1.5 rounded-full bg-marsala/10">
                    <div
                      className="bar-fill h-full rounded-full bg-marsala"
                      style={{
                        width: `${Math.max((item.value / maxCase) * 100, 1.5)}%`,
                        transitionDelay: `${400 + index * 90}ms`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
