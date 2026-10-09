import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" index={4}>
      <ul className="grid items-start gap-5 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <li key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
