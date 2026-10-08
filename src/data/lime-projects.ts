export type LimeMetric = {
  value: string;
  label: string;
};

export type LimeProjectStatus = "production" | "prototype" | "program";

export type LimeProject = {
  id: string;
  name: string;
  category: string;
  status: LimeProjectStatus;
  problem: string;
  solution: string;
  technologies: string[];
  capabilities: string[];
  impact?: string;
};

export type LimeCapability = {
  title: string;
  body: string;
};

// High-level, sanitized descriptions of professional work at Lime. No internal
// source code, credentials, schemas, endpoints, or screenshots. Project status
// is explicit so production systems are never conflated with prototypes.

export const limeOverview = {
  role: "Program Manager, Global Strategy & Operations",
  company: "Lime",
  period: "2022–Present",
  intro:
    "At Lime, I lead cross-functional data, technology, and operational initiatives across more than 100 global markets. My work combines technical program management, AI application development, data engineering, and enterprise automation to improve decision-making, regulatory compliance, reporting, and operational efficiency.",
  tooling:
    "I build practical systems with Python, SQL, JavaScript, APIs, Snowflake, Google Cloud, and AI technologies — translating complex business problems into scalable tools and measurable outcomes.",
  metrics: [
    { value: "100+", label: "global markets supported" },
    { value: "$100M+", label: "annual revenue associated with supported programs" },
    { value: "30,000+", label: "vehicles within the operational scope" },
    { value: "20M+", label: "annual trips within the operational scope" },
    { value: "75", label: "markets supported by automated regulatory reporting" },
  ] satisfies LimeMetric[],
  metricsNote:
    "Operational scope metrics — not revenue, trips, or volumes I personally generated.",
};

export const limeProjects: LimeProject[] = [
  {
    id: "enterprise-data-retrieval-agent",
    name: "Enterprise Data Retrieval Agent",
    category: "Enterprise AI · Natural-Language Analytics",
    status: "production",
    problem:
      "Operational information is distributed across interconnected datasets, making complex business questions difficult to answer efficiently.",
    solution:
      "A natural-language operational analytics agent built with Snowflake Cortex Agents, semantic modeling, verified SQL, and business-rule grounding.",
    technologies: ["Snowflake", "Cortex Agents", "SQL", "Semantic Modeling", "LLMs"],
    capabilities: [
      "Natural-language questions over interconnected operational datasets",
      "Semantic views and verified SQL",
      "Business-rule grounding",
      "Structured analytical retrieval",
      "Read-only data access patterns",
    ],
    impact:
      "Faster access to operational insights and reduced manual data retrieval — a 92% improvement in query turnaround.",
  },
  {
    id: "agentic-city-proposal-builder",
    name: "Agentic City Proposal Builder",
    category: "AI Automation · Document Generation",
    status: "production",
    problem:
      "Preparing city-specific operational proposals required repetitive data gathering, analysis, charts, maps, and presentation assembly.",
    solution:
      "An AI-assisted proposal generation workflow combining operational data, market context, maps, charts, and standardized presentation templates.",
    technologies: ["SQL", "JavaScript", "APIs", "Automation", "Document Generation", "AI"],
    capabilities: [
      "Automated data retrieval",
      "Market-specific analysis",
      "Charts and map generation",
      "Standardized presentation generation",
      "AI-assisted content development",
      "Repeatable proposal workflows",
    ],
    impact: "Approximately 100 standardized proposals generated in roughly two hours.",
  },
  {
    id: "autonomous-regulatory-reporting-pipeline",
    name: "Autonomous Regulatory Reporting Pipeline",
    category: "Enterprise Automation · Regulatory Technology",
    status: "production",
    problem:
      "Regulatory reporting across numerous markets required repetitive data extraction, formatting, and coordination.",
    solution:
      "Automated reporting workflows connecting operational datasets to standardized reporting outputs and communications.",
    technologies: ["SQL", "JavaScript", "Google Cloud", "Google Apps Script", "APIs"],
    capabilities: [
      "SQL-based data extraction and transformation",
      "Google Cloud integrations",
      "Google Apps Script and JavaScript automation",
      "API-based data workflows",
      "Automated document and reporting generation",
      "Repeatable compliance reporting",
    ],
    impact:
      "Automated reporting across 75 markets, reducing manual reporting time by approximately 75%.",
  },
  {
    id: "ai-compliance-intelligence-platform",
    name: "AI Compliance Intelligence Platform",
    category: "AI Governance · Compliance Intelligence",
    status: "prototype",
    problem:
      "Complex operational and regulatory requirements create fragmented compliance information and slow review processes.",
    solution:
      "A prototype connecting operational data and compliance information to AI-assisted monitoring, analysis, and decision support.",
    technologies: ["AI", "SQL", "APIs", "Operational Data"],
    capabilities: [
      "Compliance information aggregation",
      "Operational intelligence",
      "AI-assisted analysis",
      "Monitoring workflows",
      "Structured decision support",
    ],
  },
  {
    id: "enterprise-ai-enablement-program",
    name: "Enterprise AI Enablement Program",
    category: "AI Transformation · Change Management",
    status: "program",
    problem:
      "Teams need practical guidance and shared understanding to adopt emerging AI capabilities effectively.",
    solution:
      "Led AI enablement through Lime Operations All Hands presentations and cross-functional knowledge-sharing sessions, translating emerging AI and data capabilities into practical operational use cases.",
    technologies: [],
    capabilities: [
      "AI demonstrations",
      "Cross-functional presentations",
      "Technical knowledge sharing",
      "Operational use-case identification",
      "Stakeholder engagement",
      "AI adoption support",
    ],
    impact:
      "Improved organizational awareness and practical understanding of AI capabilities.",
  },
];

export const limeArchitecture = {
  title: "Enterprise Architecture & Technical Capabilities",
  workflow: [
    "Operational Data",
    "SQL / APIs",
    "Data Transformation",
    "AI Agents / Automation",
    "Reporting & Decision Support",
  ],
  capabilities: [
    "SQL and data transformation",
    "Snowflake and semantic modeling",
    "Python and JavaScript",
    "Google Cloud and Apps Script",
    "API integrations",
    "LLM applications and AI agents",
    "Workflow automation",
    "Reporting and document generation",
    "Evaluation, validation, and business-rule grounding",
  ],
  note: "Common patterns across my work — not every project uses every technology.",
};

export const limeLeadership = {
  heading: "From Enterprise Operations to AI Transformation",
  description:
    "My work at Lime combines hands-on technical development with program leadership across complex global operations. I translate business requirements into technical solutions, coordinate cross-functional stakeholders, manage roadmaps and dependencies, and build automation that improves operational execution.",
  capabilities: [
    {
      title: "Technical Program Management",
      body: "Roadmaps, prioritization, dependencies, delivery coordination, and executive alignment.",
    },
    {
      title: "AI & Automation Development",
      body: "Hands-on development of agents, analytics tools, reporting workflows, and AI-assisted operational systems.",
    },
    {
      title: "Enterprise Integration",
      body: "Connecting operational data, APIs, business rules, and stakeholder workflows.",
    },
    {
      title: "AI Adoption & Enablement",
      body: "Helping operational teams understand, evaluate, and apply emerging AI capabilities.",
    },
  ] satisfies LimeCapability[],
};
