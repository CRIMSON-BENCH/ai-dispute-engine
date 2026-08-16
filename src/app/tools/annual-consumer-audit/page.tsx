import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annual Consumer Audit — AI Bill & Subscription Review | AI Dispute Engine",
  description:
    "Yearly AI-powered audit of your bills, subscriptions, and contracts. Flags overcharges, hidden fees, and disputable charges. Save hundreds — just $25/year.",
  openGraph: {
    title: "Annual Consumer Audit — AI Bill & Subscription Review | AI Dispute Engine",
    description:
      "Yearly AI-powered audit of your bills, subscriptions, and contracts. Flags overcharges, hidden fees, and disputable charges. Save hundreds — just $25/year.",
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
  { step: "1", title: "Connect your accounts", description: "Securely link your bank statements, credit card statements, or upload bills and invoices. We use read-only access — we can never move money or make changes." },
  { step: "2", title: "AI audits your bills", description: "Our AI scans every line item across your bills, subscriptions, and contracts — flagging overcharges, duplicate charges, rate increases, and fees you can dispute." },
  { step: "3", title: "Get your savings report", description: "Receive a detailed report showing exactly how much you can save, which charges to dispute, and pre-written dispute letters ready to send for each issue found." },
];

const INCLUDED = [
  "Comprehensive audit of all bills, subscriptions, and recurring charges",
  "AI detection of overcharges, hidden fees, and unauthorized rate increases",
  "Identification of forgotten or unused subscriptions you are still paying for",
  "Pre-written dispute letters for every flagged charge — ready to send",
  "Personalized savings report with estimated annual savings",
  "Annual re-audit reminder so you never overpay again",
];

const FAQ = [
  {
    q: "How much can the audit actually save me?",
    a: "The average American household overpays by $500 to $1,200 per year on bills and subscriptions. Common finds include forgotten streaming services, insurance rate hikes that were never disclosed, duplicate charges, and fees that should have been waived. The $25 audit typically pays for itself many times over.",
  },
  {
    q: "Is it safe to connect my accounts?",
    a: "We use bank-level 256-bit encryption and read-only access through secure aggregation partners. We can never move money, make purchases, or modify your accounts. You can also skip account linking entirely and upload statements manually instead.",
  },
  {
    q: "What kinds of charges does the AI flag?",
    a: "The AI looks for unauthorized rate increases, duplicate or double charges, fees that violate your contract terms, subscriptions you have not used in 90+ days, promotional rates that expired without notice, and charges from companies you have already cancelled with.",
  },
  {
    q: "Do I get help disputing the charges that are found?",
    a: "Yes. For every flagged charge, we generate a ready-to-send dispute letter citing the specific overcharge, relevant consumer protection laws, and a clear demand for a refund or credit. You can send these directly from your dashboard.",
  },
];

export default function AnnualConsumerAuditPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Annual Consumer Audit</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$25/year</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Stop Overpaying on Every Bill You Have</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">Most people overpay hundreds of dollars a year on bills they never think to check. Our AI audits every subscription, contract, and recurring charge — then hands you dispute letters for every overcharge it finds.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Start Your Audit{ARROW}</Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Save Hundreds for Just $25</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">The average user saves 10x what the audit costs. Find out what you have been overpaying.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Run My Audit — $25/yr{ARROW}</Link>
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
        name: "Annual Consumer Audit", description: "Yearly AI-powered audit of your bills, subscriptions, and contracts that flags overcharges, hidden fees, and disputable charges.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "25.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/annual-consumer-audit" },
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
