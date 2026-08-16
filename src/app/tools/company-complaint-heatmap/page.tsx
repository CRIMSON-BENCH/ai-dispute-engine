import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Complaint Heatmap Report — AI Dispute Engine",
  description:
    "Get an AI-generated complaint intelligence report on any company. Aggregated CFPB and BBB data with complaint trends, response rates, and resolution statistics. Only $5.",
  openGraph: {
    title: "Company Complaint Heatmap Report — AI Dispute Engine",
    description:
      "Get an AI-generated complaint intelligence report on any company. Aggregated CFPB and BBB data with complaint trends, response rates, and resolution statistics. Only $5.",
  },
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
    step: "1",
    title: "Enter the Company Name",
    description:
      "Type the name of any company you want to investigate. Works with banks, lenders, debt collectors, insurance companies, landlords, and any business with public complaint records.",
  },
  {
    step: "2",
    title: "AI Aggregates Complaint Data",
    description:
      "Our AI pulls from public CFPB complaint databases and BBB records, then analyzes patterns in complaint volume, categories, company responses, and resolution outcomes.",
  },
  {
    step: "3",
    title: "Download Your Report",
    description:
      "Get a detailed PDF report with complaint breakdowns, trend charts, response rate analysis, and actionable insights you can use to strengthen your dispute or make informed decisions.",
  },
];

const INCLUDED = [
  "CFPB complaint volume and category breakdown",
  "BBB rating, accreditation status, and complaint history",
  "Complaint trend analysis over the past 3 years",
  "Most common complaint categories ranked by frequency",
  "Company response rate and timeliness metrics",
  "Comparison to industry averages and peer companies",
  "Resolution and relief rate statistics",
  "Downloadable PDF report with charts and data tables",
];

const FAQ = [
  {
    q: "Where does the complaint data come from?",
    a: "All data is sourced from publicly available records. CFPB (Consumer Financial Protection Bureau) complaint data is published by the federal government and includes complaints filed against financial companies. BBB (Better Business Bureau) data includes ratings, accreditation status, and consumer complaint records. No private or confidential information is included in any report.",
  },
  {
    q: "How can I use this report in a dispute?",
    a: "A complaint heatmap report strengthens your dispute by establishing a pattern of behavior. If a company has thousands of complaints for the same issue you experienced, that pattern is powerful evidence. Include it with your demand letter, attach it to a CFPB complaint, reference it in small claims filings, or use it during mediation to show the company has a documented history of the exact problem you are raising.",
  },
  {
    q: "What types of companies can I search?",
    a: "You can search any company with public complaint records. This includes banks, credit card issuers, mortgage lenders, auto lenders, student loan servicers, debt collectors, credit reporting agencies, insurance companies, fintech apps, and any other business that consumers have filed complaints against through the CFPB or BBB.",
  },
  {
    q: "How current is the data in the report?",
    a: "Reports are generated using the most recently published CFPB and BBB data available at the time of your request. The CFPB publishes complaint data on a rolling basis, typically within a few weeks of submission. BBB ratings and complaint data are updated as new complaints are filed and resolved. Each report includes the date range of data analyzed.",
  },
];

export default function CompanyComplaintHeatmapPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Company Complaint Heatmap</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per report
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Know Their Track Record Before You Fight</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Get an AI-generated complaint intelligence report on any company. See complaint volume, common issues, response rates, and resolution statistics pulled from public CFPB and BBB data — so you know exactly what you&apos;re up against.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Get Complaint Report — $5{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Turn Public Data Into Your Strongest Evidence</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Hiring a paralegal to research a company&apos;s complaint history costs hundreds. Get the same intelligence — organized, analyzed, and ready to use — for $5.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Get Complaint Report — $5{ARROW}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Company Complaint Heatmap Report",
          description: "AI-generated complaint intelligence report aggregating public CFPB and BBB data for any company. Includes complaint trends, response rates, and resolution statistics.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/company-complaint-heatmap" },
        }),
      }} />

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
