import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardship Letter Generator — AI Dispute Engine",
  description:
    "Generate a professional hardship letter for medical bill negotiations, loan modifications, and payment plan requests. Cites federal and state financial hardship protections. Only $2.",
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
    title: "Describe Your Situation",
    description:
      "Tell us about your financial hardship and what relief you&apos;re requesting — a payment plan, balance reduction, forbearance, or other accommodation.",
  },
  {
    step: 2,
    title: "AI Drafts Your Letter",
    description:
      "Our AI writes a professional hardship letter with proper legal citations, hardship protections, and a clear request tailored to your creditor or lender.",
  },
  {
    step: 3,
    title: "Download & Send",
    description:
      "Download your finished letter as PDF or DOCX and send it to your creditor, lender, or hospital billing department by mail or email.",
  },
];

const INCLUDED = [
  "Personalized hardship explanation based on your circumstances",
  "Income and expense documentation framework",
  "Specific relief request — payment plan, reduction, forbearance, or deferment",
  "Relevant federal and state hardship protections cited",
  "Professional formatting accepted by creditors and lenders",
  "PDF & DOCX download ready to send",
  "Competitor comparison: Financial counselors charge $150+ for hardship letter assistance — we charge $2",
];

const FAQ = [
  {
    q: "What qualifies as financial hardship?",
    a: "Financial hardship includes job loss, reduced income, medical emergencies, divorce, death of a spouse, natural disasters, disability, or any significant life event that impacts your ability to meet financial obligations. Your letter will explain how your specific situation qualifies under applicable creditor and federal hardship guidelines.",
  },
  {
    q: "Will this work for medical bills?",
    a: "Yes. Hardship letters are one of the most effective tools for negotiating medical debt. Hospitals and medical providers routinely offer charity care, payment plans, and balance reductions when patients demonstrate financial need. Your letter will reference the provider&apos;s financial assistance obligations and applicable state regulations.",
  },
  {
    q: "Can this help with mortgage modification?",
    a: "Absolutely. A hardship letter is a required component of most loan modification applications. Your letter will be formatted to meet servicer requirements and will reference relevant protections such as those under the CARES Act, FHA loss mitigation guidelines, or state-specific foreclosure prevention programs.",
  },
  {
    q: "Do I need to provide proof of hardship?",
    a: "Your letter will reference supporting documentation, but you do not need to upload proof to generate it. We recommend attaching pay stubs, bank statements, medical records, or termination letters when you send the final letter to strengthen your case.",
  },
];

export default function HardshipLetterPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Hardship Letter</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Financial Hardship Deserves a Professional Voice</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Generate a professional hardship letter for medical bill negotiations, loan modifications, and payment plan requests. Cites federal and state financial hardship protections so creditors take your request seriously.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Hardship Letter — $2{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Stop Struggling in Silence</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">A professional hardship letter can be the difference between drowning in debt and getting the relief you need. For $2, give your financial situation the voice it deserves.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Hardship Letter — $2{ARROW}
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
          name: "Hardship Letter Generator",
          description: "Generate a professional hardship letter for medical bill negotiations, loan modifications, and payment plan requests. Cites federal and state financial hardship protections.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "2.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/hardship-letter" },
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
