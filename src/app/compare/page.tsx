import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Compare — AI Dispute Engine vs Competitors",
  description:
    "See how AI Dispute Engine stacks up against other demand letter services. Compare pricing, features, and ease of use side by side.",
};

export default function ComparePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How We Compare
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          See how AI Dispute Engine stacks up against alternatives
        </p>

        {/* Comparison cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((comp) => (
            <div
              key={comp.slug}
              className="flex flex-col rounded-xl border border-slate-200 p-6 dark:border-slate-800"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                vs {comp.competitor}
              </h2>

              {/* Price comparison */}
              <div className="mt-4 flex items-end gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Us
                  </p>
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    {comp.ourPrice}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Them
                  </p>
                  <p className="text-2xl font-bold text-slate-400 line-through dark:text-slate-500">
                    {comp.competitorPrice}
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  You save with AI Dispute Engine
                </span>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={`/compare/${comp.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                >
                  Compare
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-xs leading-relaxed text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. This information is for educational purposes only. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
