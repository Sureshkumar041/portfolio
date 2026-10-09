"use client";

import { useInView } from "motion/react";
import { useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type InViewProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  /** Adds `data-reveal` for the standard section fade-up. */
  reveal?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * Sets `data-inview="true"` the first time the element scrolls into view.
 * The actual animation lives in CSS (see "Motion system" in globals.css),
 * which keeps children as server components and makes reduced motion a no-op.
 */
export function InView<T extends ElementType = "div">({
  as,
  reveal,
  children,
  ...props
}: InViewProps<T>) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Tag ref={ref} data-inview={inView} data-reveal={reveal || undefined} {...props}>
      {children}
    </Tag>
  );
}
