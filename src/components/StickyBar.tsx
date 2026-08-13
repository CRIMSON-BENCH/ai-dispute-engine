"use client";

import Link from "next/link";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/80 md:hidden dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-1">
        <Link
          href="/disputes"
          className="w-full rounded-lg bg-teal-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Start your free letter &rarr;
        </Link>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          First letter free &mdash; no credit card
        </p>
      </div>
    </div>
  );
}
