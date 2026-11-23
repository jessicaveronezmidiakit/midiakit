"use client";

import { contact, creator, whatsappLink } from "@/content/midia-kit";
import { useShotList } from "@/components/site/ShotList";
import { InstagramIcon, TikTokIcon } from "@/components/sections/Hero";

export function Contact() {
  const { shots, remove, message, toast } = useShotList();
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent("Parceria – pedido de orçamento")}&body=${encodeURIComponent(message)}`;
  return (
    <section className="contact" id="contato">
      <div className="pic">
        <div className="pop tinted">
          <span className="frame" />
          <img className="cut" src="/generated/cutout-closet-v2.webp" alt="Jéssica Veronez de blazer off-white segurando uma jaqueta de couro" />
        </div>
      </div>
      <div className="txt light">
        <p className="kicker" style={{ color: "var(--muted-light)" }}>
          07 · vamos criar juntas
        </p>
        <h2 className="h">
          Vamos criar
          <br />
          algo <em>juntas?</em>
        </h2>
        <p className="note">Atendimento direto, sem agência. Conte sobre sua marca e o objetivo da campanha.</p>
        <ul className="links">
          <li>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsIcon />
              {contact.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <MailIcon />
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              {contact.instagram.handle}
            </a>
          </li>
          <li>
            <a href={contact.tiktok.url} target="_blank" rel="noopener noreferrer">
              <TikTokIcon />
              {contact.tiktok.handle}
            </a>
          </li>
        </ul>
        <div className="shotlist">
          <div className="sl-head">
            <span>Sua lista</span>
            <span>Campanha 01 · Briefing</span>
          </div>
          <ol>
            {shots.map((item, index) => (
              <li key={`${item}-${index}`}>
                <span>{item}</span>
                <button type="button" aria-label={`Remover ${item}`} onClick={() => remove(index)}>
                  ×
                </button>
              </li>
            ))}
          </ol>
          {shots.length === 0 ? <p className="empty">Nada adicionado ainda — escolha as entregas acima.</p> : null}
          <div className="sl-actions">
            <a className="btn" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
              Enviar no WhatsApp
            </a>
            <a className="btn ghost" href={mail}>
              Enviar por e-mail
            </a>
            <button
              className="btn ghost"
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contact.email);
                  toast("E-mail copiado");
                } catch {
                  toast(contact.email);
                }
              }}
            >
              Copiar e-mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1 1 8 19z" />
      <path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1-1.2 2 .9c-.2 1.3-1.2 2-2.3 1.8C11 15 9 13 8.5 10.8 8.3 9.7 9 8.7 10.3 8.5l.9 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          {creator.name} · {creator.city} · Mídia Kit 2026
        </span>
        <a href="#top">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
