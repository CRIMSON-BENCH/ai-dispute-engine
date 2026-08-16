import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Contract Review — Red Flags & Unfair Terms Highlighted | AI Dispute Engine",
  description:
    "Upload any contract and get a full clause-by-clause AI analysis. Red flags, unfair terms, missing protections, and one-sided clauses highlighted instantly for $25.",
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const STEPS = [
  {
    step: 1,
    title: "Upload Your Contract",
    description:
      "Upload your lease, service agreement, employment contract, freelance agreement, or any other contract you need reviewed.",
  },
  {
    step: 2,
    title: "AI Analyzes Every Clause",
    description:
      "Our AI reads every clause and cross-references against thousands of known unfair terms, missing protections, and legal pitfalls.",
  },
  {
    step: 3,
    title: "Get Your Annotated Report",
    description:
      "Receive your contract back with red flags highlighted, risk scores for each section, and plain-English explanations of every issue found.",
  },
];

const INCLUDED = [
  "Full clause-by-clause analysis of your entire contract",
  "Red flag identification with severity ratings",
  "Unfair term highlighting with legal context",
  "Missing protection alerts for clauses that should be there",
  "One-sided clause detection that favors the other party",
  "Plain-English explanations of complex legal language",
  "Risk score for each section of your contract",
  "Suggested revision language you can propose to the other party",
];

const FAQ = [
  {
    q: "What types of contracts can you review?",
    a: "We can review virtually any contract: residential and commercial leases, service agreements, employment contracts, freelance and independent contractor agreements, NDAs, purchase agreements, and more. If it has terms and conditions, we can analyze it.",
  },
  {
    q: "How long does the review take?",
    a: "Most contracts are fully analyzed in 2-5 minutes depending on length and complexity. You will receive your annotated report as soon as the analysis is complete, with no waiting in queues.",
  },
  {
    q: "Is this as good as a lawyer review?",
    a: "Our AI catches issues that many people miss when reading contracts on their own, and it does so at a fraction of the cost. Attorneys charge $500-$1,500 for a contract review. However, for high-stakes contracts like business acquisitions or complex commercial agreements, we recommend also consulting with a licensed attorney.",
  },
  {
    q: "Can I use the suggested revisions?",
    a: "Yes. The suggested revision language is designed to be copied directly into your contract negotiations. You can share the revisions with the other party or their attorney as proposed edits to the agreement.",
  },
];

export default function ContractReviewPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Contract Review</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$25 one-time</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Read the Fine Print Before It Reads You</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Upload any contract and get a full AI-powered analysis in minutes. Red flags, unfair terms, missing protections, and one-sided clauses — all highlighted with plain-English explanations. Attorneys charge $500-$1,500. We charge $25.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Review My Contract — $25{ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">{s.step}</div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Don&apos;t Sign Blind</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Every contract you sign without reviewing is a gamble. Get every clause analyzed, every red flag surfaced, and every risk scored — for less than the cost of a dinner out.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Review My Contract — $25{ARROW}
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
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p>
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
            name: "AI Contract Review",
            description:
              "Upload any contract and get a full clause-by-clause AI analysis. Red flags, unfair terms, missing protections, and one-sided clauses highlighted instantly.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/contract-review",
            },
          }),
        }}
      />

      {/* Disclaimer */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. The documents generated by this service are for informational purposes only and do not constitute legal advice. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
