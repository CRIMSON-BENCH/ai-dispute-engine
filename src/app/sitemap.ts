import type { MetadataRoute } from "next";
import { DISPUTES } from "@/lib/disputes";
import { getAllLocalPageSlugs } from "@/lib/cities";
import { STATES } from "@/lib/states";
import { COMPANIES } from "@/lib/companies";
import { COMPARISONS } from "@/lib/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.aidisputeengine.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/disputes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/local`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/business`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/lawyer-referral`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/guides`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guides/how-to-sue`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/glossary`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/templates`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/compare`, changeFrequency: "monthly", priority: 0.7 },
    // Tools
    { url: `${base}/tools/settlement-calculator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/legal-checkup`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/full-fight`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/follow-up-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/response-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/cease-desist`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/complaint-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/final-notice`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/escalation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/evidence-toolkit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/skip-tracing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/small-claims-kit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/notarized-letter`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/process-serving`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/court-filing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/attorney-review`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/ai-mediation`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/letter-tracker`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/login`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/signup`, changeFrequency: "yearly", priority: 0.4 },
  ];

  // 38 dispute detail pages
  const disputePages: MetadataRoute.Sitemap = DISPUTES.map((d) => ({
    url: `${base}/disputes/${d.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 27,816 local SEO pages
  const localPages: MetadataRoute.Sitemap = getAllLocalPageSlugs().map(
    (slug) => ({
      url: `${base}/local/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  // 51 state guide pages
  const stateGuidePages: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${base}/guides/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 1,938 state × dispute guide pages
  const stateDisputePages: MetadataRoute.Sitemap = STATES.flatMap((s) =>
    DISPUTES.map((d) => ({
      url: `${base}/guides/${s.slug}/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // 100+ "How to sue [company]" pages
  const companyPages: MetadataRoute.Sitemap = COMPANIES.map((c) => ({
    url: `${base}/guides/how-to-sue/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 38 template preview pages
  const templatePages: MetadataRoute.Sitemap = DISPUTES.map((d) => ({
    url: `${base}/templates/${d.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 10 competitor comparison pages
  const comparePages: MetadataRoute.Sitemap = COMPARISONS.map((c) => ({
    url: `${base}/compare/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...disputePages,
    ...localPages,
    ...stateGuidePages,
    ...stateDisputePages,
    ...companyPages,
    ...templatePages,
    ...comparePages,
  ];
}
