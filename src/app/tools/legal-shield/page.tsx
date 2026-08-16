import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Shield Plan — Document Vault, Monthly Letter & SMS Alerts | AI Dispute Engine",
  description:
    "Secure document vault, 1 free dispute letter per month, SMS delivery tracking alerts, and priority support. Just $5/month or $50/year.",
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
    step: 1,
    title: "Subscribe to Legal Shield",
    description:
      "Sign up for $5/month or $50/year. Your Legal Shield activates immediately with full access to every feature from day one.",
  },
  {
    step: 2,
    title: "Access Your Vault & Monthly Letter",
    description:
      "Store all your dispute documents in your encrypted vault. Generate 1 free dispute letter every month — any type, any recipient.",
  },
  {
    step: 3,
    title: "Get SMS Alerts & Priority Support",
    description:
      "Receive SMS tracking alerts when your letters are delivered. Get priority customer support whenever you need help with a dispute.",
  },
];

const INCLUDED = [
  "Secure encrypted document vault for all your dispute files",
  "1 free dispute letter per month (any type — demand, complaint, cease and desist, and more)",
  "SMS delivery tracking alerts when your letters are received",
  "Priority customer support with faster response times",
  "Dispute history dashboard to track all your cases",
  "Annual discount available — $50/year saves you $10",
];

const FAQ = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your Legal Shield subscription at any time with no cancellation fees, no penalties, and no questions asked. Your document vault remains accessible for 30 days after cancellation so you can download your files.",
  },
  {
    q: "What types of letters are included?",
    a: "Your monthly free letter can be any type we offer: demand letters, complaint letters, cease and desist letters, debt validation letters, goodwill letters, hardship letters, follow-up letters, and more. You choose the type each month based on what you need.",
  },
  {
    q: "How does the document vault work?",
    a: "Your document vault is an encrypted, secure storage space for all your dispute-related files. Upload contracts, correspondence, evidence, and any documents related to your disputes. Everything is organized by case and searchable, so you can find what you need instantly.",
  },
  {
    q: "Is there a free trial?",
    a: "We do not offer a free trial, but at $5/month you can try Legal Shield for less than the cost of a coffee. If it is not for you, cancel anytime. Your first month includes full access to every feature, including your free letter and document vault.",
  },
];

export default function LegalShieldPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Legal Shield</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$5/month</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Legal Protection That Never Sleeps</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Secure document vault, SMS tracking alerts, 1 free dispute letter every month, and priority support — all for $5/month or $50/year. Your disputes, organized and protected.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Your Legal Shield — $5/mo{ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
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

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Always Ready. Always Protected.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Disputes do not wait for a convenient time. With Legal Shield, you are always ready — a free letter every month, your documents secured, and tracking alerts keeping you informed. $5/month or $50/year (save $10).
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Your Legal Shield — $5/mo{ARROW}
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
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p>
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
            name: "Legal Shield Plan",
            description:
              "Secure document vault, 1 free dispute letter per month, SMS delivery tracking alerts, and priority support.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/legal-shield",
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
