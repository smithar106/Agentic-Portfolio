export type AccentKey =
  | "blue"
  | "teal"
  | "amber"
  | "violet"
  | "green"
  | "maroon"
  | "databricks";

export type Screenshot = {
  label: string;
  image?: string;
};

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
  screenshots?: Screenshot[];
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
    liveUrl: "https://weather-outliers-app.up.railway.app/",
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
    liveUrl: "https://flight-monitor-app.up.railway.app/",
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
  {
    slug: "energy-rag",
    name: "Energy-RAG",
    eyebrow: "Applied AI · Hybrid Retrieval",
    tagline:
      "A hybrid-retrieval RAG agent for historical energy prices — grounded in SQL and real sources.",
    description:
      "Energy-RAG answers questions about historical energy prices by keeping quantitative truth (deterministic SQL over EIA data) strictly separate from historical explanation (hybrid vector + lexical retrieval over real EIA and Wikipedia sources). A hard evidence gate and a grounding validator refuse to answer when evidence is insufficient.",
    category: "Retrieval Systems",
    featured: true,
    accent: "green",
    status: "live",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "sentence-transformers",
      "DeepSeek",
      "EIA Open Data",
      "Docker",
      "Railway",
    ],
    highlights: [
      "Hybrid retrieval: pgvector semantic + PostgreSQL full-text, merged and reranked",
      "Deterministic SQL price changes tied to explicit observation pairs",
      "Hard evidence gate: domain, temporal, and source-authority scoring (EIA > Wikipedia)",
      "Grounding validator recomputes percentages and rejects fabricated figures",
      "Query-time authoritative EIA source discovery when the KB is insufficient",
      "Real historical corpus (859 docs / 1,405 chunks) with an inspectable RAG trace",
    ],
    problem:
      "LLMs hallucinate quantitative answers and historical causes. Ask “what caused the biggest increase in U.S. electricity prices in 2017?” and a naive model will happily combine the wrong observation pair, or invent a cause from parametric memory.",
    solution:
      "A strict two-path architecture: every number comes from deterministic SQL (with the exact observation pair preserved), and every explanation comes from real retrieved source documents that pass a hard evidence gate. When evidence is insufficient, it refuses rather than guessing — and a grounding validator recomputes percentages from their cited pair to reject inconsistencies.",
    flow: [
      { step: "Question", detail: "DeepSeek interprets the question; a deterministic SQL phase identifies the event (e.g. May→June 2017)." },
      { step: "SQL truth", detail: "Verified numbers, aggregates, and observation-pair price changes computed in PostgreSQL." },
      { step: "Hybrid retrieval", detail: "pgvector semantic + PostgreSQL full-text search over ~1,400 chunks, merged and reranked." },
      { step: "Evidence gate", detail: "Composite score (semantic, lexical, temporal, domain, metric, geography, authority) plus hard filters." },
      { step: "Causal filter", detail: "DeepSeek selects only causally-useful chunks; insufficient evidence triggers EIA source discovery." },
      { step: "Grounding", detail: "Percentages recomputed from their cited pair; ungrounded numbers rejected." },
      { step: "Cited answer", detail: "A grounded, cited answer — or an explicit “insufficient evidence”." },
    ],
    decisions: [
      {
        title: "Quantitative truth vs historical explanation",
        body: "Numbers come only from SQL; explanations only from retrieved sources. DeepSeek is never the source of truth for a number.",
      },
      {
        title: "Precision over recall",
        body: "Zero evidence is preferable to irrelevant evidence. The gate is tuned to refuse a causal answer rather than cite vaguely-related articles.",
      },
      {
        title: "Same-pair price changes",
        body: "Absolute and percentage change always derive from the same observation pair (computed with LAG()), so mismatched statistics can never be combined.",
      },
      {
        title: "Inspectable retrieval",
        body: "Every ranking component and gate decision is exposed in the RAG trace — nothing is hidden inside an opaque framework.",
      },
    ],
    lessons: [
      "Zero evidence is preferable to irrelevant evidence.",
      "Store publication date and event window separately — a 2026 article is never evidence for a 2017 event.",
      "Recompute the model's arithmetic; don't trust it to combine statistics.",
    ],
    liveUrl: "https://energy-research-production.up.railway.app/",
    githubUrls: [
      { label: "Energy-RAG", url: "https://github.com/smithar106/Energy-RAG" },
    ],
  },
  {
    slug: "embedding-lab",
    name: "Embedding-Lab",
    eyebrow: "Applied AI · Semantic Search",
    tagline:
      "A semantic library that indexes the same documents three ways — to compare how embedding models retrieve.",
    description:
      "Embedding-Lab turns authoritative, open-licensed documents on climate, energy, food, water, cities, and development into a searchable vector library. The same corpus is embedded with three models — MiniLM, BGE, and E5 — into dimension-specific pgvector tables, so any retrieval difference can be attributed to the model alone. A license-gated source catalog and a tool-using agent keep every answer grounded in cited passages.",
    category: "Retrieval Systems",
    featured: true,
    accent: "maroon",
    status: "live",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "sentence-transformers",
      "DeepSeek",
      "Docker",
      "Railway",
    ],
    highlights: [
      "One corpus, three embeddings — MiniLM (384-dim), BGE and E5 (768-dim) in separate HNSW tables",
      "Identical chunks across models, so any retrieval difference is the model, not the chunking",
      "Query-side prefixes (BGE/E5) and cosine similarity via pgvector's native vector operators",
      "Library data model: collections, topics, and per-document license + provenance",
      "License-gated curation — only CC BY / CC0 sources (no NC), enforced in the source catalog",
      "Tool-using agent that decides when to retrieve and answers only from cited passages",
    ],
    problem:
      "Embedding models look interchangeable until you compare them. Retrieval quality depends on the model, its dimension, and how queries are phrased — yet most demos hide the model behind an opaque API and never show why one result ranked over another.",
    solution:
      "Chunk the same documents once and embed the identical chunks with three different models into separate dimension-specific pgvector tables. A single API returns ranked, cited passages per model, and a tool-using agent retrieves only when the question needs it — exposing the retrieval trace instead of hiding it.",
    flow: [
      { step: "Curate", detail: "A license-gated source catalog (CC BY/CC0) across six collections: climate, energy, food, water, cities, development." },
      { step: "Fetch & clean", detail: "Trafilatura extraction with per-source boilerplate removal and retrieved_at provenance." },
      { step: "Chunk once", detail: "A deterministic recursive splitter produces identical chunks for every model." },
      { step: "Embed three ways", detail: "MiniLM (384-dim), BGE and E5 (768-dim) into dimension-specific pgvector tables with HNSW indexes." },
      { step: "Retrieve", detail: "Query-side prefixes, then cosine similarity via pgvector's native vector operators." },
      { step: "Answer", detail: "A tool-using agent decides whether to retrieve, then answers only from cited passages." },
    ],
    decisions: [
      {
        title: "One chunk, three embeddings",
        body: "The corpus is chunked exactly once and every model embeds the identical units. Any retrieval difference is therefore the model's — not an artifact of different chunking.",
      },
      {
        title: "Dimension-specific tables",
        body: "pgvector requires a fixed vector width, so MiniLM (384-dim) and BGE/E5 (768-dim) live in separate tables with their own HNSW indexes — three coordinate systems kept cleanly apart.",
      },
      {
        title: "License-gated corpus",
        body: "Only CC BY/CC0 sources enter the library; NC-licensed institutional sources (IPCC, UN) are excluded, with license and provenance stored per document.",
      },
      {
        title: "Evidence, not synthesis",
        body: "The agent retrieves evidence and the generator answers only from cited chunks — it refuses rather than fabricate when evidence is thin.",
      },
    ],
    lessons: [
      "Same chunks, different embeddings — a fair model comparison requires identical text units.",
      "A 384-dim and a 768-dim vector cannot share a column or index; normalize per model.",
      "Public access is not redistribution rights — check licenses before ingesting full text.",
    ],
    liveUrl: "https://embedding-lab-production.up.railway.app/",
    githubUrls: [
      { label: "Embedding-Lab", url: "https://github.com/smithar106/Embedding-Lab" },
    ],
  },
  {
    slug: "databricks-energy-intelligence",
    name: "Databricks Energy Intelligence",
    eyebrow: "Data Platform · Natural-Language Analytics",
    tagline:
      "Building a governed energy data platform with Databricks, Unity Catalog & AI/BI Genie.",
    description:
      "An end-to-end energy intelligence platform that transforms historical U.S. energy data into governed, queryable analytics. It combines scheduled data ingestion, a medallion data architecture, SQL-based transformations, data-quality validation, and natural-language analytics through Databricks AI/BI Genie.",
    category: "Data Platform",
    featured: true,
    accent: "databricks",
    status: "live",
    technologies: [
      "Databricks",
      "SQL",
      "Unity Catalog",
      "AI/BI Genie",
      "Google Drive",
      "Medallion Architecture",
      "ETL/ELT",
      "Data Quality Validation",
    ],
    highlights: [
      "2,373 validated annual observations across 33 energy series",
      "767 duplicate series/year combinations identified and resolved",
      "Deterministic SQL-based deduplication and data-quality checks",
      "Natural-language analytics over curated data via AI/BI Genie",
      "Data boundaries enforced so unsupported questions are not answered as supported",
    ],
    problem:
      "U.S. Energy Information Administration (EIA) datasets spanning 1949–2025 arrive as overlapping source files. Combining them naively produces duplicate series/year rows and inconsistent figures, and business users cannot easily ask questions of the result without writing SQL.",
    solution:
      "A governed medallion pipeline on Databricks. Raw EIA files are ingested on a schedule from Google Drive into a Bronze layer, then cleaned, standardized, deduplicated, and validated into Silver, and finally shaped into curated analytical tables in Gold. Unity Catalog governs every managed asset, and AI/BI Genie provides natural-language analytics over the curated tables — within boundaries that keep unsupported questions (such as state-level queries against national-level data) from being presented as supported answers.",
    flow: [
      { step: "Source", detail: "U.S. EIA historical energy datasets (1949–2025)." },
      { step: "Ingest", detail: "Google Drive integration with scheduled data ingestion." },
      { step: "Bronze", detail: "Raw source data lands as-is for traceability." },
      { step: "Silver", detail: "Cleaning, standardization, deduplication, and validation." },
      { step: "Gold", detail: "Curated analytical tables optimized for business questions." },
      { step: "Govern & Query", detail: "Unity Catalog governance; Genie natural-language analytics." },
    ],
    decisions: [
      {
        title: "Medallion architecture",
        body: "Bronze, Silver, and Gold layers each have one job — raw landing, cleaning and validation, and curated analytics — so lineage stays clear and each transformation is auditable.",
      },
      {
        title: "Deterministic deduplication",
        body: "The 767 duplicate series/year combinations caused by overlapping source files are resolved with explicit SQL logic, not by guessing — the result is reproducible.",
      },
      {
        title: "Validation before Gold",
        body: "Every observation is validated before it reaches the Gold layer, so curated tables contain only clean, deduplicated records.",
      },
      {
        title: "Governed analytics",
        body: "Unity Catalog manages the data assets, and Genie answers natural-language questions against the curated tables — bounded by the data that actually exists.",
      },
    ],
    lessons: [
      "Overlapping source files are a data-quality problem, not a data-science problem — solve them deterministically in SQL.",
      "A natural-language interface is only as trustworthy as the curated tables underneath it.",
      "Govern the data boundaries as carefully as the data itself.",
    ],
    githubUrls: [],
    screenshots: [
      { label: "Databricks workspace — medallion pipeline" },
      { label: "AI/BI Genie natural-language query" },
      { label: "Pipeline results & data-quality validation" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
