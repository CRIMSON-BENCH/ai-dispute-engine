import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence Toolkit — Build Your Case Like a Lawyer",
  description:
    "Organize your evidence, build a timeline, and calculate your damages. $3 add-on that works with any dispute letter. Win your fight with organized proof.",
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const FEATURES = [
  {
    title: "Timeline Builder",
    desc: "Create a chronological record of events, communications, and deadlines. Judges and mediators love timelines — they show you're organized and credible.",
    details: [
      "Date-stamped entries for every event",
      "Attach screenshots, emails, and receipts",
      "Auto-formatted for court submission",
      "Export as PDF for your records",
    ],
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Expense Tracker",
    desc: "Itemize every dollar you've lost. Medical bills, lost wages, repair costs, replacement costs, late fees — organized by category with running totals.",
    details: [
      "Categorize damages by type",
      "Calculate totals automatically",
      "Include supporting documentation",
      "Generate a damages summary sheet",
    ],
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Document Checklist",
    desc: "A state-specific list of exactly what evidence you need for your dispute type. No guessing, no missing documents, no surprises at the hearing.",
    details: [
      "Customized to your state and dispute type",
      "Check off items as you gather them",
      "Tells you what's required vs. helpful",
      "Includes tips on how to obtain each item",
    ],
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "Do I need the Evidence Toolkit to send a demand letter?",
    a: "No. The Evidence Toolkit is an optional add-on for people who want to build a stronger case. Your demand letter works on its own — but organized evidence makes it harder for the other side to dismiss you.",
  },
  {
    q: "Can I use this if I'm going to small claims court?",
    a: "Absolutely — in fact, that's when it's most valuable. Judges in small claims court make decisions fast. Showing up with a clear timeline, itemized damages, and organized evidence gives you a major advantage over the other side.",
  },
  {
    q: "What types of evidence should I be collecting?",
    a: "Emails, text messages, photos, receipts, contracts, invoices, bank statements, medical records, repair estimates — anything that proves what happened and what it cost you. Our Document Checklist tells you exactly what you need for your specific dispute.",
  },
  {
    q: "Does the toolkit work with disputes I started outside AI Dispute Engine?",
    a: "Yes. You can use the Evidence Toolkit as a standalone tool for any dispute, regardless of where your demand letter came from. Just tell us your dispute type and state, and we'll customize everything for you.",
  },
];

export default function EvidenceToolkitPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Evidence Toolkit</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 add-on
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Build Your Case. Win Your Fight.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Organize your evidence, build a timeline, and calculate your
            damages — all in one place.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Evidence Toolkit — $3
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {f.details.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    {CHECK} {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Evidence Matters */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Why evidence wins cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            The difference between winning and losing often comes down to
            preparation, not who&apos;s right.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "94%",
                label: "of small claims cases with organized evidence result in favorable outcomes for the plaintiff",
              },
              {
                stat: "3x",
                label: "more likely to receive full damages when you present an itemized expense breakdown",
              },
              {
                stat: "70%",
                label: "of disputes settle before court when the other side sees organized, documented evidence",
              },
              {
                stat: "15 min",
                label: "is the average small claims hearing. Judges decide fast — organized evidence is your best argument",
              },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Fits */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Works with any dispute letter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            The Evidence Toolkit is a $3 add-on that pairs with any AI Dispute
            Engine product.
          </p>
          <div className="mt-10 space-y-4">
            {[
              {
                product: "Demand Letter ($2)",
                how: "Attach your evidence package when you send the letter. Companies take demands more seriously when they see organized proof.",
              },
              {
                product: "Escalation Letter Pack ($5)",
                how: "Include your timeline and damages summary with your FTC, CFPB, or AG complaint. Regulators prioritize well-documented complaints.",
              },
              {
                product: "Small Claims Court Kit ($15)",
                how: "Bring your complete evidence binder to court. The timeline, expense tracker, and document checklist become your exhibits.",
              },
            ].map((item) => (
              <div
                key={item.product}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="font-semibold">
                  + {item.product}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.how}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The strongest case wins. Build yours.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            For $3, get the same evidence organization tools that lawyers charge
            hundreds to prepare.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Evidence Toolkit — $3
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Add-on works with any dispute.{" "}
            <Link href="/pricing" className="underline hover:text-white">
              See all pricing
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
            name: "Evidence Toolkit",
            description:
              "Timeline builder, expense tracker, and document checklist to organize your dispute evidence like a lawyer.",
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
          }),
        }}
      />
    </div>
  );
}
