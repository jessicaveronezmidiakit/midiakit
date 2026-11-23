import { contact, metricsPeriod, social, totalFollowers } from "@/content/midia-kit";
import { InstagramIcon, TikTokIcon } from "@/components/sections/Hero";

const screens = [
  "/photos/h-18.webp",
  "/photos/h-13.webp",
  "/photos/h-2.webp",
  "/photos/h-4.webp",
  "/photos/h-17.webp",
  "/photos/h-15.webp",
  "/photos/h-20.webp",
  "/photos/h-7.webp",
];

export function Social() {
  const instagram = social.instagram.metrics;
  const tiktok = social.tiktok.metrics;
  return (
    <section className="light" id="redes">
      <div className="wrap">
        <p className="kicker center" style={{ color: "var(--muted-light)" }}>
          02 · alcance
        </p>
        <h2 className="h center">
          Redes <em>sociais</em>
        </h2>
        <p className="total">
          <b>{totalFollowers}</b> seguidores somados · métricas dos {metricsPeriod.toLowerCase()}
          <span className="swipe-hint"> · deslize para o lado →</span>
        </p>
        <div className="jump">
          <a href="#rede-instagram">Instagram</a>
          <a href="#rede-tiktok">TikTok</a>
        </div>

        <Network
          id="rede-instagram"
          name="instagram"
          followers={social.instagram.followers}
          href={contact.instagram.url}
          handle={contact.instagram.handle}
          metrics={instagram}
          offset={0}
        />
        <Network
          id="rede-tiktok"
          name="tiktok"
          followers={social.tiktok.followers}
          href={contact.tiktok.url}
          handle={contact.tiktok.handle}
          metrics={tiktok}
          offset={4}
        />
      </div>
    </section>
  );
}

function Network({
  id,
  name,
  followers,
  href,
  handle,
  metrics,
  offset,
}: {
  id: string;
  name: string;
  followers: string;
  href: string;
  handle: string;
  metrics: { value: string; label: string; cap: string }[];
  offset: number;
}) {
  return (
    <div className="cat" id={id}>
      <div className="cat-head">
        <h3>{name}</h3>
        <div className="big">
          <b>{followers}</b>
          <span>seguidores</span>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {handle}
        </a>
      </div>
      <div className="phones">
        {metrics.map((metric, index) => (
          <div className="vid" key={metric.cap}>
            <div className="phone">
              <span className="screen">
                <img src={screens[offset + index]} alt="" />
                <span className="ic">{name === "instagram" ? <InstagramIcon /> : <TikTokIcon />}</span>
                <span className="metric">
                  <b>{metric.value}</b>
                  <span>{metric.label}</span>
                </span>
              </span>
              <span className="cap">{metric.cap}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
