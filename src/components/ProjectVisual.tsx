import type { Project } from "@/data/projects";
import { accents } from "@/lib/accents";

export function ProjectVisual({ project }: { project: Project }) {
  const a = accents[project.accent];
  const steps = project.flow.slice(0, 6);

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl border-b border-line bg-gradient-to-br ${a.soft} to-surface`}
    >
      {/* chrome bar */}
      <div className="flex items-center gap-2 border-b border-line/60 bg-surface/70 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="ml-2 rounded-md bg-paper px-2 py-0.5 font-mono text-[0.6rem] text-muted">
          {project.slug}
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
          <span className="text-[0.6rem] font-medium text-muted">
            {project.status === "live" ? "Live" : "In progress"}
          </span>
        </span>
      </div>

      <div className="grid h-[calc(100%-2.4rem)] grid-cols-2 gap-4 px-4 py-4">
        {/* flow steps */}
        <div className="flex flex-col justify-center gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full font-mono text-[0.55rem] font-semibold text-white ${a.bg}`}
              >
                {i + 1}
              </span>
              <span className="truncate text-[0.68rem] font-medium text-ink">
                {s.step}
              </span>
            </div>
          ))}
        </div>

        {/* decorative chart */}
        <div className="flex items-end justify-center gap-2 pb-1">
          {[38, 62, 44, 78, 56, 90, 66].map((h, i) => (
            <div
              key={i}
              className={`w-3 rounded-t-sm ${i === 5 ? a.bg : `${a.bg} opacity-35`}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface/80 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
