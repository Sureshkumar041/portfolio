import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { portfolio } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { TerminalCard } from "@/components/ui/TerminalCard";

/** Staggered CSS entrance: chip → name → title → value line → buttons. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { personal, whoami } = portfolio;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 sm:px-8 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-32 lg:pb-28"
    >
      {/* Soft amber glow behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-24 -z-10 size-96 rounded-full bg-accent-soft blur-3xl"
      />

      <div>
        <p
          style={delay(0)}
          className="rise-in inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted"
        >
          <MapPin size={14} aria-hidden="true" className="text-accent" />
          {personal.location}
        </p>

        <h1
          id="hero-heading"
          style={delay(70)}
          className="rise-in mt-6 text-5xl font-semibold tracking-tight text-balance text-fg sm:text-6xl lg:text-7xl"
        >
          {personal.name}
          <span className="text-accent">.</span>
        </h1>

        <p style={delay(140)} className="rise-in mt-4 font-mono text-sm text-accent sm:text-base">
          <span className="text-muted">{"// "}</span>
          {personal.title}
        </p>

        <p
          style={delay(210)}
          className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted"
        >
          {personal.tagline}
        </p>

        <div style={delay(280)} className="rise-in mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#projects">
            View Projects
            <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={personal.resumeUrl}
            variant="secondary"
            download="Suresh_Kumar_Resume.pdf"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            <Mail size={16} aria-hidden="true" />
            Contact Me
          </ButtonLink>
        </div>
      </div>

      <div style={delay(200)} className="rise-in">
        <TerminalCard data={whoami} variable={personal.firstName.toLowerCase()} />
      </div>
    </section>
  );
}
