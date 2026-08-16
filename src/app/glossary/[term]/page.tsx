import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GLOSSARY_TERMS,
  getTermBySlug,
  getAllTermSlugs,
} from "@/lib/glossary";

export function generateStaticParams() {
  return getAllTermSlugs().map((slug) => ({ term: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const entry = getTermBySlug(term);
  if (!entry) return {};
  return {
    title: `${entry.term} — Legal Definition | AI Dispute Engine`,
    description: entry.shortDef,
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = getTermBySlug(term);
  if (!entry) notFound();

  /* Resolve related terms to actual glossary entries */
  const relatedTermEntries = entry.relatedTerms
    .map((slug) => GLOSSARY_TERMS.find((t) => t.slug === slug))
    .filter(Boolean) as typeof GLOSSARY_TERMS;

  /* Split long definition into paragraphs */
  const paragraphs = entry.longDef.split("\n\n").filter(Boolean);

  /* JSON-LD DefinedTerm */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDef,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "AI Dispute Engine Legal Glossary",
      url: "https://aidisputeengine.com/glossary",
    },
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            href="/glossary"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Legal Glossary
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">{entry.term}</span>
        </nav>

        {/* Heading */}
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What Is {entry.term}? &mdash; Legal Definition
        </h1>

        {/* Category badge */}
        <span className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {entry.category}
        </span>

        {/* Short definition highlight box */}
        <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
          <p className="text-base font-medium leading-relaxed text-teal-900 dark:text-teal-100">
            {entry.shortDef}
          </p>
        </div>

        {/* Long definition */}
        <div className="mt-8 space-y-4">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-slate-700 dark:text-slate-300"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Related Legal Terms */}
        {relatedTermEntries.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold">Related Legal Terms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedTermEntries.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-700 dark:hover:bg-teal-900/20 dark:hover:text-teal-400"
                >
                  {t.term}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-800 dark:bg-teal-900/20">
          <h2 className="text-lg font-semibold text-teal-900 dark:text-teal-100">
            Have a dispute?
          </h2>
          <p className="mt-1 text-sm text-teal-800 dark:text-teal-300">
            Generate your demand letter &mdash; $2
          </p>
          <Link
            href="/disputes"
            className="mt-4 inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Browse dispute types
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/glossary"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            &larr; Back to glossary
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
