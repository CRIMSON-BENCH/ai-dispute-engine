import type { Metadata } from "next";
import Link from "next/link";
import {
  GLOSSARY_TERMS,
  getAllCategories,
  getTermsByCategory,
} from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Legal Glossary — 100+ Legal Terms Explained",
  description:
    "Plain-English definitions of 100+ legal terms you need to know when writing a demand letter or filing a dispute. Searchable glossary with categories.",
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const categories = getAllCategories();

  /* Build a set of first letters that actually have terms */
  const activeLetters = new Set(
    GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase())
  );

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* CTA banner */}
        <div className="mb-10 rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold text-teal-900 dark:text-teal-100">
                Have a dispute?
              </h2>
              <p className="mt-1 text-sm text-teal-800 dark:text-teal-300">
                Skip the legalese. Generate a professional demand letter in 60
                seconds.
              </p>
            </div>
            <Link
              href="/disputes"
              className="inline-flex shrink-0 items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Generate your demand letter
            </Link>
          </div>
        </div>

        {/* Page header */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Legal Glossary
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          100+ legal terms explained in plain English
        </p>

        {/* A-Z jump nav */}
        <nav className="mt-8 flex flex-wrap gap-1.5">
          {ALPHABET.map((letter) => {
            const isActive = activeLetters.has(letter);
            return isActive ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700 transition hover:bg-teal-100 hover:text-teal-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-teal-900/40 dark:hover:text-teal-400"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-slate-300 dark:text-slate-700"
              >
                {letter}
              </span>
            );
          })}
        </nav>

        {/* Terms grouped by category */}
        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const terms = getTermsByCategory(category);
            if (terms.length === 0) return null;
            return (
              <section key={category}>
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {category}
                </h2>
                <div className="mt-3 divide-y divide-slate-200 dark:divide-slate-800">
                  {terms.map((t) => {
                    const letter = t.term[0].toUpperCase();
                    return (
                      <div
                        key={t.slug}
                        id={`letter-${letter}`}
                        className="py-4"
                      >
                        <Link
                          href={`/glossary/${t.slug}`}
                          className="text-base font-semibold text-slate-900 hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
                        >
                          {t.term}
                        </Link>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {t.shortDef}
                        </p>
                      </div>
                    );
                  })}
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
