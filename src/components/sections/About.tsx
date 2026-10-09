import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { portfolio } from "@/data/portfolio";

export function About() {
  const { summary, facts } = portfolio.about;

  return (
    <Section id="about" index={1}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {summary.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-pretty text-muted">
              {p}
            </p>
          ))}
        </div>

        <ul className="h-fit space-y-3 rounded-xl border border-border bg-surface/60 p-6 font-mono text-sm">
          {facts.map((fact) => (
            <li key={fact} className="flex gap-2 text-fg">
              <ChevronRight size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
