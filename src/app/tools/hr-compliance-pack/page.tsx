import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HR Compliance Pack | AI Dispute Engine",
  description:
    "Employee dispute templates and compliance tools for small businesses at $49/mo. Reduce legal exposure with ready-to-deploy HR dispute resolution templates.",
  openGraph: {
    title: "HR Compliance Pack | AI Dispute Engine",
    description:
      "Employee dispute templates and compliance tools for small businesses at $49/mo. Reduce legal exposure with ready-to-deploy HR dispute resolution templates.",
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
    title: "Subscribe for $49/mo",
    description:
      "Get instant access to the full HR compliance template library and employee-facing dispute portal.",
  },
  {
    step: "2",
    title: "Deploy templates to your team",
    description:
      "Share the dispute resolution portal with employees. They can file grievances, request accommodations, and document workplace issues through structured forms.",
  },
  {
    step: "3",
    title: "Reduce your legal exposure",
    description:
      "Documented dispute processes protect your business. Every complaint is timestamped, tracked, and stored for compliance records.",
  },
];

const INCLUDED = [
  "Employee grievance filing portal with structured intake forms",
  "Workplace harassment complaint templates meeting EEOC guidelines",
  "Wage and hour dispute documentation workflows",
  "Accommodation request forms compliant with ADA requirements",
  "Manager response templates with legally reviewed language",
  "Compliance audit trail with timestamped records",
];

const FAQ = [
  {
    q: "What size business is this designed for?",
    a: "The HR Compliance Pack is built for small and mid-sized businesses with 5 to 500 employees. It is especially valuable for companies without a dedicated HR department or in-house legal counsel who need professional dispute resolution processes.",
  },
  {
    q: "Are the templates legally compliant?",
    a: "Our templates are designed to align with federal guidelines from the EEOC, DOL, and ADA. However, employment law varies by state and locality. We recommend having your attorney review the templates for jurisdiction-specific compliance before deployment.",
  },
  {
    q: "Can employees use this without HR involvement?",
    a: "Yes. The employee-facing portal allows staff to file complaints, document incidents, and request accommodations independently. Submissions are logged and routed to the appropriate manager or HR contact you designate.",
  },
  {
    q: "How does this reduce legal exposure?",
    a: "Courts look favorably on businesses that have documented, accessible dispute resolution processes. By giving employees a clear way to raise concerns and keeping timestamped records of every interaction, you demonstrate good faith and procedural fairness.",
  },
];

export default function HRCompliancePackPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
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
            HR Compliance Pack
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $49/month
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            HR Dispute Resolution Without the HR Department
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Give your employees a professional way to raise concerns. Give your
            business a documented process that holds up in court. All for less
            than one hour of attorney time.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Compliance Pack
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            One lawsuit costs more than a lifetime of this plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The average employment lawsuit costs small businesses $75,000 to
            defend. A documented dispute process is your first line of defense.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Protect Your Business
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "HR Compliance Pack",
            description:
              "B2B subscription for small businesses with employee-facing dispute templates and compliance tools.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "49.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/hr-compliance-pack",
            },
          }),
        }}
      />

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
