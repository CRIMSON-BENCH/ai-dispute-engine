import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, LOCAL_DISPUTE_CATEGORIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Local Demand Letter Templates by City",
  description:
    "Find state-specific demand letter templates for your city. We cite your local statutes, deadlines, and penalties. 656+ city-specific pages.",
};

export default function LocalIndexPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Local</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Local demand letter templates
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {CITIES.length * LOCAL_DISPUTE_CATEGORIES.length} city-specific
          dispute templates citing your state&apos;s actual statutes, deadlines,
          and penalty amounts. Pick your city to start a free letter.
        </p>

        <div className="mt-12 space-y-14">
          {LOCAL_DISPUTE_CATEGORIES.map((category) => (
            <section key={category.id}>
              <h2 className="text-xl font-bold">
                {category.label} disputes{" "}
                <span className="text-base font-normal text-slate-500">
                  ({CITIES.length} cities)
                </span>
              </h2>
              <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                For when {category.opponentLabel} won&apos;t do the right thing.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
                {CITIES.map((city) => (
                  <Link
                    key={`${category.id}-${city.slug}`}
                    href={`/local/${category.id}-${city.slug}`}
                    className="text-sm text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
                  >
                    {city.name}, {city.stateAbbr}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
