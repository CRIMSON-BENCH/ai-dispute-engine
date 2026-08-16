import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White-Label Dispute Engine | AI Dispute Engine",
  description:
    "Fully branded dispute letter generator for $499/mo. White-label solution for tenant advocacy orgs, legal aid nonprofits, and agencies.",
  openGraph: {
    title: "White-Label Dispute Engine | AI Dispute Engine",
    description:
      "Fully branded dispute letter generator for $499/mo. White-label solution for tenant advocacy orgs, legal aid nonprofits, and agencies.",
  },
};

const CHECK = (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg
    className="ml-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const STEPS = [
  {
    step: "1",
    title: "Contact our sales team",
    description:
      "Tell us about your organization, your audience, and your branding requirements. We will scope a custom deployment plan.",
  },
  {
    step: "2",
    title: "Customize your branding",
    description:
      "Upload your logo, choose your colors, set your domain, and configure which dispute types your users see. It looks and feels like your product.",
  },
  {
    step: "3",
    title: "Deploy to your audience",
    description:
      "Launch your branded dispute platform. We handle the infrastructure, AI models, and compliance updates. You focus on your mission.",
  },
];

const INCLUDED = [
  "Fully branded interface with your logo, colors, and domain",
  "Custom dispute type selection tailored to your audience",
  "Admin dashboard with usage analytics and user management",
  "Dedicated onboarding specialist and implementation support",
  "Automatic compliance updates as regulations change",
  "SSO integration and role-based access controls",
];

const FAQ = [
  {
    q: "Who is the white-label engine designed for?",
    a: "Tenant advocacy organizations, legal aid nonprofits, housing authorities, consumer protection agencies, and any organization that helps people resolve disputes at scale. If your team regularly assists people with complaints, this is built for you.",
  },
  {
    q: "How long does deployment take?",
    a: "Most organizations are live within two weeks. The timeline depends on the level of customization you need. Basic branding deployments can launch in as little as three business days.",
  },
  {
    q: "Can we limit which dispute types are available?",
    a: "Yes. You have full control over which letter types, dispute categories, and workflows are visible to your users. A tenant advocacy org might show only landlord-related disputes, while a consumer protection agency might enable the full suite.",
  },
  {
    q: "What happens if we outgrow the standard plan?",
    a: "We offer enterprise tiers with custom pricing for organizations generating high volumes. Contact our sales team to discuss dedicated infrastructure, custom AI model tuning, and priority SLAs.",
  },
];

export default function WhiteLabelEnginePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/disputes"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            White-Label Engine
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $499/month
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Brand. Our Dispute Engine.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Deploy a fully branded dispute letter platform under your own name.
            Built for organizations that help people fight back at scale.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Contact Sales
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
            >
              {CHECK} {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Scale your advocacy with AI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Your organization already has the trust. We give you the technology
            to help thousands more people resolve disputes without hiring more
            staff.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Schedule a Demo
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="text-sm font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "White-Label Dispute Engine",
            description:
              "Fully branded dispute letter generator for tenant advocacy orgs, legal aid nonprofits, and agencies.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "499.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/white-label-engine",
            },
          }),
        }}
      />

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. The documents generated by this service are for
            informational purposes only and do not constitute legal advice. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
