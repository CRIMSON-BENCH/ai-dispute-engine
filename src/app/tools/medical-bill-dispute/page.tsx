import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Medical Bill Dispute Letter Generator | AI Dispute Engine",
  description:
    "Generate an itemized medical bill challenge citing the No Surprises Act and fair billing practices. Dispute overcharges, surprise bills, and billing errors. AI-powered. $3.",
  openGraph: {
    title:
      "Medical Bill Dispute Letter Generator | AI Dispute Engine",
    description:
      "Generate an itemized medical bill challenge citing the No Surprises Act and fair billing practices. Dispute overcharges, surprise bills, and billing errors. AI-powered. $3.",
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
    title: "Enter your bill details",
    description:
      "Tell us the provider name, date of service, amount billed, what your insurance covered (if applicable), whether you received a good faith estimate, and what specifically seems wrong -- duplicate charges, upcoding, surprise out-of-network bills, or amounts that don't match your estimate.",
  },
  {
    step: "2",
    title: "AI drafts your dispute with No Surprises Act references",
    description:
      "Our AI generates a formal dispute letter demanding an itemized bill, citing the No Surprises Act protections, your right to a good faith estimate, and applicable billing regulations. It flags common billing errors and challenges specific charges.",
  },
  {
    step: "3",
    title: "Download and send",
    description:
      "Download your letter as PDF or DOCX and send it to the provider's billing department via certified mail. Request a response within 30 days and keep your copy as evidence for insurance appeals or regulatory complaints.",
  },
];

const INCLUDED = [
  "No Surprises Act citations with specific protections that apply to your situation",
  "Formal demand for a fully itemized bill with CPT codes and charge descriptions",
  "Challenge to specific billing errors including upcoding, duplicate charges, and unbundling",
  "Good faith estimate comparison and dispute rights for uninsured or self-pay patients",
  "Request for patient-provider dispute resolution or independent dispute resolution if applicable",
  "Professional formatting with billing department address, certified mail instructions, and 30-day response deadline",
];

const FAQ = [
  {
    q: "What does the No Surprises Act protect me from?",
    a: "The No Surprises Act, effective January 2022, protects you from surprise bills when you receive emergency care, when you're treated by an out-of-network provider at an in-network facility without your consent, and when you receive air ambulance services from out-of-network providers. It also requires providers to give uninsured or self-pay patients a good faith estimate before treatment. If the final bill exceeds the estimate by $400 or more, you can dispute it through a federal process.",
  },
  {
    q: "How do I know if my medical bill has errors?",
    a: "Medical billing errors are extremely common -- studies suggest up to 80 percent of medical bills contain mistakes. Common errors include duplicate charges for the same service, upcoding (billing for a more expensive procedure than was performed), unbundling (separating charges that should be billed as one), charges for services never rendered, and incorrect patient information leading to denied insurance claims. Our dispute letter demands a fully itemized bill so you can identify exactly what you're being charged for.",
  },
  {
    q: "Can I dispute a medical bill that's already in collections?",
    a: "Yes. You have the right to dispute a medical bill at any stage, including after it's been sent to collections. Under the Fair Debt Collection Practices Act, you can request debt validation from the collector within 30 days of their first contact. The No Surprises Act protections apply regardless of collection status. Our letter demands the original itemized bill and challenges the debt's validity, which can pause collection activity while the dispute is resolved.",
  },
  {
    q: "What happens after I send the dispute letter?",
    a: "The provider must respond to your dispute, typically within 30 days. They may correct the bill, provide documentation justifying the charges, or offer a reduced amount. If you're disputing under the No Surprises Act, you can initiate an independent dispute resolution process where a third party decides the appropriate payment. Many providers reduce bills significantly when patients formally dispute with specific legal citations rather than just calling to complain, because it signals you understand your rights and are prepared to escalate.",
  },
];

export default function MedicalBillDisputePage() {
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
            Medical Bill Dispute
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
            That Medical Bill Looks Wrong Because It Probably Is.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Up to 80% of medical bills contain errors. Surprise charges,
            duplicate billing, upcoded procedures -- you have the right to
            challenge every line item. Our AI generates a formal dispute letter
            citing the No Surprises Act and demanding an itemized accounting.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Medical Bill Dispute &mdash; $3
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
            Don&apos;t pay a bill you haven&apos;t verified.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            You have the legal right to an itemized bill and to challenge every
            charge. A formal dispute letter with No Surprises Act citations
            tells the billing department you know your rights and won&apos;t
            accept errors quietly.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Medical Bill Dispute &mdash; $3
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
            name: "Medical Bill Dispute Letter Generator",
            description:
              "Generate an itemized medical bill challenge citing the No Surprises Act and fair billing practices to dispute overcharges, surprise bills, and billing errors.",
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
              url: "https://aidisputeengine.com/tools/medical-bill-dispute",
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
