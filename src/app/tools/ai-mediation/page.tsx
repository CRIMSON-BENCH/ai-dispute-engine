import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Mediation — Resolve Disputes Without Court | AI Dispute Engine",
  description:
    "AI-powered dispute mediation. Both parties submit their side, AI analyzes both positions, and proposes a fair settlement. $150 — fraction of traditional mediation.",
  openGraph: {
    title: "AI Mediation — Resolve Disputes Without Court | AI Dispute Engine",
    description:
      "AI-powered dispute mediation. Both parties submit their side, AI analyzes both positions, and proposes a fair settlement. $150 — fraction of traditional mediation.",
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
    title: "You submit your side",
    description:
      "Tell us your story: what happened, what you want, and why you believe you're right. Upload any supporting evidence.",
  },
  {
    step: "2",
    title: "Other party is invited",
    description:
      "We send a professional invitation to the other party explaining the mediation process. They submit their version of events and desired outcome.",
  },
  {
    step: "3",
    title: "AI analyzes both positions",
    description:
      "Our AI evaluates both sides objectively, identifies areas of agreement, flags disputed facts, and assesses the legal merits of each position.",
  },
  {
    step: "4",
    title: "Settlement proposal",
    description:
      "Receive a detailed settlement proposal with reasoning. Both parties can accept, counter-propose, or walk away. If both agree, we generate a settlement agreement.",
  },
];

const WHEN_TO_USE = [
  {
    title: "Both parties want resolution",
    description:
      "When both sides are willing to negotiate but can't agree on terms, AI mediation provides an objective third party.",
  },
  {
    title: "Neighbor disputes",
    description:
      "Noise complaints, property lines, shared spaces — disputes where you'll keep seeing each other and need a workable solution.",
  },
  {
    title: "Business-to-business conflicts",
    description:
      "Contract disputes, payment disagreements, service quality issues between businesses that may want to work together again.",
  },
  {
    title: "Contractor disputes",
    description:
      "Incomplete work, quality issues, payment disagreements — resolve without burning bridges or going to court.",
  },
];

const WHATS_INCLUDED = [
  "AI analysis of both parties' positions",
  "Objective assessment of legal merits for each side",
  "Proposed settlement terms with detailed reasoning",
  "Settlement agreement document (if both parties agree)",
  "E-signature capability for binding agreement",
  "Complete confidentiality for both parties",
];

const BENEFITS = [
  {
    title: "48 Hours",
    description:
      "Resolution in 48 hours, not the months a court case takes.",
  },
  {
    title: "Objective",
    description:
      "No human bias. AI evaluates both positions on their merits.",
  },
  {
    title: "Private",
    description:
      "Everything stays confidential. No public court records.",
  },
  {
    title: "Affordable",
    description:
      "$150 vs. $500-$2,000 for a professional mediator.",
  },
];

const FAQ = [
  {
    q: "What if the other party refuses to participate?",
    a: "Both parties must participate voluntarily. If the other party declines, we'll refund your payment and recommend our demand letter route instead. About 60% of invited parties agree to participate when they see it's faster and cheaper than court.",
  },
  {
    q: "Is the settlement agreement legally binding?",
    a: "When both parties sign the settlement agreement through our e-signature system, it becomes a legally binding contract. Either party can enforce it in court if the other fails to comply.",
  },
  {
    q: "What if I don't agree with the AI's proposal?",
    a: "The AI's proposal is a suggestion, not a mandate. You can accept it, counter-propose, or walk away. There's no obligation to accept any terms you don't agree with.",
  },
  {
    q: "Does the other party see my evidence?",
    a: "Both parties see a summary of the other's position, but sensitive personal information and specific evidence are shared only with the AI for analysis. The final proposal explains the reasoning without exposing confidential details.",
  },
  {
    q: "How is this different from going to court?",
    a: "AI mediation is faster (48 hours vs. months), cheaper ($150 vs. court fees + time off work), private (no public record), and collaborative (both parties have input). Court produces a winner and loser; mediation aims for a solution both sides accept.",
  },
];

export default function AIMediationPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
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
            AI Mediation
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $150 — AI-powered mediation
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let AI Mediate Your Dispute.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Both sides tell their story. Our AI analyzes both positions,
            identifies common ground, and proposes a fair settlement. Resolution
            in 48 hours, not months.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start AI Mediation — $150
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
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

      {/* When to Use AI Mediation */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          When to use AI Mediation
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHEN_TO_USE.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {WHATS_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                {CHECK} {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why AI Mediation Works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Why AI Mediation works
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Mediation without the price tag
          </h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Dyspute.ai
                </p>
                <p className="text-sm text-slate-500 line-through">$299</p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge $150
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Professional mediator
                </p>
                <p className="text-sm text-slate-500 line-through">
                  $500-$2,000
                </p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge $150
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Small claims court
                </p>
                <p className="text-sm text-slate-500">
                  $30-100 + months of waiting
                </p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We resolve in 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Fair. Fast. Final.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            AI mediation gives both sides a fair hearing and proposes a
            resolution both can live with. No lawyers needed.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start AI Mediation — $150
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Want to fight, not mediate?{" "}
            <Link href="/disputes" className="underline hover:text-white">
              Start with a demand letter for $2
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AI Mediation Service",
            description:
              "AI-powered dispute mediation. Both parties submit their side, AI analyzes both positions, and proposes a fair settlement. Resolution in 48 hours.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "150.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/ai-mediation",
            },
          }),
        }}
      />

      {/* Disclaimer */}
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
