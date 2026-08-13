import type { Metadata } from "next";
import Link from "next/link";
import { getAllLocations, LOCAL_DISPUTE_TYPES, type Location } from "@/lib/cities";

export const metadata: Metadata = {
  title: "AI Dispute Engine — Local Legal Help in Every US City & County",
  description:
    "Find dispute letter templates customized to your city and state laws. Covering 700+ cities and counties across all 50 states with state-specific legal citations.",
};

const allLocations = getAllLocations();
const cities = allLocations.filter((l) => l.type === "city");
const counties = allLocations.filter((l) => l.type === "county");
const totalPages = allLocations.length * LOCAL_DISPUTE_TYPES.length;

function groupByState(locations: Location[]) {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    const existing = map.get(loc.state);
    if (existing) existing.push(loc);
    else map.set(loc.state, [loc]);
  }
  const sorted = [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  for (const [, locs] of sorted) {
    locs.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

const stateGroups = groupByState(allLocations);
const defaultDispute = LOCAL_DISPUTE_TYPES[0];

export default function LocalIndexPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Local</span>
        </nav>

        <section className="mb-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Legal Dispute Help in Your City
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Over {totalPages.toLocaleString()} pages of city-specific dispute
            guidance, powered by real state statutes.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
            Every local page cites your state&apos;s actual laws, deadlines, and
            penalty amounts so you can draft an enforceable demand letter in
            minutes.
          </p>
        </section>

        <section className="mb-16 rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 sm:grid-cols-4">
            {[
              { value: `${cities.length}+`, label: "Cities" },
              { value: String(LOCAL_DISPUTE_TYPES.length), label: "Dispute Types" },
              { value: String(stateGroups.length), label: "States & DC" },
              { value: totalPages.toLocaleString() + "+", label: "Pages" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-6 text-center">
                <p className="text-2xl font-bold text-teal-600 dark:text-teal-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
            Browse by State
          </h2>
          <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
            Click a state to see its cities and counties. Each link opens a{" "}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {defaultDispute.name}
            </span>{" "}
            page — you can switch dispute types once there.
          </p>

          <div className="space-y-3">
            {stateGroups.map(([state, locations]) => {
              const stateCities = locations.filter((l) => l.type === "city");
              const stateCounties = locations.filter((l) => l.type === "county");
              return (
                <details
                  key={state}
                  className="group rounded-lg border border-slate-200 dark:border-slate-800"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:text-white dark:hover:bg-slate-900">
                    <span>
                      {state}{" "}
                      <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                        ({stateCities.length}{" "}
                        {stateCities.length === 1 ? "city" : "cities"}
                        {stateCounties.length > 0 &&
                          `, ${stateCounties.length} ${stateCounties.length === 1 ? "county" : "counties"}`}
                        )
                      </span>
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <div className="border-t border-slate-200 px-5 pb-4 pt-3 dark:border-slate-800">
                    {stateCities.length > 0 && (
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
                        {stateCities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/local/${defaultDispute.slug}-${city.slug}`}
                            className="text-sm text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {stateCounties.length > 0 && (
                      <>
                        <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Counties
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
                          {stateCounties.map((county) => (
                            <Link
                              key={county.slug}
                              href={`/local/${defaultDispute.slug}-${county.slug}`}
                              className="text-sm text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
                            >
                              {county.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
            Browse by Dispute Type
          </h2>
          <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
            Each dispute type is available in every city and county listed above.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCAL_DISPUTE_TYPES.map((dispute) => {
              const exampleCity = cities[0];
              return (
                <Link
                  key={dispute.slug}
                  href={`/local/${dispute.slug}-${exampleCity.slug}`}
                  className="group rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-teal-600 hover:bg-teal-50 dark:border-slate-800 dark:hover:border-teal-700 dark:hover:bg-teal-950"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-400">
                    {dispute.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Available in {allLocations.length} locations
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
            All Cities
          </h2>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            A complete A-Z list of every city we cover. Each supports all{" "}
            {LOCAL_DISPUTE_TYPES.length} dispute types.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[...cities]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((city) => (
                <Link
                  key={city.slug}
                  href={`/local/${defaultDispute.slug}-${city.slug}`}
                  className="text-sm text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
                >
                  {city.name}, {city.stateAbbr}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
