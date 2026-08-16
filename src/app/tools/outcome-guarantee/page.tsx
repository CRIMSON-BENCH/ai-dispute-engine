import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outcome Guarantee — Get Results or Get Your Money Back | AI Dispute Engine",
  description:
    "Add a $10 guarantee to any dispute letter. If the company doesn't respond within 30 days, get a full credit plus a free escalation letter. Zero risk.",
  openGraph: {
    title: "Outcome Guarantee — Results or Money Back | AI Dispute Engine",
    description:
      "Add a $10 guarantee to any dispute letter. If the company doesn't respond within 30 days, get a full credit plus a free escalation letter. Zero risk.",
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
  { step: "1", title: "Add the guarantee to any letter", description: "When generating any dispute letter, check the Outcome Guarantee box. It adds $10 to your order and activates our response tracking system." },
  { step: "2", title: "We track the response", description: "Our system monitors for a response from the company. You can also log responses manually. We keep a verified timeline of every interaction." },
  { step: "3", title: "Get refunded if ignored", description: "If the company does not respond within 30 days, you receive a full credit for the original letter plus a free escalation letter that ratchets up the pressure." },
];

const INCLUDED = [
  "Full credit refund on your letter if the company does not respond in 30 days",
  "Free escalation letter that cites their failure to respond",
  "Automated response tracking with email and dashboard notifications",
  "Verified dispute timeline you can use as evidence in court",
  "Priority support for guaranteed disputes",
  "Stackable — add the guarantee to multiple letters at once",
];

const FAQ = [
  {
    q: "What counts as a response?",
    a: "A response means the company acknowledges your dispute in writing — by email, letter, or through their portal. An automated 'we received your message' reply does not count. The response must address the substance of your dispute. You are the final judge of whether a response qualifies.",
  },
  {
    q: "How do I get my refund if they do not respond?",
    a: "After 30 days with no qualifying response, we automatically issue a credit to your AI Dispute Engine account. You can use that credit toward any future letter or tool. We also generate a free escalation letter that references their failure to respond, which strengthens your case.",
  },
  {
    q: "Can I add the guarantee to any type of letter?",
    a: "Yes. The Outcome Guarantee works with complaint letters, demand letters, cease and desist letters, insurance appeals, debt validation letters, and every other letter type we offer. Add it at checkout for $10 per letter.",
  },
  {
    q: "What if the company responds but does not resolve my issue?",
    a: "The guarantee covers non-response only — if a company replies but refuses your demand, the guarantee does not trigger. However, the escalation letter is designed for exactly this situation, and you can purchase one separately at any time.",
  },
];

export default function OutcomeGuaranteePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Outcome Guarantee</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$10 add-on</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">They Respond, or You Don&apos;t Pay</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">Worried your letter will be ignored? Add the Outcome Guarantee for $10. If the company fails to respond within 30 days, you get a full credit back plus a free escalation letter that turns up the heat.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Add Guarantee to Your Letter{ARROW}</Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Take the Risk Out of Fighting Back</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">For just $10, you are guaranteed a response — or you get your money back and a stronger follow-up letter, free.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Get the Guarantee — $10{ARROW}</Link>
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
        name: "Outcome Guarantee", description: "Refund guarantee on any dispute letter: if the company doesn't respond in 30 days, get a full credit plus a free escalation letter.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/outcome-guarantee" },
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
