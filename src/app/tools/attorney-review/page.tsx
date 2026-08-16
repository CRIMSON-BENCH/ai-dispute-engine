import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Attorney Review Service — Licensed Attorney Reviews Your Letter | AI Dispute Engine",
  description:
    "Get a licensed attorney to review your AI-generated demand letter, add professional letterhead, and verify legal accuracy. 24-48 hour turnaround. $65.",
  openGraph: {
    title:
      "Attorney Review Service — Licensed Attorney Reviews Your Letter | AI Dispute Engine",
    description:
      "Get a licensed attorney to review your AI-generated demand letter, add professional letterhead, and verify legal accuracy. 24-48 hour turnaround. $65.",
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
    title: "Generate your letter",
    description:
      "Start with our AI-generated demand letter ($2) or any letter in the Full Fight Bundle. Our AI handles the first draft with legal citations and proper formatting.",
  },
  {
    step: "2",
    title: "Add Attorney Review",
    description:
      "Select Attorney Review for your letter. We match you with a licensed attorney in your state who specializes in your type of dispute.",
  },
  {
    step: "3",
    title: "Attorney reviews and enhances",
    description:
      "Your attorney reviews every claim, verifies statute citations, suggests stronger arguments, and adds their professional letterhead.",
  },
  {
    step: "4",
    title: "Download your reviewed letter",
    description:
      "Within 24-48 hours, receive your attorney-reviewed letter on professional letterhead, ready to send. It hits different.",
  },
];

const WHEN_TO_USE = [
  {
    title: "Disputes over $5,000",
    description:
      "When the stakes are high, an attorney-reviewed letter carries significantly more weight. The cost of review pays for itself many times over.",
  },
  {
    title: "Before filing in court",
    description:
      "If your demand letter doesn't resolve the dispute and you're heading to court, an attorney-reviewed letter strengthens your case record.",
  },
  {
    title: "Dealing with a company's legal team",
    description:
      "When the other side has lawyers, your letter should show you have professional backing too.",
  },
  {
    title: "Landlord/tenant complications",
    description:
      "Lease disputes with complex terms, habitability issues, or security deposit cases benefit from an attorney's expertise.",
  },
];

const WHAT_YOU_GET = [
  "Licensed attorney reviews your letter for legal accuracy",
  "Professional letterhead with attorney's credentials",
  "Verification of all statute citations",
  "Suggested improvements to strengthen your case",
  "Attorney's professional opinion on your claim strength",
  "24-48 hour turnaround time",
];

const TRUST_SIGNALS = [
  {
    title: "Professional letterhead",
    description:
      "Letters on attorney letterhead get taken more seriously. It signals that you have legal backing and are prepared to escalate.",
  },
  {
    title: "Verified citations",
    description:
      "Our AI cites the right statutes, but an attorney confirms they apply to your specific situation and strengthens the argument.",
  },
  {
    title: "Licensed in your state",
    description:
      "Every review is done by an attorney licensed in your state who understands local laws and court procedures.",
  },
];

const FAQ = [
  {
    q: "Do I need to buy a demand letter first?",
    a: "Yes. Attorney Review is an add-on service. Start with our AI-generated demand letter ($2), or any letter product, and add Attorney Review. The attorney reviews and enhances the AI-generated letter.",
  },
  {
    q: "How long does the review take?",
    a: "Most reviews are completed within 24-48 hours. Complex cases or reviews submitted on weekends may take up to 72 hours. You'll receive an email notification when your reviewed letter is ready.",
  },
  {
    q: "Who are the attorneys?",
    a: "We work with a network of licensed attorneys across all 50 states. Each attorney is matched based on your state and dispute type. All attorneys are in good standing with their state bar association.",
  },
  {
    q: "Is this the same as hiring a lawyer?",
    a: "No. Attorney Review is a limited-scope service — the attorney reviews your letter for accuracy and strength, but does not represent you in court or provide ongoing legal counsel. For complex litigation, we recommend consulting with a local attorney.",
  },
  {
    q: "What if the attorney suggests major changes?",
    a: "If the attorney believes your letter needs significant changes, they'll make the edits and explain why. You'll receive the improved version along with notes about what was changed and why.",
  },
];

export default function AttorneyReviewPage() {
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
            Attorney Review
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $65 — Attorney-reviewed letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get a Real Attorney&apos;s Eyes on Your Letter.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our AI generates a great letter. A licensed attorney makes it
            bulletproof. Get professional letterhead, verified citations, and the
            confidence that comes from legal review.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Attorney Review — $65
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

      {/* When to Use Attorney Review */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          When to use Attorney Review
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHEN_TO_USE.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What you get
          </h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {WHAT_YOU_GET.map((item) => (
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

      {/* Why Attorney Review Matters */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Why Attorney Review matters
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST_SIGNALS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Save hundreds on legal review
          </h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Sue.com attorney review
                </p>
                <p className="text-sm text-slate-500 line-through">$129</p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge $65
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Traditional attorney letter
                </p>
                <p className="text-sm text-slate-500 line-through">$300-$500</p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                We charge $65
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Full legal representation
                </p>
                <p className="text-sm text-slate-500">$2,000+</p>
              </div>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                Start with review, escalate if needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            AI writes it. An attorney perfects it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The best of both worlds — AI speed with attorney accuracy. Your
            letter will be taken seriously.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Attorney Review — $65
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Not sure you need it?{" "}
            <Link href="/disputes" className="underline hover:text-white">
              Start with a $2 demand letter
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
            name: "Attorney Review Service",
            description:
              "Get a licensed attorney to review your AI-generated demand letter, add professional letterhead, and verify legal accuracy. 24-48 hour turnaround.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "65.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/attorney-review",
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
