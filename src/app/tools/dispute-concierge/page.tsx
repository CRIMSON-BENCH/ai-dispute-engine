import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dispute Concierge Service — We Handle Everything for 60 Days | AI Dispute Engine",
  description:
    "We fight your dispute so you don't have to. Letters, follow-ups, complaints, tracking, escalation, and strategy — all managed for 60 days for $199.",
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
    title: "Tell Us About Your Dispute",
    description:
      "Describe your situation — who you are disputing, what happened, and what outcome you want. Upload any supporting documents you have.",
  },
  {
    step: 2,
    title: "We Assign Your AI Concierge",
    description:
      "A dedicated AI concierge is assigned to your case. It builds a dispute strategy, identifies the right agencies, and drafts your first round of letters.",
  },
  {
    step: 3,
    title: "We Handle Everything for 60 Days",
    description:
      "Your concierge sends letters, files complaints, tracks responses, escalates when needed, and keeps you updated weekly. You live your life.",
  },
];

const INCLUDED = [
  "Dedicated AI dispute concierge assigned to your case",
  "All letters and follow-ups generated automatically",
  "Regulatory complaint filing (FTC, CFPB, Attorney General)",
  "Certified mail sending and tracking",
  "60-day dispute management from start to finish",
  "Escalation strategy planning when initial efforts stall",
  "Weekly status updates on your dispute progress",
  "Settlement negotiation support and guidance",
];

const FAQ = [
  {
    q: "What does the concierge actually do?",
    a: "Your AI concierge manages your entire dispute from start to finish. It drafts and sends demand letters, files complaints with regulatory agencies like the FTC, CFPB, and your state Attorney General, tracks all responses, sends follow-up letters when deadlines pass, escalates to higher authorities when needed, and provides weekly status updates so you always know where things stand.",
  },
  {
    q: "Can I cancel early?",
    a: "Yes, you can cancel your concierge service at any time. If your dispute resolves early, you can end the service. However, the $199 fee is non-refundable once your concierge begins working your case, as significant work begins immediately upon enrollment.",
  },
  {
    q: "What if my dispute resolves before 60 days?",
    a: "That is the goal. Many disputes resolve well before the 60-day period ends. If your dispute resolves early, your concierge will provide a final summary report and close your case. You keep all documents generated during the process.",
  },
  {
    q: "Is this a lawyer?",
    a: "No. The Dispute Concierge is an AI-powered service, not a law firm or attorney. It uses proven dispute resolution strategies and generates professional legal documents, but it does not provide legal advice. For complex legal matters, we recommend consulting with a licensed attorney in addition to using our service. Hiring an attorney for dispute management typically costs $3,000-$10,000. We charge $199 for 60 days.",
  },
];

export default function DisputeConciergePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Dispute Concierge</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$199 for 60 days</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">We Fight Your Dispute. You Live Your Life.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            We handle everything for 60 days: letters, follow-ups, regulatory complaints, certified mail, tracking, escalation, and strategy. Hiring an attorney for dispute management costs $3,000-$10,000. We charge $199.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start My Concierge — $199{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Stop Fighting Alone</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            You have a life to live. Let your AI concierge handle the letters, the follow-ups, the complaints, and the escalation. 60 days of full-service dispute management for $199.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start My Concierge — $199{ARROW}
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
            name: "Dispute Concierge Service",
            description:
              "We handle everything for 60 days: letters, follow-ups, complaints, tracking, escalation, and strategy.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "199.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/dispute-concierge",
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
