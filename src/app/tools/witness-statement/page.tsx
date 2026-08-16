import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Witness Statement Template — Turn Witness Accounts Into Legal Evidence",
  description:
    "Generate a structured witness declaration with proper legal formatting, oath language, and state-specific requirements. AI-powered witness statement generator. $5.",
  openGraph: {
    title:
      "Witness Statement Template — Turn Witness Accounts Into Legal Evidence",
    description:
      "Generate a structured witness declaration with proper legal formatting, oath language, and state-specific requirements. AI-powered witness statement generator. $5.",
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
    title: "Enter witness details and what they observed",
    description:
      "Provide the witness&apos;s name, their relationship to the events, and a description of what they saw, heard, or experienced firsthand.",
  },
  {
    step: "2",
    title: "AI formats a proper legal declaration",
    description:
      "Our AI organizes the account into numbered factual paragraphs with proper legal formatting, oath language, and state-specific requirements.",
  },
  {
    step: "3",
    title: "Print, have witness sign, and file",
    description:
      "Download the completed declaration, have your witness read and sign it, and submit it as evidence in your case. Notary option included if required.",
  },
];

const INCLUDED = [
  "Proper legal declaration format accepted by courts",
  "Numbered factual paragraphs organized chronologically",
  "Oath and verification language (\"I declare under penalty of perjury\")",
  "State-specific formatting and legal requirements",
  "Witness identification section with relationship to events",
  "Signature and date blocks in proper legal format",
  "Notary acknowledgment option for states that require it",
];

const FAQ = [
  {
    q: "What is a witness statement?",
    a: "A witness statement (also called a witness declaration or affidavit) is a written account of what someone personally observed. It&apos;s used as evidence in court proceedings, insurance claims, and legal disputes. When signed under oath, it carries the same weight as live testimony.",
  },
  {
    q: "Does my witness need a lawyer to write a statement?",
    a: "No. A witness does not need a lawyer to provide a statement. However, the statement must be properly formatted with legal language to be accepted by courts. That&apos;s exactly what this tool does — it takes your witness&apos;s account and formats it into a proper legal declaration.",
  },
  {
    q: "Can I submit this in small claims court?",
    a: "Yes. Small claims courts accept written witness declarations, especially when the witness cannot appear in person. Some courts prefer or require that declarations be notarized — our template includes a notary acknowledgment section for those jurisdictions.",
  },
  {
    q: "What makes a good witness statement?",
    a: "A strong witness statement is specific, factual, and firsthand. It should describe what the witness personally saw or heard — not opinions, assumptions, or things they heard from others. Our AI helps structure the account to focus on the facts that matter most to your case.",
  },
];

export default function WitnessStatementPage() {
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
            Witness Statement Template
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per witness statement
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Turn Witness Accounts Into Legal Evidence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A witness saw what happened. Now make it count. Our AI takes their
            account and formats it into a proper legal declaration with oath
            language, numbered paragraphs, and state-specific requirements —
            ready to file as evidence.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Witness Statement — $5
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
            Your witness was there. Make their account official.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Courts need evidence in the right format. A properly formatted
            witness declaration with oath language turns a verbal account into
            admissible evidence that can win your case.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Witness Statement — $5
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
            name: "Witness Statement Template",
            description:
              "Structured witness declaration template with proper legal formatting, oath language, and state-specific requirements.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/witness-statement",
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
