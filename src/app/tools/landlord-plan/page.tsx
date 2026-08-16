import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landlord & Property Manager Plan — $29/mo | AI Dispute Engine",
  description:
    "Unlimited tenant notices, lease violation letters, security deposit accountings, and eviction notices for just $29/month. Property management made legally bulletproof.",
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
    title: "Subscribe & Add Your Properties",
    description:
      "Sign up for the Landlord Plan and add your rental properties to your dashboard. Enter addresses, unit details, and tenant information in minutes.",
  },
  {
    step: 2,
    title: "Generate Any Document Instantly",
    description:
      "Choose from tenant notices, lease violation letters, eviction notices, security deposit accountings, and more. Our AI tailors every document to your state&apos;s laws.",
  },
  {
    step: 3,
    title: "Track Notices & Deadlines",
    description:
      "Monitor every notice you&apos;ve sent, track cure periods, and never miss a legal deadline. Your entire paper trail lives in one organized dashboard.",
  },
];

const INCLUDED = [
  "Unlimited tenant notice generation",
  "Lease violation letters tailored to your state",
  "Security deposit accounting documents",
  "Late rent notice templates with proper legal language",
  "Move-in / move-out inspection forms",
  "Eviction notice templates (state-specific cure periods)",
  "Property management dashboard with deadline tracking",
  "Annual discount available — $290/year (save $58)",
];

const FAQ = [
  {
    q: "How many properties can I manage?",
    a: "There is no limit. Whether you manage 1 unit or 100, the Landlord Plan covers all of your properties for one flat monthly rate.",
  },
  {
    q: "Are the notices state-specific?",
    a: "Yes. Every document is generated using the legal requirements for your state, including cure periods, notice timelines, and required disclosures. We currently support all 50 U.S. states and Washington, D.C.",
  },
  {
    q: "Can my property manager use this?",
    a: "Absolutely. You can invite a property manager or team member to your account so they can generate and track notices on your behalf.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. Cancel your subscription at any time from your account settings and you won&apos;t be charged again.",
  },
];

export default function LandlordPlanPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Landlord Plan</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$29/month</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Property Management Made Legally Bulletproof</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Unlimited tenant notices, lease violation letters, security deposit accountings, and eviction notices — all tailored to your state&apos;s laws. Property management legal software costs $100+/month. We charge $29.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Your Landlord Plan{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Stop Overpaying for Property Management Legal Docs</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            One flat rate. Unlimited documents. Every notice tailored to your state. Join landlords who manage their properties with confidence.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Your Landlord Plan{ARROW}
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
            name: "Landlord & Property Manager Plan",
            description:
              "Unlimited tenant notices, lease violation letters, security deposit accountings, and eviction notices for property managers.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "29.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/landlord-plan",
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
