import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

export function Approach() {
  const steps = profile.approach.steps;

  return (
    <section className="border-t border-line bg-surface py-14 sm:py-16">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="My Approach"
            title={
              <>
                How I{" "}
                <span className="serif-accent text-accent">work</span>
              </>
            }
            copy={profile.approach.statement}
          />
        </Reveal>

        <Reveal delay={80}>
          <ol className="mt-8 flex flex-col gap-0 lg:flex-row lg:items-stretch">
            {steps.map((step, i) => (
              <li key={step} className="group relative flex flex-1 flex-col">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface font-mono text-small font-semibold text-ink shadow-soft transition-colors group-hover:border-accent group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lg:mt-4">
                    <p className="text-body font-semibold text-ink">{step}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="ml-5 h-8 w-px bg-line-strong lg:absolute lg:left-0 lg:top-[1.15rem] lg:ml-0 lg:h-px lg:w-[calc(100%-2.75rem)] lg:translate-x-[2.75rem]"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
