import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Know Your Rights Guide — Consumer Protection Laws in Plain English",
  description:
    "Downloadable PDF guide covering consumer rights by topic with state-specific statutes, template dispute language, and filing procedures. AI-generated for your state. $5.",
  openGraph: {
    title:
      "Know Your Rights Guide — Consumer Protection Laws in Plain English",
    description:
      "Downloadable PDF guide covering consumer rights by topic with state-specific statutes, template dispute language, and filing procedures. AI-generated for your state. $5.",
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
    title: "Choose your topic",
    description:
      "Select from debt collection, landlord-tenant, auto purchases, medical billing, insurance claims, warranties, or other consumer protection areas.",
  },
  {
    step: "2",
    title: "AI generates your state-specific guide",
    description:
      "Our AI pulls the exact statutes, deadlines, and protections that apply in your state. No generic advice — every citation is verified for your jurisdiction.",
  },
  {
    step: "3",
    title: "Download your PDF",
    description:
      "Get a printable, shareable guide with plain-English explanations, template dispute language you can copy and use, and a quick-reference card for your wallet.",
  },
];

const INCLUDED = [
  "State-specific consumer protection statutes",
  "Plain-English explanations of your rights",
  "Template language for disputes and complaints",
  "Filing deadlines and procedures",
  "Regulatory agency contact information",
  "Sample complaint letters",
  "Common violations checklist",
  "Printable reference card",
];

const FAQ = [
  {
    q: "How is this different from just Googling my rights?",
    a: "Google gives you a wall of generic articles written for SEO, not for your situation. This guide pulls the actual statutes that apply in your state, explains them in plain English, and gives you template language you can copy directly into a complaint or dispute letter. It&apos;s the difference between reading about consumer rights and having a ready-to-use toolkit.",
  },
  {
    q: "What topics are covered?",
    a: "We cover the most common consumer disputes: debt collection (FDCPA and state equivalents), landlord-tenant rights, auto dealer and lemon law protections, medical billing errors, insurance claim denials, product warranties, subscription cancellations, and general unfair business practices. Select your topic and state, and the guide is built around the laws that protect you.",
  },
  {
    q: "Are the statutes up to date?",
    a: "Yes. Our AI references current federal and state consumer protection laws. When statutes change, we update the guide content. Your purchase includes lifetime access to the updated version for your selected topic and state, so you always have the latest information.",
  },
  {
    q: "Can I use the template language in an actual legal dispute?",
    a: "Absolutely. The template language is designed to be copied into complaint letters, dispute filings, and communications with companies or agencies. It cites the specific statutes being violated and uses the kind of precise language that gets results. Many users paste it directly into their demand letters or regulatory complaints.",
  },
];

export default function KnowYourRightsGuidePage() {
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
            Know Your Rights Guide
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 — your state, your rights, one PDF
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know Exactly What the Law Says.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Companies count on you not knowing your rights. This AI-generated
            guide gives you the exact statutes, deadlines, and template language
            you need to fight back — written in plain English, specific to your
            state.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Rights Guide — $5
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
            Stop guessing. Start citing statutes.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            When you quote the exact law a company is violating, the
            conversation changes. Customer service reps escalate. Collections
            agencies back off. Landlords fix things. Five dollars buys you the
            leverage of knowing exactly what you&apos;re entitled to.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Rights Guide — $5
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Ready to take action?{" "}
            <Link href="/disputes" className="underline hover:text-white">
              Generate a demand letter
            </Link>{" "}
            using the statutes from your guide.
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
            name: "Know Your Rights Guide",
            description:
              "Downloadable PDF guide covering consumer rights by topic with state-specific statutes, plain-English explanations, template dispute language, and filing procedures.",
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
              url: "https://aidisputeengine.com/tools/know-your-rights-guide",
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
