import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert AMA Sessions | AI Dispute Engine",
  description:
    "Live Q&A sessions with consumer rights attorneys and former regulators for $8 per session. Get expert answers to your dispute questions in real time.",
  openGraph: {
    title: "Expert AMA Sessions | AI Dispute Engine",
    description:
      "Live Q&A sessions with consumer rights attorneys and former regulators for $8 per session. Get expert answers to your dispute questions in real time.",
  },
};

const CHECK = (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
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
);

const STEPS = [
  {
    step: "1",
    title: "Browse upcoming sessions",
    description:
      "See the schedule of upcoming AMAs with topics, expert bios, and session dates. New sessions are added weekly.",
  },
  {
    step: "2",
    title: "Purchase access for $8",
    description:
      "Pay per session with no subscription required. Your ticket includes live participation and access to the recorded session afterward.",
  },
  {
    step: "3",
    title: "Join the live Q&A",
    description:
      "Ask your questions directly to consumer rights attorneys, former CFPB staffers, and experienced dispute resolution professionals.",
  },
];

const INCLUDED = [
  "Live interactive Q&A with verified legal and regulatory experts",
  "Recorded session replay available for 30 days after the event",
  "Ability to submit questions in advance for priority answering",
  "Small group format with no more than 50 attendees per session",
  "Sessions covering credit disputes, debt collection, tenant rights, and more",
  "No subscription required with simple one-time payment per session",
];

const FAQ = [
  {
    q: "Who are the experts?",
    a: "Our experts include practicing consumer rights attorneys, former staff from the CFPB and FTC, retired state attorney general investigators, and experienced tenant advocates. Every expert is vetted and their credentials are displayed on the session listing.",
  },
  {
    q: "Can I ask about my specific situation?",
    a: "Yes. The sessions are designed for real questions about real disputes. However, the experts provide general educational guidance, not personalized legal advice. If your situation needs individual legal counsel, the experts can point you in the right direction.",
  },
  {
    q: "What if I miss the live session?",
    a: "Every session is recorded. Your ticket includes access to the replay for 30 days after the event. You can also submit questions in advance when you purchase your ticket, and the expert will address them during the session even if you cannot attend live.",
  },
  {
    q: "How often are sessions held?",
    a: "We host two to four sessions per week, each covering a different topic. Common topics include credit report disputes, debt collector violations, landlord-tenant disputes, insurance claim denials, and small claims court preparation.",
  },
];

export default function ExpertAMASessionsPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/disputes"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            Expert AMA Sessions
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $8 per session
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ask a Consumer Rights Expert Anything
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Live Q&A sessions with attorneys who sue debt collectors, former
            regulators who wrote the rules, and advocates who have seen it all.
            Real answers for $8.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Browse Upcoming Sessions
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
            >
              {CHECK} {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            One good answer can save you thousands
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A 30-minute attorney consultation costs $150 or more. For $8, you
            get access to an expert who has handled hundreds of cases like yours.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Join an AMA Session
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="text-sm font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Expert AMA Sessions",
            description:
              "Pay-per-session live AMA events with consumer rights attorneys and former regulators.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "8.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/expert-ama-sessions",
            },
          }),
        }}
      />

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. The documents generated by this service are for
            informational purposes only and do not constitute legal advice. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
