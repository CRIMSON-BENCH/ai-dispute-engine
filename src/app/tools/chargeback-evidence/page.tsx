import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Chargeback Evidence Package — Get Your Money Back | AI Dispute Engine",
  description:
    "Pre-formatted dispute documentation package for your bank's chargeback process. AI-built evidence packages with transaction timelines, reason code matching, and bank-specific formatting. $3 per package.",
  openGraph: {
    title:
      "Chargeback Evidence Package — Get Your Money Back | AI Dispute Engine",
    description:
      "Pre-formatted dispute documentation package for your bank's chargeback process. AI-built evidence packages with transaction timelines, reason code matching, and bank-specific formatting. $3 per package.",
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
    title: "Describe the charge and what went wrong",
    description:
      "Tell us the merchant name, charge amount, date, what you purchased, and why the charge is disputed — whether it's fraud, non-delivery, defective product, billing error, or a subscription you canceled.",
  },
  {
    step: "2",
    title: "AI builds your evidence package",
    description:
      "Our AI matches your situation to the correct chargeback reason code, creates a structured timeline, drafts an evidence summary, and generates a supporting document checklist tailored to your bank's requirements.",
  },
  {
    step: "3",
    title: "Submit to your bank",
    description:
      "Download your complete evidence package in PDF format. Call your bank's dispute line or submit through their online portal. Your organized documentation dramatically increases approval odds.",
  },
];

const INCLUDED = [
  "Detailed transaction timeline from purchase through dispute",
  "Evidence summary document outlining your case in the bank's preferred format",
  "Merchant violation citations based on card network rules (Visa, Mastercard, Amex)",
  "Correct chargeback reason code matching for maximum success rate",
  "Bank-specific formatting guidelines for Chase, Bank of America, Wells Fargo, Citi, and more",
  "Supporting document checklist so you know exactly what to gather",
  "Communication log template to document all merchant contact attempts",
  "Professional formatting with PDF download ready for bank submission",
];

const FAQ = [
  {
    q: "What is a chargeback and when can I file one?",
    a: "A chargeback is a dispute you file with your bank or credit card issuer to reverse a charge on your account. You can file one for unauthorized or fraudulent charges, merchandise that was never delivered, products that arrived damaged or significantly different from what was described, duplicate charges, charges after a canceled subscription, or billing amounts that differ from what you agreed to pay.",
  },
  {
    q: "How long do I have to file a chargeback?",
    a: "Most banks allow 60 to 120 days from the transaction date or from when you discovered the problem. Visa and Mastercard generally allow 120 days. American Express allows 120 days for most disputes. However, your bank may have shorter internal deadlines. File as soon as possible — waiting reduces your chances of success and risks missing the window entirely.",
  },
  {
    q: "What's the success rate for chargebacks?",
    a: "Industry data shows consumers win about 60-80% of chargebacks when they provide organized evidence and use the correct reason code. Without proper documentation, the rate drops significantly. The most common reason disputes fail is insufficient evidence or using the wrong reason code — exactly what our evidence package addresses.",
  },
  {
    q: "Will the merchant fight back against my chargeback?",
    a: "Merchants have the right to contest chargebacks through a process called representment, where they submit their own evidence to the bank. This is why thorough documentation matters — your evidence package needs to be stronger than whatever the merchant submits. Our package anticipates common merchant defenses and helps you preemptively counter them with proper documentation.",
  },
];

export default function ChargebackEvidencePage() {
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
            Chargeback Evidence Package
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 per evidence package
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get Your Money Back From Your Bank
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Banks deny chargebacks when the evidence is messy, incomplete, or
            filed under the wrong reason code. Our AI builds a structured
            evidence package formatted to your bank&apos;s exact requirements —
            with the right reason code, a clear timeline, and documentation
            that makes the decision easy.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Build Evidence Package — $3
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

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop hoping your bank says yes. Make them say yes.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Organized evidence with the right reason code is the difference
            between a denied dispute and money back in your account.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Build Evidence Package — $3
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
            name: "Chargeback Evidence Package",
            description:
              "Pre-formatted dispute documentation package for your bank's chargeback process with transaction timelines, reason code matching, and bank-specific formatting.",
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
              url: "https://aidisputeengine.com/tools/chargeback-evidence",
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
