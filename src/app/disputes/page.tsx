import type { Metadata } from "next";
import Link from "next/link";
import { DISPUTES, CATEGORIES } from "@/lib/disputes";
import { DisputeCard } from "@/components/DisputeCard";

export const metadata: Metadata = {
  title: "All Dispute Templates",
  description:
    "Pick a dispute type. We'll ask a few questions and draft a professional demand letter the other side will take seriously. First letter free.",
};

export default function DisputesPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All dispute templates
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Pick a template. We&apos;ll ask a few questions and draft a letter the
          other side will take seriously. First letter free — no account needed
          to start.
        </p>

        <div className="mt-12 space-y-12">
          {CATEGORIES.map((category) => {
            const disputes = DISPUTES.filter(
              (d) => d.category === category.id
            );
            if (disputes.length === 0) return null;
            return (
              <section key={category.id}>
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {category.label}
                </h2>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-500">
                  {category.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {disputes.map((d) => (
                    <DisputeCard
                      key={d.slug}
                      slug={d.slug}
                      title={d.shortTitle}
                      description={d.description}
                      icon={d.icon}
                      category={d.category}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
