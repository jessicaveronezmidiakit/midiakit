import { aboutParagraphs, aboutTags, creator } from "@/content/midia-kit";

export function About() {
  return (
    <section className="dark about" id="sobre">
      <div className="wrap split">
        <div>
          <p className="kicker" style={{ color: "var(--muted-dark)" }}>
            01 · quem é
          </p>
          <h2 className="h">
            Sobre <em>mim</em>
          </h2>
          {/* <div className="rule" /> */}
          {/* <p className="hint">passe o mouse ou toque nas palavras em destaque</p> */}
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((part, partIndex) =>
                part.cap ? (
                  <button key={partIndex} className="pw" type="button" data-cap={part.cap} data-img={part.img}>
                    {part.text}
                  </button>
                ) : (
                  <span key={partIndex}>{part.text}</span>
                ),
              )}
            </p>
          ))}
          <div className="stats">
            <div>
              <b>{creator.brandsServed}</b>
              <span>marcas atendidas</span>
            </div>
            <div>
              <b>+1</b>
              <span>ano nas redes</span>
            </div>
            <div>
              <b>PR</b>
              <span>{creator.city}</span>
            </div>
          </div>
          {/* <div className="tags">
            {aboutTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div> */}
        </div>
        <div className="portrait">
          <img src="/photos/h-13.webp" alt="Jéssica Veronez de blazer marsala, sorrindo com uma revista" />
        </div>
      </div>
    </section>
  );
}
