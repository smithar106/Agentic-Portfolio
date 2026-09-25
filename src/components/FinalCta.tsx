import { profile } from "@/data/profile";
import { isTodo } from "@/data/config";
import { Reveal } from "./Reveal";
import { ActionLink } from "./ui";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-paper py-14 sm:py-16">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center shadow-soft sm:px-16 sm:py-20">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-6">
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-eyebrow text-muted">
                Get in touch
              </span>
              <h2 className="max-w-2xl text-balance font-sans text-title font-semibold text-ink">
                Complex problem? Let&apos;s figure out{" "}
                <span className="serif-accent text-accent">how to ship it.</span>
              </h2>
              <p className="max-w-xl text-balance text-lead text-muted">
                I&apos;m open to forward-deployed engineering, applied AI, and
                technical program leadership opportunities.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                {!isTodo(profile.linkedin) && (
                  <ActionLink href={profile.linkedin} variant="secondary" external>
                    LinkedIn
                  </ActionLink>
                )}
                <ActionLink href={`mailto:${profile.email}`} variant="accent" external>
                  Email
                </ActionLink>
                <ActionLink href={profile.github} variant="secondary" external>
                  GitHub
                </ActionLink>
                {!isTodo(profile.resume) && (
                  <ActionLink href={profile.resume} variant="secondary" external>
                    Resume
                  </ActionLink>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
