"use client";

import { measures, measuresCopy } from "@/content/midia-kit";
import { useShotList } from "@/components/site/ShotList";

export function Measures() {
  const { toast } = useShotList();
  return (
    <section className="dark center medidas" id="medidas">
      <div className="wrap">
        <p className="kicker" style={{ color: "var(--muted-dark)" }}>
          06 · para envio de produtos
        </p>
        <h2 className="h">
          Minhas <em>medidas</em>
        </h2>
        <p className="why-intro">Tudo o que sua marca precisa para acertar no tamanho do recebido — da numeração ao tom de pele.</p>
        <div className="measures">
          {measures.map((item) => (
            <div key={item.label}>
              <b>{item.label === "Pele" ? "Clara" : item.value}</b>
              <span>{item.label === "Pele" ? "pele mista" : item.label}</span>
            </div>
          ))}
        </div>
        <div className="actions">
          <button
            className="btn"
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(measuresCopy);
                toast("Medidas copiadas");
              } catch {
                toast("Não foi possível copiar agora");
              }
            }}
          >
            Copiar medidas
          </button>
          <a className="btn" href="#contato">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
