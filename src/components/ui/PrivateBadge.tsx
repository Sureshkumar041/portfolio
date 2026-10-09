import { Lock } from "lucide-react";

export function PrivateBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap text-muted">
      <Lock size={12} aria-hidden="true" />
      Client project · code private
    </span>
  );
}
