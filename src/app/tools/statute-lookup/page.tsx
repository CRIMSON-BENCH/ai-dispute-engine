import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Statute Lookup — Filing Deadlines & Statutes of Limitations by State",
  description:
    "Instantly find the statute of limitations and filing deadlines for your dispute type and state. AI-powered legal deadline report. $1.",
  openGraph: {
    title:
      "Statute Lookup — Filing Deadlines & Statutes of Limitations by State",
    description:
      "Instantly find the statute of limitations and filing deadlines for your dispute type and state. AI-powered legal deadline report. $1.",
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
    title: "Select your dispute type and state",
    description:
      "Choose from common dispute categories — breach of contract, property damage, personal injury, debt collection, employment, and more — then select the state where the dispute occurred.",
  },
  {
    step: "2",
    title: "AI pulls statutes and deadlines",
    description:
      "Our AI searches current state statutes to find the exact filing deadline for your dispute type, including any tolling exceptions, discovery rules, or special conditions that could extend or shorten your window.",
  },
  {
    step: "3",
    title: "Download your deadline report",
    description:
      "Get a clear, one-page report showing your filing deadline, the specific statute citation, and a plain-English explanation of what happens if you miss it. Keep it for your records or share it with your attorney.",
  },
];

const INCLUDED = [
  "Statute of limitations for your specific dispute type and state",
  "Exact statutory citation so you can verify it yourself",
  "Plain-English explanation of the deadline and what it means",
  "Tolling exceptions that may pause or extend your deadline",
  "Discovery rule analysis — does the clock start when you knew or should have known?",
  "Small claims court filing limits for your state",
  "Key procedural deadlines beyond the statute of limitations",
  "Recommended next steps based on how much time you have left",
];

const FAQ = [
  {
    q: "What is a statute of limitations?",
    a: "A statute of limitations is the legal deadline for filing a lawsuit. Every state sets its own deadlines, and they vary by dispute type. Miss the deadline and your case is permanently barred — no matter how strong your evidence is. That&apos;s why knowing your deadline is the first step in any dispute.",
  },
  {
    q: "Why do deadlines vary by state and dispute type?",
    a: "Each state legislature sets its own statutes of limitations. A breach of contract claim might give you 6 years in New York but only 4 years in Texas. Personal injury claims typically have shorter windows — often 2 to 3 years. The clock usually starts when the dispute occurred, but discovery rules can change that.",
  },
  {
    q: "Is this the same information a lawyer would give me?",
    a: "We pull from the same state statutes that attorneys reference. The difference is speed and cost — a lawyer might charge $200+ for a consultation just to look up this information. Our AI delivers the same statutory citations and deadlines in under a minute for $1.",
  },
  {
    q: "What if my deadline has already passed?",
    a: "Your report will tell you. But don&apos;t assume your case is dead — tolling exceptions, the discovery rule, and other legal doctrines can extend deadlines in certain circumstances. The report flags these possibilities so you know whether it&apos;s worth consulting an attorney about your options.",
  },
];

export default function StatuteLookupPage() {
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
            Statute Lookup
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $1 per report
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know Your Filing Deadline Before It&apos;s Too Late
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Every dispute has a legal deadline. Miss it and your case is gone
            forever — no matter how strong your claim is. Get an instant report
            showing the exact statute of limitations for your dispute type and
            state, with the statutory citation and plain-English explanation.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Look Up My Deadline — $1
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
            The clock is ticking on your case. Find out how much time you have.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Most people don&apos;t learn about their filing deadline until
            it&apos;s too late. For $1, you get the exact statute of limitations
            for your dispute — with the legal citation to back it up. Know where
            you stand before the window closes.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Look Up My Deadline — $1
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
            name: "Statute Lookup",
            description:
              "Instant report showing the statute of limitations and filing deadlines for your dispute type and state, with statutory citations and plain-English explanations.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "1.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/statute-lookup",
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
