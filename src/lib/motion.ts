/** True when the user has asked the OS to minimise motion. Client-only. */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
