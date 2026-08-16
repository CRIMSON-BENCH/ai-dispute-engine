import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Insurance Denial Appeal Letter | AI Dispute Engine",
  description:
    "Generate a structured insurance denial appeal letter for $3. Our AI cites your policy language and state bad-faith statutes to overturn wrongful claim denials.",
  openGraph: {
    title: "AI Insurance Denial Appeal Letter | AI Dispute Engine",
    description:
      "Generate a structured insurance denial appeal letter for $3. Our AI cites your policy language and state bad-faith statutes to overturn wrongful claim denials.",
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
    title: "Enter your denial letter details",
    description:
      "Provide the claim number, denial reason, your policy type (health, auto, homeowners, renters), and any supporting facts the insurer overlooked. The more detail, the stronger your appeal.",
  },
  {
    step: "2",
    title: "AI drafts your appeal with policy & statute citations",
    description:
      "Our AI constructs a formal appeal letter that dissects the denial reason, cites your policy’s coverage language, references your state’s bad-faith insurance statutes, and demands reconsideration with a clear deadline.",
  },
  {
    step: "3",
    title: "Download and send to the insurer",
    description:
      "Download your appeal as a professional PDF. We include the correct mailing address format, instructions for filing with your state’s Department of Insurance, and a follow-up timeline to keep pressure on.",
  },
];

const INCLUDED = [
  "Point-by-point rebuttal addressing each denial reason with facts and policy language",
  "Citations to your state’s unfair claims settlement practices act and bad-faith statutes",
  "Reference to applicable regulations (ERISA for employer health plans, state insurance codes for individual policies)",
  "Deadline language requiring a written response within the timeframe mandated by your state",
  "Escalation notice referencing your right to file a complaint with the state Department of Insurance",
  "Professional PDF formatting with claim number, policy number, and adjuster details pre-filled",
];

const FAQ = [
  {
    q: "What types of insurance denials can this appeal?",
    a: "This tool handles appeals for health insurance claim denials, auto insurance claim denials (collision, comprehensive, liability), homeowners and renters insurance denials, disability claim denials, and life insurance claim disputes. Whether your claim was denied for “lack of medical necessity,” “pre-existing condition,” “failure to mitigate damages,” or “policy exclusion,” our AI tailors the appeal to the specific denial reason and insurance type.",
  },
  {
    q: "How does citing bad-faith statutes help my appeal?",
    a: "Every state has laws that prohibit insurance companies from unreasonably denying valid claims. When your appeal letter cites these statutes by name—such as your state’s unfair claims settlement practices act—it signals to the insurer that you understand their legal obligations and are prepared to escalate. Insurers know that bad-faith lawsuits can result in damages far exceeding the original claim, which creates a strong incentive to reconsider.",
  },
  {
    q: "Should I appeal before hiring an attorney?",
    a: "In most cases, yes. Insurance policies typically require you to exhaust the internal appeals process before taking legal action, and many denials are overturned at the first appeal stage when the policyholder presents a well-reasoned argument with supporting documentation. A strong appeal letter costs a fraction of attorney fees and often resolves the issue. If your appeal is denied, the documented paper trail strengthens any future legal case.",
  },
  {
    q: "What information do I need to get started?",
    a: "You’ll need your denial letter (or the denial reason and claim number), your policy number, the type of insurance, the date of the incident or service, and a brief description of why you believe the denial is wrong. If you have supporting documents—medical records, repair estimates, photos, or police reports—mentioning them in your appeal strengthens it. You don’t need to upload these documents; just describe what you have.",
  },
];

export default function InsuranceDenialAppealPage() {
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
            Insurance Denial Appeal
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
            Your insurance company denied your claim. Fight back with the law on
            your side.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our AI builds a structured appeal letter that tears apart the denial
            reason, cites your policy&apos;s own coverage language against the
            insurer, and puts them on notice with state bad-faith statute
            references.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Appeal Letter &mdash; $3
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
            Denied doesn&apos;t mean defeated
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Insurance companies deny claims counting on policyholders to accept
            it and move on. A formal appeal citing their own policy language and
            state law forces them to justify their decision on the record.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Appeal Letter &mdash; $3
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
            name: "AI Insurance Denial Appeal Letter",
            description:
              "Structured appeal letter for denied insurance claims citing policy language and state bad-faith statutes.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/insurance-denial-appeal",
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
