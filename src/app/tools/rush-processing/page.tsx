import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Priority Rush Processing — Letter in Under 60 Seconds | AI Dispute Engine",
  description:
    "Skip the queue and get your dispute letter generated in under 60 seconds, guaranteed. Instant PDF and DOCX download for just $10.",
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
    title: "Add Rush Processing",
    description:
      "Select rush processing as an add-on when generating any dispute letter, demand letter, or legal document on our platform.",
  },
  {
    step: 2,
    title: "Skip the Queue Entirely",
    description:
      "Your request jumps to the front of the line. No waiting behind other users — your letter gets priority processing immediately.",
  },
  {
    step: 3,
    title: "Letter in Under 60 Seconds",
    description:
      "Your fully formatted letter is generated, reviewed, and ready for download in under 60 seconds. Guaranteed, or your money back.",
  },
];

const INCLUDED = [
  "Priority queue placement — your letter goes first",
  "Sub-60-second generation guarantee",
  "Instant PDF download as soon as generation completes",
  "Instant DOCX download for easy editing",
  "Priority customer support for rush orders",
  "Money-back guarantee if generation exceeds 60 seconds",
];

const FAQ = [
  {
    q: "How fast is standard processing?",
    a: "Standard processing typically generates your letter within 2-5 minutes depending on current demand and document complexity. During peak hours, standard processing may take longer. Rush processing guarantees your letter in under 60 seconds, every time.",
  },
  {
    q: "What if it takes longer than 60 seconds?",
    a: "If your rush-processed letter takes longer than 60 seconds to generate, you receive a full refund of the $10 rush processing fee automatically. No questions asked, no support tickets needed.",
  },
  {
    q: "Can I add this to any product?",
    a: "Yes. Rush processing can be added to any letter or document we generate, including demand letters, complaint letters, cease and desist letters, debt validation letters, goodwill letters, and more.",
  },
  {
    q: "Is the quality the same?",
    a: "Absolutely. Rush processing only changes when your letter is generated, not how. You receive the exact same AI-powered, legally-informed letter — just faster. The content, formatting, and legal language are identical to standard processing.",
  },
];

export default function RushProcessingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Rush Processing</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$10 add-on</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Letter. Under 60 Seconds. Guaranteed.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Skip the queue. Your dispute letter is generated, formatted, and ready for download in under 60 seconds — or your money back. Add rush processing to any letter for just $10.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Get Rush Processing — $10{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Time Is Money. Save Both.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            When you need your letter now — not in five minutes, not in ten — rush processing delivers. Under 60 seconds, guaranteed, or your $10 back.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Add Rush Processing — $10{ARROW}
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
            name: "Priority Rush Processing",
            description:
              "Skip the queue and get your dispute letter generated in under 60 seconds, guaranteed. Instant PDF and DOCX download.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "10.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/rush-processing",
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
