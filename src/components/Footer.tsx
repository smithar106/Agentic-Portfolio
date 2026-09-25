import Link from "next/link";
import { profile } from "@/data/profile";
import { isTodo } from "@/data/config";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-px flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent font-serif text-xs italic text-white">
              A
            </span>
            <span className="font-sans text-body font-semibold text-ink">
              Arthur Smith
            </span>
          </div>
          <p className="max-w-xs text-small text-muted">{profile.roleLine}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <GitHubIcon />
          </a>
          {!isTodo(profile.linkedin) && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-muted transition-colors hover:border-ink hover:text-ink"
            >
              <LinkedInIcon />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <MailIcon />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-px flex flex-col gap-2 py-5 text-micro text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arthur Smith. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Link href="/#projects" className="transition-colors hover:text-muted">
              Projects
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/#lime" className="transition-colors hover:text-muted">
              Lime
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/#about" className="transition-colors hover:text-muted">
              About
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
