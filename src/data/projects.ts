import { TODO_FLIGHT_APP_URL } from "./config";

export type AccentKey = "blue" | "teal" | "amber" | "violet";

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  category: string;
  featured: boolean;
  accent: AccentKey;
  status: "live" | "placeholder";
  technologies: string[];
  highlights: string[];
  problem: string;
  solution: string;
  flow: { step: string; detail: string }[];
  decisions: { title: string; body: string }[];
  lessons: string[];
  liveUrl?: string;
  githubUrls: { label: string; url: string }[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "compass",
    name: "Compass",
    eyebrow: "Applied AI · Evidence Engine",
    tagline:
      "Evidence-based decision intelligence for operational problems.",
    description:
      "Compass helps leaders choose how to solve business problems using evidence from what organizations have actually implemented — comparing AI, software, automation, and process redesign on real outcomes, then monitoring whether the decision delivered.",
    category: "Decision Intelligence",
    featured: true,
    accent: "blue",
    status: "live",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "scikit-learn",
      "Neo4j",
      "LLM APIs",
      "Railway",
    ],
    highlights: [
      "Evidence engine over 50,000+ real-world implementations",
      "Self-improving, budget-controlled research agent",
      "Defensible decision briefs with confidence and comparables",
      "Implementation command center with outcome tracking",
    ],
    problem:
      "Leaders choose how to solve operational problems on vendor pitches and instinct. Compass replaces “we think this will help” with “here's what actually worked for companies like yours.”",
    solution:
      "A decision platform that finds real-world evidence of similar organizations that solved a problem, ranks the approaches by what measurably worked, and produces a defensible brief — confidence, comparables, risks, and an implementation plan attached. A budget-controlled agent keeps the evidence base improving over time.",
    flow: [
      { step: "Capture problem", detail: "A leader describes an operational problem in plain language." },
      { step: "Find evidence", detail: "Retrieve real-world implementations of comparable problems." },
      { step: "Rank approaches", detail: "Order options by what measurably worked in comparable organizations." },
      { step: "Produce brief", detail: "Confidence, comparables, risks, and an implementation plan." },
      { step: "Implement", detail: "An implementation command center tracks progress, risks, and KPIs." },
      { step: "Measure", detail: "Outcomes feed back and strengthen future recommendations." },
    ],
    decisions: [
      {
        title: "Evidence as the product",
        body: "Recommendations are only as good as the evidence behind them, so claims are verified through a quality-gated pipeline before they can inform a decision.",
      },
      {
        title: "Self-improving agent",
        body: "A budget-controlled AI agent runs around the clock, deepening evidence only where decisions have gaps, and tracks cost per useful record.",
      },
      {
        title: "Three connected systems",
        body: "Evidence Operations (collect & verify), Decision Engine (retrieve & recommend), and Implementation System (execute & measure) are built as separate, composable layers.",
      },
    ],
    lessons: [
      "Trust in a recommendation scales with the verification behind its evidence.",
      "An agent should collect data because a specific decision needs it — not because it exists.",
    ],
    liveUrl: "https://compass-solutions.up.railway.app/",
    githubUrls: [
      { label: "Compass Web", url: "https://github.com/smithar106/Compass-Web" },
      { label: "Compass Engine", url: "https://github.com/smithar106/Compass-Engine" },
    ],
  },
  {
    slug: "weather-intelligence",
    name: "Weather Outliers",
    eyebrow: "Applied AI · Anomaly Detection",
    tagline:
      "A production AI system that finds and explains the statistically unusual in daily weather.",
    description:
      "Every day, Weather Outliers analyses yesterday's weather across 50 North American cities and publishes the ten most statistically unusual events it found — with the arithmetic shown. Not the hottest place, not the wettest: the most surprising.",
    category: "Data Product",
    featured: true,
    accent: "teal",
    status: "live",
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MapLibre GL",
      "MLflow",
      "Docker",
      "Railway",
    ],
    highlights: [
      "Automated daily pipeline across 50 cities",
      "30-year ERA5 climatology baseline",
      "Probability-based anomaly scoring (surprisal)",
      "Grounded agentic explanation with deterministic fallback",
      "Natural-language-to-SQL question interface",
      "MLflow tracing and a committed evaluation harness",
    ],
    problem:
      "Weather data is noisy and dominated by magnitude. A 12°C day in Phoenix is unremarkable while a 12°C day in Iqaluit in January is not — and a ranking that cannot tell those apart ranks climate, not news.",
    solution:
      "A scheduled pipeline compares each observation against a 30-year reference distribution for that city and time of year, scores events by surprisal (−log₁₀ of tail probability), and publishes the top ten with every intermediate number shown. An optional agent writes grounded explanations validated against the data it actually received; with no LLM configured the system falls back to deterministic templates and works identically.",
    flow: [
      { step: "Weather Data", detail: "ERA5 reanalysis and near-real-time data via Open-Meteo." },
      { step: "Baseline", detail: "30-year (1991–2020) climatology, ~1,825 rows per city." },
      { step: "Score", detail: "Percentile, tail probability, surprisal, and margin." },
      { step: "Rank", detail: "Deterministic ranking — one event per city, fixed tie-breaks." },
      { step: "AI Explain", detail: "Agentic explanation grounded in tool results, with validation." },
      { step: "Validate", detail: "Claims are checked against received data; fabricated figures rejected." },
      { step: "Publish", detail: "Atomic publish to PostgreSQL, served through a read-only API." },
    ],
    decisions: [
      {
        title: "Grounded generation",
        body: "Treat model output as a proposal to validate, not truth to display. Every explanation's claims are checked against the tool results the agent actually received.",
      },
      {
        title: "Deterministic fallback",
        body: "No API key required. With LLM_PROVIDER=none the site generates template explanations from the same verified statistics — the agent is an enhancement, not a dependency.",
      },
      {
        title: "Weighted provider metering",
        body: "Open-Meteo bills in weighted calls, not requests. The client prices each request and meters three sliding windows, so a baseline build stops cleanly instead of exhausting the allowance.",
      },
      {
        title: "Exclude rather than guess",
        body: "Cities without a completed baseline are excluded from ranking rather than scored against nothing — a partial cache yields a smaller board, never a wrong one.",
      },
    ],
    lessons: [
      "A request-counting rate limiter can run ~26× over a weighted API allowance — measure the provider's real cost model.",
      "Reproducibility is a feature: re-running a day must produce a byte-identical board.",
      "A ground-truth evaluation suite turns “grounded generation” from a claim into a measured property.",
    ],
    liveUrl: "https://weather-outliers-production.up.railway.app",
    githubUrls: [
      { label: "Weather Outliers", url: "https://github.com/smithar106/Weather-Outliers" },
    ],
  },
  {
    slug: "flight-pulse",
    name: "Flight Pulse",
    eyebrow: "Applied AI · Operations Intelligence",
    tagline:
      "U.S. flight operations intelligence — what's happening, what's unusual, and why it matters.",
    description:
      "Flight Pulse combines daily flight-performance data, historical baselines, deterministic analytics, and a grounded AI reasoning layer into a premium operations-intelligence interface. It is a monitoring and analysis product, not a booking tool.",
    category: "Operations Intelligence",
    featured: true,
    accent: "amber",
    status: "live",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind",
      "d3-geo",
      "topojson-client",
      "Docker",
      "MLflow",
      "AviationStack",
      "BTS data",
    ],
    highlights: [
      "Explainable 0–100 Disruption Score per airport",
      "National overview with data-freshness indicator",
      "U.S. airport disruption map with route corridors",
      "Grounded AI operations brief and Q&A agent",
      "MLflow observability for agent and ingest runs",
      "Deterministic analytics with LLM-only explanation",
    ],
    problem:
      "Understanding U.S. aviation performance means separating normal variation from genuine disruption — and explaining it without inventing statistics.",
    solution:
      "A data-first product: metrics are computed deterministically (a reproducible 0–100 Disruption Score), and an LLM only explains them. It surfaces a national status, a disruption map, ranked airports, airline performance, and a conversational “Ask Flight Pulse” agent that shows the evidence behind every answer.",
    flow: [
      { step: "Daily results", detail: "Previous-day flight performance from AviationStack." },
      { step: "Normalization", detail: "Raw results mapped into an operational data model." },
      { step: "Analytics", detail: "Deterministic metrics — pure, unit-tested functions." },
      { step: "Baseline", detail: "Historical BTS baselines controlled for airport, season, and time." },
      { step: "Intelligence object", detail: "A structured snapshot assembled from real numbers only." },
      { step: "AI explanation", detail: "LLM phrases a brief — forbidden from inventing statistics." },
    ],
    decisions: [
      {
        title: "Data-first, AI-second",
        body: "Metrics are computed deterministically; the LLM only explains them. Disable the LLM and the product still works, falling back to template text from the same numbers.",
      },
      {
        title: "Groundedness checks",
        body: "A groundedNumbers() helper detects any number in an answer that is absent from its evidence — the hallucination signal — and is unit-tested and reused for live-LLM checks.",
      },
      {
        title: "Budgeted ingest",
        body: "AviationStack requests are cached server-side and budgeted to the monthly quota; when exhausted the app falls back to clearly-labeled synthetic data, never presented as real.",
      },
    ],
    lessons: [
      "A golden question set run through the agent with the LLM disabled makes grounding testable and reproducible in CI.",
      "Label every figure by its source tier — daily, baseline, or demo — so data honesty is structural, not editorial.",
    ],
    liveUrl: TODO_FLIGHT_APP_URL,
    githubUrls: [
      { label: "Flight Pulse", url: "https://github.com/smithar106/Flight-Monitor" },
    ],
  },
  {
    slug: "planet",
    name: "PLANET",
    eyebrow: "Applied AI · Autonomous Agent",
    tagline: "An AI agent watching Earth — finds the events that matter and explains why.",
    description:
      "PLANET is an autonomous public intelligence system that continuously monitors trusted global Earth-event data, detects meaningful changes, identifies the events that deserve attention, investigates them with structured read-only tools, and publishes grounded explanations automatically.",
    category: "Autonomous Agent",
    featured: true,
    accent: "violet",
    status: "live",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MapLibre",
      "PostgreSQL",
      "Alembic",
      "MLflow",
      "Docker",
    ],
    highlights: [
      "Autonomous agent over USGS, NASA EONET, and NASA FIRMS data",
      "Transparent 0–100 significance engine",
      "Grounded generation with claim restrictions and numeric grounding",
      "Read-only investigation tools with deterministic fallback",
      "Change detection across NEW / ESCALATING / CLOSED states",
      "Span-based tracing and a golden evaluation suite",
    ],
    problem:
      "Earth-event feeds are high-volume and noisy. Earthquakes, fires, and storms produce thousands of events a day — most routine. Surfacing the ones that actually matter, and explaining why, without inventing facts, is the hard part.",
    solution:
      "An autonomous pipeline where deterministic software ingests, normalizes, compares against prior state, and scores significance (0–100). Only events that cross a threshold are investigated by a read-only agent that produces grounded explanations validated against source data. The public site never depends on the LLM succeeding — failure yields less sophisticated but still correct output.",
    flow: [
      { step: "Sources", detail: "USGS earthquakes, NASA EONET events, NASA FIRMS fire detections." },
      { step: "Ingest", detail: "Fetch from official APIs on a schedule; offline fixtures for tests." },
      { step: "Normalize", detail: "Converge providers into one Event model with a controlled vocabulary." },
      { step: "State comparison", detail: "Classify every transition: NEW, ESCALATING, CLOSED, and more." },
      { step: "Significance engine", detail: "Transparent 0–100 score mapped to MAJOR → ROUTINE tiers." },
      { step: "Agent investigates", detail: "Notable events are investigated with read-only tools." },
      { step: "Validate", detail: "Numeric grounding and claim restrictions reject unsupported output." },
      { step: "Publish", detail: "Grounded explanations go to a public read-only API and Next.js UI." },
    ],
    decisions: [
      {
        title: "Machines filter, agent investigates",
        body: "Deterministic software handles ingestion, normalization, deduplication, scoring, and validation. The LLM is used only for investigation planning, read-only tool selection, synthesis, and explanation.",
      },
      {
        title: "Grounded generation",
        body: "Model output is a proposal to validate. Numbers must trace to source records, and words like “record”, “unprecedented”, and “deadly” are rejected unless a trusted source establishes them.",
      },
      {
        title: "Deterministic fallback",
        body: "If validation fails or no LLM is configured, PLANET publishes deterministic descriptions built only from verified fields — never dependent on the model succeeding.",
      },
      {
        title: "Reproducible fire clustering",
        body: "FIRMS detections are clustered with a single-pass greedy algorithm at a fixed haversine radius, sorted by position and time, so results are reproducible.",
      },
    ],
    lessons: [
      "A thermal anomaly is not a confirmed wildfire — label what the data actually supports.",
      "Don't ask the LLM “is this important?” when a transparent formula can answer it.",
      "Telemetry and AI failures must never break the pipeline.",
    ],
    liveUrl: "https://our-planet.up.railway.app",
    githubUrls: [
      { label: "PLANET", url: "https://github.com/smithar106/Our-Planet" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
