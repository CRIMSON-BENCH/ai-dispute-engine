import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  COMPARISONS,
  getComparisonBySlug,
  getAllComparisonSlugs,
} from "@/lib/comparisons";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};
  return {
    title: `AI Dispute Engine vs ${comp.competitor} — Honest Comparison (2026) | AI Dispute Engine`,
    description: `Compare AI Dispute Engine and ${comp.competitor} side by side. See pricing, features, pros, and cons to decide which demand letter service is right for you.`,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

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
          <Link
            href="/compare"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Compare
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            vs {comp.competitor}
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          AI Dispute Engine vs {comp.competitor} &mdash; Honest Comparison
          (2026)
        </h1>

        {/* Pricing hero */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Our price */}
          <div className="rounded-xl border-2 border-teal-500 bg-teal-50 p-6 dark:bg-teal-900/20">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              AI Dispute Engine
            </p>
            <p className="mt-2 text-4xl font-bold text-teal-700 dark:text-teal-300">
              {comp.ourPrice}
            </p>
            <p className="mt-1 text-sm text-teal-600 dark:text-teal-400">
              per letter
            </p>
          </div>

          {/* Their price */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {comp.competitor}
            </p>
            <p className="mt-2 text-4xl font-bold text-slate-400 dark:text-slate-500">
              {comp.competitorPrice}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
              per letter
            </p>
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">
                    Feature
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-teal-700 dark:text-teal-400">
                    AI Dispute Engine
                  </th>
                  <th className="pb-3 font-semibold text-slate-500 dark:text-slate-400">
                    {comp.competitor}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {comp.features.map((f, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 font-medium text-slate-900 dark:text-white">
                      {f.feature}
                    </td>
                    <td className="py-3 pr-4">
                      <FeatureValue value={f.us} highlight />
                    </td>
                    <td className="py-3">
                      <FeatureValue value={f.them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pros and cons */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {/* Our pros/cons */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-teal-700 dark:text-teal-400">
              AI Dispute Engine
            </h2>
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Pros
              </h3>
              <ul className="space-y-2">
                {comp.pros.us.map((pro, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                Cons
              </h3>
              <ul className="space-y-2">
                {comp.cons.us.map((con, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Their pros/cons */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-slate-500 dark:text-slate-400">
              {comp.competitor}
            </h2>
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Pros
              </h3>
              <ul className="space-y-2">
                {comp.pros.them.map((pro, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                Cons
              </h3>
              <ul className="space-y-2">
                {comp.cons.them.map((con, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-3 text-lg font-bold">Our Verdict</h2>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {comp.verdict}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/disputes"
            className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
          >
            Try AI Dispute Engine Free
          </Link>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            First letter free &mdash; no credit card required
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/compare"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            &larr; Back to all comparisons
          </Link>
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

/* Helper component for feature values */
function FeatureValue({
  value,
  highlight,
}: {
  value: string;
  highlight?: boolean;
}) {
  const lower = value.toLowerCase();
  if (lower === "yes" || lower === "true") {
    return (
      <svg
        className={`h-5 w-5 ${highlight ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  }
  if (lower === "no" || lower === "false") {
    return (
      <svg
        className="h-5 w-5 text-red-400 dark:text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }
  return (
    <span
      className={
        highlight
          ? "font-medium text-slate-900 dark:text-white"
          : "text-slate-600 dark:text-slate-400"
      }
    >
      {value}
    </span>
  );
}
