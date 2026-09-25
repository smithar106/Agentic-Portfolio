import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL, isTodo } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = isTodo(SITE_URL) ? "" : SITE_URL;
  const routes = [
    { path: "", priority: 1 },
    { path: "/#lime", priority: 0.8 },
    { path: "/#about", priority: 0.8 },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.7 })),
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
