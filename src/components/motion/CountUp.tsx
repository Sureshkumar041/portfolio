"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Counts a value like "3.5+" up from zero once it's in view.
 * The server renders the final value; the number is written straight to the DOM
 * (no re-renders), and an invisible copy reserves the final width so nothing shifts.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const decimals = match?.[1].split(".")[1]?.length ?? 0;
  const isNumeric = match !== null;

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric || prefersReducedMotion()) return;
    const format = (n: number) => `${n.toFixed(decimals)}${suffix}`;

    if (!inView) {
      // Still hidden by the section reveal at this point, so resetting is invisible.
      el.textContent = format(0);
      return;
    }
    const controls = animate(0, target, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => (el.textContent = format(n)),
    });
    return () => controls.stop();
  }, [inView, isNumeric, target, suffix, decimals]);

  return (
    <span className={`inline-grid tabular-nums ${className ?? ""}`}>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {value}
      </span>
      {/* Screen readers get the final value, never the in-between numbers. */}
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true" className="col-start-1 row-start-1">
        {value}
      </span>
    </span>
  );
}
