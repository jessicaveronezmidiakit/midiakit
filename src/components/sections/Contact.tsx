import type { ReactNode } from "react";
import { contact, creator } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";

const [emailUser, emailDomain] = contact.email.split("@");

const channels: { label: string; value: string; display?: ReactNode; href: string }[] = [
  { label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappUrl },
  {
    label: "E-mail",
    value: contact.email,
    display: (
      <>
        {emailUser}@<wbr />
        {emailDomain}
      </>
    ),
    href: `mailto:${contact.email}`,
  },
  { label: "Instagram", value: contact.instagram.handle, href: contact.instagram.url },
  { label: "TikTok", value: contact.tiktok.handle, href: contact.tiktok.url },
];

export function Contact() {
  return (
    <section id="contato" className="grain relative isolate overflow-hidden bg-ink text-offwhite">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,rgba(122,35,53,0.45),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-10 sm:px-10 lg:pt-40">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-accent">
            <span className="font-display text-[0.8rem] tracking-normal">07&nbsp;&nbsp;&nbsp;•</span>
            Vamos criar juntas
          </p>
          <h2 className="mt-6 font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-tight">
            {creator.firstName} <span className="italic">{creator.lastName}</span>
          </h2>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-offwhite/80">
              Atendimento direto, sem agência. Conte sobre sua marca e o objetivo da campanha.
            </p>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-offwhite py-2 pr-2 pl-7 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-accent sm:self-auto"
            >
              Chamar no WhatsApp
              <span
                aria-hidden
                className="grid size-11 place-items-center rounded-full bg-marsala text-offwhite transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-16 grid gap-px overflow-hidden border border-offwhite/15 bg-offwhite/15 sm:grid-cols-2 lg:grid-cols-[1fr_1.7fr_1fr_1fr]">
            {channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    aria-label={`${channel.label}: ${channel.value}`}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col justify-between gap-6 bg-ink/80 p-6 transition-colors hover:bg-wine/90"
                  >
                    <span className="eyebrow text-offwhite/50">{channel.label}</span>
                    <span className="text-lg text-offwhite transition-colors [overflow-wrap:anywhere] group-hover:text-accent">
                      {channel.display ?? channel.value}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <footer className="mt-20 flex flex-col justify-between gap-4 border-t border-offwhite/10 pt-6 text-xs text-offwhite/45 sm:flex-row sm:items-center">
          <p>
            {creator.name} · {creator.city} · Mídia Kit 2026
          </p>
          <a href="#top" className="self-start transition-colors hover:text-offwhite sm:self-auto">
            Voltar ao topo ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
