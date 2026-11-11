import type { CSSProperties } from "react";
import Image from "next/image";
import { audience } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";

const { profile } = audience;

function Ring({ value }: { value: string }) {
  const percent = Number.parseFloat(value.replace(",", "."));
  return (
    <div className="relative aspect-square w-full max-w-[8.5rem]">
      <svg aria-hidden viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="1" className="text-marsala/15" />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={100}
          className="ring-progress text-marsala"
          style={{ "--ring-offset": 100 - percent } as CSSProperties}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-[1.6rem] text-marsala sm:text-3xl">
        {value}
      </span>
    </div>
  );
}

export function Audience() {
  return (
    <section
      id="publico"
      className="relative isolate overflow-hidden bg-[linear-gradient(160deg,var(--offwhite)_0%,var(--sand)_100%)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 flex flex-col items-center font-display text-[19vw] leading-[0.82] font-black text-marsala uppercase select-none lg:top-16 lg:left-auto lg:right-[3vw] lg:items-end lg:text-[8.5vw]"
      >
        <span className="opacity-90">Público</span>
        <span className="outline-text opacity-60">Público</span>
        <span className="outline-text opacity-30">Público</span>
      </div>

      <div className="mx-auto grid max-w-7xl items-end gap-10 px-6 pt-[62vw] sm:px-10 lg:grid-cols-2 lg:pt-36">
        <div className="lg:pb-32">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-marsala">
              <span className="font-display text-[0.8rem] tracking-normal">03&nbsp;&nbsp;&nbsp;•</span>
              Quem acompanha
            </p>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-ink sm:text-3xl">
              Mulheres a partir dos 25 anos, das classes A e B, que buscam{" "}
              <span className="text-marsala italic">estilo, beleza e qualidade de vida.</span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              {audience.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <Ring value={item.value} />
                  </dd>
                  <dd className="mt-3 text-[13px] leading-snug text-ink/60 sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-2 border-y border-marsala/15">
              <div className="py-5 pr-5">
                <dt className="eyebrow text-[0.65rem] text-ink/50">Gênero</dt>
                <dd className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-display text-[1.75rem] leading-none text-ink sm:text-3xl">{profile.gender.value}</span>
                  <span className="text-[13px] text-marsala italic">{profile.gender.note}</span>
                </dd>
              </div>

              <div className="border-l border-marsala/15 py-5 pl-5">
                <dt className="eyebrow text-[0.65rem] text-ink/50">Classe social</dt>
                <dd className="mt-3 flex items-baseline gap-2 font-display text-[1.75rem] leading-none text-marsala sm:text-3xl">
                  {profile.classes.map((item, index) => (
                    <span key={item} className="contents">
                      {index > 0 && <span className="text-lg text-ink/35 italic">&amp;</span>}
                      <span>{item}</span>
                    </span>
                  ))}
                </dd>
              </div>

              <div className="border-t border-marsala/15 py-5 pr-5">
                <dt className="eyebrow text-[0.65rem] text-ink/50">Faixas etárias</dt>
                <dd className="mt-3">
                  <ol className="flex flex-col gap-y-1 font-display text-xl leading-tight text-ink tabular-nums sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2.5 sm:gap-y-1.5 sm:text-2xl sm:leading-none">
                    {profile.ages.map((age, index) => (
                      <li key={age} className="flex items-baseline gap-2.5">
                        {index > 0 && (
                          <span aria-hidden className="hidden size-1 self-center rounded-full bg-marsala/50 sm:block" />
                        )}
                        <span>
                          {age.split(/([–+])/).map((part, partIndex) =>
                            part === "–" || part === "+" ? (
                              <span key={partIndex} className="mx-px align-[0.1em] font-sans text-[0.6em] font-light text-marsala">
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <span className="mt-1.5 block text-[13px] text-ink/55">anos</span>
                </dd>
              </div>

              <div className="border-t border-l border-marsala/15 py-5 pl-5">
                <dt className="eyebrow text-[0.65rem] text-ink/50">Principais cidades</dt>
                <dd className="mt-3">
                  <ol className="flex flex-wrap gap-x-3 gap-y-1 font-display text-xl leading-tight text-ink">
                    {profile.cities.map((city, index) => (
                      <li key={city} className="flex items-baseline gap-1">
                        <span className="text-[0.6em] text-marsala/60 italic">{String(index + 1).padStart(2, "0")}</span>
                        {city}
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative -mt-4 lg:mt-0">
          {/* Posições das sombras medidas no recorte: pés da cadeira a ~87% e ~88,5% da altura. */}
          <div
            aria-hidden
            className="absolute top-[88%] right-[30%] left-[0%] h-[9%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(122,35,53,0.16)_0%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute top-[88%] right-[36%] left-[5%] h-[4%] -translate-y-1/2 rounded-[50%] bg-ink/25 blur-lg"
          />
          <div
            aria-hidden
            className="absolute top-[87.4%] left-[6.5%] h-[1.6%] w-[6%] -translate-y-1/2 rounded-[50%] bg-ink/45 blur-[3px]"
          />
          <div
            aria-hidden
            className="absolute top-[88.6%] left-[58.5%] h-[1.6%] w-[4.5%] -translate-y-1/2 rounded-[50%] bg-ink/45 blur-[3px]"
          />
          <Image
            src="/generated/cutout-relax-v2.webp"
            alt="Jéssica Veronez reclinada em cadeira, com os pés para cima e sorrindo"
            width={1500}
            height={1500}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
