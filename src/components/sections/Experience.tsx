import { GitRail } from "@/components/motion/GitRail";
import { Section } from "@/components/ui/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" index={3}>
      <div className="relative max-w-3xl">
        <GitRail />
        <ol className="space-y-14">
          {portfolio.experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} isCurrent={i === 0} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
