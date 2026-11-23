const photos = [
  { src: "/photos/jv-pb-18.webp", x: "6%", y: "10%", w: "clamp(90px,13vw,170px)", r: "-9deg", d: ".35s" },
  { src: "/photos/jv-14.webp", x: "82%", y: "56%", w: "clamp(90px,12vw,160px)", r: "8deg", d: ".65s" },
  { src: "/photos/jv-pb-16.webp", x: "4%", y: "60%", w: "clamp(90px,12vw,160px)", r: "7deg", d: ".8s" },
  { src: "/photos/jv-21.webp", x: "62%", y: "70%", w: "clamp(70px,8vw,120px)", r: "-12deg", d: ".95s" },
  { src: "/photos/jv-2.webp", x: "26%", y: "72%", w: "clamp(80px,10vw,140px)", r: "-6deg", d: "1.1s" },
  { src: "/photos/jv-14.webp", x: "40%", y: "-2%", w: "clamp(80px,9vw,130px)", r: "5deg", d: "1.2s" },
];

export function Intro() {
  return (
    <div className="intro-run">
    <div id="intro">
      <div className="intro-text">
        <p className="intro-kicker">mídia kit 2026</p>
        <p className="intro-big">
          <span className="intro-hello">
            bem-vindo ao
            <br />
            universo da
          </span>
          <br />
          <em>
            Jéssica <br />
            Veronez
          </em>
        </p>
      </div>
      {photos.map((photo) => (
        <div
          key={`${photo.x}-${photo.y}`}
          className="fly photo"
          style={{ ["--x" as string]: photo.x, ["--y" as string]: photo.y, ["--w" as string]: photo.w, ["--r" as string]: photo.r, ["--d" as string]: photo.d }}
        >
          <img src={photo.src} alt="" />
        </div>
      ))}
      <div className="fly" style={{ ["--x" as string]: "77%", ["--y" as string]: "7%", ["--w" as string]: "clamp(70px,9vw,120px)", ["--r" as string]: "12deg", ["--d" as string]: ".5s" }}>
        <svg viewBox="0 0 100 115" aria-hidden="true">
          <use href="#bag-svg" />
        </svg>
      </div>
      <span className="intro-veil" />
      <button className="skip" type="button">
        role para entrar
        <svg viewBox="0 0 16 10" aria-hidden="true">
          <path d="M2 2l6 6 6-6" />
        </svg>
      </button>
    </div>
    </div>
  );
}

export function BagSymbol() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="bag-svg" viewBox="0 0 100 115">
        <path d="M32 34 V24 a18 18 0 0 1 36 0 V34" fill="none" stroke="#2a0810" strokeWidth="5" strokeLinecap="round" />
        <path d="M14 30 H86 L92 108 H8 Z" fill="#f3d2d9" stroke="#2a0810" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 30 H86 L87 42 H13 Z" fill="#6b1424" />
        <circle cx="32" cy="36" r="3.2" fill="#f7eee8" />
        <circle cx="68" cy="36" r="3.2" fill="#f7eee8" />
        <text x="50" y="82" textAnchor="middle" fontFamily="var(--font-display), Palatino, serif" fontStyle="italic" fontSize="30" fill="#3a0912">
          JV
        </text>
      </symbol>
    </svg>
  );
}
