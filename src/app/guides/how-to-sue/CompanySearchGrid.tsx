"use client";

import { useState } from "react";
import Link from "next/link";

interface CompanyCard {
  name: string;
  slug: string;
  industry: string;
  difficultyLevel: "Easy" | "Medium" | "Hard";
  estimatedResolutionTime: string;
}

function getDifficultyColor(level: string) {
  switch (level) {
    case "Easy":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "Medium":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    case "Hard":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400";
  }
}

export function CompanySearchGrid({
  companies,
  industries,
}: {
  companies: CompanyCard[];
  industries: string[];
}) {
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const filtered = companies.filter((c) => {
    const matchesSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "all" || c.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const grouped = industries
    .filter((ind) => selectedIndustry === "all" || ind === selectedIndustry)
    .map((industry) => ({
      industry,
      companies: filtered.filter((c) => c.industry === industry),
    }))
    .filter((g) => g.companies.length > 0);

  return (
    <div>
      {/* Search and filter controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-teal-500"
          />
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-teal-500"
        >
          <option value="all">All Industries</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        Showing {filtered.length} of {companies.length} companies
      </p>

      {/* Grouped results */}
      {grouped.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No companies found matching &ldquo;{search}&rdquo;. Try a different
            search term or browse all industries.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map(({ industry, companies: groupCompanies }) => (
            <div key={industry}>
              <h2 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                {industry}
                <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
                  ({groupCompanies.length})
                </span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groupCompanies.map((company) => (
                  <Link
                    key={company.slug}
                    href={`/guides/how-to-sue/${company.slug}`}
                    className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                        How to Sue {company.name}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${getDifficultyColor(company.difficultyLevel)}`}
                      >
                        {company.difficultyLevel}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {company.industry} &middot;{" "}
                      {company.estimatedResolutionTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
