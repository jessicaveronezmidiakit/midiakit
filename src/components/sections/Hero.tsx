import Image from "next/image";
import { creator, navLinks, results, social } from "@/content/midia-kit";
const keyStats = [
  { value: social.instagram.followers, label: "seguidores no Instagram" },
  { value: social.tiktok.followers, label: "seguidores no TikTok" },
  { value: creator.brandsServed, label: "marcas atendidas" },
  { value: `+${results.gmv}`, label: "GMV médio · 6 meses" },
];

export function Hero() {
  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] overflow-hidden bg-ink text-offwhite">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,rgba(122,35,53,0.45),transparent_60%)]" />

      <p
        aria-hidden
        className="animate-hero-fade pointer-events-none absolute inset-x-0 top-[15svh] -z-10 select-none text-center font-display text-[19vw] leading-none font-black whitespace-nowrap text-offwhite/[0.07] uppercase lg:inset-x-auto lg:top-1/2 lg:left-[0.5vw] lg:-translate-y-1/2 lg:rotate-180 lg:text-[min(19svh,13vw)] lg:[writing-mode:vertical-rl]"
      >
        {creator.lastName}
      </p>

      <div className="animate-hero-rise absolute right-[-18%] bottom-0 -z-10 h-[78svh] w-auto sm:right-[-4%] lg:right-[8%] lg:h-[92svh]">
        <Image
          src="/generated/cutout-trench-v2.webp"
          alt="Jéssica Veronez de trench coat caramelo, braços cruzados"
          width={912}
          height={1368}
          preload
          sizes="(min-width: 1024px) 40vw, 70vw"
          className="h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-ink via-ink/75 to-transparent lg:hidden" />

      <p
        aria-hidden
        className="eyebrow absolute top-1/2 right-5 hidden -translate-y-1/2 rotate-180 text-offwhite/35 [writing-mode:vertical-rl] lg:block"
      >
        Beleza · Moda · Lifestyle — {creator.city}
      </p>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between px-6 pt-8 pb-12 sm:px-10 lg:pb-10">
        <header className="flex items-center justify-between gap-8">
          <span className="font-display text-2xl italic">JV</span>
          <nav aria-label="Seções do mídia kit" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[13px] text-offwhite/65">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-offwhite">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span className="eyebrow text-offwhite/70">Mídia Kit · 2026</span>
        </header>

        <div className="max-w-xl pt-[34svh] sm:pt-0">
          <p className="eyebrow flex items-center gap-3 text-accent">
            <span aria-hidden className="h-px w-8 bg-current opacity-60" />
            {creator.role}
          </p>
          <h1 className="mt-5 font-display text-[clamp(4rem,min(11vw,15svh),9.5rem)] leading-[0.86] tracking-tight">
            {creator.firstName}
            <br />
            <span className="italic">{creator.lastName}</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-offwhite/85 sm:text-xl">
            Estilo com verdade: curadoria honesta de moda e beleza para mulheres que querem se
            sentir bem com quem são.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-offwhite px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-accent"
            >
              Fechar uma parceria
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#redes"
              className="text-sm font-medium text-offwhite/80 underline decoration-offwhite/30 underline-offset-8 transition-colors hover:text-offwhite hover:decoration-accent"
            >
              Ver números
            </a>
          </div>
        </div>

        <dl className="hidden max-w-2xl grid-cols-4 divide-x divide-offwhite/15 border-t border-offwhite/15 pt-6 lg:grid">
          {keyStats.map((stat) => (
            <div key={stat.label} className="px-6 first:pl-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl whitespace-nowrap text-offwhite">{stat.value}</dd>
              <dd className="mt-1.5 text-xs leading-snug text-offwhite/55">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
