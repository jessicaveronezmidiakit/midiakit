import Image from "next/image";
import { gallery } from "@/content/midia-kit";
import { Reveal } from "@/components/Reveal";

const offsets = ["lg:mt-0", "lg:mt-24", "lg:mt-8", "lg:mt-32", "lg:mt-12"];

export function Gallery() {
  return (
    <section aria-label="Galeria" className="grain relative isolate overflow-hidden bg-ink pt-10 pb-24 text-offwhite lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_18%_at_50%_24%,rgba(122,35,53,0.4),transparent)] lg:bg-[radial-gradient(ellipse_at_top,rgba(122,35,53,0.45),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 hidden h-48 bg-gradient-to-b from-ink to-transparent lg:block" />

      <Reveal className="mx-auto max-w-7xl px-6 sm:px-10">
        <blockquote className="relative max-w-4xl pl-10 sm:pl-14">
          <span
            aria-hidden
            className="absolute top-0 left-0 font-display text-7xl leading-[0.8] text-accent/80 sm:text-8xl"
          >
            “
          </span>
          <p className="font-display text-4xl leading-tight italic sm:text-5xl lg:text-6xl">
            Maximalista, intensa e elegante —{" "}
            <span className="text-accent">com uma risada que ninguém esquece.</span>
          </p>
        </blockquote>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-[1600px] grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-6 lg:grid-cols-5">
        {gallery.map((photo, index) => (
          <Reveal
            key={photo.src}
            delay={index * 100}
            className={`${offsets[index]} ${index === 4 ? "hidden lg:block" : ""}`}
          >
            <figure className="group relative aspect-[2/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-2.5 border border-offwhite/0 transition-colors duration-700 group-hover:border-offwhite/40"
              />
              <figcaption
                aria-hidden
                className="absolute bottom-3 left-3.5 font-display text-sm text-offwhite/80 italic drop-shadow"
              >
                {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
