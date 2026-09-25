import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        surface: "#FFFFFF",
        ink: "#14161A",
        muted: "#5C6470",
        faint: "#9299A4",
        line: "#E7E5DF",
        "line-strong": "#D7D4CC",
        accent: {
          DEFAULT: "#3457D5",
          deep: "#24419F",
          soft: "#ECF0FD",
          ink: "#16286B",
        },
        teal: { DEFAULT: "#0E9384", soft: "#E6F5F2", ink: "#0A5C53" },
        amber: { DEFAULT: "#C77B16", soft: "#FBF1E1", ink: "#8A5208" },
        violet: { DEFAULT: "#6D4BC0", soft: "#F0ECFA", ink: "#43307A" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.4rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.032em" }],
        hero: ["clamp(2rem, 4.2vw, 3.4rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        title: ["clamp(1.8rem, 3.2vw, 2.6rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        section: ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        lead: ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.45" }],
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,22,26,0.04), 0 8px 24px -12px rgba(20,22,26,0.12)",
        lift: "0 2px 4px rgba(20,22,26,0.05), 0 24px 48px -24px rgba(20,22,26,0.18)",
        card: "0 1px 1px rgba(20,22,26,0.04), 0 12px 32px -20px rgba(20,22,26,0.16)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
