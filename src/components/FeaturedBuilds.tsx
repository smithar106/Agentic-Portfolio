import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "./ui";
import { ProjectCarousel } from "./ProjectCarousel";
import { Reveal } from "./Reveal";

export function FeaturedBuilds() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured Builds"
              title={
                <>
                  Things I&apos;ve{" "}
                  <span className="serif-accent text-accent">built</span>
                </>
              }
              copy="AI agents, data products, and automation tools built to solve real problems."
            />
            <p className="hidden shrink-0 font-mono text-micro uppercase tracking-eyebrow text-faint sm:block">
              Drag or use arrows
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container-px">
        <Reveal delay={100}>
          <ProjectCarousel projects={featuredProjects} />
        </Reveal>
      </div>
    </section>
  );
}
