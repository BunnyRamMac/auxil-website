import type { MetadataRoute } from "next";

const siteUrl = "https://auxilitsolutions.com";

const routes = [
  "",
  "/products",
  "/consulting",
  "/company",
  "/resources",
  "/contact",
  "/careers",
  "/partners",
  "/faq",
  "/blog",
  "/case-studies",
  "/enterprise-services",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
