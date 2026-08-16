import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Dispute Tracker Extension — Auto-Log Responses, Deadlines & Timelines",
  description:
    "Chrome extension that monitors your email for dispute responses, auto-logs timelines, tracks deadlines, and exports court-ready PDF evidence. $3/mo.",
  openGraph: {
    title:
      "Dispute Tracker Extension — Auto-Log Responses, Deadlines & Timelines",
    description:
      "Chrome extension that monitors your email for dispute responses, auto-logs timelines, tracks deadlines, and exports court-ready PDF evidence. $3/mo.",
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
    title: "Install the extension in one click",
    description:
      "Add the Dispute Tracker to Chrome in seconds. No complicated setup, no desktop software to download. It runs quietly in the background and starts working the moment you connect your email.",
  },
  {
    step: "2",
    title: "Connect your email account",
    description:
      "Link your Gmail, Outlook, or Yahoo Mail account. The extension scans incoming messages for dispute-related correspondence — responses from companies, collection agencies, credit bureaus, insurers, and government agencies.",
  },
  {
    step: "3",
    title: "Get an auto-tracked timeline with deadline alerts",
    description:
      "Every response, every date, every deadline is logged automatically. You&apos;ll get alerts before critical deadlines expire, and you can export your entire dispute timeline as a court-ready PDF at any time.",
  },
];

const INCLUDED = [
  "Automatic email monitoring that detects dispute responses as they arrive",
  "Timeline auto-logging with dates, sender details, and response summaries",
  "Deadline alerts and countdown notifications so you never miss a filing window",
  "One-click status updates to keep every dispute organized at a glance",
  "Export your full timeline as a formatted PDF ready for court or arbitration",
  "Multi-dispute tracking dashboard to manage several cases simultaneously",
  "Company response time analytics showing how long each party takes to reply",
  "Works with Gmail, Outlook, and Yahoo Mail — no switching providers required",
];

const FAQ = [
  {
    q: "What email providers does the extension support?",
    a: "The extension works with Gmail, Outlook (including Hotmail and Live), and Yahoo Mail. It connects securely through each provider&apos;s official API — your password is never stored or shared. You can connect multiple email accounts if you&apos;re managing disputes across different inboxes.",
  },
  {
    q: "How does the extension know which emails are dispute-related?",
    a: "The extension uses pattern matching to identify correspondence from known companies, collection agencies, credit bureaus, insurance providers, government agencies, and courts. It recognizes common dispute language — case numbers, reference IDs, account numbers, legal terminology, and deadline language. You can also manually tag any email to add it to your timeline.",
  },
  {
    q: "Can I use the exported PDF as evidence in court?",
    a: "Yes. The PDF export is designed to be court-ready. It includes a chronological timeline with dates, sender information, response content summaries, and your own notes. Judges and arbitrators regularly accept printed email timelines as evidence. The export also shows response time gaps, which can demonstrate a company&apos;s pattern of delay or non-responsiveness.",
  },
  {
    q: "Can I cancel the subscription at any time?",
    a: "Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. Your timeline data stays accessible for 30 days after cancellation so you can export everything you need. At $3 per month, most users find the extension pays for itself the first time it catches a deadline they would have missed.",
  },
];

export default function DisputeTrackerExtensionPage() {
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
            Dispute Tracker Extension
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3/mo subscription
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Every Response Logged. Every Deadline Tracked. Automatically.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Disputes drag on for weeks or months. Companies count on you losing
            track of deadlines, forgetting who said what, and missing your
            window to respond. This Chrome extension watches your email, builds
            your timeline, and alerts you before deadlines slip — so the only
            thing that expires is their excuses.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Extension — $3/mo
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
            Companies bet on you missing deadlines. Make that bet backfire.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A missed 30-day response window can kill an otherwise winning
            dispute. The Dispute Tracker watches your inbox around the clock,
            logs every interaction automatically, and makes sure you never lose
            a case to a calendar mistake.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Extension — $3/mo
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
            name: "Dispute Tracker Extension",
            description:
              "Chrome extension that monitors email for dispute responses, auto-logs timelines, tracks deadlines, and exports court-ready PDF evidence.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/dispute-tracker-extension",
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
