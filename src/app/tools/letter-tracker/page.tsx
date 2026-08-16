import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Letter Tracker — Track Delivery, Deadlines & Responses | AI Dispute Engine",
  description:
    "Track every letter you send. Real-time USPS delivery tracking, response deadline countdowns, automated reminders, and response logging. Included with Unlimited plan.",
  openGraph: {
    title:
      "Letter Tracker — Track Delivery, Deadlines & Responses | AI Dispute Engine",
    description:
      "Track every letter you send. Real-time USPS delivery tracking, response deadline countdowns, automated reminders, and response logging. Included with Unlimited plan.",
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
    title: "Send via certified mail",
    description:
      "When you generate a letter through AI Dispute Engine, choose our certified mail option ($8). We print, mail, and track it for you.",
  },
  {
    step: "2",
    title: "Track in real-time",
    description:
      "Watch your letter move through the USPS system. Get email alerts when it's out for delivery and when it's delivered.",
  },
  {
    step: "3",
    title: "Never miss a deadline",
    description:
      "Countdown timers show exactly when response deadlines expire. Get reminders before deadlines hit so you can plan your next move.",
  },
];

const FEATURES = [
  {
    title: "Real-Time USPS Tracking",
    description:
      "See exactly where your letter is in the mail system. Tracking updates sync directly from USPS — no manual checking needed.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Delivery Confirmation",
    description:
      "Get instant email alerts when your letter is delivered. Know the exact date and time, plus who signed for it.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Deadline Countdowns",
    description:
      "Every letter comes with a response deadline. Visual countdown timers show exactly how many days remain. Never lose track.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Response Logging",
    description:
      "Log responses as they come in — offers, denials, or silence. Build a complete record of your dispute timeline for court.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
];

const INCLUDED = [
  "Automated email reminders before deadlines expire",
  "Complete dispute timeline for court evidence",
  "Multiple disputes tracked in one dashboard",
  "Mobile-friendly — check status from anywhere",
  "Export dispute history as PDF for court",
  "Included with Unlimited plan ($10/mo)",
];

const FLOW_STEPS = [
  "Generate letter",
  "Send via certified mail ($8)",
  "Track in dashboard",
  "Get deadline reminders",
  "Log responses",
  "Next steps",
];

const FAQ = [
  {
    q: "Do I have to use your certified mail service to track letters?",
    a: "Letter Tracker works best with our certified mail service ($8 per letter) because tracking syncs automatically. You can also manually log letters you send yourself, but you won't get automatic USPS tracking updates.",
  },
  {
    q: "What does the Unlimited plan include?",
    a: "For $10/month, Unlimited includes: unlimited letter generation, the Letter Tracker dashboard, automated reminders, priority support, and discounts on premium services like Attorney Review and Court Filing Kit.",
  },
  {
    q: "Can I track letters I already sent?",
    a: "Yes. You can manually add letters to your tracker with the date sent and response deadline. You won't get USPS tracking for those, but the deadline countdowns and reminder features still work.",
  },
  {
    q: "How do delivery notifications work?",
    a: "When your letter is delivered, we receive a delivery confirmation from USPS and immediately send you an email with the date, time, and signature (if applicable). This delivery confirmation is admissible evidence in court.",
  },
  {
    q: "Can I export my tracking history for court?",
    a: "Yes. Export your complete dispute timeline as a PDF — every letter sent, delivery confirmations, deadlines, and responses. This organized record is compelling evidence that you made good-faith efforts to resolve the dispute.",
  },
];

export default function LetterTrackerPage() {
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
            Letter Tracker
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            Included with Unlimited — $10/mo
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Track Every Letter. Know When They Get It.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your dispute dashboard: real-time delivery tracking, response
            deadline countdowns, automated reminders, and a complete record of
            every letter sent and received.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Unlimited — $10/mo
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Your Dispute Command Center
        </h2>
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 overflow-hidden shadow-lg">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>
                <span className="font-semibold text-slate-900 dark:text-white">
                  My Letters
                </span>
              </div>
              <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400">
                3 Active Disputes
              </span>
            </div>

            {/* Row 1 — Delivered */}
            <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4 dark:border-slate-800">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  Demand Letter to XYZ Corp
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Delivered Mar 15 &middot; Deadline: Mar 29 (5 days left)
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Delivered
              </span>
            </div>

            {/* Row 2 — In Transit */}
            <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4 dark:border-slate-800">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  Follow-Up to ABC LLC
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  In Transit &middot; Sent Mar 18
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                In Transit
              </span>
            </div>

            {/* Row 3 — Draft */}
            <div className="flex items-center gap-4 px-6 py-4">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  Final Notice to John Smith
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Draft &middot; Ready to send
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                Draft
              </span>
            </div>
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
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
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

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Everything you need to stay on top of your disputes
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Also included
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

      {/* How Letter Tracker Fits In */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Part of the Complete Dispute Toolkit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Letter Tracker connects every step of the dispute process into one
          seamless workflow.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-0">
          {FLOW_STEPS.map((label, i) => (
            <div key={label} className="flex items-center">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:px-4 sm:text-sm">
                {label}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <svg
                  className="mx-1 h-4 w-4 shrink-0 text-teal-500 sm:mx-2"
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
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Never wonder if they got it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Track delivery, watch deadlines, log responses. Your complete
            dispute command center.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Unlimited — $10/mo
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Or{" "}
            <Link
              href="/disputes"
              className="underline hover:text-white"
            >
              generate a single letter for $2
            </Link>
          </p>
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
            name: "Letter Tracker Dashboard",
            description:
              "Track every letter you send. Real-time USPS delivery tracking, response deadline countdowns, automated reminders, and response logging. Included with Unlimited plan.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "10.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/letter-tracker",
              description: "Monthly subscription — Unlimited plan",
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
