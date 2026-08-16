import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Lease Audit | AI Dispute Engine",
  description:
    "AI reviews your lease for illegal clauses, missing disclosures, and tenant rights violations for $5. Upload your lease and get a flagged issues report in minutes.",
  openGraph: {
    title: "AI Lease Audit | AI Dispute Engine",
    description:
      "AI reviews your lease for illegal clauses, missing disclosures, and tenant rights violations for $5. Upload your lease and get a flagged issues report in minutes.",
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
    title: "Upload Your Lease",
    description:
      "Upload your lease as a PDF or photo. Our AI can read scanned documents, typed leases, and even handwritten agreements.",
  },
  {
    step: "2",
    title: "AI Audits Every Clause",
    description:
      "The AI analyzes every clause against your state and local tenant protection laws, checking for illegal terms, missing required disclosures, and unenforceable provisions.",
  },
  {
    step: "3",
    title: "Get Your Flagged Issues Report",
    description:
      "Receive a detailed report listing every problematic clause, the specific law it violates, a plain-English explanation, and a recommended action for each issue found.",
  },
];

const INCLUDED = [
  "Full clause-by-clause AI analysis of your lease",
  "State and local tenant law compliance check",
  "Illegal clause detection with specific statute citations",
  "Missing disclosure identification",
  "Plain-English explanation of every flagged issue",
  "Downloadable PDF report with recommended next steps",
];

const FAQ = [
  {
    q: "What kinds of issues does the audit catch?",
    a: "The audit checks for illegal late fee amounts, prohibited security deposit terms, missing lead paint or mold disclosures, unenforceable entry and eviction clauses, waiver-of-rights provisions that violate state law, and other terms that courts have found unenforceable in your jurisdiction.",
  },
  {
    q: "Does it work with any type of lease?",
    a: "Yes. The AI can analyze standard residential leases, month-to-month agreements, room rental agreements, and commercial leases. It handles PDFs, scanned documents, photos of printed leases, and even handwritten agreements.",
  },
  {
    q: "How long does the audit take?",
    a: "Most lease audits complete within 5 to 10 minutes. Longer or more complex leases may take up to 15 minutes. You receive your flagged issues report by email and in your dashboard as soon as the audit finishes.",
  },
  {
    q: "Can I use the report to negotiate with my landlord?",
    a: "Absolutely. The report is designed to give you leverage. Each flagged issue includes the specific law being violated and a recommended action, so you can bring concrete evidence to your landlord or use it as the basis for a formal dispute letter.",
  },
];

export default function LeaseAuditPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Lease Audit</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$5 per audit</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Find the Illegal Clauses Hiding in Your Lease</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Most tenants sign leases with illegal terms and never know it. Our AI reads every clause, checks it against your state and local laws, and flags the problems — in minutes, for $5.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Audit My Lease — $5{ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (<li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Know Your Rights Before You Sign</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A $5 audit can save you thousands in illegal fees, wrongful deductions, and unenforceable penalties. Upload your lease and know exactly where you stand.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Audit My Lease — $5{ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (<div key={item.q} className="py-5"><h3 className="text-sm font-semibold">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p></div>))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: "AI Lease Audit", description: "AI reviews your lease for illegal clauses, missing disclosures, and tenant rights violations. Upload your lease and get a flagged issues report in minutes.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/lease-audit" },
      }) }} />

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
