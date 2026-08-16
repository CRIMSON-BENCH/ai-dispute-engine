import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Legal Insurance Plans | AI Dispute Engine",
  description:
    "Compare legal insurance plans side by side. Find the right coverage for your needs, understand costs, and get covered for pennies a day.",
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
    title: "Answer a Few Questions",
    description:
      "Tell us about your situation — what types of legal issues concern you, your household size, and your budget. It takes less than two minutes.",
  },
  {
    step: 2,
    title: "See Personalized Recommendations",
    description:
      "We analyze your answers and surface the legal insurance plans that best match your coverage needs, budget, and location.",
  },
  {
    step: 3,
    title: "Choose a Plan & Get Covered",
    description:
      "Pick the plan that fits and enroll directly. Most plans activate within days, giving you access to a network of attorneys for a low monthly fee.",
  },
];

const INCLUDED = [
  "Side-by-side plan comparison",
  "Coverage analysis tailored to your situation",
  "Monthly cost breakdown for every plan",
  "Network attorney access details",
  "Pre-existing dispute coverage check",
  "Family and household coverage options",
  "Plan ratings and member satisfaction data",
];

const FAQ = [
  {
    q: "What is legal insurance?",
    a: "Legal insurance (also called a legal plan) is a subscription service that gives you access to attorneys and legal services for a low monthly fee — typically between $20 and $50/month. It covers common legal needs like document review, will preparation, traffic tickets, landlord disputes, and more.",
  },
  {
    q: "How much does legal insurance cost?",
    a: "Most individual plans range from $15 to $30 per month, and family plans range from $25 to $50 per month. That works out to less than a dollar a day for access to licensed attorneys whenever you need them.",
  },
  {
    q: "Does it cover pre-existing disputes?",
    a: "It depends on the plan. Some legal insurance providers exclude pre-existing matters, while others offer limited coverage after a waiting period. Our comparison tool flags which plans cover pre-existing disputes so you can make an informed choice.",
  },
  {
    q: "Is legal insurance worth it?",
    a: "If you anticipate any legal need in the next year — a lease review, a dispute, estate planning, or even a traffic ticket — a single consultation can cost $200 to $500 out of pocket. A legal insurance plan can pay for itself with one use.",
  },
];

export default function LegalInsurancePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Legal Insurance</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">Free to compare</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Legal Insurance for Pennies a Day</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A single attorney consultation can cost hundreds of dollars. Legal insurance gives you access to licensed attorneys whenever you need them — for less than a dollar a day. Compare plans and find the right fit.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Compare Legal Insurance Plans{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">You Deserve Affordable Access to Legal Help</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Stop paying hundreds per consultation. Compare legal insurance plans in minutes and find coverage that fits your life and your budget.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Compare Legal Insurance Plans{ARROW}
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
            "@type": "WebApplication",
            name: "Legal Insurance Plan Comparison",
            description:
              "Compare legal insurance plans side by side. Find the right coverage for your needs and get covered for pennies a day.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/legal-insurance",
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
