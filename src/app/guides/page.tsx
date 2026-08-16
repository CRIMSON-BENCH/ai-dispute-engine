import type { Metadata } from "next";
import Link from "next/link";
import { STATES } from "@/lib/states";
import { DISPUTES, CATEGORIES } from "@/lib/disputes";

export const metadata: Metadata = {
  title: "State-by-State Legal Guides — Small Claims & Consumer Rights",
  description:
    "Browse small claims court guides, filing limits, and consumer protection laws for all 50 states and DC. Find your rights and learn how to fight back.",
};

export default function GuidesIndexPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Guides</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            State-by-State Legal Guides
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            Know your rights. Every state has different small claims limits,
            filing fees, and consumer protection laws. Find your state below to
            learn what applies to you.
          </p>
        </div>

        {/* State grid */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-bold">All 50 States + DC</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STATES.map((state) => (
              <Link
                key={state.slug}
                href={`/guides/${state.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-sm font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                  {state.abbreviation}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {state.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Small claims limit:{" "}
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      ${state.smallClaimsLimit.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Filing fees: {state.filingFeeRange}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Dispute types section */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-bold">Browse by Dispute Type</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            Select a dispute type to see state-specific guides for your
            situation.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DISPUTES.map((dispute) => (
              <Link
                key={dispute.slug}
                href={`/disputes/${dispute.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:border-teal-300 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-700"
              >
                <span className="text-xl">{dispute.icon}</span>
                <div>
                  <span className="text-sm font-medium text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {dispute.shortTitle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick facts */}
        <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8">
          <h2 className="mb-4 text-xl font-bold">
            Small Claims Court Quick Facts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-teal-600">
                $2,500 - $25,000
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Range of small claims limits across states
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600">
                No lawyer needed
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Many states prohibit attorneys in small claims
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600">$10 - $300</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Typical filing fee range across the country
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600">30 - 70 days</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Average time from filing to hearing
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-slate-900 p-8 text-center dark:bg-slate-800 sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Fight Back?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Generate a professional demand letter that cites the right statutes
            for your state. First letter free.
          </p>
          <Link
            href="/disputes"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
          >
            Start your free letter
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
          </Link>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
            <strong>Disclaimer:</strong> AI Dispute Engine is not a law firm and
            does not provide legal advice. This information is for educational
            purposes only. For legal advice specific to your situation, consult a
            licensed attorney in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
