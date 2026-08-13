import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISPUTES } from "@/lib/disputes";
import { DisputeFormClient } from "@/components/DisputeFormClient";

export function generateStaticParams() {
  return DISPUTES.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const dispute = DISPUTES.find((d) => d.slug === params.slug);
  if (!dispute) return {};
  return {
    title: `${dispute.title} — Free AI Template`,
    description: dispute.description,
  };
}

export default function DisputePage({
  params,
}: {
  params: { slug: string };
}) {
  const dispute = DISPUTES.find((d) => d.slug === params.slug);
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

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/disputes"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            ← Browse all dispute templates
          </Link>
        </div>
      </div>
    </div>
  );
}
