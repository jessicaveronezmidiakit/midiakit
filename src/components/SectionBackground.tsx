import { getImageProps } from "next/image";

type SectionBackgroundProps = {
  desktop: string;
  /** Sem versão mobile, o fundo só aparece a partir de `lg`. */
  mobile?: string;
  /** Posição da área do fundo dentro da seção (padrão: seção inteira). */
  frameClassName?: string;
  className?: string;
  priority?: boolean;
};

export function SectionBackground({
  desktop,
  mobile,
  frameClassName = "inset-0",
  className = "",
  priority,
}: SectionBackgroundProps) {
  const common = {
    alt: "",
    fill: true,
    sizes: "100vw",
    loading: priority ? ("eager" as const) : undefined,
    fetchPriority: priority ? ("high" as const) : undefined,
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktop });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: mobile ?? desktop });

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-20 ${mobile ? "" : "hidden lg:block"} ${frameClassName}`}
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
        {mobile && <source srcSet={mobileSrcSet} />}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...rest} className={className} />
      </picture>
    </div>
  );
}
