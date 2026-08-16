import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Debt Validation Letter Generator — Make Them Prove It | AI Dispute Engine",
  description:
    "Force debt collectors to prove you owe under FDCPA Section 809. AI-generated debt validation letter with proper legal citations and 30-day response deadline. $2 per letter.",
  openGraph: {
    title:
      "Debt Validation Letter Generator — Make Them Prove It | AI Dispute Engine",
    description:
      "Force debt collectors to prove you owe under FDCPA Section 809. AI-generated debt validation letter with proper legal citations and 30-day response deadline. $2 per letter.",
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
    title: "Enter debt details",
    description:
      "Tell us the collector's name, the amount they claim you owe, when they first contacted you, and any account numbers they referenced. The more detail, the stronger your letter.",
  },
  {
    step: "2",
    title: "AI generates FDCPA-compliant letter",
    description:
      "Our AI drafts a formal debt validation request citing Section 809 of the Fair Debt Collection Practices Act, demanding the collector verify every element of the alleged debt.",
  },
  {
    step: "3",
    title: "Send to the collector",
    description:
      "Download your letter in PDF or DOCX format and send it via certified mail with return receipt. Once received, the collector must stop all collection activity until they validate the debt.",
  },
];

const INCLUDED = [
  "FDCPA Section 809(b) formal validation demand with full statutory citation",
  "Request for original creditor name and signed agreement",
  "Demand for complete payment history and itemized balance",
  "Cease collection notice until debt is properly validated",
  "30-day response deadline with consequences for non-compliance",
  "Collector obligation summary explaining their legal duties",
  "Dispute of debt notation requirement under FDCPA Section 809(a)",
  "Professional formatting with PDF & DOCX download",
];

const FAQ = [
  {
    q: "What is debt validation and why does it matter?",
    a: "Under the Fair Debt Collection Practices Act (FDCPA), you have the right to demand that a debt collector prove the debt is actually yours, the amount is correct, and they have the legal authority to collect it. Many debts are sold and resold between collectors, and errors are common — wrong amounts, wrong people, expired statutes of limitations. A validation letter forces them to produce documentation or stop contacting you.",
  },
  {
    q: "When should I send a debt validation letter?",
    a: "Send it within 30 days of the collector's first contact. Under FDCPA Section 809, collectors must send you a written notice within five days of first contact. You then have 30 days to dispute the debt in writing. If you miss this window, you can still request validation, but the legal protections are strongest within that 30-day period.",
  },
  {
    q: "What happens if the collector doesn't respond within 30 days?",
    a: "If the collector cannot validate the debt, they must cease all collection activity — no more calls, letters, or credit reporting. If they continue collecting without validating, they are violating federal law, and you may be entitled to statutory damages of up to $1,000 per violation plus attorney's fees under FDCPA Section 813.",
  },
  {
    q: "Does sending a validation letter stop collection calls?",
    a: "Yes. Once the collector receives your written validation request, they must stop all collection activity until they provide proper verification. This includes phone calls, letters, and reporting to credit bureaus. If they continue contacting you before validating, document every violation — each one strengthens a potential FDCPA lawsuit.",
  },
];

export default function DebtValidationPage() {
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
            Debt Validation Letter
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per validation letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Make Them Prove It
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Debt collectors contact millions of people for debts they
            can&apos;t verify. Under federal law, you have the right to demand
            proof. Our AI generates an FDCPA-compliant validation letter that
            forces collectors to put up or shut up. Attorneys charge $200+ for
            this. We charge $2.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Validation Letter — $2
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
            They called you. Now make them answer to you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            One letter triggers their legal obligation to prove every dollar
            they claim you owe — or stop collecting entirely.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Validation Letter — $2
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
            name: "Debt Validation Letter Generator",
            description:
              "Force debt collectors to prove you owe under FDCPA Section 809. AI-generated debt validation letter with proper legal citations and 30-day response deadline.",
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
              url: "https://aidisputeengine.com/tools/debt-validation",
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
