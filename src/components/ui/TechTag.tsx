import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Monospace tech label. `index` drives the stagger delay inside a `.stagger` list. */
export function TechTag({
  children,
  index,
  className,
}: {
  children: string;
  index?: number;
  className?: string;
}) {
  return (
    <li
      style={index !== undefined ? ({ "--i": index } as CSSProperties) : undefined}
      className={cn(
        "rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg/90",
        className,
      )}
    >
      {children}
    </li>
  );
}
