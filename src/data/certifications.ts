// Databricks Academy courses and accreditations completed by Arthur Smith.
//
// `kind` distinguishes completed courses/accreditations from formal Associate or
// Professional certifications. All six entries below are Databricks Academy
// course completions — NOT Associate or Professional certifications.
//
// `image` points to the badge/certificate image served from /public/certifications.
// Drop the actual image files into that directory using the exact filenames below.
// `verifyUrl` is intentionally omitted until a real credential/verification URL
// is available — do not fabricate one.

export type Certification = {
  slug: string;
  title: string;
  provider: string;
  kind: "accreditation" | "certification";
  image: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    slug: "generative-ai-fundamentals",
    title: "Databricks Generative AI Fundamentals",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-generative-ai-fundamentals.png",
  },
  {
    slug: "ai-agent-fundamentals",
    title: "Databricks AI Agent Fundamentals",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-ai-agent-fundamentals.png",
  },
  {
    slug: "building-agentic-applications",
    title: "Databricks Building Agentic Applications",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-building-agentic-applications.png",
  },
  {
    slug: "building-rag-agents-with-agent-bricks",
    title: "Databricks Building RAG Agents with Agent Bricks",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-building-rag-agents-with-agent-bricks.png",
  },
  {
    slug: "agent-evaluation",
    title: "Databricks Agent Evaluation",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-agent-evaluation.png",
  },
  {
    slug: "deploying-monitoring-agent-applications",
    title: "Databricks Deploying & Monitoring Agent Applications",
    provider: "Databricks Academy",
    kind: "accreditation",
    image: "/certifications/databricks-deploying-monitoring-agent-applications.png",
  },
];
