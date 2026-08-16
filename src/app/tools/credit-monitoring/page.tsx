import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Credit Monitoring | AI Dispute Engine",
  description:
    "AI-powered credit monitoring for $5/mo. Get instant alerts on new disputes, collections, credit report changes, and suspicious activity before damage is done.",
  openGraph: {
    title: "AI Credit Monitoring | AI Dispute Engine",
    description:
      "AI-powered credit monitoring for $5/mo. Get instant alerts on new disputes, collections, credit report changes, and suspicious activity before damage is done.",
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

const STEPS = [
  {
    step: "1",
    title: "Connect Your Credit Profile",
    description:
      "Link your credit profile securely. Our AI begins scanning your reports from all three bureaus within minutes of setup.",
  },
  {
    step: "2",
    title: "AI Monitors for Changes",
    description:
      "Our AI watches your credit reports around the clock, tracking new accounts, balance changes, hard inquiries, collections, and dispute status updates.",
  },
  {
    step: "3",
    title: "Get Instant Alerts",
    description:
      "Receive real-time notifications by email and SMS the moment something changes. Each alert includes a plain-English explanation and recommended next steps.",
  },
];

const INCLUDED = [
  "Real-time monitoring across all three credit bureaus",
  "Instant email and SMS alerts on credit report changes",
  "New collections and dispute status tracking",
  "Hard inquiry and new account detection",
  "AI-generated plain-English explanations for every alert",
  "Monthly credit health summary report",
];

const FAQ = [
  {
    q: "How quickly will I receive alerts?",
    a: "Most alerts are delivered within minutes of a change appearing on your credit report. Our AI scans continuously throughout the day, so you are notified as soon as new activity is detected rather than waiting for a weekly or monthly update.",
  },
  {
    q: "Does this replace my free credit monitoring?",
    a: "Free services typically cover only one bureau with delayed alerts. AI Credit Monitoring covers all three bureaus in real time and adds AI-powered analysis that explains what each change means and whether you need to take action.",
  },
  {
    q: "Will connecting my profile affect my credit score?",
    a: "No. Connecting your credit profile uses a soft pull, which does not impact your credit score. Monitoring is completely passive and read-only.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or cancellation fees. You can cancel your $5/month subscription at any time and retain access through the end of your current billing period.",
  },
];

export default function CreditMonitoringPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Credit Monitoring</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$5/month</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI-Powered Credit Monitoring That Never Sleeps</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Collections, disputes, new accounts, hard inquiries — our AI watches your credit reports around the clock and alerts you the moment something changes, so you can act before damage is done.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Monitoring for $5/mo{ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">{s.step}</div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (<li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Stop Surprises Before They Hit Your Score</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The average person discovers a credit error 6 months after it appears. With AI Credit Monitoring, you find out in minutes — not months.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Monitoring for $5/mo{ARROW}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (<div key={item.q} className="py-5"><h3 className="text-sm font-semibold">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p></div>))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: "AI Credit Monitoring", description: "AI-powered credit monitoring that alerts you to new disputes, collections, and credit report changes across all three bureaus.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/credit-monitoring" },
      }) }} />

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
