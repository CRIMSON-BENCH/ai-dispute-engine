import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Dispute Strength Score — AI Case Analysis Rated 1-100",
  description:
    "Get an AI-powered case strength analysis that scores your dispute 1-100 with detailed reasoning, evidence gaps, and recommended next steps. $3.",
  openGraph: {
    title:
      "Dispute Strength Score — AI Case Analysis Rated 1-100",
    description:
      "Get an AI-powered case strength analysis that scores your dispute 1-100 with detailed reasoning, evidence gaps, and recommended next steps. $3.",
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
    title: "Describe your dispute in plain English",
    description:
      "Tell us what happened — who wronged you, what they did, when it occurred, and what evidence you have. No legal jargon needed. Write it the way you&apos;d explain it to a friend.",
  },
  {
    step: "2",
    title: "AI analyzes your case strength",
    description:
      "Our AI evaluates your dispute across multiple legal dimensions — liability, damages, evidence quality, jurisdiction, and precedent — to calculate a strength score from 1 to 100.",
  },
  {
    step: "3",
    title: "Get your scored report with next steps",
    description:
      "Download a detailed report showing your score, the reasoning behind it, gaps in your evidence, and a prioritized action plan to strengthen your case before you file.",
  },
];

const INCLUDED = [
  "Overall case strength score from 1 to 100",
  "Category-by-category breakdown — liability, damages, evidence, jurisdiction",
  "Plain-English reasoning explaining why your case scored the way it did",
  "Evidence gap analysis showing what&apos;s missing and how to get it",
  "Comparison to similar dispute outcomes",
  "Prioritized next steps to strengthen your position",
  "Risk factors and potential weaknesses the other side may raise",
  "Recommendation on whether to pursue, settle, or gather more evidence",
];

const FAQ = [
  {
    q: "How does the scoring work?",
    a: "Our AI evaluates your dispute across four dimensions: liability (how clearly the other party is at fault), damages (whether your losses are documentable and recoverable), evidence quality (how strong your proof is), and jurisdiction (whether the law and venue favor your claim). Each dimension is scored, then weighted to produce your overall 1-100 score.",
  },
  {
    q: "What score do I need to have a good case?",
    a: "Scores above 70 generally indicate a strong case worth pursuing. Scores between 40 and 70 suggest a viable case that needs more evidence or a stronger strategy. Below 40 doesn&apos;t mean you can&apos;t win — it means the report will show you exactly what&apos;s missing and what you&apos;d need to improve your odds.",
  },
  {
    q: "Can I use this report in court?",
    a: "The report is designed as a strategic planning tool, not a court filing. Use it to understand your position, identify evidence gaps, and decide whether to pursue your case. If you hire an attorney, share the report with them — it gives them a head start on your case assessment.",
  },
  {
    q: "What if I disagree with my score?",
    a: "The score is based on the information you provide. If you have evidence or facts you didn&apos;t include, they could change the analysis. The report highlights exactly which factors drove your score up or down, so you can see where additional evidence would make the biggest difference.",
  },
];

export default function DisputeStrengthScorePage() {
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
            Dispute Strength Score
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 per analysis
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Find Out If Your Case Is Worth Fighting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Before you spend months and thousands of dollars on a dispute, know
            where you stand. Our AI scores your case from 1 to 100 and tells you
            exactly why — with evidence gaps identified, weaknesses flagged, and
            a clear action plan to strengthen your position.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Score My Case — $3
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

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
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
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop guessing. Know your case strength before you invest another
            dollar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Lawyers charge hundreds for an initial case assessment. Our AI
            analyzes your dispute in under a minute and gives you the same
            strategic insight — a clear score, honest reasoning, and a roadmap
            to win.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Score My Case — $3
              {ARROW}
            </Link>
          </div>
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
            name: "Dispute Strength Score",
            description:
              "AI-powered case strength analysis that scores your dispute 1-100 with detailed reasoning, evidence gaps, and recommended next steps.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/dispute-strength-score",
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
