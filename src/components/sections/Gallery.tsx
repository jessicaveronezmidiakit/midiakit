import { gallery } from "@/content/midia-kit";

export function Gallery() {
  return (
    <section className="dark photos" aria-label="Fotos da Jéssica Veronez">
      <div className="collage">
        {gallery.map((photo) => (
          <img key={photo.alt} src={photo.src} alt={photo.alt} />
        ))}
      </div>
    </section>
  );
}
