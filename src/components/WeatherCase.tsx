import { accents } from "@/lib/accents";

function Box({
  children,
  strong,
  tone = "default",
}: {
  children: React.ReactNode;
  strong?: boolean;
  tone?: "default" | "good" | "bad" | "muted";
}) {
  const tones: Record<string, string> = {
    default: "border-line bg-surface text-ink",
    good: "border-teal/40 bg-teal-soft text-teal-ink",
    bad: "border-amber/40 bg-amber-soft text-amber-ink",
    muted: "border-line bg-paper text-muted",
  };
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl border px-3 py-2 text-center text-small ${
        strong ? "font-semibold" : "font-normal"
      } ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Down({ className = "" }: { className?: string }) {
  return (
    <span className={`flex justify-center text-faint ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 4v16m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function DiagramCard({
  label,
  principle,
  children,
}: {
  label: string;
  principle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
      <p className="mb-5 font-mono text-[0.68rem] font-semibold uppercase tracking-eyebrow text-muted">
        {label}
      </p>
      {children}
      {principle && (
        <p className="mt-5 border-t border-line pt-4 text-small text-muted">
          <span className="font-semibold text-ink">Principle — </span>
          {principle}
        </p>
      )}
    </div>
  );
}

export function WeatherCase() {
  const a = accents.teal;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DiagramCard
        label="Grounded generation"
        principle="Treat model output as a proposal to validate, not truth to display."
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Box>Source Data</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Deterministic Computation</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>LLM</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>Validation</Box>
          </div>
          <Down />
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-teal-ink">Pass</span>
              <Down />
              <Box tone="good" strong>Answer</Box>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-amber-ink">Fail</span>
              <Down />
              <Box tone="bad" strong>Safe Fallback</Box>
            </div>
          </div>
        </div>
      </DiagramCard>

      <DiagramCard label="NL → SQL">
        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            <Box>User Question</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Plan</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>Read-only SQL</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Execute</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Actual Rows</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>Generate Answer</Box>
          </div>
          <p className="mt-4 text-center text-micro text-faint">
            Queries are read-only and bounded; the answer is grounded in the rows actually returned.
          </p>
        </div>
      </DiagramCard>

      <DiagramCard label="Observability">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${a.dot}`} />
            <Box strong>Trace</Box>
          </div>
          <div className="ml-4 border-l border-line pl-6">
            <div className="flex items-center gap-2 py-1">
              <span className="h-px w-4 bg-line-strong" />
              <Box>Fetch</Box>
            </div>
            <div className="flex items-center gap-2 py-1">
              <span className="h-px w-4 bg-line-strong" />
              <Box>Score</Box>
            </div>
            <div className="flex items-center gap-2 py-1">
              <span className="h-px w-4 bg-line-strong" />
              <Box>Rank</Box>
            </div>
            <div className="flex items-center gap-2 py-1">
              <span className="h-px w-4 bg-line-strong" />
              <Box strong>Explain</Box>
            </div>
            <div className="ml-8 border-l border-line pl-6">
              <div className="flex items-center gap-2 py-1">
                <span className="h-px w-4 bg-line-strong" />
                <Box>LLM</Box>
              </div>
              <div className="flex items-center gap-2 py-1">
                <span className="h-px w-4 bg-line-strong" />
                <Box>Validate</Box>
              </div>
            </div>
          </div>
        </div>
      </DiagramCard>

      <DiagramCard
        label="Evaluation"
        principle="A prompt change is a software change. Test it for regressions."
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Box>Golden Set</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Prompt / Model</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>Live Agent</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box>Evaluate</Box>
            <span className="text-faint" aria-hidden="true">→</span>
            <Box strong>Compare</Box>
          </div>
          <p className="mt-4 text-center text-micro text-faint">
            Eight committed suites and 138 checks pin grounding, ranking, and reproducibility.
          </p>
        </div>
      </DiagramCard>
    </div>
  );
}
