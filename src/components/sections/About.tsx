import Image from "next/image";
import { about, creator } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionTitle } from "@/components/SectionTitle";

const facts = [
  { value: creator.brandsServed, label: "marcas atendidas" },
  { value: "1–2", label: "anos criando" },
  { value: "PR", label: creator.city },
];

const pillars = ["Consultoria de imagem e estilo", "Curadoria honesta", "Dia a dia real", "TikTok Shop"];

export function About() {
  const [lead, ...rest] = about;
  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-offwhite">
      <SectionBackground
        desktop="/generated/satin-about.webp"
        className="object-cover object-left-bottom"
      />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-transparent from-25% via-offwhite/90 via-50% to-offwhite lg:block" />

      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 pt-24 sm:px-10 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:pt-32">
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-x-[5%] top-[13%] bottom-0 rounded-t-full bg-[linear-gradient(180deg,#e4d0bd,rgba(233,221,209,0.6))]"
          />
          <div
            aria-hidden
            className="absolute inset-x-[1.5%] top-[9.5%] bottom-0 rounded-t-full border border-b-0 border-marsala/30"
          />
          <Image
            src="/generated/cutout-smile-v2.webp"
            alt="Jéssica Veronez sorrindo com terno marsala, segurando um moodboard de moda"
            width={912}
            height={1368}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="relative h-auto w-full"
          />
        </Reveal>

        <div className="order-1 pb-4 lg:order-2 lg:pb-28">
          <Reveal>
            <SectionTitle index="01&nbsp;&nbsp;&nbsp;•" eyebrow="Quem é" title="Sobre" />
          </Reveal>
          <div className="mt-10 space-y-5 leading-relaxed text-ink/75">
            <Reveal>
              <p className="text-lg text-ink first-letter:float-left first-letter:mt-1.5 first-letter:mr-3 first-letter:font-display first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-marsala sm:text-xl">
                {lead}
              </p>
            </Reveal>
            {rest.map((paragraph, index) => (
              <Reveal key={index} delay={(index + 1) * 120}>
                <p className="text-base sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-wrap sm:gap-2">
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-start gap-2.5 text-[13px] leading-snug text-marsala sm:rounded-full sm:border sm:border-marsala/25 sm:bg-offwhite/60 sm:px-4 sm:py-1.5"
                >
                  <span aria-hidden className="mt-[0.4em] size-1.5 shrink-0 rotate-45 bg-marsala/70 sm:hidden" />
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-marsala/15 border-t border-marsala/25 pt-8">
              {facts.map((fact) => (
                <div key={fact.label} className="px-4 first:pl-0 sm:px-6">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-display text-4xl text-marsala sm:text-5xl">{fact.value}</dd>
                  <dd className="mt-2 text-sm text-ink/60">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
