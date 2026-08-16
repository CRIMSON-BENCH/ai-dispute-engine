import type { Metadata } from "next";
import Link from "next/link";
import { DISPUTES, CATEGORIES } from "@/lib/disputes";

export const metadata: Metadata = {
  title: "Free Legal Letter Templates",
  description:
    "Preview any of our 38 demand letter templates. From security deposit disputes to medical billing — our AI customizes each one with your details and state laws.",
};

export default function TemplatesPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free Legal Letter Templates
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Preview any of our 38 demand letter templates. Our AI customizes each
          one with your specific details, state laws, and relevant statutes.
        </p>

        {/* Templates grouped by category */}
        <div className="mt-12 space-y-12">
          {CATEGORIES.map((category) => {
            const templates = DISPUTES.filter(
              (d) => d.category === category.id
            );
            if (templates.length === 0) return null;
            return (
              <section key={category.id}>
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {category.label}
                </h2>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-500">
                  {category.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {templates.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/templates/${d.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-slate-800">
                        {d.icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                          {d.shortTitle}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {d.description}
                        </p>
                        <span className="mt-2 inline-block text-xs font-medium text-teal-600 dark:text-teal-400">
                          Preview Template &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
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
