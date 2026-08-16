import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Access | AI Dispute Engine",
  description:
    "REST API for dispute letter generation at $99/mo. Integrate AI-powered dispute letters into your fintech app, property management platform, or legal aid system.",
  openGraph: {
    title: "API Access | AI Dispute Engine",
    description:
      "REST API for dispute letter generation at $99/mo. Integrate AI-powered dispute letters into your fintech app, property management platform, or legal aid system.",
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
    title: "Subscribe to the API plan",
    description:
      "Sign up for $99/mo and get instant access to your developer dashboard with documentation and sandbox environment.",
  },
  {
    step: "2",
    title: "Get your API keys",
    description:
      "Generate production and test API keys from your dashboard. Each key is scoped to your organization with configurable rate limits.",
  },
  {
    step: "3",
    title: "Integrate and go live",
    description:
      "Use our RESTful endpoints to generate dispute letters programmatically. Full OpenAPI spec, SDKs for Python and Node.js, and webhook support included.",
  },
];

const INCLUDED = [
  "RESTful API with full OpenAPI 3.0 specification",
  "Up to 10,000 letter generations per month",
  "Python and Node.js SDKs with TypeScript definitions",
  "Sandbox environment for development and testing",
  "Webhook notifications for letter status updates",
  "Dedicated technical support with 4-hour response SLA",
];

const FAQ = [
  {
    q: "What types of letters can the API generate?",
    a: "The API supports all dispute letter types available on our platform: credit report disputes, debt validation letters, cease and desist notices, complaint letters, goodwill letters, hardship letters, and more. Each endpoint accepts structured data and returns a formatted, ready-to-send document.",
  },
  {
    q: "What are the rate limits?",
    a: "The standard plan includes 10,000 letter generations per month with a burst rate of 100 requests per minute. If you need higher volume, contact our sales team for enterprise pricing with custom rate limits.",
  },
  {
    q: "Is there a sandbox for testing?",
    a: "Yes. Every API subscription includes a full sandbox environment with test API keys. Sandbox requests do not count against your monthly quota, so you can develop and test without worrying about usage.",
  },
  {
    q: "Who typically uses the API?",
    a: "Fintech companies building credit repair features, property management platforms offering tenant dispute tools, legal aid nonprofits scaling their intake process, and SaaS products adding consumer advocacy capabilities to their platforms.",
  },
];

export default function APIAccessPage() {
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
          <span className="text-slate-900 dark:text-white">API Access</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $99/month
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Dispute Letters as a Service
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Integrate AI-powered dispute letter generation directly into your
            product. One API call, one professionally crafted letter, delivered
            in seconds.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get API Access
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
            Build dispute tools into your product
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Your users already trust your platform. Give them the dispute
            resolution tools they need without building from scratch.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start Integrating
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
            name: "API Access",
            description:
              "REST API for fintech, property management, and legal aid organizations to generate dispute letters programmatically.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "99.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/api-access",
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
