import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settlement Agreement Generator — AI Dispute Engine",
  description:
    "Generate a legally formatted settlement agreement both parties can sign. Includes release of claims, payment terms, confidentiality clause, and signature blocks. Only $5.",
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
    title: "Enter the Terms",
    description:
      "Provide the dispute details, the parties involved, and the terms both sides have agreed to — including payment amounts, deadlines, and conditions.",
  },
  {
    step: 2,
    title: "AI Generates Your Agreement",
    description:
      "Our AI drafts a legally formatted settlement agreement with release of claims, payment schedule, confidentiality clause, and governing law provision.",
  },
  {
    step: 3,
    title: "Sign & Settle",
    description:
      "Download the finished agreement, have both parties sign, and the dispute is resolved. Keep a copy for your records.",
  },
];

const INCLUDED = [
  "Release of claims clause protecting both parties",
  "Payment terms and schedule with clear deadlines",
  "Confidentiality clause to keep settlement details private",
  "Governing law provision specifying applicable jurisdiction",
  "Signature blocks for both parties with date lines",
  "Dispute resolution fallback clause in case of breach",
  "Professional legal formatting accepted by courts",
  "PDF & DOCX download ready to print and sign",
  "Competitor comparison: Attorneys charge $500-$2,000 for settlement agreements — we charge $5",
];

const FAQ = [
  {
    q: "Is this legally binding?",
    a: "A settlement agreement becomes legally binding once both parties sign it, provided it meets the basic requirements of a valid contract: mutual agreement, consideration (something of value exchanged), and legal capacity of both parties. The agreement generated includes all necessary elements. For high-value or complex disputes, we recommend having an attorney review the document before signing.",
  },
  {
    q: "Do I need a notary?",
    a: "In most cases, a notary is not required for a settlement agreement to be enforceable. However, notarization adds an extra layer of authenticity and can make enforcement easier if a dispute arises later. Some jurisdictions or specific types of agreements may require notarization — check your local rules if you are unsure.",
  },
  {
    q: "What if the other party won&apos;t sign?",
    a: "A settlement agreement is voluntary — both parties must agree to the terms. If the other party refuses to sign, the agreement is not binding. You may need to continue negotiations, consider mediation, or pursue other legal remedies. The agreement itself can serve as a framework for continued negotiation.",
  },
  {
    q: "Can I modify the terms later?",
    a: "Once both parties have signed, the agreement is binding and cannot be unilaterally changed. However, both parties can mutually agree to modify the terms by signing an amendment or a new agreement. The original agreement includes provisions for how disputes about compliance should be handled.",
  },
];

export default function SettlementAgreementPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Settlement Agreement</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per agreement
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Settle It. Sign It. Move On.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Generate a legally formatted settlement agreement both parties can sign. Includes release of claims, payment terms, confidentiality clause, and everything you need to put a dispute behind you.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Settlement Agreement — $5{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">End the Dispute Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Attorneys charge $500 to $2,000 for settlement agreements. Get a professionally drafted, legally formatted agreement for $5 — and put this behind you.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Settlement Agreement — $5{ARROW}
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
          name: "Settlement Agreement Generator",
          description: "Generate a legally formatted settlement agreement both parties can sign. Includes release of claims, payment terms, confidentiality clause, and signature blocks.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/settlement-agreement" },
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
