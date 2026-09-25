import { TODO_LINKEDIN_URL, TODO_RESUME_URL } from "./config";

export const profile = {
  name: "Arthur Smith",
  roleLine:
    "AI Solutions · Forward Deployed Engineering · Technical Program Leadership",
  headline:
    "I turn complex operational problems into AI, data, and automation products.",
  supporting:
    "I build and deploy AI-powered tools while leading complex technology and data initiatives at global scale.",
  location: "Remote — United States",
  availability: "Open to select opportunities",
  email: "smithar106@gmail.com",
  github: "https://github.com/smithar106",
  linkedin: TODO_LINKEDIN_URL,
  resume: TODO_RESUME_URL,

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
      { value: "3", label: "AI/data products built" },
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
    { label: "Resume", href: profile.resume, external: true },
    { label: "GitHub", href: profile.github, external: true },
  ],
  cta: { label: "Let's Talk", href: "/#contact" },
};
