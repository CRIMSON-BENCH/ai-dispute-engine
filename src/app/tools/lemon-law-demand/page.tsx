import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Lemon Law Demand Letter Generator | AI Dispute Engine",
  description:
    "Generate a state-specific lemon law demand letter for a defective vehicle buyback or replacement. Cites your state's lemon law statutes. AI-powered. $5.",
  openGraph: {
    title:
      "Lemon Law Demand Letter Generator | AI Dispute Engine",
    description:
      "Generate a state-specific lemon law demand letter for a defective vehicle buyback or replacement. Cites your state's lemon law statutes. AI-powered. $5.",
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
    title: "Enter your vehicle and defect details",
    description:
      "Tell us your vehicle's year, make, model, mileage, purchase date, the defect or recurring problem, and how many times you've taken it in for repair. Select your state for jurisdiction-specific statutes.",
  },
  {
    step: "2",
    title: "AI drafts your state-specific lemon law demand",
    description:
      "Our AI generates a formal demand letter citing your state's lemon law statute, the Magnuson-Moss Warranty Act, and your right to a buyback, replacement, or cash settlement based on your repair history.",
  },
  {
    step: "3",
    title: "Download and send",
    description:
      "Download your letter as PDF or DOCX and send it to the manufacturer's customer relations department and your dealership via certified mail. This is often the required first step before arbitration.",
  },
];

const INCLUDED = [
  "Your state's specific lemon law statute citations with qualifying criteria explained",
  "Magnuson-Moss Warranty Act federal backstop references for additional leverage",
  "Detailed repair history timeline documenting each failed fix attempt",
  "Demand for full buyback, replacement vehicle, or cash settlement at your election",
  "Calculation framework for refund amount including payments, registration, and incidental costs",
  "Manufacturer notification formatted to satisfy your state's pre-arbitration demand requirements",
];

const FAQ = [
  {
    q: "How many repair attempts qualify my car as a lemon?",
    a: "Most states require either three to four repair attempts for the same defect, or the vehicle being out of service for a cumulative 30 days within the first 12 to 24 months or 12,000 to 24,000 miles. Some states have a single-attempt threshold for safety defects like brake or steering failures. Our AI checks your state's specific criteria and tells you whether your situation qualifies based on the details you provide.",
  },
  {
    q: "Does lemon law apply to used cars?",
    a: "It depends on your state. About six states -- including New York, New Jersey, Massachusetts, Minnesota, Connecticut, and Rhode Island -- have used car lemon laws. In other states, used cars may still be covered if they were purchased with a remaining manufacturer warranty. The federal Magnuson-Moss Warranty Act can also provide protection for used vehicles sold with a warranty. Our AI factors in your state's coverage rules.",
  },
  {
    q: "What's the difference between a buyback and a replacement?",
    a: "A buyback means the manufacturer repurchases your vehicle and refunds your purchase price, monthly payments, registration fees, and incidental costs, minus a reasonable use offset for miles driven before the first defect. A replacement means the manufacturer gives you a comparable new vehicle. In most states, the choice is yours. Our demand letter specifies your preferred remedy while preserving your right to the alternative.",
  },
  {
    q: "Do I need a lawyer, or can I send a lemon law demand myself?",
    a: "You can absolutely send a lemon law demand letter yourself, and in many states it's a required first step before pursuing arbitration or litigation. The manufacturer must receive formal written notice of the defect and be given a final opportunity to repair. If they fail, you can then proceed to your state's lemon law arbitration program or court. Many lemon law attorneys also offer free consultations if your case needs to escalate beyond the demand letter.",
  },
];

export default function LemonLawDemandPage() {
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
            Lemon Law Demand Letter
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Car Is a Lemon. Get Your Money Back.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Same problem, third repair visit, still broken. Every state has a
            lemon law that says the manufacturer must buy it back or replace it.
            Our AI drafts the formal demand letter that starts that process,
            with your state&apos;s exact statute and qualifying criteria.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Lemon Law Demand &mdash; $5
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
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop sinking money into a car that will never work right.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The law is on your side. Every state requires manufacturers to buy
            back or replace vehicles that can&apos;t be fixed after a reasonable
            number of attempts. Your demand letter is the first step.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Lemon Law Demand &mdash; $5
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
            name: "Lemon Law Demand Letter Generator",
            description:
              "Generate a state-specific demand letter for defective vehicle buyback or replacement under lemon law statutes and the Magnuson-Moss Warranty Act.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/lemon-law-demand",
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
