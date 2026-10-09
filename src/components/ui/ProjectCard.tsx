"use client";

import { ChevronDown, UserRound, Users } from "lucide-react";
import { useId, useState } from "react";
import { InView } from "@/components/motion/InView";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { PrivateBadge } from "./PrivateBadge";
import { TechTag } from "./TechTag";

const PREVIEW_COUNT = 3;

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-px font-mono text-xs text-accent">
            ▹
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Project card. Collapsed: summary, meta, tech and up to 3 highlights.
 * Expanded: extra context and any remaining highlights. The panel animates with a
 * CSS grid-rows transition and is `inert` while closed, so hidden links/text are
 * skipped by keyboard and screen readers.
 */
export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const preview = project.highlights.slice(0, PREVIEW_COUNT);
  const rest = project.highlights.slice(PREVIEW_COUNT);
  const hasDetails = Boolean(project.context) || rest.length > 0;

  return (
    <article className="spotlight lift flex flex-col rounded-xl border border-border bg-surface p-6 hover:border-border-strong sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-accent">@{project.company.toLowerCase()}</p>
        {project.isPrivate && <PrivateBadge />}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{project.summary}</p>

      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
        <div className="flex items-center gap-1.5">
          <dt>
            <UserRound size={15} aria-hidden="true" />
            <span className="sr-only">Role</span>
          </dt>
          <dd className="text-fg">{project.role}</dd>
        </div>
        {project.teamSize && (
          <div className="flex items-center gap-1.5">
            <dt>
              <Users size={15} aria-hidden="true" />
              <span className="sr-only">Team</span>
            </dt>
            <dd>{project.teamSize}</dd>
          </div>
        )}
      </dl>

      <InView as="ul" className="stagger mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((t, i) => (
          <TechTag key={t} index={i}>
            {t}
          </TechTag>
        ))}
      </InView>

      <div className="mt-6 border-t border-border pt-5">
        <Highlights items={preview} />

        {hasDetails && (
          <>
            <div
              id={panelId}
              inert={!open}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pt-4">
                  {project.context && (
                    <p className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted">
                      {project.context}
                    </p>
                  )}
                  {rest.length > 0 && <Highlights items={rest} />}
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
            >
              {open ? "Hide details" : "Show details"}
              <span className="sr-only"> for {project.title}</span>
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={cn(
                  "transition-transform duration-200 motion-reduce:transition-none",
                  open && "rotate-180",
                )}
              />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
