import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Subscription Cancellation Demand Letter | AI Dispute Engine",
  description:
    "Generate a formal cancellation and refund demand letter citing FTC click-to-cancel rules. Stop companies from ignoring your cancellation requests. AI-powered. $2.",
  openGraph: {
    title:
      "Subscription Cancellation Demand Letter | AI Dispute Engine",
    description:
      "Generate a formal cancellation and refund demand letter citing FTC click-to-cancel rules. Stop companies from ignoring your cancellation requests. AI-powered. $2.",
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
    title: "Enter your subscription details",
    description:
      "Tell us the company name, what you're subscribed to, how much you're being charged, when you tried to cancel, and what happened when you did.",
  },
  {
    step: "2",
    title: "AI drafts your cancellation demand",
    description:
      "Our AI generates a formal letter citing FTC click-to-cancel regulations, the Restore Online Shoppers' Confidence Act, and applicable state consumer protection laws demanding immediate cancellation and refund.",
  },
  {
    step: "3",
    title: "Download and send",
    description:
      "Download your letter as PDF or DOCX and send it to the company's billing department and registered agent. File a copy with the FTC if they don't comply.",
  },
];

const INCLUDED = [
  "FTC click-to-cancel rule citations and Restore Online Shoppers' Confidence Act references",
  "Demand for immediate cancellation effective on the date of your letter",
  "Refund calculation for charges made after your initial cancellation attempt",
  "State-specific consumer protection law citations for your jurisdiction",
  "CC line for your state Attorney General's consumer protection division",
  "Professional formatting with certified mail instructions and FTC complaint filing guidance",
];

const FAQ = [
  {
    q: "What is the FTC click-to-cancel rule?",
    a: "The FTC's click-to-cancel rule requires companies to make cancellation as easy as sign-up. If you subscribed online with one click, the company must let you cancel online with the same ease. They cannot force you to call a phone number, sit through a retention pitch, navigate a maze of hidden settings, or wait on hold. If a company violates this rule, they face FTC enforcement action and you have grounds to demand a full refund of charges incurred after your cancellation attempt.",
  },
  {
    q: "Can I get a refund for months I was charged after trying to cancel?",
    a: "Yes. If you attempted to cancel and the company made it unreasonably difficult, continued charging you, or simply ignored your request, you are entitled to a refund for every charge after your cancellation attempt. Our demand letter itemizes these charges and cites the specific regulations the company violated by continuing to bill you.",
  },
  {
    q: "What if the company says I never canceled?",
    a: "This is exactly why a formal demand letter matters. Your letter creates a dated, documented record of your cancellation demand sent via certified mail. Include any evidence of prior attempts -- screenshots of cancellation pages, chat transcripts, email confirmations, or phone call dates. The company's failure to provide an easy cancellation method is itself a violation regardless of whether they recorded your previous attempts.",
  },
  {
    q: "Should I dispute the charges with my credit card company too?",
    a: "A demand letter and a credit card chargeback serve different purposes and you can do both. The demand letter puts the company on formal notice and demands they stop billing you going forward. A chargeback recovers money already taken. We recommend sending the demand letter first, giving the company 14 days to respond, and then initiating a chargeback for any charges they refuse to refund. The demand letter becomes supporting evidence for your chargeback claim.",
  },
];

export default function SubscriptionCancellationPage() {
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
            Subscription Cancellation Demand
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            They Won&apos;t Let You Cancel? Now They Have To.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Dark patterns, hidden cancel buttons, endless retention calls --
            companies make it deliberately hard to leave. Our AI generates a
            formal demand letter citing FTC rules that say canceling must be as
            easy as signing up.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Cancellation Demand &mdash; $2
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

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop paying for something you don&apos;t want.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The FTC says canceling must be as easy as signing up. When a company
            ignores that rule, a formal demand letter with regulatory citations
            gets their attention fast.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Cancellation Demand &mdash; $2
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
            name: "Subscription Cancellation Demand Letter",
            description:
              "Generate a formal cancellation and refund demand letter citing FTC click-to-cancel rules and consumer protection laws.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/subscription-cancellation",
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
