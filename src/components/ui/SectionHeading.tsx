interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-bj-coral">
        {eyebrow}
      </span>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-bj-navy leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base sm:text-lg text-bj-navy-soft leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
