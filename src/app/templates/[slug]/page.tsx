import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISPUTES, CATEGORIES } from "@/lib/disputes";

export function generateStaticParams() {
  return DISPUTES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dispute = DISPUTES.find((d) => d.slug === slug);
  if (!dispute) return {};
  return {
    title: `Free ${dispute.title} Template | AI Dispute Engine`,
    description: `Preview our free ${dispute.shortTitle} demand letter template. Our AI customizes this template with your details, state laws, and relevant statutes.`,
  };
}

const AI_BENEFITS = [
  "State-specific statute citations",
  "Personalized facts and details",
  "Proper legal formatting",
  "Correct recipient addressing",
  "Deadline calculations based on your state",
  "Relevant case law references",
];

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dispute = DISPUTES.find((d) => d.slug === slug);
  if (!dispute) notFound();

  /* Highlight placeholder tokens like [DATE], [RECIPIENT], etc. */
  const templateLines = dispute.letterTemplate.split("\n");

  /* Related templates (same category, excluding this one) */
  const relatedTemplates = DISPUTES.filter(
    (d) => d.category === dispute.category && d.slug !== dispute.slug
  ).slice(0, 4);

  const categoryLabel =
    CATEGORIES.find((c) => c.id === dispute.category)?.label ??
    dispute.category;

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
            href="/templates"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Templates
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            {dispute.shortTitle} Letter Template
          </span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
            {dispute.icon}
          </span>
          <div>
            <span className="mb-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {categoryLabel}
            </span>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Free {dispute.title} Template
            </h1>
          </div>
        </div>

        {/* Letter preview */}
        <div className="mt-8 rounded-xl border border-slate-300 bg-white p-6 shadow-lg sm:p-10 dark:border-slate-700 dark:bg-slate-900">
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            {templateLines.map((line, i) => (
              <span key={i}>
                {highlightPlaceholders(line)}
                {"\n"}
              </span>
            ))}
          </pre>
        </div>

        {/* Note box */}
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-900/20">
          <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
            This is a generic template. Our AI customizes this letter with your
            specific details, state laws, and relevant statutes.
          </p>
        </div>

        {/* What our AI adds */}
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold">
            What our AI adds that a template can&apos;t
          </h2>
          <ul className="space-y-3">
            {AI_BENEFITS.map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400"
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
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href={`/disputes/${dispute.slug}`}
            className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
          >
            Generate Your Custom {dispute.shortTitle} Letter &mdash; $2
          </Link>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            First letter free &mdash; no account needed to start
          </p>
        </div>

        {/* Related templates */}
        {relatedTemplates.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold">Related Templates</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTemplates.map((d) => (
                <Link
                  key={d.slug}
                  href={`/templates/${d.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg dark:bg-slate-800">
                    {d.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {d.shortTitle}
                    </h3>
                    <span className="mt-1 inline-block text-xs text-teal-600 dark:text-teal-400">
                      Preview &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/templates"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            &larr; Browse all templates
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

/**
 * Replaces [PLACEHOLDER] tokens in a line with highlighted spans.
 */
function highlightPlaceholders(line: string) {
  const parts = line.split(/(\[[A-Z_]+\])/g);
  return parts.map((part, i) => {
    if (/^\[[A-Z_]+\]$/.test(part)) {
      return (
        <span
          key={i}
          className="rounded bg-yellow-100 px-1 font-semibold text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"
        >
          {part}
        </span>
      );
    }
    return part;
  });
}
