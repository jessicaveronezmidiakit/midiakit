type SectionTitleProps = {
  index?: string;
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionTitle({ index, eyebrow, title, tone = "dark", className = "" }: SectionTitleProps) {
  const eyebrowColor = tone === "light" ? "text-accent" : "text-marsala";
  const titleColor = tone === "light" ? "text-offwhite" : "text-ink";
  return (
    <div className={className}>
      <p className={`eyebrow flex items-center gap-3 ${eyebrowColor}`}>
        {index && (
          <>
            <span className="font-display text-[0.8rem] tracking-normal">{index}</span>
          </>
        )}
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-5xl leading-[0.95] tracking-tight italic sm:text-6xl lg:text-7xl ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
