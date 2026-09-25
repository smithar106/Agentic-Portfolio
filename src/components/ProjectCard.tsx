import Link from "next/link";
import type { Project } from "@/data/projects";
import { isTodo } from "@/data/config";
import { accents } from "@/lib/accents";
import { ProjectVisual } from "./ProjectVisual";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const a = accents[project.accent];
  const liveUrl = project.liveUrl && !isTodo(project.liveUrl) ? project.liveUrl : undefined;
  const github = project.githubUrls[0];
  const isPlaceholder = project.status === "placeholder";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <span className={`font-mono text-[0.68rem] font-medium uppercase tracking-eyebrow ${a.ink}`}>
            {project.eyebrow}
          </span>
          {isPlaceholder && (
            <span className="rounded-full bg-paper px-2.5 py-1 text-[0.65rem] font-medium text-faint">
              In progress
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-balance font-sans text-section font-semibold text-ink">
            {project.name}
          </h3>
          <p className="text-balance text-body text-muted">{project.tagline}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5">
          <span className={`rounded-full px-2.5 py-1 text-micro font-medium ${a.softInk}`}>
            {project.category}
          </span>
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-paper px-2.5 py-1 text-micro text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-small font-medium text-white transition-colors hover:bg-accent"
            >
              View Live <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-small font-medium text-ink transition-colors hover:border-ink"
          >
            Case Study
          </Link>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-small text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
