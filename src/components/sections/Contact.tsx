import { ArrowUpRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { personal, contact } = portfolio;

  return (
    <Section id="contact" index={6}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-accent-soft blur-3xl"
        />

        <p className="max-w-2xl text-2xl font-semibold tracking-tight text-balance text-fg sm:text-3xl">
          {contact.heading}
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted">{contact.message}</p>

        <a
          href={`mailto:${personal.email}`}
          className="group mt-8 inline-flex items-center gap-3 font-mono text-base break-all text-fg transition-colors hover:text-accent sm:text-xl"
        >
          <Mail size={22} aria-hidden="true" className="shrink-0 text-accent" />
          <span className="underline decoration-accent decoration-1 underline-offset-8 group-hover:decoration-2">
            {personal.email}
          </span>
        </a>

        <ul className="mt-10 flex flex-wrap gap-3">
          {personal.socials.map((s) => (
            <li key={s.label}>
              <ButtonLink
                href={s.href}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={s.icon} size={16} />
                {s.label}
                <span className="font-mono text-xs text-muted">{s.handle}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
