import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Story Marketplace | AI Dispute Engine",
  description:
    "Browse and sell winning dispute letter templates. Free to browse, 30% revenue share for sellers. Turn your dispute win into passive income.",
  openGraph: {
    title: "Success Story Marketplace | AI Dispute Engine",
    description:
      "Browse and sell winning dispute letter templates. Free to browse, 30% revenue share for sellers. Turn your dispute win into passive income.",
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
    title: "Submit your winning story",
    description:
      "Won a dispute? Upload the letter template or strategy that worked. Our team verifies outcomes before listing.",
  },
  {
    step: "2",
    title: "Set your price",
    description:
      "Choose what to charge for your template or strategy guide. Most sellers price between $5 and $25. You keep 70% of every sale.",
  },
  {
    step: "3",
    title: "Earn from others",
    description:
      "Every time someone buys your template, you earn passive income. Top sellers make hundreds per month from a single winning letter.",
  },
];

const INCLUDED = [
  "Free browsing of all success stories and case summaries",
  "Verified outcome badges on seller profiles",
  "Buyer ratings and reviews for every template",
  "Category filtering by dispute type, industry, and outcome",
  "Instant digital delivery after purchase",
  "Seller analytics dashboard with earnings and download stats",
];

const FAQ = [
  {
    q: "How does the revenue share work?",
    a: "You keep 70% of every sale. AI Dispute Engine retains 30% to cover payment processing, hosting, verification, and platform maintenance. Earnings are paid out monthly to your connected bank account or PayPal.",
  },
  {
    q: "How do you verify that a success story is real?",
    a: "We require sellers to submit proof of outcome: a response letter from the company, a credit report showing the correction, a settlement confirmation, or similar documentation. Our team reviews every submission before it goes live.",
  },
  {
    q: "Can I browse for free?",
    a: "Yes. All success stories, case summaries, and strategy overviews are free to browse. You only pay when you want to download the full template or detailed strategy document that the seller used to win.",
  },
  {
    q: "What makes a good listing?",
    a: "The best-selling templates include the exact language that worked, context about the dispute situation, the timeline from first letter to resolution, and any tips the seller learned along the way. Specificity sells.",
  },
];

export default function SuccessStoryMarketplacePage() {
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
            Success Story Marketplace
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            Free to browse &middot; 30% revenue share for sellers
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Turn Your Dispute Win Into Passive Income
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Browse proven letter templates from people who actually won. Or sell
            your own winning strategy and earn every time someone downloads it.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Browse the Marketplace
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
            Your win can help thousands of others
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The letter that fixed your credit report or stopped a debt collector
            could do the same for someone else. Share it, price it, and earn
            from it.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Submit Your Win
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
            name: "Success Story Marketplace",
            description:
              "Platform where dispute winners sell their winning letter templates and case strategies.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/success-story-marketplace",
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
