"use client";

import { Fragment, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Value = string | string[];
type Phase = "idle" | "typing" | "done";

const COMMAND = "npx whoami";
const START_DELAY = 450; // let the hero text settle first
const CHAR_DELAY = 40;

function Str({ children }: { children: ReactNode }) {
  return <span className="text-accent">&quot;{children}&quot;</span>;
}

function renderValue(value: Value) {
  if (!Array.isArray(value)) return <Str>{value}</Str>;
  return (
    <>
      <span className="text-muted">[</span>
      {value.map((v, i) => (
        <span key={v}>
          <Str>{v}</Str>
          {i < value.length - 1 && <span className="text-muted">, </span>}
        </span>
      ))}
      <span className="text-muted">]</span>
    </>
  );
}

/**
 * Editor-style card showing a typed "whoami" object. The command types out, then
 * the object lines fade in one by one. Every line is always in the layout (only
 * opacity changes), so the card never changes size. With reduced motion, or below
 * the lg breakpoint, the CSS never hides anything and the full content shows at once.
 *
 * It repeats info that's already on the page, so it's hidden from screen readers.
 */
export function TerminalCard({
  data,
  variable,
}: {
  data: Record<string, Value>;
  variable: string;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState(COMMAND.length);

  useEffect(() => {
    // Must match the 64rem breakpoint in globals.css ("Terminal card").
    if (prefersReducedMotion() || !window.matchMedia("(min-width: 64rem)").matches) return;
    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        setTyped(0);
        setPhase("typing");
        for (let i = 1; i <= COMMAND.length; i++) {
          timers.push(window.setTimeout(() => setTyped(i), i * CHAR_DELAY));
        }
        timers.push(window.setTimeout(() => setPhase("done"), COMMAND.length * CHAR_DELAY + 150));
      }, START_DELAY),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const lines: ReactNode[] = [
    " ",
    <Fragment key="open">
      <span className="text-muted">const </span>
      <span className="text-fg">{variable}</span>
      <span className="text-muted"> = {"{"}</span>
    </Fragment>,
    ...Object.entries(data).map(([key, value]) => (
      <Fragment key={key}>
        {"  "}
        <span className="text-fg">{key}</span>
        <span className="text-muted">: </span>
        {renderValue(value)}
        <span className="text-muted">,</span>
      </Fragment>
    )),
    <span key="close" className="text-muted">
      {"};"}
    </span>,
    <span key="caret" className="caret mt-1 inline-block h-4 w-2 bg-accent align-middle" />,
  ];

  return (
    <figure
      aria-hidden="true"
      className="relative overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/20 backdrop-blur-sm"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 font-mono text-xs text-muted">whoami.ts</span>
      </div>

      <pre
        data-phase={phase}
        className="term px-4 py-5 font-mono text-[11px] leading-relaxed whitespace-pre-wrap min-[400px]:text-xs sm:px-5 sm:text-[13px]"
      >
        <code>
          <span className="block">
            <span className="text-muted">$ </span>
            <span className="term-cmd text-fg">{COMMAND.slice(0, typed)}</span>
            {phase === "typing" && (
              <span className="ml-px inline-block h-4 w-2 bg-accent align-middle" />
            )}
          </span>
          {lines.map((line, i) => (
            <span key={i} className="term-line block" style={{ "--i": i } as CSSProperties}>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
