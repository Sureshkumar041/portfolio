import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { portfolio } from "@/data/portfolio";

const { personal, siteUrl } = portfolio;

/** schema.org Person data so search engines can connect the name to the profiles. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: siteUrl,
  email: `mailto:${personal.email}`,
  homeLocation: { "@type": "Place", name: personal.location },
  sameAs: personal.socials.map((s) => s.href),
};

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="relative isolate outline-none">
      <script
        type="application/ld+json"
        // Static, trusted data from portfolio.ts; `<` is escaped so it can't close the tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
