import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goodwill Letter Generator — AI Dispute Engine",
  description:
    "Ask creditors to remove late payments from your credit report as a goodwill gesture. AI-generated persuasive goodwill letter with executive contact targeting. Only $2.",
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
    title: "Enter Your Details",
    description:
      "Tell us the creditor name, account details, and the late payment you want removed. Include any context about why the payment was late.",
  },
  {
    step: 2,
    title: "AI Writes Your Letter",
    description:
      "Our AI crafts a persuasive goodwill letter that acknowledges your payment history, explains the circumstances, and makes a compelling case for removal.",
  },
  {
    step: 3,
    title: "Send to the Right Person",
    description:
      "Download your letter and send it to the creditor&apos;s executive office or goodwill department. We include guidance on where to send it for maximum impact.",
  },
];

const INCLUDED = [
  "Personalized goodwill narrative tailored to your situation",
  "Account history acknowledgment showing your track record",
  "Specific late payment removal request with account details",
  "Executive contact targeting for higher approval rates",
  "Payment history context to strengthen your case",
  "Guidance on where and how to send your letter",
  "PDF & DOCX download ready to mail or email",
];

const FAQ = [
  {
    q: "What is a goodwill letter?",
    a: "A goodwill letter is a written request asking a creditor to remove a negative mark — typically a late payment — from your credit report as a gesture of goodwill. Unlike a formal dispute, you are not claiming the information is inaccurate. Instead, you are asking the creditor to make an exception based on your overall relationship and payment history.",
  },
  {
    q: "Do goodwill letters actually work?",
    a: "Yes, goodwill letters have a meaningful success rate, especially when sent to the right department. Creditors are not required to honor them, but many do — particularly when the customer has an otherwise strong payment history, the late payment was an isolated incident, and the letter is professional and persuasive. Success rates improve significantly when letters are sent to executive offices rather than general customer service.",
  },
  {
    q: "Which creditors accept goodwill letters?",
    a: "Most major creditors and banks will at least review a goodwill letter. Some creditors — including many credit card issuers and auto lenders — are well known for granting goodwill adjustments. Student loan servicers, mortgage companies, and utility providers may also consider them. Your letter will be formatted to maximize credibility with any type of creditor.",
  },
  {
    q: "How many times can I send one?",
    a: "There is no limit on how many goodwill letters you can send. If your first letter is denied, you can try again — especially if you can add new context, such as additional on-time payments since the late mark. Many people succeed on their second or third attempt, or by sending the letter to a different department within the same organization.",
  },
];

export default function GoodwillLetterPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Goodwill Letter</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">One Letter Could Add 100 Points to Your Credit Score</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Ask creditors to remove late payments from your credit report as a goodwill gesture. A single late payment can drop your score by 100+ points — a goodwill letter can get it back.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Goodwill Letter — $2{ARROW}
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
          <h2 className="text-2xl font-bold sm:text-3xl">Your Credit Score Is Worth More Than $2</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">A late payment can haunt your credit report for 7 years. A goodwill letter takes 5 minutes to generate and could restore the score you worked hard to build.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Generate Goodwill Letter — $2{ARROW}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Goodwill Letter Generator",
          description: "Ask creditors to remove late payments from your credit report as a goodwill gesture. AI-generated persuasive goodwill letter with executive contact targeting.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "2.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/goodwill-letter" },
        }),
      }} />

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
