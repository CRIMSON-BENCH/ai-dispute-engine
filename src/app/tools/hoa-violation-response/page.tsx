import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI HOA Violation Response Letter | AI Dispute Engine",
  description:
    "Generate a formal HOA violation response letter for $2. Our AI cites your CC&Rs, state HOA statutes, and selective enforcement defenses to dispute unfair fines and violations.",
  openGraph: {
    title: "AI HOA Violation Response Letter | AI Dispute Engine",
    description:
      "Generate a formal HOA violation response letter for $2. Our AI cites your CC&Rs, state HOA statutes, and selective enforcement defenses to dispute unfair fines and violations.",
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
    title: "Enter your HOA violation details",
    description:
      "Tell us what violation you received, the fine amount, your HOA name, and why you believe it’s unfair—whether it’s a bogus architectural complaint, selective enforcement, or a rule that contradicts your CC&Rs.",
  },
  {
    step: "2",
    title: "AI drafts your response with CC&R citations",
    description:
      "Our AI generates a formal response letter that references your community’s CC&Rs, your state’s HOA governance statutes, due process requirements, and any applicable selective enforcement or estoppel defenses.",
  },
  {
    step: "3",
    title: "Download and send to the HOA board",
    description:
      "Download your response as a polished PDF ready to submit to your HOA board, property management company, or dispute resolution committee. We include instructions for requesting a formal hearing.",
  },
];

const INCLUDED = [
  "Formal rebuttal addressing the specific violation with CC&R section references",
  "Selective enforcement defense citing instances where the same rule was not applied to other homeowners",
  "Due process argument if the HOA failed to follow its own notice, hearing, or fine schedule procedures",
  "State HOA statute citations requiring boards to act reasonably and in good faith",
  "Request for a formal hearing before the board or architectural review committee",
  "Documentation checklist for photos, timestamps, and neighbor comparisons to support your case",
];

const FAQ = [
  {
    q: "What types of HOA violations can I dispute?",
    a: "This tool covers disputes for architectural modification violations (paint colors, fencing, landscaping changes), parking violations, noise complaints, pet restrictions, holiday decoration rules, rental restrictions, and any fine you believe was issued unfairly or without proper notice. If your HOA cited a rule in your CC&Rs, bylaws, or architectural guidelines, we can draft a response that challenges it.",
  },
  {
    q: "What is selective enforcement, and how does it help me?",
    a: "Selective enforcement occurs when an HOA enforces a rule against you but ignores the same violation by other homeowners. Courts across the country have ruled that HOAs cannot selectively enforce their rules—if they tolerate violations by some residents, they may have waived their right to enforce the same rule against you. Our AI letter raises this defense when applicable, strengthening your position significantly.",
  },
  {
    q: "Can the HOA fine me without a hearing?",
    a: "Most state HOA statutes and most CC&Rs require the board to provide written notice of the violation, an opportunity to cure (fix the issue), and a hearing before the board before imposing fines. If your HOA skipped any of these steps, the fine may be unenforceable. Our letter identifies procedural failures and demands they be corrected before any penalty takes effect.",
  },
  {
    q: "What if my HOA is managed by a property management company?",
    a: "The response letter works whether your HOA is self-managed by a volunteer board or run by a professional management company like FirstService Residential, Associa, or a local firm. The legal obligations are the same regardless of who manages day-to-day operations. We address the letter to the appropriate party and reference the management company’s duties under your HOA’s governing documents.",
  },
];

export default function HoaViolationResponsePage() {
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
            HOA Violation Response
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Got an unfair HOA fine? Respond with your CC&amp;Rs, not just
            frustration.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our AI generates a formal response that holds your HOA board
            accountable to their own governing documents, state statutes, and due
            process requirements&mdash;turning a one-sided fine into a two-sided
            dispute.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your HOA Response &mdash; $2
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
            HOA boards have rules too&mdash;make sure they follow them
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Most homeowners pay unfair fines because they don&apos;t know the
            board violated its own procedures. A formal response citing CC&amp;Rs
            and state law shifts the burden back where it belongs.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your HOA Response &mdash; $2
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
            name: "AI HOA Violation Response Letter",
            description:
              "Formal response letter disputing HOA fines, architectural violations, or selective enforcement with CC&R references.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/hoa-violation-response",
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
