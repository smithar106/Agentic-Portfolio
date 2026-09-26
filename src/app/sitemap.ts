import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.7 })),
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
