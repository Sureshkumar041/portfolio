import type { ReactNode } from "react";
import { InView } from "@/components/motion/InView";
import type { SectionId } from "@/lib/types";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

/** Page section with heading, consistent spacing and a fade-up reveal. */
export function Section({
  id,
  index,
  className,
  children,
}: {
  id: SectionId;
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      <InView reveal>
        <SectionHeading id={headingId} index={index} meta={portfolio.sections[id]} />
        {children}
      </InView>
    </section>
  );
}
