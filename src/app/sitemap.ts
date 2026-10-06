import type { MetadataRoute } from "next";

const siteUrl = "https://auxilitsolutions.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/services/technology", priority: 0.9 },
  { path: "/services/talent", priority: 0.9 },
  { path: "/locations", priority: 0.7 },
  { path: "/locations/hyderabad", priority: 0.8 },
  { path: "/company", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/careers", priority: 0.5 },
  { path: "/partners", priority: 0.5 },
  { path: "/faq", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-07");

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
