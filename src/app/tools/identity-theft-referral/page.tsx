import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Identity Theft Protection — Compare Monitoring Services After a Data Breach | AI Dispute Engine",
  description:
    "Free tool: after generating your data breach dispute letter, compare identity theft monitoring services from Aura, LifeLock, and more. Protect your identity today.",
  openGraph: {
    title: "Identity Theft Protection — Compare Monitoring Services | AI Dispute Engine",
    description:
      "Free tool: compare identity theft monitoring services after a data breach. Find the right protection from Aura, LifeLock, and other top providers.",
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
  { step: "1", title: "Get your breach letter", description: "Use our data breach dispute letter generator to notify the company and demand remediation. This is your first line of defense after a breach." },
  { step: "2", title: "Choose a monitoring service", description: "Compare identity theft monitoring providers side by side — coverage, pricing, insurance limits, dark web scanning, and credit monitoring features." },
  { step: "3", title: "Activate protection", description: "Sign up directly with your chosen provider and start monitoring immediately. Most services activate in minutes and begin scanning the dark web right away." },
];

const INCLUDED = [
  "Free, unbiased comparison of leading identity theft monitoring services",
  "Side-by-side feature comparison including dark web monitoring and credit alerts",
  "Insurance coverage details — see how much each provider covers in theft losses",
  "Integration with our data breach letter so you are protected while you fight",
  "No spam — we never sell your data to lead aggregators or third parties",
  "Expert guidance on which type of monitoring fits your specific breach situation",
];

const FAQ = [
  {
    q: "Is this comparison tool really free?",
    a: "Yes. We earn referral commissions from partner providers like Aura and LifeLock if you sign up through our links. This does not affect your price — you pay the same rate as going to their website directly. We clearly label which providers are partners.",
  },
  {
    q: "Do I need identity theft monitoring after a data breach?",
    a: "It depends on what was exposed. If the breach included your Social Security number, financial account numbers, or login credentials, monitoring is strongly recommended. Even if only your email and name were leaked, dark web monitoring can alert you if that data appears in future breaches or fraud attempts.",
  },
  {
    q: "What is the difference between the monitoring services you compare?",
    a: "The main differences are coverage scope, insurance limits, and price. Some services focus on credit monitoring and alerts, while others include dark web scanning, social media monitoring, and up to $1 million in identity theft insurance. We break down every feature so you can choose what matters to you.",
  },
  {
    q: "Should I send the breach letter first or sign up for monitoring first?",
    a: "Do both at the same time. Send the breach dispute letter immediately to put the company on notice and preserve your legal rights. Activate monitoring at the same time so you are alerted to any fraudulent activity while the dispute is being resolved.",
  },
];

export default function IdentityTheftReferralPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Identity Theft Protection</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">Free tool</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Data Was Breached. Lock It Down Before Someone Uses It.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">After a data breach, identity thieves move fast. Compare top identity theft monitoring services, activate protection in minutes, and get alerts the moment someone tries to use your stolen information.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Compare Protection Services{ARROW}</Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Do Not Wait for the Damage to Start</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Identity thieves act within hours of a breach. Compare monitoring services and activate protection today — it is free to compare.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Find Your Protection Plan{ARROW}</Link>
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
        name: "Identity Theft Protection Comparison", description: "Free comparison tool for identity theft monitoring services after a data breach.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/identity-theft-referral" },
      }) }} />

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. This comparison tool is for informational purposes only. We may receive referral commissions from partner providers, which does not affect your pricing. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
