import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Final Notice — Intent to Sue Letter | AI Dispute Engine",
  description:
    "Generate a professional intent-to-sue letter. Last warning before small claims court with specific filing deadlines and statutory penalties. $3 per letter.",
  openGraph: {
    title: "Final Notice — Intent to Sue Letter | AI Dispute Engine",
    description:
      "Generate a professional intent-to-sue letter. Last warning before small claims court with specific filing deadlines and statutory penalties. $3 per letter.",
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
    title: "Review your dispute history",
    description:
      "Provide details about your original demand, follow-up attempts, and the response (or lack of response) you received.",
  },
  {
    step: "2",
    title: "AI drafts your intent-to-sue letter",
    description:
      "Our AI generates a formal final notice with court-specific language, filing deadlines, and the penalties they face if you proceed.",
  },
  {
    step: "3",
    title: "State-specific legal language",
    description:
      "Your letter includes references to your state's small claims court procedures, filing fees you'll seek to recover, and applicable statutory damages.",
  },
  {
    step: "4",
    title: "Download and send via certified mail",
    description:
      "Get your final notice in PDF and DOCX. Send via certified mail so you have proof of delivery for the court.",
  },
];

const DEMAND_LETTER_FEATURES = [
  "Requests payment or resolution",
  "Sets initial deadline",
  "Cites relevant statutes",
  "Professional tone",
];

const FINAL_NOTICE_FEATURES = [
  "Explicitly states intent to file in court",
  "Includes specific court filing date",
  "Lists court costs you'll seek to recover",
  "References statutory damages and penalties",
  "Mentions judge/court outcomes",
  "Strongest possible pre-litigation tone",
];

const INCLUDED = [
  "Intent-to-sue letter with court filing deadline",
  "State-specific small claims court references",
  "Filing fees and court costs you'll seek to recover",
  "Statutory damages and penalties they face",
  "Reference to all prior correspondence",
  "Professional formatting with PDF & DOCX download",
];

const LEGAL_WEIGHT = [
  {
    title: "Courts favor fair warning",
    description:
      "Judges look favorably on plaintiffs who gave the other party every opportunity to resolve the dispute. Your final notice is proof of good faith.",
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
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
  },
  {
    title: "Creates urgency",
    description:
      "A specific court filing date creates real urgency. Most defendants would rather settle than deal with a court date, lost work time, and potential penalties.",
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
    title: "Establishes the record",
    description:
      "If you do file in court, your final notice becomes part of the evidence. It shows the court exactly what you demanded and when.",
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

const FAQ = [
  {
    q: "Is this the same as hiring a lawyer to send a letter?",
    a: "No, but it serves a similar purpose. Attorney letters carry the weight of legal representation, but a well-crafted intent-to-sue letter shows you're serious about court and often gets the same result — especially for disputes under $10,000.",
  },
  {
    q: "What happens after I send the final notice?",
    a: "Wait 7-10 days for a response. If they respond with a reasonable offer, negotiate. If they ignore it, follow through and file in small claims court. We offer a Court Filing Kit ($50) to help with that step.",
  },
  {
    q: "Will this scare them into paying?",
    a: "Many disputes settle at this stage because the recipient realizes you're serious. The specific court filing date and mention of costs they'll owe creates real urgency to resolve the matter.",
  },
  {
    q: "What if the amount is too large for small claims?",
    a: "Small claims limits vary by state ($2,500 to $25,000). If your dispute exceeds the limit, you may want to consider our Attorney Review service ($65) or consult with a local attorney.",
  },
  {
    q: "Can I file in court without sending a final notice first?",
    a: "Yes, most states don't require it. But sending one strengthens your case and often resolves the dispute without the time and cost of court.",
  },
];

export default function FinalNoticePage() {
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
          <span className="text-slate-900 dark:text-white">Final Notice</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 per final notice
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Last Chance Before Court. Make It Count.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your final notice is the last step before filing in small claims
            court. This intent-to-sue letter puts them on legal notice with
            specific deadlines and consequences.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Final Notice — $3
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Comparison: Demand Letter vs Final Notice */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What makes it different from a demand letter
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          A final notice is the last step before litigation. It carries
          significantly more weight.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-500 dark:text-slate-400">
              Demand Letter ($2)
            </h3>
            <ul className="mt-4 space-y-3">
              {DEMAND_LETTER_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  {CHECK} {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-teal-500/50 bg-white p-6 dark:bg-slate-900">
            <h3 className="font-semibold text-teal-600 dark:text-teal-400">
              Final Notice ($3)
            </h3>
            <ul className="mt-4 space-y-3">
              {FINAL_NOTICE_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  {CHECK} {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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

      {/* Legal Weight */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Why final notices work
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {LEGAL_WEIGHT.map((item) => (
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

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Make your last warning count.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            If they don&apos;t respond to this, the next step is the courthouse.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Final Notice — $3
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Ready to file?{" "}
            <Link
              href="/tools/court-filing"
              className="underline hover:text-white"
            >
              Check out our Court Filing Kit
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
            name: "Final Notice — Intent to Sue Letter",
            description:
              "Generate a professional intent-to-sue letter with court-specific language, filing deadlines, and statutory penalties. The last step before small claims court.",
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
              url: "https://aidisputeengine.com/tools/final-notice",
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
