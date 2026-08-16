import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES } from "@/lib/companies";
import { CompanySearchGrid } from "./CompanySearchGrid";

export const metadata: Metadata = {
  title: "How to Sue Any Company — Step-by-Step Guides",
  description:
    "Browse 100+ step-by-step guides for suing companies like Amazon, AT&T, State Farm, Wells Fargo, and more. Learn how to send demand letters, file complaints, and take companies to small claims court.",
  openGraph: {
    title: "How to Sue Any Company — Step-by-Step Guides",
    description:
      "Browse 100+ step-by-step guides for resolving disputes with major companies. No lawyer needed.",
  },
};

const industries = Array.from(
  new Set(COMPANIES.map((c) => c.industry))
);

export default function HowToSueIndexPage() {
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
          <span className="text-slate-900 dark:text-white">
            How to Sue a Company
          </span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Sue Any Company — Step-by-Step Guides
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Browse {COMPANIES.length}+ guides for holding companies accountable.
            Each guide walks you through sending a demand letter, filing
            regulatory complaints, and taking the company to small claims court.
          </p>
        </div>

        {/* Search + Grid (client component) */}
        <CompanySearchGrid
          companies={COMPANIES.map((c) => ({
            name: c.name,
            slug: c.slug,
            industry: c.industry,
            difficultyLevel: c.difficultyLevel,
            estimatedResolutionTime: c.estimatedResolutionTime,
          }))}
          industries={industries}
        />

        {/* Bottom CTA */}
        <div className="mt-16 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white">
            Don&apos;t See Your Company?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-teal-100">
            Our demand letter generator works for any company or individual. Pick
            a dispute type and generate your letter in 60 seconds.
          </p>
          <Link
            href="/disputes"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-teal-700 shadow-sm transition-colors hover:bg-teal-50"
          >
            Browse All Dispute Types
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
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
