import { limeProjects, type LimeProject } from "@/data/lime-projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

function LimeCard({ project }: { project: LimeProject }) {
  const isTodo = (v: string) => v.startsWith("TODO_");
  const details = [
    { label: "Problem", value: project.problem },
    { label: "My role", value: project.role },
    { label: "Scale", value: project.scale },
    { label: "Outcome", value: project.outcome },
    { label: "Learned", value: project.learned },
  ].filter((d) => !isTodo(d.value));

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-teal" />
        <span className="font-mono text-[0.68rem] font-medium uppercase tracking-eyebrow text-muted">
          {project.kind}
        </span>
      </div>
      <h3 className="text-body font-semibold text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-small text-muted">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technical.map((t) => (
          <span
            key={t}
            className="rounded-md bg-paper px-2 py-1 font-mono text-[0.68rem] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {details.length > 0 && (
        <dl className="mt-4 space-y-2 border-t border-line pt-4">
          {details.map((d) => (
            <div key={d.label} className="flex flex-col gap-0.5">
              <dt className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-faint">
                {d.label}
              </dt>
              <dd className="text-small text-muted">{d.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

export function LimeSection() {
  return (
    <section id="lime" className="scroll-mt-20 border-t border-line bg-paper py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mb-6 flex items-center gap-2">
            <span className="rounded-full bg-ink px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-eyebrow text-white">
              Professional · Lime
            </span>
          </div>
          <SectionHeading
            eyebrow="Built at Scale"
            title={
              <>
                Building products is one side of my experience.{" "}
                <span className="serif-accent text-accent">
                  Scaling technology across 75+ markets
                </span>{" "}
                is the other.
              </>
            }
            copy="At Lime I led and contributed to technology, data, and operations initiatives — internal tooling, monitoring, reporting, and automation — across global operations. These are professional initiatives, not open-source projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {limeProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <LimeCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
