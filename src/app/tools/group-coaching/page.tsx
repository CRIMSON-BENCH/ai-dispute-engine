import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Group Coaching Sessions — Live Dispute Strategy with a Consumer Advocate",
  description:
    "Join weekly live group video sessions with a consumer advocate who walks you through dispute strategy, document review, and next steps. Small groups, real answers. $15/session.",
  openGraph: {
    title:
      "Group Coaching Sessions — Live Dispute Strategy with a Consumer Advocate",
    description:
      "Join weekly live group video sessions with a consumer advocate who walks you through dispute strategy, document review, and next steps. $15/session.",
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
    title: "Choose a session that fits your schedule",
    description:
      "Browse upcoming sessions by topic — credit disputes, landlord issues, medical billing, debt collection, and more. Pick the one that matches your situation and book your spot.",
  },
  {
    step: "2",
    title: "Join the live video call",
    description:
      "Connect from your phone, tablet, or computer. Share your screen to walk through documents, ask questions in real time, and get feedback from the advocate and other participants who&apos;ve been in your shoes.",
  },
  {
    step: "3",
    title: "Leave with a personalized action plan",
    description:
      "Walk away with specific next steps tailored to your dispute — what to send, who to contact, which deadlines matter, and what evidence to gather. Session notes and action items are emailed to you afterward.",
  },
];

const INCLUDED = [
  "Live weekly group video sessions led by experienced consumer advocates",
  "Real-time Q&A — ask about your specific dispute and get direct answers",
  "Screen sharing for live document review and feedback on your letters",
  "Recording access for 30 days after each session so you never miss a detail",
  "Small group size capped at 12 participants for meaningful interaction",
  "Session notes and personalized action items emailed after every call",
  "Community access between sessions to ask follow-up questions",
  "Priority booking for follow-up sessions when you need continued guidance",
];

const FAQ = [
  {
    q: "What topics do the sessions cover?",
    a: "Sessions rotate through the most common dispute types — credit report errors, debt collection harassment, landlord disputes, medical billing overcharges, insurance claim denials, and warranty or refund issues. Each session focuses on one topic so the advocate can go deep. When you book, you&apos;ll see exactly what that week&apos;s session covers.",
  },
  {
    q: "Can I ask about my specific situation during the call?",
    a: "Absolutely. That&apos;s the entire point. While the session has a topic focus, the advocate dedicates time to each participant&apos;s individual situation. You can share your screen to show letters, emails, or account statements and get real-time feedback. With a max of 12 people per session, there&apos;s real time for everyone.",
  },
  {
    q: "Who are the consumer advocates leading these sessions?",
    a: "Our advocates are experienced consumer rights professionals with backgrounds in dispute resolution, credit repair, and regulatory compliance. They&apos;ve helped thousands of consumers navigate disputes with banks, landlords, insurers, and debt collectors. They are not attorneys, but they know the system inside and out.",
  },
  {
    q: "What if I can&apos;t make the live session?",
    a: "Every session is recorded and available for 30 days after the call. You&apos;ll also receive session notes and any action items discussed. If you have a question that didn&apos;t get answered, you can post it in the community channel or book a follow-up session with priority access.",
  },
];

export default function GroupCoachingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
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
            Group Coaching
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $15/session
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop Guessing. Get Live Guidance From Someone Who&apos;s Done This
            a Thousand Times.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            AI tools generate the letters. But when you&apos;re staring at a
            confusing response from a debt collector or wondering if your
            landlord is bluffing, you need a real person who&apos;s seen your
            exact situation before. Join a weekly live group session with a
            consumer advocate and get answers that actually apply to your case.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Book a Session — $15
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
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

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
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
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The difference between winning and losing a dispute is knowing what
            to do next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A one-hour consultation with a consumer attorney costs $200 to $400.
            For $15, you get live access to an experienced advocate who reviews
            your situation, answers your questions, and tells you exactly what
            move to make — this week.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Book a Session — $15
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Group Coaching Sessions",
            description:
              "Weekly live group video sessions with a consumer advocate for dispute strategy, document review, and personalized action plans.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "15.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/group-coaching",
            },
          }),
        }}
      />

      {/* Disclaimer */}
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
