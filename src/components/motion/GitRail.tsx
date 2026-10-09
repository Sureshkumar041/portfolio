"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Vertical git-log line for the experience timeline. A faint base line is always
 * visible; an amber line on top "draws" downward as the timeline scrolls past.
 */
export function GitRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 75%", "end 55%"] });

  const draw = (progress: number) => {
    if (lineRef.current && !prefersReducedMotion()) {
      lineRef.current.style.transform = `scaleY(${progress})`;
    }
  };

  useMotionValueEvent(scrollYProgress, "change", draw);
  // Sync once on mount in case the page loads already scrolled.
  useEffect(() => draw(scrollYProgress.get()));

  return (
    <div ref={trackRef} aria-hidden="true" className="absolute top-2 bottom-0 left-[7px] w-px">
      <div className="absolute inset-0 bg-border-strong" />
      <div
        ref={lineRef}
        className="git-progress absolute inset-0 origin-top bg-accent shadow-[0_0_8px_var(--accent)]"
      />
    </div>
  );
}
