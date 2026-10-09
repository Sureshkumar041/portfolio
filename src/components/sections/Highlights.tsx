import { InView } from "@/components/motion/InView";
import { StatCard } from "@/components/ui/StatCard";
import { portfolio } from "@/data/portfolio";

export function Highlights() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-6xl px-5 sm:px-8">
      <InView as="ul" reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {portfolio.highlights.map((h) => (
          <StatCard key={h.label} highlight={h} />
        ))}
      </InView>
    </section>
  );
}
