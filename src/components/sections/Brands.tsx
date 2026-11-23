import { brands, creator } from "@/content/midia-kit";

export function Band() {
  const items = ["curadoria honesta", "estilo com verdade", "dia a dia real", "moda · beleza · lifestyle"];
  return (
    <div className="band" aria-hidden="true">
      <div className="track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <section className="brands-scene" id="marcas" aria-label="Marcas que já confiaram">
      <div className="stage">
        <div className="scene-head">
          <p>direto da minha câmera</p>
          <h2 className="h">
            Marcas que já <em>confiaram</em>
          </h2>
        </div>
        <div className="cam" aria-hidden="true">
          <svg viewBox="0 0 400 300">
            <rect x="70" y="40" width="70" height="34" rx="8" fill="#2a0810" />
            <rect x="270" y="48" width="56" height="26" rx="6" fill="#2a0810" />
            <rect x="290" y="54" width="28" height="14" rx="3" fill="#f3d2d9" />
            <rect x="20" y="66" width="360" height="214" rx="30" fill="#3a0912" />
            <rect x="20" y="118" width="360" height="114" fill="#4b0e1b" />
            <path d="M20 118 H380 M20 232 H380" stroke="#2a0810" strokeWidth="3" />
            <circle cx="200" cy="180" r="92" fill="#2a0810" />
            <circle cx="200" cy="180" r="76" fill="#160407" stroke="#f3d2d9" strokeWidth="3" />
            <circle cx="200" cy="180" r="56" fill="#24070c" stroke="#6b1424" strokeWidth="6" />
            <circle cx="200" cy="180" r="34" fill="#0b0204" />
            <circle cx="186" cy="164" r="11" fill="#f7eee8" opacity=".55" />
            <circle cx="214" cy="194" r="5" fill="#f7eee8" opacity=".3" />
            <circle cx="340" cy="100" r="11" fill="#f3d2d9" />
            <text x="58" y="104" fontFamily="var(--font-display), Palatino, serif" fontStyle="italic" fontSize="26" fill="#f3d2d9">
              JV
            </text>
          </svg>
          <span className="flash" />
        </div>
        <div id="slides">
          {brands.map((brand) => (
            <div className="slide" key={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
        <div className="reel" id="reel">
          {brands.map((brand) => (
            <div className="frame-cell" key={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
          <div className="frame-cell more-cell">{creator.brandsServed} marcas atendidas</div>
        </div>
      </div>
    </section>
  );
}
