import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:brightness-110 shadow-[0_0_0_1px_var(--accent),0_8px_24px_-8px_var(--accent)]",
  secondary: "border border-border-strong bg-surface text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-fg",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

/** Link styled as a button. All CTAs on this site are navigations, so it's always an <a>. */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[color,background-color,border-color,filter] duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
