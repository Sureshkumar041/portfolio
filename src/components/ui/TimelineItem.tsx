import { Trophy } from "lucide-react";
import { InView } from "@/components/motion/InView";
import type { Experience } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * One company on the git-log timeline. Multiple roles render as a mini branch,
 * with promotions marked by an amber `tag:` chip.
 */
export function TimelineItem({ item, isCurrent }: { item: Experience; isCurrent: boolean }) {
  return (
    <li className="relative pl-10 sm:pl-12">
      {/* Commit node on the main line */}
      <InView
        as="span"
        aria-hidden="true"
        className={cn(
          "commit-node absolute top-1.5 left-0 size-[15px] rounded-full border-2 bg-bg",
          isCurrent ? "border-accent shadow-[0_0_12px_var(--accent)]" : "border-border-strong",
        )}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight text-fg">{item.company}</h3>
        <p className="font-mono text-xs text-muted">
          {item.period}
          {isCurrent && (
            <span className="ml-2 text-accent" aria-hidden="true">
              (HEAD)
            </span>
          )}
        </p>
      </div>

      {/* Roles, newest first */}
      <ol className="mt-4 space-y-3 border-l border-border pl-5" aria-label="Roles">
        {item.roles.map((role) => (
          <li key={role.title} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-[9px] -left-[24.5px] size-2 rounded-full",
                role.promotion ? "bg-accent" : "bg-border-strong",
              )}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-medium text-fg">{role.title}</span>
              {role.promotion && (
                <InView
                  as="span"
                  className="tag-pulse rounded-full border border-accent/50 bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent"
                >
                  tag: promoted
                </InView>
              )}
              <span className="font-mono text-xs text-muted">{role.period}</span>
            </div>
          </li>
        ))}
      </ol>

      <ul className="mt-5 space-y-2.5">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-[3px] font-mono text-xs text-accent">
              ▹
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.award && (
        <p className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-fg">
          <Trophy size={15} aria-hidden="true" className="text-accent" />
          {item.award}
        </p>
      )}
    </li>
  );
}
