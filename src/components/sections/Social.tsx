import { contact, metricsPeriod, social, totalFollowers } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialIcon } from "@/components/SocialIcon";

type NetworkKey = keyof typeof social;

function NetworkPanel({ network }: { network: NetworkKey }) {
  const data = social[network];
  const profile = contact[network];
  return (
    <div className="border-t border-offwhite/20 pt-7">
      <div className="flex items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 text-offwhite/75">
          <SocialIcon network={network} className="size-[18px]" />
          <span className="eyebrow">{data.label}</span>
        </p>
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-offwhite/70 transition-colors hover:text-accent"
        >
          {profile.handle}
        </a>
      </div>
      <p className="mt-6 font-display text-7xl leading-none text-offwhite sm:text-8xl">{data.followers}</p>
      <p className="mt-2 text-sm text-offwhite/55">seguidores</p>
      <dl className="mt-9 grid grid-cols-2 border-t border-offwhite/10">
        {data.metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`border-b border-offwhite/10 py-5 ${index % 2 === 0 ? "pr-5" : "border-l pl-5"}`}
          >
            <dt className="sr-only">{metric.label}</dt>
            <dd className="font-display text-3xl text-accent">{metric.value}</dd>
            <dd className="mt-1 text-[13px] leading-snug text-offwhite/60">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Social() {
  return (
    <section id="redes" className="grain relative isolate overflow-hidden bg-ink text-offwhite">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,rgba(122,35,53,0.45),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-6 sm:px-10 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle index="02&nbsp;&nbsp;&nbsp;•" eyebrow="Alcance" title="Redes sociais" tone="light" />
          <div className="sm:text-right">
            <p className="font-display text-3xl text-offwhite">
              {totalFollowers} <span className="text-lg text-offwhite/60 italic">seguidores somados</span>
            </p>
            <p className="mt-1 text-xs tracking-wide text-offwhite/50">Métricas dos {metricsPeriod.toLowerCase()}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28">
          <Reveal>
            <NetworkPanel network="instagram" />
          </Reveal>
          <Reveal delay={150}>
            <NetworkPanel network="tiktok" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
