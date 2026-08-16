import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES, getStateBySlug, getAllStateSlugs } from "@/lib/states";
import { DISPUTES } from "@/lib/disputes";

export function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  return {
    title: `Small Claims Court in ${state.name} — Complete Guide`,
    description: `Everything you need to know about small claims court in ${state.name}: $${state.smallClaimsLimit.toLocaleString()} limit, filing fees ${state.filingFeeRange}, statute of limitations, and consumer protection laws.`,
  };
}

export default async function StateGuidePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const neighborStates = STATES.filter((s) => s.slug !== state.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  const faq = [
    {
      q: `What is the small claims limit in ${state.name}?`,
      a: `The small claims court limit in ${state.name} is $${state.smallClaimsLimit.toLocaleString()}. This is the maximum amount you can sue for in ${state.courtName}. If your claim exceeds this amount, you may need to either reduce your claim to fit the limit or file in a higher court.`,
    },
    {
      q: `How much does it cost to file a small claims case in ${state.name}?`,
      a: `Filing fees in ${state.name} small claims court typically range from ${state.filingFeeRange}, depending on the amount of your claim and the specific court. Additional costs may include service of process fees.`,
    },
    {
      q: `Do I need a lawyer for small claims court in ${state.name}?`,
      a: state.lawyersAllowed
        ? `Lawyers are allowed in ${state.name} small claims court, but they are not required. Many people successfully represent themselves. The process is designed to be accessible without legal representation.`
        : `${state.name} does not allow lawyers to represent parties in small claims court. The process is designed for self-representation, so you will present your own case to the judge.`,
    },
    {
      q: `What is the statute of limitations in ${state.name}?`,
      a: `In ${state.name}, the statute of limitations is ${state.statuteOfLimitations}. This means you must file your claim within these timeframes from when the dispute occurred or you may lose your right to sue.`,
    },
    {
      q: `Can a business sue in ${state.name} small claims court?`,
      a: state.corporatePlaintiffs
        ? `Yes, businesses and corporations can file claims in ${state.name} small claims court, subject to the same $${state.smallClaimsLimit.toLocaleString()} limit.`
        : `No, ${state.name} does not allow businesses or corporations to file as plaintiffs in small claims court. Only individuals may file small claims cases.`,
    },
    {
      q: `Can I file a small claims case online in ${state.name}?`,
      a: state.onlineFilingAvailable
        ? `Yes, ${state.name} offers online filing options for small claims cases in some jurisdictions. Check with your local ${state.courtName} for specific e-filing procedures.`
        : `${state.name} does not currently offer statewide online filing for small claims cases. You will typically need to file in person or by mail at your local ${state.courtName}.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
            href="/guides"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">{state.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-lg font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              {state.abbreviation}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Small Claims Court in {state.name} — Complete Guide
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                Everything you need to know about filing a small claims case in{" "}
                {state.name}, including limits, fees, and your consumer rights.
              </p>
            </div>
          </div>
        </div>

        {/* Key stats cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Small Claims Limit
            </p>
            <p className="mt-1 text-2xl font-bold text-teal-600">
              ${state.smallClaimsLimit.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Filing Fees
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {state.filingFeeRange}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Statute of Limitations
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {state.statuteOfLimitations}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Lawyers Allowed?
            </p>
            <p className="mt-1 text-2xl font-bold">
              {state.lawyersAllowed ? (
                <span className="text-amber-600 dark:text-amber-400">Yes</span>
              ) : (
                <span className="text-teal-600 dark:text-teal-400">
                  No (self-represent)
                </span>
              )}
            </p>
          </div>
        </div>

        {/* How to file section */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            How to File a Small Claims Case in {state.name}
          </h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Send a Demand Letter",
                description: `Before filing in court, send a formal demand letter to the other party. This is often required in ${state.name} and shows the judge you tried to resolve the dispute first. AI Dispute Engine can generate this for you in 60 seconds.`,
              },
              {
                step: 2,
                title: "Determine the Right Court",
                description: `In ${state.name}, small claims cases are filed in ${state.courtName}. You typically file in the county where the defendant lives or where the dispute occurred.`,
              },
              {
                step: 3,
                title: "File Your Claim",
                description: `Complete the small claims complaint form and pay the filing fee (${state.filingFeeRange}).${state.onlineFilingAvailable ? " Online filing may be available in your jurisdiction." : " You will need to file in person or by mail."} The claim must be for $${state.smallClaimsLimit.toLocaleString()} or less.`,
              },
              {
                step: 4,
                title: "Serve the Defendant",
                description: `The defendant must be formally notified of the lawsuit. In ${state.name}, this is typically done through personal service, certified mail, or the court clerk. You cannot serve the papers yourself.`,
              },
              {
                step: 5,
                title: "Prepare Your Evidence",
                description:
                  "Gather all documents, photos, receipts, contracts, and communications related to your dispute. Organize them chronologically and make copies for the court and the other party.",
              },
              {
                step: 6,
                title: "Attend the Hearing",
                description: `Arrive early, dress professionally, and present your case clearly. ${state.lawyersAllowed ? "You may hire a lawyer, but it is not required." : `${state.name} does not allow lawyers in small claims court, so you will present your own case.`} The judge will usually issue a decision the same day or within a few weeks.`,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/40 dark:text-teal-400">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Consumer Protection Laws */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Key Consumer Protection Laws in {state.name}
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="grid gap-4 sm:grid-cols-2">
              {state.keyConsumerProtections.map((protection) => (
                <div
                  key={protection}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {protection}
                  </span>
                </div>
              ))}
            </div>

            {state.keyStatutes.length > 0 && (
              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Statutes
                </p>
                <div className="flex flex-wrap gap-2">
                  {state.keyStatutes.map((statute) => (
                    <span
                      key={statute}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {statute}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Small Claims Limit explanation */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            {state.name} Small Claims Court Limits
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              The small claims court limit in {state.name} is{" "}
              <strong>${state.smallClaimsLimit.toLocaleString()}</strong>. This
              means you can sue for up to this amount in {state.courtName}. If
              your claim is for more than $
              {state.smallClaimsLimit.toLocaleString()}, you have two options:
              reduce your claim to fit the small claims limit and waive the
              excess, or file in a higher court (which typically requires a
              lawyer and has higher fees).
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {state.name}&apos;s $
              {state.smallClaimsLimit.toLocaleString()} limit applies to the
              total amount you&apos;re seeking, including damages but typically
              excluding court costs and filing fees. Interest may or may not
              count toward the limit depending on the specific case.
            </p>
          </div>
        </section>

        {/* Common Disputes */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Common Disputes in {state.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DISPUTES.map((dispute) => (
              <Link
                key={dispute.slug}
                href={`/guides/${state.slug}/${dispute.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all hover:border-teal-300 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-700"
              >
                <span className="text-xl">{dispute.icon}</span>
                <div className="min-w-0">
                  <span className="block truncate text-sm font-medium text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {dispute.shortTitle} in {state.abbreviation}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-slate-900 p-8 text-center dark:bg-slate-800 sm:p-10">
          <h2 className="text-2xl font-bold text-white">
            Need a Demand Letter for a {state.name} Dispute?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Our AI generates professional demand letters citing {state.name}{" "}
            statutes. First letter free -- ready in 60 seconds.
          </p>
          <Link
            href="/disputes"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
          >
            Start your free letter
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
            {faq.map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links to other states */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold">Other State Guides</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neighborStates.map((s) => (
              <Link
                key={s.slug}
                href={`/guides/${s.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition-all hover:border-teal-300 dark:border-slate-700 dark:hover:border-teal-700"
              >
                <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                  {s.abbreviation}
                </span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-teal-600 dark:text-slate-300 dark:group-hover:text-teal-400">
                  {s.name} (${s.smallClaimsLimit.toLocaleString()} limit)
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/guides"
              className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
            >
              View all state guides &rarr;
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
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
