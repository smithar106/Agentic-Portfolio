import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

export function About() {
  const { about } = profile;

  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-surface py-14 sm:py-16">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="About"
                title={
                  <>
                    Between the user, the business, the data,{" "}
                    <span className="serif-accent text-accent">and the technology.</span>
                  </>
                }
              />
              <p className="max-w-xl text-lead text-muted">{about.summary}</p>

              <dl className="grid grid-cols-3 gap-4">
                {about.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1 rounded-2xl border border-line bg-paper p-4"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-sans text-title font-semibold text-ink">{s.value}</dd>
                    <span className="text-micro text-muted">{s.label}</span>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {about.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-line bg-surface p-6 shadow-card transition-colors hover:border-line-strong">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono text-small font-semibold text-accent-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-body font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-small text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
