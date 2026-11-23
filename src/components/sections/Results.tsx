import { creator, formatCaseTotal, results } from "@/content/midia-kit";

export function Results() {
  const max = Math.max(...results.cases.map((item) => item.value));
  const total = formatCaseTotal(results.cases.reduce((sum, item) => sum + item.value, 0));
  return (
    <section className="light results" id="resultados">
      <div className="wrap">
        <div>
          <p className="kicker" style={{ color: "var(--muted-light)" }}>
            04 · vendas geradas para marcas
          </p>
          <h2 className="h">
            Resultados <em>reais</em>
          </h2>
          <p className="gmv">
            {results.gmv}
            <small>{results.gmvLabel}</small>
          </p>
          <div className="stats">
            <div>
              <b>{creator.brandsServed}</b>
              <span>marcas atendidas</span>
            </div>
            <div>
              <b>IG & TikTok</b>
              <span>principais redes de conversão</span>
            </div>
          </div>
        </div>
        <div className="cases" id="cases">
          <div className="sl-head">
            <span>Cases em destaque</span>
            <span>
              <b>{total}</b> somados nos cases
            </span>
          </div>
          <ol>
            {results.cases.map((item, index) => (
              <li key={item.brand}>
                <span className="n">{String(index + 1).padStart(2, "0")}</span>
                <span className="nm">
                  <span className="brand">{item.brand}</span>
                  {item.product ? <small className="product">{item.product}</small> : null}
                </span>
                <span className="v">{item.display}</span>
                <span className="bar">
                  <i style={{ ["--w" as string]: `${(item.value / max) * 100}%` }} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
