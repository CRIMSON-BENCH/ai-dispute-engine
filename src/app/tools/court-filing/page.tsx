import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Court Filing Kit — Small Claims Court Forms & Filing Guide | AI Dispute Engine",
  description:
    "Pre-filled small claims court forms for all 50 states, filing instructions, evidence organization, and complaint templates. $50 — half what competitors charge.",
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

const STEPS = [
  {
    num: "1",
    title: "Review your case",
    desc: "We analyze your dispute details, evidence, and prior correspondence to build the strongest possible court case.",
  },
  {
    num: "2",
    title: "We generate your court forms",
    desc: "Get pre-filled small claims court forms specific to your state and county, with your case details already entered.",
  },
  {
    num: "3",
    title: "Organize your evidence",
    desc: "We help you organize your evidence — letters sent, responses received, photos, receipts — into a court-ready evidence packet.",
  },
  {
    num: "4",
    title: "File at the courthouse",
    desc: "Follow our step-by-step guide to file at your local courthouse. We tell you exactly where to go, what to bring, and what to expect.",
  },
];

const WHATS_INCLUDED = [
  "State-specific small claims court complaint form (pre-filled with your case details)",
  "Filing instructions for your specific courthouse",
  "Evidence organization template and checklist",
  "Complaint narrative template (your story in legal language)",
  "Service of process guide (how to properly notify the defendant)",
  "Court day preparation guide (what to bring, what to say)",
  "All forms in editable PDF and DOCX format",
];

const STATE_LIMITS = [
  { state: "California", limit: "Up to $10,000", note: "$5,000 for businesses" },
  { state: "Texas", limit: "Up to $20,000", note: null },
  { state: "New York", limit: "Up to $10,000", note: null },
  { state: "Florida", limit: "Up to $8,000", note: null },
  { state: "Illinois", limit: "Up to $10,000", note: null },
];

const SMALL_CLAIMS_FEATURES = [
  "General educational guide",
  "Overview of court procedures",
  "Template forms (blank)",
  "FAQ and tips",
  "Good for learning about the process",
];

const COURT_FILING_FEATURES = [
  "Pre-filled forms with YOUR case details",
  "Your specific courthouse instructions",
  "Evidence organization for YOUR dispute",
  "Complaint narrative written about YOUR case",
  "Ready to file immediately",
];

const FAQ = [
  {
    q: "What are the filing fees for small claims court?",
    a: "Filing fees vary by state and claim amount, typically $30-$100. Our kit tells you the exact fee for your courthouse. These fees are recoverable — if you win, the judge can order the defendant to reimburse them.",
  },
  {
    q: "Do I need a lawyer for small claims court?",
    a: "No, and in many states lawyers aren't even allowed in small claims court. The entire system is designed for regular people to represent themselves. Our kit gives you everything you need to file and present your case.",
  },
  {
    q: "What if the defendant is in a different state?",
    a: "You generally file in the county where the defendant lives or where the dispute occurred. Our kit helps you determine the correct jurisdiction and provides forms for that specific court.",
  },
  {
    q: "How long does the court process take?",
    a: "From filing to hearing, most small claims cases take 30-60 days. The hearing itself is usually 15-30 minutes. Our preparation guide ensures you make the most of that time.",
  },
  {
    q: "What's the difference between this and the Small Claims Kit ($15)?",
    a: "The Small Claims Kit is a general educational guide with blank templates. The Court Filing Kit ($50) is customized to YOUR specific case — pre-filled forms, evidence organized around YOUR dispute, and a complaint narrative telling YOUR story in legal language.",
  },
];

export default function CourtFilingKitPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Court Filing Kit</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $50 — Save 50% vs. PettyLawsuit
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Take Them to Court. Without a Lawyer.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Pre-filled small claims court forms for your state, step-by-step
            filing instructions, evidence organization, and a complaint
            template — everything you need to file your case.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Court Filing Kit — $50
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
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            From case review to courthouse — we prepare everything for you.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {step.num}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          What&apos;s included
        </h2>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <ul className="space-y-4">
              {WHATS_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {CHECK}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <Link
                href="/disputes"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
              >
                Get the Court Filing Kit — $50
                {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* State Coverage */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            All 50 States. Your Specific Court.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            Small claims court procedures vary by state. We generate the correct
            forms and instructions for your jurisdiction.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STATE_LIMITS.map((s) => (
              <div
                key={s.state}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {s.state}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                  {s.limit}
                </p>
                {s.note && (
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 p-5 dark:border-slate-600">
              <Link
                href="/disputes"
                className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
              >
                And 45 more states &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Court Filing Kit vs Small Claims Kit */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Court Filing Kit vs. Small Claims Kit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          What&apos;s the difference?
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {/* Small Claims Kit */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Small Claims Kit</h3>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                $15
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {SMALL_CLAIMS_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/tools/small-claims-kit"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          {/* Court Filing Kit */}
          <div className="relative rounded-2xl border-2 border-teal-600 bg-white p-6 dark:bg-slate-900">
            <span className="absolute -top-3 left-6 rounded-full bg-teal-600 px-3 py-1 text-xs font-bold text-white">
              Most Popular
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Court Filing Kit</h3>
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                $50
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {COURT_FILING_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  {CHECK}
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/disputes"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Get started
                {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            We Save You Hundreds
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {/* PettyLawsuit */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                PettyLawsuit
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-400 line-through">
                $99
              </p>
              <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge
              </p>
              <p className="text-4xl font-bold text-slate-900 dark:text-white">
                $50
              </p>
            </div>
            {/* Attorney */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Attorney filing assistance
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-400 line-through">
                $500+
              </p>
              <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge
              </p>
              <p className="text-4xl font-bold text-slate-900 dark:text-white">
                $50
              </p>
            </div>
            {/* DIY */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                DIY with no help
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-400">
                $0
              </p>
              <div className="mx-auto my-4 h-px w-12 bg-slate-200 dark:bg-slate-700" />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                But hours of frustration and potential mistakes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your case is ready. The courthouse is waiting.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Pre-filled forms, organized evidence, step-by-step instructions.
            Walk into the courthouse prepared and confident.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Court Filing Kit — $50
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Not ready for court?{" "}
            <Link href="/disputes" className="underline hover:text-white">
              Start with a demand letter for $2
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
            name: "Court Filing Kit",
            description:
              "Pre-filled small claims court forms for all 50 states, filing instructions, evidence organization, and complaint templates.",
            offers: {
              "@type": "Offer",
              price: "50.00",
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

      {/* Disclaimer */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. The documents generated by this service are for informational purposes only and do not constitute legal advice. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
