export const profile = {
  name: "Arthur Smith",
  roleLine:
    "AI Engineer · Technical Program Manager · Production LLM Applications · RAG & Agents · Databricks",
  headline:
    "I turn complex operational problems into AI, data, and automation products.",
  supporting:
    "I'm an AI engineer and technical program leader. I build production LLM applications — RAG systems and agents — and governed data platforms on Databricks, then lead the programs that ship them at scale.",
  location: "Remote — United States",
  availability: "Open to select opportunities",
  email: "smithar106@gmail.com",
  github: "https://github.com/smithar106",
  linkedin: "https://www.linkedin.com/in/arthursmith11/",

  about: {
    summary:
      "I sit between the user, the business, the data, and the technology. I spent 4.5+ years at Lime scaling technology-enabled operations across 75+ markets, and I increasingly build and deploy my own AI and data products — agents, pipelines, and automation that solve real operational problems end to end.",
    pillars: [
      {
        title: "Technical building",
        body: "I design, build, and ship AI and data products myself — from pipelines and agents to the interfaces people actually use.",
      },
      {
        title: "Product thinking",
        body: "I start from the messy operational problem and translate it into a system that is useful, honest, and measurable.",
      },
      {
        title: "Program leadership",
        body: "I lead cross-functional implementation at enterprise and global scale — aligning teams, data, and operations to ship.",
      },
    ],
    stats: [
      { value: "4.5+", label: "years at Lime" },
      { value: "75+", label: "markets" },
      { value: "7", label: "AI/data products built" },
    ],
  },

  approach: {
    statement: "My work sits between the user, the business, the data, and the technology.",
    steps: [
      "Ambiguous problem",
      "Understand the user",
      "Define the system",
      "Build / align teams",
      "Deploy",
      "Measure",
      "Iterate",
    ],
  },

  askQuestions: [
    "What has Arthur built with AI?",
    "Which project best demonstrates production AI?",
    "Tell me about Arthur's data experience.",
    "What has he done at Lime?",
    "How does he approach AI reliability?",
    "Which project demonstrates Forward Deployed Engineering skills?",
  ],
};

export const nav = {
  links: [
    { label: "Projects", href: "/#projects" },
    { label: "Lime", href: "/#lime" },
    { label: "About", href: "/#about" },
    { label: "Ask Portfolio", href: "/#ask" },
    { label: "GitHub", href: profile.github, external: true },
  ],
  cta: { label: "Let's Talk", href: "/#contact" },
};
