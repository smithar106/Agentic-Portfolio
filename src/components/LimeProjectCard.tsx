"use client";

import { useState } from "react";
import type { LimeProject, LimeProjectStatus } from "@/data/lime-projects";

const statusConfig: Record<
  LimeProjectStatus,
  { label: string; className: string }
> = {
  production: { label: "Production", className: "bg-teal-soft text-teal-ink" },
  prototype: { label: "Prototype", className: "bg-amber-soft text-amber-ink" },
  program: { label: "Program", className: "bg-violet-soft text-violet-ink" },
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LimeProjectCard({ project }: { project: LimeProject }) {
  const [open, setOpen] = useState(false);
  const status = statusConfig[project.status];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[0.68rem] font-medium uppercase tracking-eyebrow text-muted">
          {project.category}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[0.65rem] font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <h3 className="text-body font-semibold text-ink">{project.name}</h3>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-small text-muted">
          <span className="font-semibold text-ink">Problem — </span>
          {project.problem}
        </p>
        <p className="text-small text-muted">
          <span className="font-semibold text-ink">Solution — </span>
          {project.solution}
        </p>
      </div>

      {project.impact && (
        <div className="mt-4 rounded-xl border border-teal/30 bg-teal-soft px-4 py-3">
          <p className="text-small font-semibold text-teal-ink">Impact</p>
          <p className="mt-0.5 text-small text-teal-ink/90">{project.impact}</p>
        </div>
      )}

      {project.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md bg-paper px-2 py-1 font-mono text-[0.68rem] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {project.capabilities.length > 0 && (
        <div className="mt-4 border-t border-line pt-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`${project.id}-details`}
            className="flex w-full items-center justify-between gap-2 rounded-lg px-1 py-1 text-small font-medium text-muted transition-colors hover:text-ink"
          >
            Technical details
            <Chevron open={open} />
          </button>
          {open && (
            <ul id={`${project.id}-details`} className="mt-3 flex flex-col gap-2">
              {project.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 text-small text-muted">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
