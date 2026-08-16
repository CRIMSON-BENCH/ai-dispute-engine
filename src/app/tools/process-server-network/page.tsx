import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Process Server Network | AI Dispute Engine",
  description:
    "Nationwide network of process servers for serving legal documents. Upload your documents, select a server in the target area, and track completion for $50.",
  openGraph: {
    title: "Process Server Network | AI Dispute Engine",
    description:
      "Nationwide network of process servers for serving legal documents. Upload your documents, select a server in the target area, and track completion for $50.",
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
    title: "Upload Your Documents",
    description:
      "Upload the legal documents that need to be served. Our system accepts PDFs and scanned documents for summons, complaints, subpoenas, and other court filings.",
  },
  {
    step: "2",
    title: "Select a Server in the Target Area",
    description:
      "Enter the service address and our network finds verified, licensed process servers in that area. Review server profiles, ratings, and estimated timelines before selecting one.",
  },
  {
    step: "3",
    title: "Track Service Completion",
    description:
      "Follow every attempt in real time through your dashboard. Receive SMS and email updates at each stage, and get your proof of service affidavit as soon as service is complete.",
  },
];

const INCLUDED = [
  "Access to a nationwide network of licensed process servers",
  "Real-time tracking of every service attempt via dashboard",
  "SMS and email notifications at each stage of service",
  "Proof of service affidavit delivered upon completion",
  "Support for summons, complaints, subpoenas, and other filings",
  "Rush service available for time-sensitive matters",
];

const FAQ = [
  {
    q: "What types of documents can be served?",
    a: "Our network handles all standard legal documents including summons and complaints, subpoenas, eviction notices, restraining orders, divorce papers, cease and desist letters, and other court filings that require formal service of process.",
  },
  {
    q: "How long does service take?",
    a: "Standard service typically completes within 3 to 7 business days, depending on the location and availability of the recipient. Rush service is available for time-sensitive matters and can often be completed within 24 to 48 hours for an additional fee.",
  },
  {
    q: "Are the process servers licensed?",
    a: "Yes. Every process server in our network is licensed and insured in their operating jurisdiction. We verify credentials, bonding status, and compliance with state-specific service of process requirements before admitting servers to the network.",
  },
  {
    q: "What happens if service cannot be completed?",
    a: "If the process server is unable to complete service after multiple attempts, you receive a detailed log of every attempt including dates, times, and descriptions. You can then choose alternative service methods, request skip tracing to locate the recipient, or receive a refund for unsuccessful service.",
  },
];

export default function ProcessServerNetworkPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Process Server Network</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$50 per service</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Serve Legal Documents Anywhere in the Country</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Need documents served? Our nationwide network of licensed process servers handles the delivery, tracking, and proof of service — so you can focus on your case instead of chasing down a recipient.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Serve Documents — $50{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Get Your Documents Served the Right Way</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Improper service can get your case thrown out. Our licensed process servers ensure legally compliant delivery with full proof of service documentation.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Serve Documents — $50{ARROW}
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
        name: "Process Server Network", description: "Nationwide network of licensed process servers for serving legal documents. Upload, select a server, and track completion with proof of service.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "50.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/process-server-network" },
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
