import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISPUTES } from "@/lib/disputes";
import { DisputeFormClient } from "@/components/DisputeFormClient";

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
    title: `${dispute.title} — Free AI Template`,
    description: dispute.description,
  };
}

export default async function DisputePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dispute = DISPUTES.find((d) => d.slug === slug);
  if (!dispute) notFound();

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">
            Home
          </Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-slate-700 dark:hover:text-slate-300">
            Disputes
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">{dispute.shortTitle}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
              {dispute.icon}
            </span>
            <div>
              <span className="mb-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {dispute.category}
              </span>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {dispute.title}
              </h1>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                {dispute.description}
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            {dispute.urgencyNote && (
              <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                {dispute.urgencyNote}
              </span>
            )}
            {dispute.successStat && (
              <span className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-800 dark:border-teal-800 dark:bg-teal-900/20 dark:text-teal-400">
                {dispute.successStat}
              </span>
            )}
          </div>
        </div>

        {/* Form + Preview side by side */}
        <DisputeFormClient dispute={dispute} />

        {/* Testimonial */}
        {dispute.testimonial && (
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                {dispute.testimonial.name[0]}
              </div>
              <div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{dispute.testimonial.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm font-semibold">
                    {dispute.testimonial.name}
                  </span>
                  <span className="text-sm text-slate-500">
                    {dispute.testimonial.location}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {dispute.testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {dispute.faq.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold">Frequently asked</h2>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {dispute.faq.map((item) => (
                <div key={item.q} className="py-4">
                  <h3 className="text-sm font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upsell: Related Tools */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold">Make your case stronger</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/tools/follow-up-letter" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">Follow-Up Letter</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">No response? Turn up the pressure with a follow-up.</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">$2 &rarr;</p>
            </Link>
            <Link href="/tools/evidence-toolkit" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">Evidence Toolkit</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Organize screenshots, receipts, and records for court.</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">$3 &rarr;</p>
            </Link>
            <Link href="/tools/full-fight" className="group rounded-xl border border-amber-200 bg-amber-50/50 p-5 transition hover:border-amber-300 hover:shadow-sm dark:border-amber-800 dark:bg-amber-900/10 dark:hover:border-amber-700">
              <p className="text-sm font-semibold text-amber-800 group-hover:text-amber-600 dark:text-amber-300 dark:group-hover:text-amber-400">Full Fight Bundle</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">6 letters + 30-day pressure campaign. Most popular.</p>
              <p className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-400">$25 &rarr;</p>
            </Link>
            <Link href="/tools/escalation" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">Escalation Pack</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">File complaints with FTC, CFPB, and your state AG simultaneously.</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">$5 &rarr;</p>
            </Link>
            <Link href="/tools/attorney-review" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">Attorney Review</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Have a real lawyer review your letter within 48 hours.</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">$65 &rarr;</p>
            </Link>
            <Link href="/tools/court-filing" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800">
              <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">Court Filing Kit</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Pre-filled court forms and step-by-step filing instructions.</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">$50 &rarr;</p>
            </Link>
          </div>
        </div>

        {/* Add-on banner */}
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-900/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">Add Certified Mail — $8</p>
              <p className="mt-1 text-xs text-teal-700 dark:text-teal-300">Send your letter via USPS Certified Mail with tracking. Creates a legal paper trail.</p>
            </div>
            <Link href="/tools/notarized-letter" className="text-xs font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400">Or get it notarized — $15 &rarr;</Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/disputes"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            &larr; Browse all dispute templates
          </Link>
        </div>
      </div>
    </div>
  );
}
