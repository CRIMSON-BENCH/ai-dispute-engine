import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class Action Connector — Find & Join Class Action Lawsuits | AI Dispute Engine",
  description:
    "AI matches your dispute to active and forming class action lawsuits. Get connected with plaintiff firms fighting the same company. One-time $5 search.",
  openGraph: {
    title: "Class Action Connector — Find & Join Lawsuits | AI Dispute Engine",
    description:
      "AI matches your dispute to active and forming class action lawsuits. Get connected with plaintiff firms fighting the same company. One-time $5 search.",
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
  { step: "1", title: "Describe your dispute", description: "Tell us the company, what happened, and the amount involved. The more detail you provide, the better our AI can match you to relevant lawsuits." },
  { step: "2", title: "AI matches class actions", description: "Our AI searches active, settled, and forming class action lawsuits across federal and state courts. We match based on company, complaint type, and timing." },
  { step: "3", title: "Get connected", description: "Review matched lawsuits with plain-English summaries. If a match fits, we connect you directly with the plaintiff firm — no middlemen, no fees beyond the $5 search." },
];

const INCLUDED = [
  "AI-powered search across thousands of active and forming class action lawsuits",
  "Matches based on company name, dispute type, dollar amount, and timeline",
  "Plain-English summaries of each matched lawsuit — no legal jargon",
  "Direct connection to plaintiff law firms with no additional fees",
  "Alert notifications if a new class action forms that matches your dispute",
  "Full search results report you can save and share with your attorney",
];

const FAQ = [
  {
    q: "What is a class action lawsuit?",
    a: "A class action is a lawsuit filed on behalf of a large group of people who all experienced the same harm from the same company. Instead of each person filing individually, one lawsuit represents everyone. If the lawsuit wins, all class members share in the settlement — often without needing to do anything beyond joining.",
  },
  {
    q: "Does it cost anything to join a class action?",
    a: "No. Joining a class action is free. Plaintiff firms work on contingency, meaning they only get paid if the lawsuit wins. The $5 fee here is only for the AI search that matches you to relevant lawsuits — there is no cost to actually join one.",
  },
  {
    q: "What if there is no matching class action?",
    a: "If we do not find a current match, we save your dispute details and automatically notify you if a relevant class action is filed in the future. Many class actions take months to form, so a match may appear later. Your $5 covers ongoing monitoring for 12 months.",
  },
  {
    q: "Can I still file my own dispute letter and join a class action?",
    a: "In most cases, yes. Filing an individual complaint or dispute letter does not prevent you from joining a class action. In fact, having documentation of your individual complaint can strengthen the class action. We recommend doing both.",
  },
];

export default function ClassActionConnectorPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Class Action Connector</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$5 one-time</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">You Are Probably Not the Only One They Did This To</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">If a company wronged you, chances are they wronged thousands of others too. Our AI searches active and forming class action lawsuits, matches your dispute, and connects you with plaintiff firms who are already fighting back.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Search Class Actions — $5{ARROW}</Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Strength in Numbers</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">One complaint is easy to ignore. Thousands are not. Find out if someone is already taking the fight to court.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Find Matching Lawsuits{ARROW}</Link>
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
        name: "Class Action Connector", description: "AI-powered tool to match your dispute to active and forming class action lawsuits and connect with plaintiff firms.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/class-action-connector" },
      }) }} />

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. The class action matching service is for informational purposes only. We do not guarantee inclusion in any class action lawsuit. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
