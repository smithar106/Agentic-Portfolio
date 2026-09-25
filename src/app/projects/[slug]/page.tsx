import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { isTodo } from "@/data/config";
import { accents } from "@/lib/accents";
import { FlowDiagram } from "@/components/FlowDiagram";
import { WeatherCase } from "@/components/WeatherCase";
import { Reveal } from "@/components/Reveal";
import { ActionLink, Eyebrow, Pill } from "@/components/ui";
import { ArrowUpRight, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.name,
    description: p.tagline,
    openGraph: {
      title: `${p.name} — Arthur Smith`,
      description: p.tagline,
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-sans text-section font-semibold text-ink">{children}</h2>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const a = accents[project.accent];
  const liveUrl = project.liveUrl && !isTodo(project.liveUrl) ? project.liveUrl : undefined;
  const isPlaceholder = project.status === "placeholder";

  return (
    <div className="bg-paper">
      <header className={`relative overflow-hidden border-b border-line bg-gradient-to-br ${a.soft} to-surface`}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-px relative py-16 sm:py-20">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-small text-muted transition-colors hover:text-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            All projects
          </Link>

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Eyebrow dot={false} className={a.ink}>
                {project.eyebrow}
              </Eyebrow>
              {isPlaceholder && (
                <span className="rounded-full bg-paper px-2.5 py-1 text-[0.65rem] font-medium text-faint">
                  In progress
                </span>
              )}
            </div>
            <h1 className="text-balance font-sans text-display font-semibold text-ink">
              {project.name}
            </h1>
            <p className="max-w-2xl text-balance text-lead text-muted">{project.tagline}</p>

            <div className="flex flex-wrap items-center gap-3">
              {liveUrl && (
                <ActionLink href={liveUrl} variant="accent" external>
                  View Live App
                </ActionLink>
              )}
              {project.githubUrls.map((g) => (
                <ActionLink key={g.url} href={g.url} variant="secondary" external>
                  {g.label}
                </ActionLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container-px flex flex-col gap-16 py-16 sm:py-20">
        <Reveal>
          <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionTitle>Overview</SectionTitle>
            <p className="text-lead text-muted">{project.description}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionTitle>The Problem</SectionTitle>
            <p className="text-lead text-muted">{project.problem}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionTitle>What I Built</SectionTitle>
            <div className="flex flex-col gap-5">
              <p className="text-lead text-muted">{project.solution}</p>
              <ul className="flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <Pill className={a.softInk}>{h}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionTitle>How It Works</SectionTitle>
            <FlowDiagram steps={project.flow} accent={project.accent} />
          </section>
        </Reveal>

        {project.slug === "weather-intelligence" && (
          <Reveal>
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                <SectionTitle>Architecture</SectionTitle>
              </div>
              <WeatherCase />
            </section>
          </Reveal>
        )}

        {project.decisions.length > 0 && (
          <Reveal>
            <section className="flex flex-col gap-6">
              <SectionTitle>Technical Decisions</SectionTitle>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.decisions.map((d) => (
                  <div
                    key={d.title}
                    className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6 shadow-card"
                  >
                    <h3 className="text-body font-semibold text-ink">{d.title}</h3>
                    <p className="text-small text-muted">{d.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.lessons.length > 0 && (
          <Reveal>
            <section className="flex flex-col gap-6">
              <SectionTitle>What I Learned</SectionTitle>
              <ul className="flex flex-col gap-3">
                {project.lessons.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 text-body text-muted"
                  >
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${a.dot}`} />
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        <Reveal>
          <section className="flex flex-col gap-6">
            <SectionTitle>Stack</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-sans text-section font-semibold text-ink">
                  See it in action
                </h2>
                <p className="text-muted">
                  {liveUrl ? "Explore the live product." : "Live URL coming soon."}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {liveUrl && (
                  <ActionLink href={liveUrl} variant="accent" external>
                    View Live <ArrowUpRight className="h-4 w-4" />
                  </ActionLink>
                )}
                <ActionLink href="/#projects" variant="secondary">
                  More projects
                </ActionLink>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
