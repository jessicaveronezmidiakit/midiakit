import Image from "next/image";
import { creator, measures } from "@/content/midia-kit";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

const photo = {
  src: "/generated/cutout-closet-v2.webp",
  alt: "Jéssica Veronez de blazer off-white e jeans, segurando uma jaqueta de couro",
  width: 1824,
  height: 2736,
};

/*
 * Pontos do corpo medidos no cutout-closet-v2, em % da largura (x) e da altura (y)
 * da foto. Precisam ser refeitos se a foto mudar.
 */
const HEAD_TOP = 13;
const FEET = 99;
const anchors: Record<string, { y: number; x: number; side: "left" | "right" }> = {
  Pele: { y: 22, x: 31, side: "left" },
  Busto: { y: 32, x: 30, side: "left" },
  Blusa: { y: 39, x: 36, side: "left" },
  Cintura: { y: 46, x: 30, side: "left" },
  Quadril: { y: 56, x: 30, side: "left" },
  Jeans: { y: 73, x: 35, side: "right" },
  Calçado: { y: 96, x: 35, side: "right" },
};

const height = measures.find((item) => item.label === "Altura");
const callouts = measures.filter((item) => anchors[item.label]);
const copyText = [`${creator.name} · medidas`, ...measures.map((item) => `${item.label}: ${item.value}`)].join("\n");

/* Mobile: a foto começa em 40% da largura do quadro e ocupa 100% dela. */
const MOBILE_PHOTO_LEFT = 40;

function SpecSheet() {
  return (
    <div className="relative -mx-6 -mt-6 aspect-[2/3] sm:-mx-10">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="100vw"
        className="absolute top-0 h-auto w-full max-w-none"
        style={{ left: `${MOBILE_PHOTO_LEFT}%` }}
      />
      <div
        aria-hidden
        className="absolute h-[3%] -translate-y-1/2 rounded-[50%] bg-ink/25 blur-lg"
        style={{ top: `${FEET}%`, left: "62%", width: "28%" }}
      />

      {height && (
        <div
          className="absolute left-6 flex w-6 flex-col items-center sm:left-10"
          style={{ top: `${HEAD_TOP}%`, bottom: `${100 - FEET}%` }}
        >
          <span className="h-px w-3 bg-marsala/50" />
          <span className="w-px flex-1 bg-marsala/30" />
          <p className="my-3 flex rotate-180 items-baseline gap-2 [writing-mode:vertical-rl]">
            <span className="text-[10px] tracking-[0.25em] text-ink/55 uppercase">{height.label}</span>
            <span className="font-display text-xl text-marsala">{height.value}</span>
          </p>
          <span className="w-px flex-1 bg-marsala/30" />
          <span className="h-px w-3 bg-marsala/50" />
        </div>
      )}
      <span
        aria-hidden
        className="absolute h-px border-t border-dashed border-marsala/25"
        style={{ top: `${HEAD_TOP}%`, left: "3.5rem", right: `${100 - 64}%` }}
      />

      <dl>
        {callouts.map((item) => {
          const { x, y } = anchors[item.label];
          return (
            <div
              key={item.label}
              className="absolute left-16 flex -translate-y-1/2 items-center sm:left-20"
              style={{ top: `${y}%`, right: `${100 - MOBILE_PHOTO_LEFT - x}%` }}
            >
              <div className="shrink-0">
                <dt className="text-[10px] tracking-[0.25em] text-ink/55 uppercase">{item.label}</dt>
                <dd className="font-display text-lg leading-tight text-marsala">{item.value}</dd>
              </div>
              <span aria-hidden className="mx-2 h-px flex-1 bg-marsala/35" />
              <span
                aria-hidden
                className="size-2 shrink-0 rounded-full bg-marsala ring-4 ring-offwhite/70"
              />
            </div>
          );
        })}
      </dl>
    </div>
  );
}

/*
 * Desktop: palco 12:7 com a foto (2:3) na altura toda. A largura da foto em % do
 * palco sai das duas proporções; PHOTO_X centraliza o corpo um pouco à esquerda
 * do meio, deixando a coluna da direita livre para o título.
 */
const STAGE_RATIO = 12 / 7;
const PHOTO_W = (2 / 3 / STAGE_RATIO) * 100;
const PHOTO_X = 34;
const stageX = (x: number) => PHOTO_X + (x * PHOTO_W) / 100;

function Callout({ label, value, side }: { label: string; value: string; side: "left" | "right" }) {
  const text = (
    <div className={`flex shrink-0 items-baseline gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}>
      <dt className={`text-[11px] tracking-[0.28em] text-ink/55 uppercase ${side === "left" ? "w-24" : ""}`}>
        {label}
      </dt>
      <dd className="font-display text-2xl leading-none text-marsala">{value}</dd>
    </div>
  );
  const line = <span aria-hidden className="mx-4 h-px flex-1 bg-gradient-to-r from-marsala/20 to-marsala/50" />;
  const dot = (
    <span aria-hidden className="relative grid size-3 shrink-0 place-items-center">
      <span className="absolute inset-0 rounded-full bg-marsala/20" />
      <span className="size-1.5 rounded-full bg-marsala" />
    </span>
  );
  return side === "left" ? (
    <>
      {text}
      {line}
      {dot}
    </>
  ) : (
    <>
      {dot}
      <span aria-hidden className="mx-4 h-px flex-1 bg-gradient-to-l from-marsala/20 to-marsala/50" />
      {text}
    </>
  );
}

function TechSheet() {
  return (
    <div className="relative" style={{ aspectRatio: STAGE_RATIO }}>
      <div
        aria-hidden
        className="absolute h-[4%] -translate-y-1/2 rounded-[50%] bg-ink/25 blur-xl"
        style={{ top: `${FEET}%`, left: `${stageX(8)}%`, width: `${PHOTO_W * 0.42}%` }}
      />
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="40vw"
        className="absolute top-0 h-full w-auto max-w-none"
        style={{ left: `${PHOTO_X}%` }}
      />

      {height && (
        <div
          className="absolute left-0 flex w-8 flex-col items-center"
          style={{ top: `${HEAD_TOP}%`, bottom: `${100 - FEET}%` }}
        >
          <span className="h-px w-4 bg-marsala/50" />
          <span className="w-px flex-1 bg-marsala/30" />
          <p className="my-4 flex rotate-180 items-baseline gap-3 [writing-mode:vertical-rl]">
            <span className="text-[11px] tracking-[0.28em] text-ink/55 uppercase">{height.label}</span>
            <span className="font-display text-3xl text-marsala">{height.value}</span>
          </p>
          <span className="w-px flex-1 bg-marsala/30" />
          <span className="h-px w-4 bg-marsala/50" />
        </div>
      )}
      <span
        aria-hidden
        className="absolute left-10 h-px border-t border-dashed border-marsala/25"
        style={{ top: `${HEAD_TOP}%`, right: `${100 - stageX(36)}%` }}
      />
      <span
        aria-hidden
        className="absolute left-10 h-px border-t border-dashed border-marsala/25"
        style={{ top: `${FEET}%`, right: `${100 - stageX(18)}%` }}
      />

      <dl>
        {callouts.map((item) => {
          const { x, y, side } = anchors[item.label];
          const position =
            side === "left"
              ? { left: "4.5rem", right: `${100 - stageX(x)}%` }
              : { left: `${stageX(x) - 0.4}%`, right: 0 };
          return (
            <div
              key={item.label}
              className="absolute flex -translate-y-1/2 items-center"
              style={{ top: `${y}%`, ...position }}
            >
              <Callout label={item.label} value={item.value} side={side} />
            </div>
          );
        })}
      </dl>

      <div className="absolute top-0 right-0" style={{ left: `${PHOTO_X + PHOTO_W * 0.92}%` }}>
        <Reveal>
          <SectionTitle index="06&nbsp;&nbsp;&nbsp;•" eyebrow="Para envio de produtos" title="Medidas" />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink/65">
            Tudo o que sua marca precisa para acertar no tamanho do recebido — da numeração ao tom
            de pele.
          </p>
          <CopyButton
            text={copyText}
            label="Copiar medidas"
            copiedLabel="Medidas copiadas"
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-marsala/30 px-5 py-2.5 text-sm font-medium text-marsala transition-colors hover:border-marsala hover:bg-marsala hover:text-offwhite"
          />
        </Reveal>
      </div>
    </div>
  );
}

export function Measures() {
  return (
    <section
      id="medidas"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_20%_80%,rgba(122,35,53,0.14),transparent_55%),linear-gradient(180deg,var(--offwhite),var(--sand))] lg:bg-[radial-gradient(ellipse_40%_55%_at_46%_60%,rgba(255,255,255,0.7),transparent),radial-gradient(ellipse_at_10%_90%,rgba(122,35,53,0.1),transparent_50%),linear-gradient(180deg,var(--offwhite),var(--sand))]"
    >
      <div className="px-6 pt-24 sm:px-10 lg:hidden">
        <Reveal>
          <SectionTitle index="06&nbsp;&nbsp;&nbsp;•" eyebrow="Para envio de produtos" title="Medidas" />
        </Reveal>
        <Reveal delay={120}>
          <SpecSheet />
        </Reveal>
      </div>

      <div className="mx-auto hidden max-w-7xl px-10 pt-28 pb-14 lg:block">
        <Reveal>
          <TechSheet />
        </Reveal>
      </div>
    </section>
  );
}
