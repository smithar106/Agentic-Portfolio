import type { AccentKey } from "@/data/projects";
import { accents } from "@/lib/accents";

export type FlowStep = { step: string; detail: string };

export function FlowDiagram({
  steps,
  accent,
}: {
  steps: FlowStep[];
  accent: AccentKey;
}) {
  const a = accents[accent];

  return (
    <ol className="relative flex flex-col">
      {steps.map((s, i) => (
        <li key={i} className="relative flex gap-5 pb-6 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className="absolute left-[1.05rem] top-9 h-[calc(100%-2.25rem)] w-px bg-line-strong"
              aria-hidden="true"
            />
          )}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-small font-semibold text-white ${a.bg}`}
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <p className="text-body font-semibold text-ink">{s.step}</p>
            <p className="mt-0.5 max-w-xl text-small text-muted">{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
