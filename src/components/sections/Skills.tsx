import { InView } from "@/components/motion/InView";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { TechTag } from "@/components/ui/TechTag";
import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" index={2}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group) => (
          <li
            key={group.category}
            className="spotlight lift rounded-xl border border-border bg-surface p-6 hover:border-border-strong"
          >
            <h3 className="flex items-center gap-2.5 font-medium text-fg">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon name={group.icon} size={16} />
              </span>
              {group.category}
            </h3>
            <InView
              as="ul"
              className="stagger mt-5 flex flex-wrap gap-2"
              aria-label={`${group.category} skills`}
            >
              {group.items.map((item, i) => (
                <TechTag key={item} index={i}>
                  {item}
                </TechTag>
              ))}
            </InView>
          </li>
        ))}
      </ul>
    </Section>
  );
}
