import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-bj-coral text-bj-cream hover:bg-bj-coral-deep border-2 border-bj-navy shadow-[3px_3px_0_0_var(--bj-navy)] hover:shadow-[1px_1px_0_0_var(--bj-navy)] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-bj-cream text-bj-navy hover:bg-white border-2 border-bj-navy shadow-[3px_3px_0_0_var(--bj-navy)] hover:shadow-[1px_1px_0_0_var(--bj-navy)] hover:translate-x-[2px] hover:translate-y-[2px]",
  ghost: "bg-transparent text-bj-navy hover:bg-bj-navy/5 border-2 border-transparent",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-medium tracking-wide transition-all duration-150 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
