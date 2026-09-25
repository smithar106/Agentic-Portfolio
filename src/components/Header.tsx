"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, profile } from "@/data/profile";
import { isTodo } from "@/data/config";
import { CloseIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="container-px flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent font-serif text-sm italic text-white">
            A
          </span>
          <span className="font-sans text-[0.95rem] font-semibold tracking-tight text-ink">
            Arthur Smith
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.links.map((link) => {
            if (link.external && isTodo(link.href)) {
              return (
                <span
                  key={link.label}
                  className="rounded-lg px-3 py-2 text-small text-faint"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  {link.label}
                </span>
              );
            }
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2 text-small text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-small text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={nav.cta.href}
            className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-small font-medium text-white transition-colors hover:bg-accent"
          >
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <nav className="container-px flex flex-col py-3" aria-label="Mobile">
            {nav.links.map((link) =>
              link.external && !isTodo(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-body text-ink"
                >
                  {link.label}
                </a>
              ) : link.external ? (
                <span key={link.label} className="rounded-lg px-3 py-3 text-body text-faint">
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-body text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-body font-medium text-white"
            >
              {nav.cta.label}
            </a>
            <p className="px-3 pb-2 pt-3 text-small text-faint">{profile.location}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
