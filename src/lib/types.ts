/**
 * Content types for the portfolio. Everything rendered on the page
 * comes from `src/data/portfolio.ts` and must match these shapes.
 */

/** Icon keys map to lucide / brand icons in `src/components/ui/Icon.tsx`. */
export type IconName =
  | "code"
  | "server"
  | "layout"
  | "smartphone"
  | "database"
  | "plug"
  | "wrench"
  | "briefcase"
  | "layers"
  | "trophy"
  | "landmark"
  | "mail"
  | "github"
  | "linkedin";

export interface NavItem {
  /** Must match the `id` of a section on the page. */
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  /** Shown in the contact section, e.g. "in/suresh-kumar-s". */
  handle: string;
}

export interface Personal {
  name: string;
  firstName: string;
  title: string;
  /** One-line value statement shown in the hero. */
  tagline: string;
  location: string;
  email: string;
  /** Path to the resume inside `/public`. */
  resumeUrl: string;
  socials: SocialLink[];
}

export interface Highlight {
  /** Headline on the card. Values starting with a number (e.g. "3.5+") count up. */
  value: string;
  label: string;
  icon: IconName;
}

export interface SectionMeta {
  /** Monospace label, rendered like a code comment: "// 01 — about". */
  label: string;
  title: string;
  description?: string;
}

export type SectionId = "about" | "skills" | "experience" | "projects" | "education" | "contact";

export interface SkillGroup {
  category: string;
  icon: IconName;
  items: string[];
}

export interface Role {
  title: string;
  /** e.g. "Feb 2026 – Present" */
  period: string;
  /** Marks a promotion; rendered as a git tag on the timeline. */
  promotion?: boolean;
}

export interface Experience {
  company: string;
  location?: string;
  period: string;
  /** Most recent role first. */
  roles: Role[];
  points: string[];
  /** Short award or recognition shown as a badge. */
  award?: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  /** One-line summary shown on the collapsed card. */
  summary: string;
  /** Longer context shown when the card is expanded (optional). */
  context?: string;
  role: string;
  teamSize?: string;
  tech: string[];
  /** First three are shown collapsed; the rest appear on expand. */
  highlights: string[];
  /** Client / company work whose source can't be shared. */
  isPrivate: boolean;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
}

export interface LearningItem {
  title: string;
  provider: string;
  providerUrl: string;
  /** "completed" items show under Certifications; "in-progress" under Currently learning. */
  status: "completed" | "in-progress";
  /** Completion date, e.g. "Mar 2026". */
  completedOn?: string;
  certificateUrl?: string;
}

export interface Seo {
  /** <title> and Open Graph title. */
  title: string;
  /** Meta description: aim for 120–160 characters. */
  description: string;
  keywords: string[];
  /** Tech tags shown on the generated social preview image. */
  ogStack: string[];
}

export interface Portfolio {
  siteUrl: string;
  seo: Seo;
  personal: Personal;
  nav: NavItem[];
  /** Typed "whoami" object shown in the hero terminal card. */
  whoami: Record<string, string | string[]>;
  highlights: Highlight[];
  sections: Record<SectionId, SectionMeta>;
  about: { summary: string[]; facts: string[] };
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  /** Courses and certifications, shown in the Education & Learning section. */
  learning: LearningItem[];
  contact: { heading: string; message: string };
  footer: { builtWith: string; copyrightYear: number };
}
