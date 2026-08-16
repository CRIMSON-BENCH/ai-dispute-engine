import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Data Breach Demand Letter Generator | AI Dispute Engine",
  description:
    "Generate a demand letter for credit monitoring and compensation after a data breach. Cites your state's breach notification laws. AI-powered, ready in 60 seconds. $3.",
  openGraph: {
    title:
      "Data Breach Demand Letter Generator | AI Dispute Engine",
    description:
      "Generate a demand letter for credit monitoring and compensation after a data breach. Cites your state's breach notification laws. AI-powered, ready in 60 seconds. $3.",
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
    title: "Enter the breach details",
    description:
      "Tell us which company was breached, what data was exposed (SSN, financial, medical, login credentials), when you were notified, and your state of residence.",
  },
  {
    step: "2",
    title: "AI drafts your demand with state law citations",
    description:
      "Our AI generates a formal demand letter citing your state's data breach notification statute, the company's obligations, and your right to credit monitoring and compensation.",
  },
  {
    step: "3",
    title: "Download and send",
    description:
      "Download your letter as PDF or DOCX and send it to the company's legal or privacy department via certified mail. Keep your copy as evidence.",
  },
];

const INCLUDED = [
  "State-specific breach notification law citations tailored to your jurisdiction",
  "Demand for 24-month credit monitoring and identity theft protection at the company's expense",
  "Compensation demand for time spent freezing accounts, changing passwords, and monitoring credit",
  "Reference to FTC guidelines and any applicable federal data protection regulations",
  "Timeline with a firm response deadline and consequences for non-compliance",
  "Professional formatting ready to send via certified mail with return receipt",
];

const FAQ = [
  {
    q: "What compensation can I demand after a data breach?",
    a: "You can demand reimbursement for out-of-pocket costs like credit monitoring services you purchased, time spent dealing with the breach (at a reasonable hourly rate), costs to freeze and unfreeze credit, and any fraudulent charges. Many states also allow statutory damages ranging from $100 to $1,000 per violation. The letter our AI generates itemizes these demands based on your specific situation.",
  },
  {
    q: "Do companies actually respond to individual demand letters?",
    a: "Yes. Companies facing data breaches are highly motivated to settle individual claims quietly rather than risk class action exposure. A well-crafted demand letter citing the correct state statute signals you understand your rights and are prepared to escalate. Many companies offer enhanced settlement packages to individuals who formally demand compensation beyond the standard breach response.",
  },
  {
    q: "How long after a breach can I still send a demand letter?",
    a: "Statutes of limitation vary by state, but most allow between two and four years from the date you discovered or should have discovered the breach. However, sending your demand quickly is always better -- it demonstrates urgency and makes it harder for the company to argue the breach caused you no harm. We recommend sending within 60 days of learning about the breach.",
  },
  {
    q: "What if the breached company already offered free credit monitoring?",
    a: "A basic credit monitoring offer does not release the company from further liability. You can still demand additional compensation for your time, enhanced monitoring (24 months instead of 12), identity theft insurance, and reimbursement for any costs you incurred. The company's initial offer is a starting point, not a final settlement -- your demand letter makes clear that you expect more.",
  },
];

export default function DataBreachDemandPage() {
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
            Data Breach Demand Letter
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Data Was Stolen. Make Them Pay for It.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            When a company loses your personal data, they owe you more than a
            sorry-we-got-hacked email. Our AI generates a formal demand letter
            citing your state&apos;s breach notification laws, demanding credit
            monitoring and real compensation.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Data Breach Demand &mdash; $3
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
            They lost your data. Don&apos;t lose your leverage.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Every day you wait is a day the company assumes you&apos;ll accept
            their bare-minimum response. A formal demand letter with state law
            citations changes the conversation entirely.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Data Breach Demand &mdash; $3
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
            name: "Data Breach Demand Letter Generator",
            description:
              "Generate a demand letter for credit monitoring and compensation after a data breach, citing your state's breach notification laws.",
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
              url: "https://aidisputeengine.com/tools/data-breach-demand",
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
