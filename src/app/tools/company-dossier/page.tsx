import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Company Complaint Dossier — Know Everything About the Company You&apos;re Fighting | AI Dispute Engine",
  description:
    "Aggregated complaint history, BBB rating, lawsuits, and violation records on any company. Get your comprehensive company dossier for $5. Arm yourself with data before you dispute.",
  openGraph: {
    title:
      "Company Complaint Dossier — Know Everything About the Company You're Fighting | AI Dispute Engine",
    description:
      "Aggregated complaint history, BBB rating, lawsuits, and violation records on any company. Get your comprehensive company dossier for $5.",
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
    title: "Enter the company name",
    description:
      "Tell us which company you&apos;re dealing with. Include any known parent companies, subsidiaries, or DBAs for the most comprehensive results.",
  },
  {
    step: "2",
    title: "AI aggregates public complaint data",
    description:
      "Our AI searches the BBB, CFPB, state attorney general offices, FTC records, court filings, and public complaint forums to compile a complete profile of the company&apos;s track record.",
  },
  {
    step: "3",
    title: "Get your dossier with ammunition for your dispute",
    description:
      "Receive a detailed dossier with complaint patterns, regulatory actions, lawsuit history, and a reliability score — giving you leverage and evidence to strengthen your dispute.",
  },
];

const INCLUDED = [
  "BBB rating and full complaint history with resolution rates",
  "CFPB complaint database search with complaint narratives",
  "State attorney general complaint records and enforcement actions",
  "FTC enforcement actions and consent orders",
  "Class action lawsuit history and settlement details",
  "Social media complaint analysis and sentiment patterns",
  "Overall company reliability score based on aggregated data",
  "Key complaint patterns and common issues identified by AI",
];

const FAQ = [
  {
    q: "How does this help my dispute?",
    a: "Knowledge is leverage. When you can cite a company&apos;s pattern of complaints, regulatory violations, or unresolved disputes, you transform your individual complaint into evidence of a systemic problem. Companies are far more likely to settle when they know you&apos;ve done your homework. The dossier also helps you identify the most effective escalation paths — if the FTC has already investigated them, a complaint to the same agency carries more weight.",
  },
  {
    q: "Where does the data come from?",
    a: "We aggregate publicly available data from the Better Business Bureau, the Consumer Financial Protection Bureau complaint database, state attorney general offices, Federal Trade Commission enforcement records, county and federal court filings, and public consumer review platforms. All sources are government databases or publicly accessible records.",
  },
  {
    q: "Can I use this in court?",
    a: "The dossier compiles publicly available records that are generally admissible as evidence of a company&apos;s business practices. While the dossier itself is not a legal filing, the underlying records it references — court filings, regulatory actions, government complaints — are public records that can be cited in small claims court, formal complaints, or demand letters. Always consult an attorney for specific legal strategy.",
  },
  {
    q: "How often is data updated?",
    a: "Each dossier is generated fresh at the time of your request, pulling the latest available data from all sources. Government databases like the CFPB and FTC update regularly, while court records vary by jurisdiction. For ongoing disputes, we recommend generating an updated dossier if your case extends beyond 30 days to capture any new complaints or regulatory actions.",
  },
];

export default function CompanyDossierPage() {
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
            Company Complaint Dossier
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5 per dossier
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know Everything About the Company You&apos;re Fighting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Companies count on you not doing your homework. Our AI digs through
            BBB complaints, CFPB filings, FTC actions, court records, and
            consumer reviews to build a complete profile of the company
            you&apos;re disputing. Walk in with ammunition, not assumptions.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Company Dossier — $5
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
        <div className="mx-auto max-w-3xl">
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
            Stop guessing. Start knowing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Every complaint, every lawsuit, every regulatory action — compiled
            into one report that turns your dispute from a hunch into a case.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Company Dossier — $5
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
            name: "Company Complaint Dossier",
            description:
              "Aggregated complaint history, BBB rating, lawsuits, and violation records on any company. Arm yourself with data before you dispute.",
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
              url: "https://aidisputeengine.com/tools/company-dossier",
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
