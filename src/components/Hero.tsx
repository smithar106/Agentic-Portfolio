import { profile } from "@/data/profile";
import { isTodo } from "@/data/config";
import { ActionLink } from "./ui";
import { GitHubIcon, LinkedInIcon, DocIcon, SparkIcon } from "./icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const hasLinkedIn = !isTodo(profile.linkedin);
  const hasResume = !isTodo(profile.resume);

  return (
    <section className="relative overflow-hidden">
      <div className="container-px grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-micro font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            {profile.availability}
          </span>

          <h1 className="text-balance font-sans text-display font-semibold tracking-tight text-ink">
            {profile.headline.split("AI, data, and automation")[0]}
            <span className="serif-accent text-accent">AI, data, and automation</span>
            {profile.headline.split("AI, data, and automation")[1]}
          </h1>

          <p className="max-w-xl text-balance text-lead text-muted">
            {profile.supporting}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <ActionLink href="/#projects" variant="accent">
              Explore My Work
            </ActionLink>
            <ActionLink href="/#ask" variant="secondary">
              Ask My Portfolio
            </ActionLink>
          </div>

          <div className="mt-4 flex items-center gap-2 text-small text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:text-ink"
            >
              <GitHubIcon /> GitHub
            </a>
            {hasLinkedIn && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:text-ink"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            {hasResume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:text-ink"
              >
                <DocIcon /> Resume
              </a>
            )}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
