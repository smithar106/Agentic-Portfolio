import { capabilities } from "@/data/capabilities";
import { accents } from "@/lib/accents";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

export function Capabilities() {
  return (
    <section className="border-t border-line bg-paper py-14 sm:py-16">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                What I work{" "}
                <span className="serif-accent text-accent">with</span>
              </>
            }
            copy="A focused toolkit across AI, data, building, and delivery — not a wall of logos."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((group, i) => {
            const a = accents[group.accent];
            return (
              <Reveal key={group.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
                  <div className="mb-4 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                    <h3 className="font-mono text-[0.72rem] font-semibold uppercase tracking-eyebrow text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-small text-muted">
                        <span className={`mt-[0.55rem] h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
