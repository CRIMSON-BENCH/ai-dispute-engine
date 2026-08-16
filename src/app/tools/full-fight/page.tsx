import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Full Fight Bundle — Complete Dispute Resolution Package | AI Dispute Engine",
  description:
    "Everything you need to win your dispute: demand letter, follow-up, final notice, and regulatory complaints. 6 letters total. $25 — half the price of competitors.",
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

const TIMELINE = [
  {
    day: "Day 1",
    title: "Demand Letter",
    desc: "Your first letter lands. Professional, citing the right statutes, with a clear deadline. This is where most disputes get resolved.",
  },
  {
    day: "Day 10",
    title: "Follow-Up Letter",
    desc: "No response? Your follow-up arrives with stronger language, a shorter deadline, and a warning that you're not going away.",
  },
  {
    day: "Day 21",
    title: "Final Notice — Intent to Sue",
    desc: "The last warning before court. Specific filing deadline, court costs you'll seek, and statutory penalties they face.",
  },
  {
    day: "Day 30",
    title: "Regulatory Complaints (3 letters)",
    desc: "File complaints with the FTC, CFPB, and your State Attorney General. Hit them from every angle.",
  },
];

const INCLUDES = [
  {
    title: "Initial Demand Letter",
    desc: "Professional demand letter with state-specific legal citations, proper formatting, and a 14-day deadline.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Letter (Day 10)",
    desc: "Escalated follow-up referencing your original letter with stronger language and a 7-day deadline.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Final Notice (Day 21)",
    desc: "Intent-to-sue letter with specific court filing date, costs you'll seek, and statutory penalties.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "FTC Complaint",
    desc: "Properly formatted complaint to the Federal Trade Commission for federal-level regulatory pressure.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "CFPB Complaint",
    desc: "Complaint to the Consumer Financial Protection Bureau — companies must respond within 15 days.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "State AG Complaint",
    desc: "Complaint to your State Attorney General for state-level consumer protection enforcement.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

const PRICING_ITEMS = [
  { name: "Demand Letter", price: "$2" },
  { name: "Follow-Up Letter", price: "$2" },
  { name: "Final Notice", price: "$3" },
  { name: "Escalation Pack (3 complaints)", price: "$5" },
];

const PREMIUM_FEATURES = [
  "Automated timeline reminders",
  "Case tracking dashboard",
  "Progress updates via email",
  "Priority support",
];

const FAQ = [
  {
    q: "What types of disputes does the Full Fight Bundle work for?",
    a: "The bundle works for any consumer dispute — landlord issues, billing errors, insurance denials, service complaints, warranty claims, and more. The AI adapts each letter to your specific dispute type and state laws.",
  },
  {
    q: "Do I have to send all six letters?",
    a: "No. Many disputes resolve after the first demand letter. The bundle gives you the complete toolkit so you're prepared for every scenario. If they pay up on day 3, you're done.",
  },
  {
    q: "How do the automated reminders work?",
    a: "After purchase, you'll receive email reminders on your timeline: 'Day 10 — time to send your follow-up letter.' Each reminder includes your pre-generated letter ready to download and send.",
  },
  {
    q: "Why is this cheaper than PettyLawsuit?",
    a: "We use AI to generate letters instantly, keeping our costs low. PettyLawsuit charges $49 for a similar package. We believe dispute resolution shouldn't be expensive — so we charge $25 for the complete bundle.",
  },
  {
    q: "Can I add Attorney Review later?",
    a: "Yes. If your dispute escalates and you want a licensed attorney to review your letters, you can add our Attorney Review service ($65) at any time. Many bundle customers add it before sending the final notice.",
  },
];

export default function FullFightBundlePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Full Fight Bundle</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $25 — Save over 50% vs. competitors
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Full Fight Bundle
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-200">
            Everything you need to win your dispute from start to finish.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Six professionally crafted letters. A 30-day battle plan. Automated
            reminders. All for $25 — half what PettyLawsuit charges for a
            similar package.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Full Fight Bundle — $25
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* 30-Day Battle Plan Timeline */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Your 30-Day Battle Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            We guide you through every step. You just send the letters.
          </p>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative space-y-8 pl-8 before:absolute before:left-3.5 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-teal-200 dark:before:bg-teal-800">
              {TIMELINE.map((item) => (
                <div key={item.day} className="relative">
                  {/* Teal dot on the line */}
                  <div className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center">
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-teal-600 bg-teal-600 dark:border-teal-400 dark:bg-teal-400" />
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
                    <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                      {item.day}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          What&apos;s included in the bundle
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Breakdown */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            The Math Speaks for Itself
          </h2>
          <div className="mx-auto mt-10 max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              {/* Individual prices */}
              <div className="divide-y divide-slate-100 px-6 dark:divide-slate-800">
                {PRICING_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">
                      {item.price}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-4">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Subtotal (if purchased separately)
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    $12
                  </span>
                </div>
              </div>
              {/* Bundle price */}
              <div className="border-t-2 border-teal-600 bg-teal-50 px-6 py-6 dark:bg-teal-900/10">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    Full Fight Bundle
                  </span>
                  <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                    $25
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Premium features included:
                </p>
                <ul className="mt-3 space-y-2">
                  {PREMIUM_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      {CHECK}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Compare and Save
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {/* PettyLawsuit */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              PettyLawsuit
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              &ldquo;Go Full Petty&rdquo; package
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-400 line-through">
              $49
            </p>
            <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              We charge
            </p>
            <p className="text-4xl font-bold text-slate-900 dark:text-white">
              $25
            </p>
          </div>
          {/* Attorney */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Hiring an attorney
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              to write letters
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-400 line-through">
              $500&ndash;$2,000
            </p>
            <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              We charge
            </p>
            <p className="text-4xl font-bold text-slate-900 dark:text-white">
              $25
            </p>
          </div>
          {/* Doing nothing */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Doing nothing
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              &nbsp;
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-400">
              Priceless regret
            </p>
            <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              We charge
            </p>
            <p className="text-4xl font-bold text-slate-900 dark:text-white">
              $25
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop fighting alone. Get the full arsenal.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Six letters. One price. Every angle covered. The Full Fight Bundle
            gives you everything you need to resolve your dispute without a
            lawyer.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Full Fight Bundle — $25
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Questions?{" "}
            <Link href="/tools/settlement-calculator" className="underline hover:text-white">
              Start with our free Settlement Calculator
            </Link>
          </p>
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
            name: "The Full Fight Bundle",
            description:
              "Complete dispute resolution package: demand letter, follow-up, final notice, and 3 regulatory complaints. 6 letters total with automated timeline reminders and case tracking.",
            offers: {
              "@type": "Offer",
              price: "25.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
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
