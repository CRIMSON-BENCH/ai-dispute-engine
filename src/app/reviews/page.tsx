import type { Metadata } from "next";
import Link from "next/link";
import { DISPUTES } from "@/lib/disputes";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "See how real people used AI Dispute Engine to fight back — and win. Security deposits returned, fines dropped, claims overturned.",
};

const REVIEWS = [
  ...DISPUTES.filter((d) => d.testimonial).map((d) => ({
    ...d.testimonial!,
    disputeType: d.shortTitle,
  })),
  {
    name: "Robert C.",
    location: "Seattle, WA",
    quote:
      "A client owed me $8,500 for a 3-month web dev contract and ghosted me for 4 months. The demand letter cited the contract terms and state penalties. They paid within 10 days.",
    result: "Collected $8,500",
    disputeType: "Demand Letter",
  },
  {
    name: "Nina P.",
    location: "Miami, FL",
    quote:
      "Used the Privacy Shield tool to send deletion demands to 47 data broker sites. Within 3 weeks, 43 had removed my info. Worth every penny.",
    result: "43 of 47 sites removed data",
    disputeType: "Privacy Shield",
  },
  {
    name: "James W.",
    location: "Portland, OR",
    quote:
      "Our HOA tried to raise dues 40% without the required 67% owner approval. The AI found the exact bylaw they violated and drafted a letter. Board backed down at the next meeting.",
    result: "Fee hike reversed",
    disputeType: "HOA Dispute",
  },
  {
    name: "Tanya B.",
    location: "Nashville, TN",
    quote:
      "My son needed an MRI and the insurer denied prior authorization as 'not medically necessary.' The appeal letter was approved in 12 days.",
    result: "Prior auth approved",
    disputeType: "Medical Appeal",
  },
];

export default function ReviewsPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-950 text-white dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Real people. Real results.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            See what happened when people stopped putting it off and sent the
            letter.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <TestimonialCard
              key={i}
              name={review.name}
              location={review.location}
              quote={review.quote}
              result={review.result}
              disputeType={review.disputeType}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your turn.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-400">
            First letter is free — no credit card. Tell us what happened and
            we&apos;ll draft a professional letter in 60 seconds.
          </p>
          <Link
            href="/disputes"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-500"
          >
            Start your free letter
          </Link>
        </div>
      </section>
    </div>
  );
}
