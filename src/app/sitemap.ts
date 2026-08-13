import type { MetadataRoute } from "next";
import { DISPUTES } from "@/lib/disputes";
import { getAllLocalPageSlugs } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aidisputeengine.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/disputes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/local`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/login`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/signup`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const disputePages: MetadataRoute.Sitemap = DISPUTES.map((d) => ({
    url: `${base}/disputes/${d.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const localPages: MetadataRoute.Sitemap = getAllLocalPageSlugs().map(
    (slug) => ({
      url: `${base}/local/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...disputePages, ...localPages];
}
