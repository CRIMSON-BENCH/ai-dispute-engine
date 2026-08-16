import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Custom Legal Research Report — Know the Law Before You Fight",
  description:
    "AI researches statutes, regulations, and case law specific to your dispute and state. Get a custom legal research report with citations, precedent, and actionable recommendations. $25.",
  openGraph: {
    title:
      "Custom Legal Research Report — Know the Law Before You Fight",
    description:
      "AI researches statutes, regulations, and case law specific to your dispute and state. Get a custom legal research report with citations, precedent, and actionable recommendations. $25.",
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
    title: "Describe your dispute and state",
    description:
      "Tell us what happened, who&apos;s involved, what outcome you want, and which state you&apos;re in. The more detail you provide, the more targeted your research.",
  },
  {
    step: "2",
    title: "AI researches applicable laws, statutes, and cases",
    description:
      "Our AI analyzes your situation against state and federal law, identifying the statutes, regulations, and case precedents that apply to your specific dispute.",
  },
  {
    step: "3",
    title: "Get your custom legal research report",
    description:
      "Download a comprehensive report with statute citations, relevant case law, legal argument strengths and weaknesses, and actionable recommendations for your next steps.",
  },
];

const INCLUDED = [
  "State-specific statute research relevant to your dispute",
  "Relevant case law citations and precedent analysis",
  "Regulatory framework analysis for your situation",
  "Legal argument strengths and weaknesses assessment",
  "Precedent summary — how similar cases were decided",
  "Actionable recommendations for your next steps",
  "Opposing argument anticipation — what the other side will say",
  "Full source citations for every statute and case referenced",
];

const FAQ = [
  {
    q: "How detailed is the research?",
    a: "Your report typically runs 8-15 pages and covers the specific statutes that apply to your situation, relevant case law showing how courts have ruled on similar disputes, an analysis of your legal position&apos;s strengths and weaknesses, and concrete recommendations. Every citation includes the full source so you can verify it yourself.",
  },
  {
    q: "Can I use this in court?",
    a: "Absolutely. The statutes and case law cited in your report are real, verified legal sources. Many of our customers use their research reports to prepare arguments, write motions, and present their case to judges. The report gives you the legal foundation to argue effectively.",
  },
  {
    q: "How current is the legal research?",
    a: "Our AI researches current statutes and regulations as they stand today. Laws change, so the report reflects the legal landscape at the time of generation. For rapidly evolving areas of law, we note any pending legislation or recent changes that could affect your case.",
  },
  {
    q: "Is this legal advice?",
    a: "No. This is legal research — it tells you what the law says and how courts have interpreted it. Legal advice is when a licensed attorney applies the law to your specific facts and recommends a course of action. Our report gives you the research foundation; for personalized legal advice, consult an attorney.",
  },
];

export default function LegalResearchPage() {
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
            Custom Legal Research Report
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $25 per research report
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know the Law Before You Fight
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Don&apos;t guess what the law says — know it. Our AI researches the
            statutes, regulations, and case law specific to your dispute and
            state, then delivers a comprehensive report with full citations.
            Legal research from a paralegal costs $100-$300/hour. Get yours
            for $25.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Legal Research Report — $25
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
            The law is on your side. You just need to find it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Lawyers win cases because they know which statutes and precedents
            apply. Now you can walk into any dispute with the same legal
            foundation — without the $300/hour price tag.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Legal Research Report — $25
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
            name: "Custom Legal Research Report",
            description:
              "AI researches statutes, regulations, and case law specific to your dispute and state. Includes citations, precedent analysis, and actionable recommendations.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/legal-research",
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
