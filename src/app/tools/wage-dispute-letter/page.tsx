import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Wage Dispute Demand Letter | AI Dispute Engine",
  description:
    "Generate a wage dispute demand letter for $3. Our AI cites the FLSA, state labor codes, and DOL complaint procedures to recover unpaid wages, overtime, and withheld paychecks.",
  openGraph: {
    title: "AI Wage Dispute Demand Letter | AI Dispute Engine",
    description:
      "Generate a wage dispute demand letter for $3. Our AI cites the FLSA, state labor codes, and DOL complaint procedures to recover unpaid wages, overtime, and withheld paychecks.",
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
    title: "Enter your employment & wage details",
    description:
      "Provide your employer name, job title, pay rate, hours worked, and what went wrong—unpaid wages, missing overtime, withheld final paycheck, tip theft, or misclassification as an independent contractor.",
  },
  {
    step: "2",
    title: "AI drafts your demand with FLSA citations",
    description:
      "Our AI generates a formal demand letter citing the Fair Labor Standards Act, your state’s wage and hour laws, applicable penalty provisions, and the exact amount owed based on the details you provided.",
  },
  {
    step: "3",
    title: "Download and send to your employer",
    description:
      "Download your demand letter as a professional PDF ready to send via email or certified mail. We include instructions for filing a wage complaint with your state labor board and the U.S. Department of Labor if the employer doesn’t respond.",
  },
];

const INCLUDED = [
  "Demand for specific dollar amount owed, calculated from your pay rate, hours worked, and applicable overtime multipliers",
  "FLSA citations including §206 (minimum wage), §207 (overtime), and §215(a)(3) (anti-retaliation protections)",
  "State-specific labor code references for wage payment deadlines, final paycheck rules, and waiting time penalties",
  "Liquidated damages notice informing the employer they may owe double the unpaid wages under federal and state law",
  "Escalation language referencing the right to file with the Department of Labor Wage and Hour Division",
  "Response deadline with clear consequences for non-payment, including regulatory complaint and private right of action",
];

const FAQ = [
  {
    q: "What types of wage issues does this cover?",
    a: "This tool covers unpaid regular wages, unpaid overtime (time-and-a-half for hours over 40 per week), withheld final paychecks, tip theft or tip pool violations, minimum wage violations, unauthorized deductions from your paycheck, misclassification as an independent contractor to avoid paying overtime, and off-the-clock work your employer required but refused to pay for.",
  },
  {
    q: "How much can I recover beyond just my unpaid wages?",
    a: "Under the FLSA, employees who win wage claims are entitled to the unpaid wages plus an equal amount in liquidated damages—effectively doubling what you’re owed. Many states add additional penalties: California imposes waiting time penalties of up to 30 days of wages for late final paychecks, New York adds 100% liquidated damages, and Illinois allows triple damages for willful violations. Our letter calculates and references the applicable penalties for your state.",
  },
  {
    q: "Can my employer retaliate against me for sending a demand letter?",
    a: "No. Section 215(a)(3) of the FLSA makes it illegal for an employer to fire, demote, reduce hours, or otherwise retaliate against an employee for asserting their right to be paid. Most states have parallel anti-retaliation statutes with their own penalties. Our demand letter explicitly cites these protections, putting the employer on notice that retaliation would create a second, separate legal claim.",
  },
  {
    q: "What if I was paid as an independent contractor but treated like an employee?",
    a: "Worker misclassification is one of the most common wage theft tactics. If your employer controlled when, where, and how you worked—set your schedule, provided your tools, or prohibited you from working for others—you may have been misclassified to avoid paying overtime, payroll taxes, and benefits. Our AI analyzes the factors you describe and, where applicable, drafts the letter arguing you were a misclassified employee entitled to back wages and overtime under the FLSA’s economic reality test.",
  },
];

export default function WageDisputeLetterPage() {
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
            Wage Dispute Letter
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
            Your employer owes you money. Make them pay it&mdash;with federal law
            behind you.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our AI generates a demand letter citing the Fair Labor Standards Act,
            your state&apos;s labor code, and liquidated damage provisions to
            recover every dollar of unpaid wages, overtime, and withheld
            paychecks.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Wage Demand &mdash; $3
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
            Wage theft costs workers billions every year. Don&apos;t leave your
            money on the table.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The FLSA entitles you to double damages for unpaid wages, and most
            states pile on additional penalties. A formal demand letter is the
            first step to getting every dollar you earned.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Wage Demand &mdash; $3
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
            name: "AI Wage Dispute Demand Letter",
            description:
              "Demand letter for unpaid wages, withheld paychecks, or overtime violations citing FLSA and state labor codes.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/wage-dispute-letter",
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
