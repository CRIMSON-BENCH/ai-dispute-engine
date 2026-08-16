import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Dispute Widget | AI Dispute Engine",
  description:
    "Embeddable complaint widget for online stores at $29/mo. Reduce chargebacks by giving customers a structured way to file complaints before they call their bank.",
  openGraph: {
    title: "E-Commerce Dispute Widget | AI Dispute Engine",
    description:
      "Embeddable complaint widget for online stores at $29/mo. Reduce chargebacks by giving customers a structured way to file complaints before they call their bank.",
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
    title: "Install the widget",
    description:
      "Add a single script tag to your store. Works with Shopify, WooCommerce, BigCommerce, and any custom checkout.",
  },
  {
    step: "2",
    title: "Customers file complaints",
    description:
      "Unhappy customers use the widget to describe their issue in a structured format instead of immediately calling their bank for a chargeback.",
  },
  {
    step: "3",
    title: "Resolve and reduce chargebacks",
    description:
      "Your team gets actionable complaint data. Resolve issues directly and watch your chargeback rate drop.",
  },
];

const INCLUDED = [
  "One-line embed script for any e-commerce platform",
  "Customizable widget styling to match your store branding",
  "Structured complaint intake with order number lookup",
  "Real-time dashboard with complaint analytics and trends",
  "Automated acknowledgment emails to customers",
  "Exportable complaint reports for chargeback evidence",
];

const FAQ = [
  {
    q: "How does this reduce chargebacks?",
    a: "Most chargebacks happen because the customer could not find an easy way to complain directly to the merchant. The widget gives them a clear, frictionless path to file a complaint with you first. When customers feel heard, they are far less likely to escalate to their bank.",
  },
  {
    q: "What platforms does the widget support?",
    a: "The widget works on any website that supports a script tag. We have one-click integrations for Shopify, WooCommerce, and BigCommerce. For custom storefronts, it is a single line of JavaScript.",
  },
  {
    q: "Can I customize the look and feel?",
    a: "Yes. You can match the widget to your store colors, fonts, and branding. You can also customize the complaint categories, required fields, and automated responses your customers see.",
  },
  {
    q: "What data do I get from complaints?",
    a: "Each complaint includes the customer name, order number, issue category, detailed description, and any attachments. The dashboard shows trends over time so you can identify recurring problems before they become chargeback patterns.",
  },
];

export default function EcommerceDisputeWidgetPage() {
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
            E-Commerce Dispute Widget
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $29/month
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop Chargebacks Before They Start
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Give your customers a better way to complain. An embeddable widget
            that captures structured complaints so you can resolve issues before
            they become chargebacks.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Install the Widget
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
            Every chargeback costs you $25 or more
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The widget pays for itself if it prevents just two chargebacks a
            month. Most stores see a 40% reduction in the first quarter.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Started for $29/mo
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
            name: "E-Commerce Dispute Widget",
            description:
              "Embeddable widget for online stores so customers file structured complaints to reduce chargebacks.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/ecommerce-dispute-widget",
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
