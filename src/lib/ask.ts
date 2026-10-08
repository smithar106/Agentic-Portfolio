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
    answer: `Arthur has personally built ${liveProducts.length} AI and data products: ${liveProducts
      .map((p) => p.name)
      .join(", ")}. They span decision intelligence, anomaly detection, operations intelligence, autonomous agents, hybrid retrieval, semantic search, and a governed Databricks data platform.`,
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
      "Arthur's data experience spans SQL, Databricks, Snowflake, PostgreSQL, Unity Catalog, data pipelines, APIs, and analytics. His products are data-first: Databricks Energy Intelligence runs a governed medallion pipeline (Bronze → Silver → Gold) over EIA data with AI/BI Genie natural-language analytics, Weather Outliers runs a scheduled pipeline over ERA5 climatology, and Compass builds an evidence engine over 50,000+ implementations. At Lime he led data and automation across 75+ markets.",
    references: [
      { label: "Databricks Energy Intelligence", href: "/projects/databricks-energy-intelligence" },
      { label: "Weather Outliers", href: "/projects/weather-intelligence" },
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
  {
    keywords: ["databricks", "unity catalog", "genie", "medallion", "energy", "data platform", "spark"],
    answer:
      "Arthur's Databricks work is best shown in Databricks Energy Intelligence — a governed energy data platform built with Databricks, Unity Catalog, and AI/BI Genie. It ingests U.S. EIA historical datasets, runs a medallion architecture (Bronze → Silver → Gold), resolves 767 duplicate series/year combinations with deterministic SQL, and produces 2,373 validated annual observations across 33 energy series. Genie provides natural-language analytics over the curated tables, with data boundaries enforced so unsupported questions are not answered as supported.",
    references: [
      { label: "Databricks Energy Intelligence", href: "/projects/databricks-energy-intelligence" },
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
