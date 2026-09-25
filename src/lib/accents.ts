import type { AccentKey } from "@/data/projects";

export type AccentStyles = {
  text: string;
  bg: string;
  soft: string;
  softInk: string;
  ink: string;
  dot: string;
  border: string;
};

export const accents: Record<AccentKey, AccentStyles> = {
  blue: {
    text: "text-accent",
    bg: "bg-accent",
    soft: "bg-accent-soft",
    softInk: "bg-accent-soft text-accent-ink",
    ink: "text-accent-ink",
    dot: "bg-accent",
    border: "border-accent/30",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal",
    soft: "bg-teal-soft",
    softInk: "bg-teal-soft text-teal-ink",
    ink: "text-teal-ink",
    dot: "bg-teal",
    border: "border-teal/30",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber",
    soft: "bg-amber-soft",
    softInk: "bg-amber-soft text-amber-ink",
    ink: "text-amber-ink",
    dot: "bg-amber",
    border: "border-amber/30",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet",
    soft: "bg-violet-soft",
    softInk: "bg-violet-soft text-violet-ink",
    ink: "text-violet-ink",
    dot: "bg-violet",
    border: "border-violet/30",
  },
};
