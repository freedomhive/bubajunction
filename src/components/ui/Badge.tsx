interface BadgeProps {
  tone?: "coral" | "navy" | "gold";
  children: React.ReactNode;
}

const TONE_CLASSES: Record<NonNullable<BadgeProps["tone"]>, string> = {
  coral: "bg-bj-coral text-white",
  navy: "bg-bj-navy text-bj-cream",
  gold: "bg-bj-gold text-bj-navy",
};

export function Badge({ tone = "coral", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
