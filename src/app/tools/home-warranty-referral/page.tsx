import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Warranty Comparison — Find the Best Home Warranty After a Denied Claim | AI Dispute Engine",
  description:
    "Free tool: compare top home warranty providers after a denied claim. Get matched with companies that actually cover your appliances and systems. Unbiased comparison.",
  openGraph: {
    title: "Home Warranty Comparison — Find Better Coverage | AI Dispute Engine",
    description:
      "Free tool: compare top home warranty providers after a denied claim. Get matched with companies that actually cover your appliances and systems.",
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
  { step: "1", title: "Answer a few questions", description: "Tell us about your home — square footage, age of major systems, what was denied, and what coverage matters most to you. Takes about two minutes." },
  { step: "2", title: "Get matched with providers", description: "Our AI compares dozens of home warranty companies and surfaces the ones that best match your home, budget, and the coverage gaps your current provider left." },
  { step: "3", title: "Choose your provider", description: "Review side-by-side comparisons of coverage, pricing, claim approval rates, and customer reviews. Pick the provider that fits — or walk away, no pressure." },
];

const INCLUDED = [
  "Free, unbiased comparison of top-rated home warranty companies",
  "Personalized matches based on your home, systems, and budget",
  "Side-by-side coverage comparison so you can see exactly what is covered",
  "Real claim approval rates and customer satisfaction scores",
  "No spam — your information is never sold to lead aggregators",
  "Works alongside our dispute letter if you are fighting a denied claim",
];

const FAQ = [
  {
    q: "Is this really free?",
    a: "Yes, completely free to you. We earn a referral commission from warranty providers if you choose to sign up with one of our partners. This does not affect your price — you pay the same rate as going directly to the provider. If you do not sign up with anyone, you pay nothing.",
  },
  {
    q: "I just had a claim denied. Should I switch providers?",
    a: "Not necessarily — and we will tell you that. First, we recommend using our dispute letter tool to fight the denial. Many denied claims can be reversed. But if your provider has a pattern of denials or your coverage has gaps, switching may make sense, and this tool helps you compare alternatives.",
  },
  {
    q: "How do you choose which providers to recommend?",
    a: "We evaluate providers on coverage breadth, claim approval rates, customer reviews, pricing, and service call fees. We show you the best matches for your specific situation. We are transparent about which providers pay us referral fees — this is noted on each listing.",
  },
  {
    q: "Will I get spammed with calls after using this tool?",
    a: "No. We do not sell your phone number or email to lead aggregators. If you request a quote from a specific provider, only that provider will contact you. You control who gets your information.",
  },
];

export default function HomeWarrantyReferralPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Home Warranty Comparison</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">Free tool</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Warranty Denied Your Claim. Find One That Won&apos;t.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">After a denied home warranty claim, you deserve better coverage. Compare top-rated providers side by side, see real claim approval rates, and find a warranty that actually protects your home — completely free.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Compare Providers Free{ARROW}</Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Find a Warranty That Keeps Its Promises</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Compare coverage, pricing, and real approval rates — completely free, no strings attached.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Start Free Comparison{ARROW}</Link>
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
        name: "Home Warranty Comparison Tool", description: "Free comparison tool to find the best home warranty providers after a denied claim.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/home-warranty-referral" },
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
