import { ArrowUpRight, Award, BookOpen, GraduationCap } from "lucide-react";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { portfolio } from "@/data/portfolio";
import type { LearningItem } from "@/lib/types";

const cardClass = "border-border bg-surface flex gap-4 rounded-xl border p-6";

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
      {children}
    </span>
  );
}

function GroupHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">{children}</h3>;
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-current"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function CourseCard({ item }: { item: LearningItem }) {
  const inProgress = item.status === "in-progress";

  return (
    <li className={cardClass}>
      <CardIcon>
        {inProgress ? (
          <BookOpen size={20} aria-hidden="true" />
        ) : (
          <Award size={20} aria-hidden="true" />
        )}
      </CardIcon>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h4 className="font-semibold text-fg">{item.title}</h4>
          {inProgress && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              In progress
            </span>
          )}
        </div>
        <p className="mt-1 text-muted">
          <ExternalLink href={item.providerUrl}>{item.provider}</ExternalLink>
        </p>

        {(item.completedOn || item.certificateUrl) && (
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
            {item.completedOn && <span className="text-muted">Completed · {item.completedOn}</span>}
            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                View certificate
                <ArrowUpRight size={13} aria-hidden="true" />
                <span className="sr-only"> for {item.title} (opens in a new tab)</span>
              </a>
            )}
          </p>
        )}
      </div>
    </li>
  );
}

export function Education() {
  const completed = portfolio.learning.filter((l) => l.status === "completed");
  const inProgress = portfolio.learning.filter((l) => l.status === "in-progress");

  return (
    <Section id="education" index={5}>
      <ul className="grid gap-4">
        {portfolio.education.map((ed) => (
          <li key={ed.degree + ed.institution} className={cardClass}>
            <CardIcon>
              <GraduationCap size={20} aria-hidden="true" />
            </CardIcon>
            <div>
              <h3 className="font-semibold text-fg">
                {ed.degree}, {ed.field}
              </h3>
              <p className="mt-1 text-muted">{ed.institution}</p>
              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                <span>{ed.period}</span>
                <span className="text-accent">{ed.grade}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-x-4 gap-y-10 md:grid-cols-2">
        {completed.length > 0 && (
          <div>
            <GroupHeading>Certifications</GroupHeading>
            <ul className="grid gap-4">
              {completed.map((item) => (
                <CourseCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
        )}
        {inProgress.length > 0 && (
          <div>
            <GroupHeading>Currently learning</GroupHeading>
            <ul className="grid gap-4">
              {inProgress.map((item) => (
                <CourseCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
