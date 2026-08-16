import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affidavit / Sworn Statement Generator — AI Dispute Engine",
  description:
    "Generate a notary-ready sworn statement for court filings, insurance claims, or legal proceedings. State-specific formatting with jurat and notary block. Only $5.",
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
    title: "Enter the Facts",
    description:
      "Tell us the facts you need to swear to — what happened, when, where, and any relevant details. Include the state and purpose of the affidavit.",
  },
  {
    step: 2,
    title: "AI Formats Your Affidavit",
    description:
      "Our AI generates a properly formatted affidavit with numbered paragraphs, legal header, jurat, and notary acknowledgment block specific to your state.",
  },
  {
    step: 3,
    title: "Print, Sign & Notarize",
    description:
      "Download your affidavit, print it, sign it in the presence of a notary public, and file it with the appropriate court or organization.",
  },
];

const INCLUDED = [
  "State-specific formatting and jurat language",
  "Numbered paragraphs for each sworn fact",
  "Proper legal header and caption for court filings",
  "Notary acknowledgment block with signature lines",
  "Verification under penalty of perjury",
  "Professional formatting accepted by courts and agencies",
  "PDF & DOCX download ready to print and sign",
  "Competitor comparison: Attorneys charge $300+ for affidavits — we charge $5",
];

const FAQ = [
  {
    q: "What is an affidavit?",
    a: "An affidavit is a written statement of facts made under oath. The person making the statement (the affiant) swears that the contents are true and signs the document in the presence of a notary public or other authorized officer. Affidavits are commonly used in court proceedings, insurance claims, real estate transactions, and government filings.",
  },
  {
    q: "Where do I get it notarized?",
    a: "Most banks, UPS stores, shipping centers, and law offices offer notary services, typically for $5 to $15 per signature. Many states also allow remote online notarization (RON), where you can get your document notarized via video call. Search for \"notary near me\" or check your bank — many offer free notary services to account holders.",
  },
  {
    q: "Can I use this in court?",
    a: "Yes. A properly executed affidavit — signed under oath and notarized — is admissible in court proceedings in all 50 states. Courts routinely accept affidavits as evidence in motions, hearings, and trials. The affidavit generated includes all required elements for court admissibility, including the verification clause and notary block.",
  },
  {
    q: "What&apos;s the difference between an affidavit and a declaration?",
    a: "Both are sworn statements of fact, but they differ in execution. An affidavit is signed before a notary public, while a declaration is signed under penalty of perjury without a notary present. Federal courts and some states accept declarations in place of affidavits under 28 U.S.C. section 1746. Our generator includes the proper verification language for both formats.",
  },
];

export default function AffidavitGeneratorPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Affidavit / Sworn Statement</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per affidavit
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Put It in Writing. Under Oath.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Generate a notary-ready sworn statement for court filings, insurance claims, or legal proceedings. State-specific formatting with jurat, notary block, and verification under penalty of perjury.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Affidavit — $5{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Your Sworn Statement, Court-Ready in Minutes</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Attorneys charge $300 or more for a simple affidavit. Get a properly formatted, state-specific sworn statement for $5 — ready to notarize and file.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Affidavit — $5{ARROW}
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
          name: "Affidavit / Sworn Statement Generator",
          description: "Generate a notary-ready sworn statement for court filings, insurance claims, or legal proceedings. State-specific formatting with jurat and notary block.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/affidavit-generator" },
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
