import type { SectionMeta } from "@/lib/types";
import { pad } from "@/lib/utils";

/** "// 01 — about" label, then the section heading and an optional intro line. */
export function SectionHeading({
  id,
  index,
  meta,
}: {
  id: string;
  index: number;
  meta: SectionMeta;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-sm text-accent">
        <span aria-hidden="true">{"// "}</span>
        {pad(index)}
        <span className="text-muted"> — {meta.label}</span>
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl"
      >
        {meta.title}
      </h2>
      {meta.description && (
        <p className="mt-4 max-w-2xl text-pretty text-muted">{meta.description}</p>
      )}
    </div>
  );
}
