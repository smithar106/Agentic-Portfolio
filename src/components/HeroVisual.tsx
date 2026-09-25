const nodes = [
  { label: "AI", sub: "Agents · LLMs", x: 50, y: 14, accent: "bg-accent" },
  { label: "DATA", sub: "Pipelines · SQL", x: 84.24, y: 38.88, accent: "bg-teal" },
  { label: "AUTOMATION", sub: "Workflows · Cron", x: 71.16, y: 79.12, accent: "bg-amber" },
  { label: "OPERATIONS", sub: "Scale · Markets", x: 28.84, y: 79.12, accent: "bg-violet" },
  { label: "DEPLOYMENT", sub: "Ship · Measure", x: 15.76, y: 38.88, accent: "bg-accent" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="dot-grid relative aspect-square w-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-paper p-6 shadow-soft">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((n) => (
            <line
              key={n.label}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="currentColor"
              strokeWidth="0.35"
              strokeDasharray="1.5 1.5"
              className="text-line-strong"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-2xl border border-ink bg-ink text-white shadow-lift sm:h-28 sm:w-28">
          <span className="text-[0.65rem] font-medium uppercase tracking-eyebrow text-white/60">
            Problem
          </span>
          <span className="serif-accent text-lg leading-none">→</span>
          <span className="text-[0.65rem] font-medium uppercase tracking-eyebrow text-white/60">
            Shipped
          </span>
        </div>

        {nodes.map((n, i) => (
          <div
            key={n.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 animate-float-slow flex-col items-center rounded-xl border border-line bg-surface px-3 py-2 shadow-soft"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${n.accent}`} />
              <span className="font-mono text-[0.7rem] font-semibold tracking-wide text-ink">
                {n.label}
              </span>
            </span>
            <span className="mt-0.5 text-[0.62rem] text-faint">{n.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
