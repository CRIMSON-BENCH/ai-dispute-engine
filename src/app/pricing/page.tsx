import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "First letter free. After that, $4.99 per letter or $14.99/mo unlimited. No retainers, no hidden fees.",
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pay for results, not retainers.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your first letter is free with a free account. After that: a flat fee
            per letter, or unlimited access for one monthly price.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Free</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Try it before you buy it.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$0</span>
            </div>
            <Link
              href="/signup"
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Create free account
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} 1 free letter — any dispute type
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} PDF and DOCX download
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} State-specific statute citations
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Edit and regenerate before download
              </li>
            </ul>
          </div>

          {/* Per letter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Per Letter</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              One problem. One letter. Done.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$4.99</span>
              <span className="ml-2 text-sm text-slate-500">each</span>
            </div>
            <Link
              href="/disputes"
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Pick a dispute
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Everything in Free
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Flat rate — any dispute type
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} No subscription or renewal
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Email support
              </li>
            </ul>
          </div>

          {/* Unlimited */}
          <div className="relative rounded-2xl border-2 border-teal-600 bg-white p-8 dark:bg-slate-900">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
              Best value
            </span>
            <h2 className="text-lg font-semibold">Unlimited</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              For ongoing disputes and escalations.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$14.99</span>
              <span className="ml-2 text-sm text-slate-500">/month</span>
            </div>
            <Link
              href="/signup"
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Start Unlimited
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Unlimited letters per month
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Escalation letters (FTC, CFPB, state AG)
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Dispute tracking dashboard
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Priority support
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Cancel anytime — one click
              </li>
            </ul>
            <p className="mt-6 text-center text-xs text-slate-500">
              Pays for itself after 3 letters
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center text-2xl font-bold">Common questions</h2>
          <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
            {[
              {
                q: "Is the first letter really free?",
                a: "Yes. Create a free account and generate one letter — any dispute type. No credit card required. You can read, edit, and download it.",
              },
              {
                q: "What do I get for $4.99?",
                a: "One AI-generated demand letter citing the right statutes for your state, formatted as a professional PDF and DOCX. You can edit and regenerate it before downloading.",
              },
              {
                q: "When does Unlimited make sense?",
                a: "If you have more than one dispute going on, or if your first letter doesn't resolve things and you need escalation letters (to the FTC, CFPB, or your state AG). Most successful disputes take 2–3 letters.",
              },
              {
                q: "Can I cancel the Unlimited plan?",
                a: "Yes, in one click from your account settings. Your access continues through the end of the billing period.",
              },
              {
                q: "Is this legal advice?",
                a: "No. AI Dispute Engine is a self-help document drafting tool, not a law firm. We help you generate letters based on publicly available legal information. For legal advice, consult an attorney.",
              },
            ].map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
