import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

// Single-page site. `lastModified` is omitted on purpose: with Cache Components,
// `new Date()` isn't allowed in prerendered output.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: portfolio.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
