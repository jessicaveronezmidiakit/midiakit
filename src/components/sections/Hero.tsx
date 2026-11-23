import { contact, creator, results, social } from "@/content/midia-kit";

const stats = [
  { value: social.instagram.followers, label: "Instagram" },
  { value: social.tiktok.followers, label: "TikTok" },
  { value: creator.brandsServed, label: "Marcas" },
  { value: results.gmv, label: "faturamento · 6 meses" },
];

export function Hero() {
  return (
    <header className="hero dark" id="top">
      <div className="wrap">
        <div className="hero-visual">
        <div className="pop">
          <span className="frame" />
          <img className="cut" src="/generated/cutout-trench-v2.webp" alt="Jéssica Veronez de trench coat caramelo, braços cruzados" />
          <span className="note n1" aria-hidden="true">
            estilo com verdade
            <Arrow />
          </span>
          <span className="note n2" aria-hidden="true">
            <Arrow flip="x" />
            {creator.city}
          </span>
          <span className="note n3" aria-hidden="true">
            formada em imagem & estilo
            <Arrow flip="y" />
          </span>
          <span className="bag-anchor" aria-hidden="true" />
        </div>
        <Stats className="stats-side" />
        </div>
        <div>
          <p className="kicker">beleza · moda · lifestyle</p>
          <p className="hi">
            Oi, eu sou a <span>Jéssica Veronez</span>
          </p>
          <h1>
            Criadora de conteúdo
            <br />
            de beleza, moda <em>&amp;</em> lifestyle
          </h1>
          <p className="lead">
            Estilo com verdade: curadoria honesta de moda e beleza para mulheres que querem se sentir bem com quem são.
          </p>
          <Stats className="stats-flow" />
          <ul className="contact-list">
            <li>
              <a href={`mailto:${contact.email}`}>
                <MailIcon />
                {contact.email}
              </a>
            </li>
            <li>
              <span>
                <PinIcon />
                {creator.city}
              </span>
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
          <a className="btn" href="#contato">
            Fechar uma parceria
          </a>
        </div>
      </div>
    </header>
  );
}

function Stats({ className }: { className: string }) {
  return (
    <div className={`stats ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <b>{stat.value}</b>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function Arrow({ flip }: { flip?: "x" | "y" }) {
  return (
    <svg className={`arr${flip === "x" ? " flip-x" : ""}${flip === "y" ? " flip-y" : ""}`} viewBox="0 0 40 32" aria-hidden="true">
      <path d="M3 5C14 4 26 10 32 24" />
      <path d="M25 21l7 4 2-8" />
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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.2 4.4 5 4.6" />
    </svg>
  );
}
