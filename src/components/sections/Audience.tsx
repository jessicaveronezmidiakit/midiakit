import type { ReactNode } from "react";

export function Audience() {
  return (
    <section className="publico" id="publico">
      <div className="wrap center">
        <p className="kicker" style={{ color: "var(--muted-dark)" }}>
          03 · quem acompanha
        </p>
        <h2 className="h">
          Meu <em>público</em>
        </h2>
        <p className="intro-p">
          Mulheres a partir dos 25 anos, das classes A e B, que buscam <em>estilo, beleza e qualidade de vida.</em>
        </p>
        <div className="quotes">
          <Quote badge={<>81,2<small>%</small></>} text={<>são <em>mulheres</em></>} note="no Instagram" />
          <Quote badge={<>30,9<small>%</small></>} text={<>entre <em>45 e 54</em> anos</>} note="maior faixa etária" />
          <Quote badge={<>94,3<small>%</small></>} text={<>estão no <em>Brasil</em></>} note="localização" />
          <Quote badge="♀" text={<>Feminino <em>predominante</em></>} note="gênero" />
          <Quote badge="A&B" text={<>Classes <em>A & B</em></>} note="classe social" />
          <Quote badge="25+" text={<>25–34 · 35–44 · <em>45+</em></>} note="faixas etárias" />
        </div>
        <div className="quotes" style={{ gridTemplateColumns: "1fr", maxWidth: 620, margin: "64px auto 0" }}>
          <Quote badge="SP" text={<>São Paulo · <em>Curitiba</em> · Rio de Janeiro</>} note="principais cidades" />
        </div>
      </div>
    </section>
  );
}

function Quote({ badge, text, note }: { badge: ReactNode; text: ReactNode; note: string }) {
  return (
    <div className="quote">
      <span className="badge">{badge}</span>
      <p>{text}</p>
      <span>{note}</span>
    </div>
  );
}
