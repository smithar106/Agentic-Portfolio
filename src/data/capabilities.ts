export type CapabilityGroup = {
  title: string;
  accent: "blue" | "teal" | "amber" | "violet";
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    title: "Applied AI",
    accent: "blue",
    items: [
      "Agents",
      "LLM APIs",
      "Tool calling",
      "Grounded generation",
      "Natural-language interfaces",
      "Evals",
      "Guardrails",
    ],
  },
  {
    title: "Data",
    accent: "teal",
    items: [
      "SQL",
      "Snowflake",
      "PostgreSQL",
      "Data pipelines",
      "APIs",
      "Analytics",
    ],
  },
  {
    title: "Build",
    accent: "amber",
    items: [
      "Python",
      "FastAPI",
      "Next.js",
      "JavaScript / TypeScript",
      "HTML / CSS",
      "Railway",
      "Containers",
    ],
  },
  {
    title: "Delivery",
    accent: "violet",
    items: [
      "Technical program management",
      "Product requirements",
      "Cross-functional leadership",
      "Process optimization",
      "Global implementation",
      "Stakeholder management",
    ],
  },
];
