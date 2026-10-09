import { CountUp } from "@/components/motion/CountUp";
import type { Highlight } from "@/lib/types";
import { Icon } from "./Icon";

export function StatCard({ highlight }: { highlight: Highlight }) {
  const numeric = /^\d/.test(highlight.value);

  return (
    <li className="spotlight lift flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-surface p-5 hover:border-border-strong sm:p-6">
      <Icon name={highlight.icon} size={20} className="text-accent" />
      <div>
        <p
          className={
            numeric
              ? "text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
              : "text-lg leading-snug font-semibold text-balance text-fg sm:text-xl"
          }
        >
          {numeric ? <CountUp value={highlight.value} /> : highlight.value}
        </p>
        <p className="mt-2 font-mono text-xs leading-relaxed text-muted">{highlight.label}</p>
      </div>
    </li>
  );
}
