export type LimeProject = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  technical: string[];
  problem: string;
  role: string;
  scale: string;
  outcome: string;
  learned: string;
};

// Professional initiatives led or contributed to at Lime. Only the tool's
// verifiable function (visible in its repository) is described here. Narrative
// fields (problem, role, scale, outcome, learned) are TODO placeholders to fill
// in without inventing internal detail.
export const limeProjects: LimeProject[] = [
  {
    id: "limecli",
    name: "LimeCLI",
    kind: "Internal Developer Tooling",
    summary:
      "An all-in-one command-line tool for Lime engineers, consolidating common engineering workflows into a single CLI.",
    technical: ["Ruby", "dry-cli", "Gem packaging"],
    problem: "TODO_PROBLEM",
    role: "TODO_ROLE",
    scale: "TODO_SCALE",
    outcome: "TODO_OUTCOME",
    learned: "TODO_LEARNED",
  },
  {
    id: "feed-outage-command-center",
    name: "Feed Outage Command Center",
    kind: "Operations · Monitoring",
    summary:
      "A real-time operations dashboard for monitoring feed outages, surfacing incident data to the teams who respond.",
    technical: ["Python", "Streamlit", "pandas", "Plotly"],
    problem: "TODO_PROBLEM",
    role: "TODO_ROLE",
    scale: "TODO_SCALE",
    outcome: "TODO_OUTCOME",
    learned: "TODO_LEARNED",
  },
  {
    id: "risk-register",
    name: "Risk Register",
    kind: "Data Operations · Automation",
    summary:
      "A risk-monitoring application that scrapes sources and uses an AI analyst to surface and assess emerging risks.",
    technical: ["Python", "Flask", "BeautifulSoup", "feedparser", "Claude API"],
    problem: "TODO_PROBLEM",
    role: "TODO_ROLE",
    scale: "TODO_SCALE",
    outcome: "TODO_OUTCOME",
    learned: "TODO_LEARNED",
  },
  {
    id: "dashboards-hub",
    name: "Dashboards Hub",
    kind: "Data Operations · Platform",
    summary:
      "A centralized hub serving Lime's internal dashboards, giving teams a single entry point to operational reporting.",
    technical: ["Nginx", "Docker", "HTML/CSS"],
    problem: "TODO_PROBLEM",
    role: "TODO_ROLE",
    scale: "TODO_SCALE",
    outcome: "TODO_OUTCOME",
    learned: "TODO_LEARNED",
  },
  {
    id: "reporting-automation",
    name: "Monthly Reporting Automation",
    kind: "Automation · Data Operations",
    summary:
      "Automated monthly reporting workflows, combining Python generation scripts with scheduled execution.",
    technical: ["Python", "Google Apps Script"],
    problem: "TODO_PROBLEM",
    role: "TODO_ROLE",
    scale: "TODO_SCALE",
    outcome: "TODO_OUTCOME",
    learned: "TODO_LEARNED",
  },
];
