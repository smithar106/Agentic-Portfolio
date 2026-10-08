import {
  limeOverview,
  limeProjects,
  limeArchitecture,
  limeLeadership,
} from "@/data/lime-projects";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionHeading } from "./ui";
import { LimeProjectCard } from "./LimeProjectCard";

function FlowStep({
  label,
  last = false,
}: {
  label: string;
  last?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center rounded-xl border border-line bg-surface px-3 py-2 text-center text-small font-medium text-ink">
        {label}
      </span>
      {!last && (
        <span className="text-faint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M4 12h16m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
}

export function LimeSection() {
  return (
    <section id="lime" className="scroll-mt-20 border-t border-line bg-paper py-14 sm:py-16">
      <div className="container-px">
        {/* Header */}
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
                Enterprise AI, data, and automation,{" "}
                <span className="serif-accent text-accent">delivered at global scale.</span>
              </>
            }
            copy="As Program Manager, Global Strategy & Operations at Lime, I build AI applications, data products, and automation systems while leading the cross-functional programs that ship them."
          />
        </Reveal>

        {/* Overview */}
        <Reveal delay={60}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-small text-muted">
                <span className="font-semibold text-ink">{limeOverview.role}</span>
                <span className="h-1 w-1 rounded-full bg-faint" aria-hidden="true" />
                <span>{limeOverview.company}</span>
                <span className="h-1 w-1 rounded-full bg-faint" aria-hidden="true" />
                <span>{limeOverview.period}</span>
              </div>
              <p className="text-lead text-muted">{limeOverview.intro}</p>
              <p className="text-small text-muted">{limeOverview.tooling}</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {limeOverview.metrics.slice(0, 5).map((m) => (
                  <div
                    key={m.label}
                    className="flex min-w-0 flex-col gap-1.5 overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-card"
                  >
                    <span className="font-sans text-section font-semibold leading-none tracking-tight text-teal-ink">
                      {m.value}
                    </span>
                    <span className="text-micro leading-snug text-muted">{m.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-micro text-faint">{limeOverview.metricsNote}</p>
            </div>
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal delay={80}>
          <div className="mt-14">
            <div className="flex flex-col gap-2">
              <Eyebrow>Enterprise AI & Automation</Eyebrow>
              <h3 className="font-sans text-section font-semibold text-ink">
                Systems I&apos;ve built and led
              </h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {limeProjects.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <LimeProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Architecture & capabilities */}
        <Reveal delay={80}>
          <div className="mt-14 grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Enterprise Architecture</Eyebrow>
                <h3 className="font-sans text-section font-semibold text-ink">
                  {limeArchitecture.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-y-3">
                {limeArchitecture.workflow.map((step, i) => (
                  <FlowStep
                    key={step}
                    label={step}
                    last={i === limeArchitecture.workflow.length - 1}
                  />
                ))}
              </div>
              <p className="text-micro text-faint">{limeArchitecture.note}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-eyebrow text-muted">
                Technical capabilities
              </p>
              <ul className="flex flex-wrap gap-2">
                {limeArchitecture.capabilities.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-small text-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Leadership */}
        <Reveal delay={80}>
          <div className="mt-14">
            <SectionHeading
              eyebrow="Technical Program Leadership"
              title={
                <>
                  {limeLeadership.heading.split("to AI")[0]}
                  <span className="serif-accent text-accent">to AI</span>
                  {limeLeadership.heading.split("to AI")[1]}
                </>
              }
              copy={limeLeadership.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {limeLeadership.capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="flex h-full gap-5 rounded-2xl border border-line bg-surface p-6 shadow-card transition-colors hover:border-line-strong">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-soft font-mono text-small font-semibold text-teal-ink">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-body font-semibold text-ink">{c.title}</h4>
                      <p className="mt-1 text-small text-muted">{c.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
