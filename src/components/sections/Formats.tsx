"use client";

import { contentFormats, deliverables } from "@/content/midia-kit";
import { AddButton } from "@/components/site/ShotList";

export function Formats() {
  return (
    <section className="light" id="formatos" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="svc-head">
          <div>
            <p className="kicker" style={{ color: "var(--muted-light)" }}>
              05 · monte sua campanha
            </p>
            <h2 className="h">
              Entregas &amp; <em>formatos</em>
            </h2>
            <p className="svc-intro">
              Escolha o que sua marca precisa e adicione à sua lista — ela vai pronta para o WhatsApp ou e-mail. Valores sob consulta, com pacotes e condições montados sob medida para cada marca.
            </p>
          </div>
          <div className="strip" aria-hidden="true">
            <img src="/photos/jv-14.webp" alt="" />
            <img src="/photos/h-13.webp" alt="" style={{ objectPosition: "center 28%" }} />
            <img src="/photos/jv-2.webp" alt="" />
          </div>
        </div>

        <div className="formats">
          {deliverables.map((item) => (
            <article className="format" key={item.item}>
              <div className="shot">
                <img src={item.image} alt="" />
                <span className="tag">{item.tag}</span>
              </div>
              <div className="body">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <AddButton item={item.item}>+ Adicionar à lista</AddButton>
              </div>
            </article>
          ))}
        </div>

        <div className="addons">
          <div>
            <h3>formatos de conteúdo</h3>
            <div className="chips">
              {contentFormats.map((format) => (
                <AddButton key={format} item={`Formato: ${format}`}>
                  {`+ ${format}`}
                </AddButton>
              ))}
            </div>
          </div>
          <div>
            <h3>pacote sob medida?</h3>
            <p>
              Valores sob consulta, com <b>pacotes e condições montados sob medida</b> para cada marca. Atendimento direto, sem agência.
            </p>
            <AddButton item="Pacote personalizado">+ Pedir pacote personalizado</AddButton>
          </div>
        </div>
      </div>
    </section>
  );
}
