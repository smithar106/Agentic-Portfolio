import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { limeProjects } from "@/data/lime-projects";

export type AskReference = { label: string; href?: string };

export type AskResult = {
  answer: string;
  references: AskReference[];
};

type Entry = {
  keywords: string[];
  answer: string;
  references: AskReference[];
};

const liveProducts = projects
  .filter((p) => p.status === "live")
  .map((p) => ({ name: p.name, slug: p.slug, tagline: p.tagline }));

const entries: Entry[] = [
  {
    keywords: ["built", "ai", "build", "made", "created", "projects", "products"],
    answer: `Arthur has personally built three AI and data products: ${liveProducts
      .map((p) => p.name)
      .join(", ")}. Compass is an evidence-based decision intelligence platform; Weather Outliers is a production anomaly-detection and explanation system across 50 cities; and Flight Pulse is U.S. flight operations intelligence with a grounded AI reasoning layer.`,
    references: liveProducts.map((p) => ({
      label: p.name,
      href: `/projects/${p.slug}`,
    })),
  },
  {
    keywords: ["production", "reliability", "reliable", "best", "demonstrate", "deep", "engineering"],
    answer:
      "Weather Outliers best demonstrates production AI engineering. It combines an automated daily pipeline, a 30-year climatology baseline, probability-based anomaly scoring, grounded agentic explanation, deterministic fallbacks, natural-language-to-SQL, MLflow tracing, and a committed evaluation harness. The agent treats model output as a proposal to validate — not truth to display.",
    references: [{ label: "Weather Outliers", href: "/projects/weather-intelligence" }],
  },
  {
    keywords: ["data", "pipeline", "sql", "analytics", "snowflake", "database", "warehouse"],
    answer:
      "Arthur's data experience spans SQL, Snowflake, PostgreSQL, data pipelines, APIs, and analytics. His products are data-first: Weather Outliers runs a scheduled pipeline over ERA5 climatology, Compass builds an evidence engine over 50,000+ implementations, and Flight Pulse normalizes daily flight data against historical baselines. At Lime he led data and automation across 75+ markets.",
    references: [
      { label: "Weather Outliers", href: "/projects/weather-intelligence" },
      { label: "Compass", href: "/projects/compass" },
    ],
  },
  {
    keywords: ["lime", "scale", "market", "program", "lead", "leadership", "operations"],
    answer:
      "At Lime, Arthur spent 4.5+ years scaling technology-enabled operations across 75+ markets. His professional work there included internal developer tooling (LimeCLI), an operations command center for outage monitoring, a risk register with an AI analyst, a centralized dashboards hub, and automated monthly reporting.",
    references: [{ label: "Technology at Global Scale", href: "/#lime" }],
  },
  {
    keywords: ["reliability", "ground", "grounded", "hallucinat", "validate", "safe", "trust"],
    answer:
      "Arthur approaches AI reliability through grounded generation: deterministic computation produces the facts, the LLM only explains them, and every model claim is validated against the data it actually received. Both Weather Outliers and Flight Pulse include deterministic fallbacks and evaluation harnesses, so a prompt change is treated as a software change and tested for regressions.",
    references: [
      { label: "Weather Outliers", href: "/projects/weather-intelligence" },
      { label: "Flight Pulse", href: "/projects/flight-pulse" },
    ],
  },
  {
    keywords: ["forward deployed", "fde", "deploy", "customer", "implementation", "consult"],
    answer:
      "Forward Deployed Engineering is exactly where Arthur's work sits — between the user, the business, the data, and the technology. His approach: understand an ambiguous operational problem, define the system, build or align teams, deploy, measure, and iterate. Compass and Flight Pulse both translate messy operational questions into deployed, measurable products.",
    references: [
      { label: "Compass", href: "/projects/compass" },
      { label: "Flight Pulse", href: "/projects/flight-pulse" },
    ],
  },
];

const fallback: AskResult = {
  answer:
    "I can answer from Arthur's structured portfolio: the products he has built (Compass, Weather Outliers, Flight Pulse), his data experience, his work at Lime, and his approach to AI reliability. Try one of the suggested questions.",
  references: [
    { label: "View all projects", href: "/#projects" },
    { label: "About Arthur", href: "/#about" },
  ],
};

function score(question: string, entry: Entry): number {
  const q = question.toLowerCase();
  return entry.keywords.reduce((acc, kw) => (q.includes(kw) ? acc + 1 : acc), 0);
}

export function answerQuestion(question: string): AskResult {
  const q = question.trim().toLowerCase();

  if (!q) return fallback;

  // Exact suggested-question hits first.
  for (const entry of entries) {
    if (entry.keywords.some((kw) => kw.length > 4 && q === kw)) {
      return { answer: entry.answer, references: entry.references };
    }
  }

  let best = entries[0];
  let bestScore = 0;
  for (const entry of entries) {
    const s = score(q, entry);
    if (s > bestScore) {
      best = entry;
      bestScore = s;
    }
  }

  if (bestScore === 0) return fallback;
  return { answer: best.answer, references: best.references };
}
