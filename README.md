# Suresh Kumar — Developer Portfolio

Personal portfolio for **Suresh Kumar**, Software Engineer (Full Stack). It's a single static page with a dark "commit log" theme and amber accent.

**Live:** https://suresh-kumar.vercel.app (placeholder until the real domain is set)

**Stack:** Next.js 16 (App Router), TypeScript (strict), Tailwind CSS v4, Motion, lucide-react, next-themes. There's no backend or database; every route is prerendered as a static file.

---

## Quick start

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev          # http://localhost:3000
```

If port 3000 is already in use, run `npm run dev -- -p 3100`.

| Script                 | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Dev server with hot reload                    |
| `npm run build`        | Production build (must pass before deploying) |
| `npm start`            | Serve the production build locally            |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | TypeScript, no emit                           |
| `npm run format`       | Format everything with Prettier               |
| `npm run format:check` | Check formatting without writing              |

---

## Editing content

**All text on the site lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** You don't need to touch any component to update content. The file is typed by [`src/lib/types.ts`](src/lib/types.ts), so if you mistype a field name or leave out a required one, your editor and `npm run typecheck` will flag it.

After editing, run `npm run typecheck && npm run build` to confirm everything still works.

### What each key controls

| Key          | Where it shows up                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `siteUrl`    | Canonical URL, sitemap, robots.txt, Open Graph tags. See [Site URL](#site-url).                     |
| `seo`        | Page `<title>`, meta description, keywords, and the tech tags on the social image.                  |
| `personal`   | Name, title, hero value line, location, email, resume path, LinkedIn/GitHub links.                  |
| `nav`        | Navbar links. Each `id` must match a section id (see below).                                        |
| `whoami`     | The `whoami.ts` terminal card in the hero. Values can be a string or a list of strings.             |
| `highlights` | The 4 stat cards under the hero.                                                                    |
| `sections`   | The `// 01 — about` label, heading and optional intro line for each section.                        |
| `about`      | About paragraphs (`summary`) and the short list beside them (`facts`).                              |
| `skills`     | Skill cards: category, icon and tags.                                                               |
| `experience` | Timeline entries, newest first.                                                                     |
| `projects`   | Project cards.                                                                                      |
| `education`  | Degree card(s).                                                                                     |
| `learning`   | Courses: completed ones go under **Certifications**, in-progress ones under **Currently learning**. |
| `contact`    | Closing heading and message in the contact section.                                                 |
| `footer`     | "Built with…" line and the copyright year.                                                          |

### Common edits

**Add a project.** Add an object to `projects`:

```ts
{
  slug: "my-project",              // unique, used as a React key
  title: "My Project",
  company: "CubeMatch",            // shown as @cubematch
  summary: "One line shown on the card.",
  context: "Optional longer text, shown when the card is expanded.",
  role: "Sole backend engineer",
  teamSize: "Team of 3",           // optional
  tech: ["NestJS", "PostgreSQL"],
  highlights: [
    "The first 3 are shown on the card…",
    "…",
    "…",
    "…any extra ones appear under “Show details”.",
  ],
  isPrivate: true,                 // shows the “Client project · code private” badge
},
```

**Add a certification or course.** Add an object to `learning`:

```ts
{
  title: "Namaste React",
  provider: "NamasteDev",
  providerUrl: "https://namastedev.com/",
  status: "completed",             // or "in-progress"
  completedOn: "Jun 2026",         // completed courses only
  certificateUrl: "https://…",     // optional; adds a “View certificate” link
},
```

When you finish a course, change its `status` to `"completed"` and add `completedOn` and `certificateUrl`. It moves to the Certifications group on its own. Also update `about.facts` and `whoami.learning` if they mention the course.

**Promotion or new job.** In `experience`, the first entry is treated as the current role and gets the `(HEAD)` marker. Within an entry, list `roles` newest first and set `promotion: true` on a role to give it the pulsing amber `tag: promoted` chip.

**Highlight cards.** A `value` that starts with a number (`"3.5+"`, `"13+"`) counts up when it scrolls into view. Any other text (`"Rookie of the Year"`) shows as a heading.

**Icons.** Skills, highlights and socials use an `icon` key. The available names are listed in the `IconName` type in `src/lib/types.ts` and mapped in [`src/components/ui/Icon.tsx`](src/components/ui/Icon.tsx). To add a new one, import it from `lucide-react` there and add its name to `IconName`.

**Section ids.** Sections have fixed ids: `about`, `skills`, `experience`, `projects`, `education`, `contact`. You can change their labels freely in `sections` and `nav`, but keep the ids.

**Resume.** Replace `public/resume.pdf` with your new file and keep the same name. The download is saved as `Suresh_Kumar_Resume.pdf`.

**Copyright year.** Update `footer.copyrightYear` each January. It's stored in the data file instead of using `new Date()` so the page can stay fully static.

### Theme colors

Colors are CSS variables at the top of [`src/app/globals.css`](src/app/globals.css): `:root` holds the light theme and `.dark` the dark theme (the default). If you change the accent, check its contrast against the background with a contrast checker; it needs at least 4.5:1 for WCAG AA. The social preview image has its own copy of the palette in `src/lib/og-fonts.ts`.

---

## SEO

Everything below is generated at build time from `portfolio.ts`:

| File                                                         | Output                                         |
| ------------------------------------------------------------ | ---------------------------------------------- |
| `src/app/layout.tsx` (`metadata`)                            | title, description, canonical, OG/Twitter tags |
| [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) | `/opengraph-image`: 1200×630 social preview    |
| `src/app/sitemap.ts`                                         | `/sitemap.xml`                                 |
| `src/app/robots.ts`                                          | `/robots.txt`                                  |
| `src/app/icon.svg`, `src/app/apple-icon.tsx`                 | favicon and iOS home-screen icon               |
| `src/app/page.tsx`                                           | schema.org `Person` JSON-LD                    |

To preview the social image locally, run `npm run build && npm start` and open `/opengraph-image`.

### Site URL

The site URL is read from the `NEXT_PUBLIC_SITE_URL` environment variable. If it isn't set, it falls back to the `siteUrl` value in `portfolio.ts`. Set it to your real domain (no trailing slash) so canonical links, the sitemap and social previews point to the right place. See `.env.example`.

---

## Deploying to Vercel

### Option A: GitHub + Vercel dashboard (recommended)

1. Push this repo to GitHub:
   ```bash
   git remote add origin https://github.com/Sureshkumar041/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and **import** the repo.
3. Vercel detects Next.js automatically. Leave the build settings at their defaults.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL`, set to your production URL (e.g. `https://suresh-kumar.vercel.app`).
5. Click **Deploy**.

After that, every push to `main` deploys to production, and every pull request gets its own preview URL.

### Option B: Vercel CLI

```bash
npx vercel          # first run links the project and creates a preview deploy
npx vercel --prod   # deploy to production
```

### Custom domain

In the Vercel dashboard, open **Project → Settings → Domains** and add your domain. Then update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy, so the canonical URL, sitemap and OG tags use it.

---

## Project structure

```
src/
├── app/                  # layout, page, globals.css, SEO routes (OG image, sitemap, robots, icons)
├── assets/fonts/         # TTF/WOFF copies used only by the generated OG/apple icons
├── components/
│   ├── layout/           # Navbar, ThemeToggle, Providers
│   ├── motion/           # InView, CountUp, GitRail, PointerGlow (small client components)
│   ├── sections/         # Hero, Highlights, About, Skills, Experience, Projects, Education, Contact, Footer
│   └── ui/               # SectionHeading, Section, TechTag, ProjectCard, TimelineItem, StatCard, …
├── data/portfolio.ts     # ← all content
└── lib/                  # types, utils, motion + OG helpers
public/resume.pdf
```

## How the motion works

Motion's hooks (`useInView`, `useScroll`, `animate`) decide _when_ something animates, and CSS transitions in `globals.css` (see the "Motion system" section) do the animating. This keeps most components as server components and the JavaScript bundle small.

All animation sits inside `@media (prefers-reduced-motion: no-preference)`, so with reduced motion turned on, everything appears immediately in its final state. The terminal typing effect only runs at 1024px and wider; on phones the card shows its full content right away so it doesn't delay Largest Contentful Paint.

## Credits

The [Geist](https://vercel.com/font) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/) fonts are licensed under the SIL Open Font License 1.1. The license files are in `src/assets/fonts/`.
