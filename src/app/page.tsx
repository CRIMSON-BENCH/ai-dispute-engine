import Link from "next/link";
import { DISPUTES, CATEGORIES } from "@/lib/disputes";
import { DisputeCard } from "@/components/DisputeCard";
import { TestimonialCard } from "@/components/TestimonialCard";

const FEATURED_SLUGS = [
  "security-deposit",
  "credit-report",
  "dmca-takedown",
  "medical-denial",
  "lemon-law",
  "car-accident-demand",
  "wrongful-termination",
  "insurance-denial",
];

const TESTIMONIALS = DISPUTES.filter((d) => d.testimonial).slice(0, 4);

const STEPS = [
  {
    number: "1",
    title: "Pick your fight",
    description: "Choose from 38 dispute types covering landlords, credit bureaus, insurers, employers, HOAs, and more.",
  },
  {
    number: "2",
    title: "Answer a few questions",
    description: "A short guided form — about 3 minutes. We ask who, what, and what you want. You write in plain English.",
  },
  {
    number: "3",
    title: "Get your letter",
    description: "Our AI generates a professional demand letter citing the right statutes for your state. Download as PDF or DOCX and send.",
  },
];

const STATUTES = ["FCRA", "FDCPA", "DMCA", "HIPAA", "ADA", "TCPA", "CCPA", "FLSA"];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => DISPUTES.find((d) => d.slug === slug)!);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
                First letter free — no credit card
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Fight back
                <span className="block text-teal-400">and win.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Tell our AI what happened — in plain English. Get a professional
                demand letter that cites the right statutes for your state.
                Ready in 60 seconds.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/disputes"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
                >
                  Start your free letter
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3.5 text-base font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  See pricing
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  20+ dispute types
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  State-specific statutes
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  PDF &amp; DOCX download
                </span>
              </div>
            </div>

            {/* Interactive finder */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
                  AI Dispute Finder
                </p>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>
              <p className="mb-3 text-sm font-medium text-slate-200">
                Describe your situation in your own words:
              </p>
              <div className="mb-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <p className="text-sm italic text-slate-500">
                  &quot;My landlord won&apos;t return my security deposit after I
                  moved out three months ago...&quot;
                </p>
              </div>
              <Link
                href="/disputes"
                className="flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Find my dispute type
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="mt-3 text-center text-xs text-slate-500">
                Or{" "}
                <Link href="/disputes" className="text-teal-400 underline underline-offset-2">
                  browse all dispute types
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statute badges */}
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Built on real law:
            </span>
            {STATUTES.map((s) => (
              <span
                key={s}
                className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps. Sixty seconds.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              No legal jargon, no appointments, no retainers.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center sm:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-lg font-bold text-white sm:mx-0">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured disputes */}
      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Every fight you&apos;ve put off
              </h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                Demand letters for the disputes real people actually face.
              </p>
            </div>
            <Link
              href="/disputes"
              className="hidden text-sm font-semibold text-teal-600 hover:text-teal-500 sm:block dark:text-teal-400"
            >
              Browse all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((d) => (
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
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/disputes"
              className="text-sm font-semibold text-teal-600 dark:text-teal-400"
            >
              Browse all dispute types →
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real people. Real results.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              One letter can be worth thousands. Here&apos;s what happened when
              people stopped putting it off.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map(
              (d) =>
                d.testimonial && (
                  <TestimonialCard
                    key={d.slug}
                    name={d.testimonial.name}
                    location={d.testimonial.location}
                    quote={d.testimonial.quote}
                    result={d.testimonial.result}
                    disputeType={d.shortTitle}
                  />
                )
            )}
          </div>
        </div>
      </section>

      {/* Tools & Add-ons */}
      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              More than just letters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Free tools and premium add-ons to help you win your dispute from start to finish.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/tools/settlement-calculator" className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:hover:border-teal-500">
              <span className="text-2xl">🧮</span>
              <h3 className="mt-3 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Settlement Calculator</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Free — estimate what your case is worth</p>
            </Link>
            <Link href="/tools/escalation" className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:hover:border-teal-500">
              <span className="text-2xl">📈</span>
              <h3 className="mt-3 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Escalation Pack</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">$5 — FTC, CFPB, &amp; State AG complaints</p>
            </Link>
            <Link href="/tools/small-claims-kit" className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:hover:border-teal-500">
              <span className="text-2xl">⚖️</span>
              <h3 className="mt-3 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Small Claims Kit</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">$15 — file in court without a lawyer</p>
            </Link>
            <Link href="/business" className="group rounded-2xl border border-slate-200 p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:hover:border-teal-500">
              <span className="text-2xl">🏢</span>
              <h3 className="mt-3 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Business Plan</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">$49/mo — unlimited letters for your team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 text-white dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stop putting it off.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Your first letter is free. No credit card, no subscription.
            Just tell us what happened.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start your free letter
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-slate-400 underline underline-offset-4 transition hover:text-white"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
