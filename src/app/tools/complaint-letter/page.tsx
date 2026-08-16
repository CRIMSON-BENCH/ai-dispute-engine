import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complaint Letter Generator — File Complaints That Get Attention",
  description:
    "Generate properly formatted complaint letters to the BBB, FTC, CFPB, State Attorney General, and more. AI-powered with correct formatting. $2 per letter.",
  openGraph: {
    title: "Complaint Letter Generator — File Complaints That Get Attention",
    description:
      "Generate properly formatted complaint letters to the BBB, FTC, CFPB, State Attorney General, and more. $2 per letter.",
  },
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const agencies = [
  {
    name: "Better Business Bureau (BBB)",
    description:
      "Consumer complaints about businesses. Companies often respond quickly to BBB complaints to protect their rating.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Federal Trade Commission (FTC)",
    description:
      "Fraud, deceptive advertising, identity theft, and unfair business practices at the federal level.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "Consumer Financial Protection Bureau (CFPB)",
    description:
      "Banking, credit cards, loans, mortgages, and financial product complaints. Companies must respond within 15 days.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    name: "State Attorney General",
    description:
      "Consumer protection complaints specific to your state. Can trigger investigations and enforcement actions.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "State Insurance Commissioner",
    description:
      "Insurance claim denials, unfair practices, and coverage disputes. Insurers take these complaints seriously.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    name: "State Labor Board",
    description:
      "Wage theft, workplace violations, discrimination, and unsafe working conditions.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.03A2.25 2.25 0 004.5 14.25v3a2.25 2.25 0 001.34 2.06l5.58 3.03a2.25 2.25 0 002.16 0l5.58-3.03a2.25 2.25 0 001.34-2.06v-3a2.25 2.25 0 00-1.34-2.06l-5.58-3.03a2.25 2.25 0 00-2.16 0z" />
      </svg>
    ),
  },
  {
    name: "Public Utilities Commission",
    description:
      "Complaints about electric, gas, water, telephone, and internet service providers.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Which agency should I file a complaint with?",
    a: "It depends on your dispute. For banking and credit issues, the CFPB. For fraud, the FTC. For insurance, your State Insurance Commissioner. For general consumer issues, your State Attorney General or BBB. Our tool helps you pick the right one.",
  },
  {
    q: "How is this different from the Escalation Pack?",
    a: "A single complaint letter ($2) goes to one agency. The Escalation Pack ($5) generates three coordinated complaint letters to three different agencies — federal, state, and industry — for maximum pressure. If you’re dealing with a serious issue, the pack is more effective.",
  },
  {
    q: "Do companies actually respond to regulatory complaints?",
    a: "Yes. The CFPB requires companies to respond within 15 days. The BBB publishes complaints publicly. State Attorneys General can investigate. Companies have compliance departments specifically to handle these complaints.",
  },
  {
    q: "Can I file a complaint before sending a demand letter?",
    a: "You can, but we recommend sending a demand letter first. It gives the company a chance to resolve the issue directly, and if they don’t, you have documentation showing you tried before escalating.",
  },
  {
    q: "Will my complaint be anonymous?",
    a: "Most agencies require your name and contact information. However, some agencies (like the FTC) compile complaints for patterns and don’t share your identity with the company. We’ll let you know the privacy policy for each agency.",
  },
];

export default function ComplaintLetterPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Complaint Letter</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per complaint letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            File Complaints That Actually Get Attention.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Companies ignore customers. They don&apos;t ignore regulators. Generate
            a properly formatted complaint letter to the right agency and watch
            things change.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Complaint Letter — $2
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pick the right agency",
                desc: "Choose from BBB, FTC, CFPB, State Attorney General, State Insurance Commissioner, State Labor Board, or Public Utilities Commission. Not sure? We help you decide.",
              },
              {
                step: "2",
                title: "Answer a few questions",
                desc: "Tell us about your dispute, what happened, and what resolution you’re seeking. Our AI formats your complaint for the specific agency’s requirements.",
              },
              {
                step: "3",
                title: "Get your complaint letter",
                desc: "Download a properly formatted complaint letter ready to submit. Each agency has different requirements — we handle the formatting for you.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies We Cover */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Agencies we cover
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          We generate properly formatted complaint letters for all major consumer protection agencies.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {agency.icon}
              </div>
              <h3 className="font-semibold">{agency.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {agency.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Single Letter vs Escalation Pack */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Single Letter vs. Escalation Pack
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Single Letter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">Single Complaint Letter</h3>
            <p className="mt-1 text-2xl font-bold text-teal-600 dark:text-teal-400">$2</p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} One complaint letter to one agency
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Properly formatted for that agency
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} PDF &amp; DOCX download
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/disputes"
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Generate Single Letter
              </Link>
            </div>
          </div>

          {/* Escalation Pack */}
          <div className="relative rounded-2xl border-2 border-teal-500 bg-white p-8 dark:bg-slate-900">
            <span className="absolute -top-3 left-6 rounded-full bg-teal-600 px-3 py-0.5 text-xs font-semibold text-white">
              Best Value
            </span>
            <h3 className="text-lg font-semibold">Escalation Pack</h3>
            <p className="mt-1 text-2xl font-bold text-teal-600 dark:text-teal-400">$5</p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Three complaint letters to three agencies
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Covers federal, state, and industry regulators
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Coordinated complaints for maximum pressure
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Save $1 vs. buying separately
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/tools/escalation"
                className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Get Escalation Pack — $5
                {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why File Complaints */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Why file complaints?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
              </svg>
            </div>
            <h3 className="font-semibold">Companies respond to regulators</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              A complaint to the CFPB requires a response within 15 days. A
              complaint to you? They can ignore it forever.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="font-semibold">Creates an official record</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Your complaint is on file with the agency. If others file similar
              complaints, it can trigger a formal investigation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <h3 className="font-semibold">May trigger enforcement</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Agencies look for patterns. Your complaint, combined with others,
              can lead to fines, enforcement actions, or policy changes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Hit them where it hurts — their compliance record.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A single complaint letter to the right agency can do what months of
            emails and phone calls couldn&apos;t.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Complaint Letter — $2
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Want maximum pressure?{" "}
            <Link href="/tools/escalation" className="underline hover:text-white">
              Get the Escalation Pack — 3 letters for $5
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {faqs.map((item) => (
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
            name: "Complaint Letter Generator",
            description:
              "Generate properly formatted complaint letters to the BBB, FTC, CFPB, State Attorney General, and more. AI-powered with correct formatting.",
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
              url: "https://aidisputeengine.com/tools/complaint-letter",
            },
          }),
        }}
      />

      {/* Disclaimer */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. The documents generated by this service are for informational purposes only and do not constitute legal advice. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
