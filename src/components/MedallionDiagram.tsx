import { accents } from "@/lib/accents";

function Box({
  children,
  tone = "default",
  strong = false,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
  strong?: boolean;
}) {
  const tones: Record<string, string> = {
    default: "border-line bg-surface text-ink",
    accent: "border-databricks/40 bg-databricks-soft text-databricks-ink",
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

function Flow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>;
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span className={`flex justify-center text-faint ${className}`} aria-hidden="true">
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
  );
}

function Down() {
  return (
    <span className="flex justify-center text-faint" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 4v16m0 0-5-5m5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Layer({
  label,
  detail,
  tone,
  strong,
}: {
  label: string;
  detail: string;
  tone: "default" | "accent" | "muted";
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-2.5">
      <div className="flex items-center gap-2.5">
        <Box tone={tone} strong={strong}>
          {label}
        </Box>
      </div>
      <span className="text-right text-micro text-muted">{detail}</span>
    </div>
  );
}

export function MedallionDiagram() {
  const a = accents.databricks;

  return (
    <div className="flex flex-col gap-3">
      <Flow>
        <Box strong>EIA Data</Box>
        <Arrow />
        <Box>Google Drive</Box>
        <Arrow />
        <Box>Schedule</Box>
      </Flow>

      <Down />

      <div className="rounded-2xl border border-line bg-paper p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${a.dot}`} />
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-eyebrow text-muted">
            Databricks — Medallion Architecture
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Layer label="Bronze" detail="Raw source data lands as-is" tone="muted" />
          <Layer label="Silver" detail="Clean · standardize · dedupe · validate" tone="default" />
          <Layer label="Gold" detail="Curated analytical tables" tone="accent" strong />
        </div>
      </div>

      <Down />

      <Flow>
        <Box strong>Unity Catalog</Box>
        <Arrow />
        <Box tone="accent" strong>
          AI/BI Genie
        </Box>
        <Arrow />
        <Box>Business Users</Box>
      </Flow>

      <p className="mt-2 text-center text-micro text-faint">
        National-level data boundaries are enforced in the Gold layer, so unsupported questions
        (e.g. state-level queries) are not answered as supported.
      </p>
    </div>
  );
}
