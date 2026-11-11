"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/midia-kit";

export function SiteNav() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of navLinks) {
      const section = document.querySelector(link.href);
      if (section) sectionObserver.observe(section);
    }

    const contactObserver = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), {
      threshold: 0.05,
    });
    const contact = document.querySelector("#contato");
    if (contact) contactObserver.observe(contact);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const showBar = pastHero;
  const showPill = pastHero && !atContact;

  return (
    <>
      <header
        inert={!showBar}
        className={`fixed inset-x-0 top-4 z-50 hidden px-6 transition-[translate,opacity] duration-500 ease-out lg:block ${
          showBar ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <nav
          aria-label="Seções do mídia kit"
          className="mx-auto flex max-w-5xl items-center justify-between gap-6 rounded-full border border-offwhite/10 bg-ink/80 py-2 pr-2 pl-6 text-offwhite shadow-[0_18px_50px_-20px_rgba(28,8,13,0.7)] backdrop-blur-md"
        >
          <a href="#top" className="font-display text-xl italic" aria-label="Voltar ao início">
            JV
          </a>
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={!atContact && active === link.href ? "location" : undefined}
                  className="block rounded-full px-4 py-2 text-[13px] text-offwhite/60 transition-colors hover:text-offwhite aria-[current=location]:bg-offwhite/10 aria-[current=location]:text-offwhite"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-offwhite"
          >
            Contato
          </a>
        </nav>
      </header>

      <a
        href="#contato"
        inert={!showPill}
        className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-offwhite/15 bg-ink/85 py-2 pr-2 pl-5 text-sm font-medium whitespace-nowrap text-offwhite shadow-[0_18px_40px_-12px_rgba(28,8,13,0.6)] backdrop-blur-md transition-[translate,opacity] duration-500 ease-out lg:hidden ${
          showPill ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        Fechar uma parceria
        <span aria-hidden className="grid size-9 place-items-center rounded-full bg-accent text-ink">
          →
        </span>
      </a>
    </>
  );
}
