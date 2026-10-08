"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

function BadgeImage({ title, image }: { title: string; image: string }) {
  const [failed, setFailed] = useState(false);

  const initials = title
    .replace(/^Databricks\s*/i, "")
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-paper">
      {failed ? (
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-databricks-soft font-serif text-xl italic text-databricks-ink">
            {initials || "DB"}
          </span>
          <span className="text-micro text-faint">Databricks Academy</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${title} badge`}
          loading="lazy"
          className="h-full w-full object-contain p-4"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-line bg-surface py-14 sm:py-16"
    >
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications & Technical Training"
            title={
              <>
                Databricks <span className="serif-accent text-accent">credentials</span>
              </>
            }
            copy="Completed Databricks Academy courses and accreditations in generative AI, agents, and agent operations. These are course accreditations — not Associate or Professional certifications."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-paper p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <BadgeImage title={c.title} image={c.image} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-body font-semibold text-ink">{c.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-micro text-muted">{c.provider}</span>
                    <span className="h-1 w-1 rounded-full bg-faint" aria-hidden="true" />
                    <span className="text-micro text-faint">Accreditation</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
