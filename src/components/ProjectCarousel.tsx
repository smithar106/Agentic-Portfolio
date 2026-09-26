"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "./icons";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="flex-[0_0_88%] px-2.5 sm:flex-[0_0_62%] md:px-3 lg:flex-[0_0_46%]"
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2" aria-label="Project pagination">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected ? "w-8 bg-ink" : "w-2 bg-line-strong hover:bg-faint"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-ink"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:border-ink"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
