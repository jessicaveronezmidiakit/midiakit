import Image from "next/image";
import { brands, creator } from "@/content/midia-kit";

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section id="marcas" aria-label="Marcas parceiras" className="overflow-hidden bg-marsala py-16 text-offwhite lg:py-20">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6 px-6 sm:px-10">
        <p className="eyebrow flex items-center gap-3 text-accent">
          Marcas que já confiaram
        </p>
        <p className="text-sm text-offwhite/70">{creator.brandsServed} marcas atendidas</p>
      </div>
      <ul className="sr-only">
        {brands.map((brand) => (
          <li key={brand.name}>{brand.name}</li>
        ))}
      </ul>
      <div
        aria-hidden
        className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee items-center py-7 hover:[animation-play-state:paused]">
          {loop.map((brand, index) => (
            <span key={`${brand.name}-${index}`} className="flex h-16 items-center pr-14 sm:h-[4.5rem] sm:pr-16 lg:h-20 lg:pr-20">
              <Image
                src={brand.logo}
                alt=""
                width={400}
                height={160}
                className="h-10 w-auto max-w-[9.5rem] object-contain sm:h-12 sm:max-w-[11.5rem] lg:h-14 lg:max-w-[13rem]"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
