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
    // Tools (78 pages)
    { url: `${base}/tools/affidavit-generator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/ai-dispute-chatbot`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/ai-mediation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/annual-consumer-audit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/api-access`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/attorney-review`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/auto-campaign`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/bill-negotiation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/cease-desist`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/chargeback-evidence`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/class-action-connector`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/company-complaint-heatmap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/company-dossier`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/complaint-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/contract-review`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/court-filing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/court-prep`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/credit-monitoring`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/credit-repair-bundle`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/data-breach-demand`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/debt-validation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dispute-concierge`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dispute-strength-score`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dispute-tracker-extension`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/dispute-vault`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/ecommerce-dispute-widget`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/escalation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/evidence-organizer`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/evidence-toolkit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/expert-ama-sessions`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/family-plan`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/final-notice`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/foia-request`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/follow-up-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/full-fight`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/goodwill-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/group-coaching`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/hardship-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/hoa-violation-response`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/home-warranty-referral`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/hr-compliance-pack`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/identity-theft-referral`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/insurance-denial-appeal`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/know-your-rights-guide`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/landlord-plan`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/landlord-report`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/lawyer-network`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/lease-audit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/legal-checkup`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/legal-insurance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/legal-research`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/legal-shield`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/lemon-law-demand`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/letter-tracker`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/letter-translation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/medical-bill-dispute`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/negotiation-coach`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/notarized-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/outcome-guarantee`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/phone-script`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/process-server-network`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/process-serving`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/rent-increase-dispute`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/response-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/rush-processing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/settlement-agreement`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/settlement-calculator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/skip-tracing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/small-claims-course`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/small-claims-kit`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/statute-lookup`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/subscription-cancellation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/success-story-marketplace`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/verified-reviewer-badge`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/wage-dispute-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/warranty-claim-letter`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/white-label-engine`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/witness-statement`, changeFrequency: "monthly", priority: 0.7 },
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
