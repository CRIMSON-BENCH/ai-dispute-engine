import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Phone Call Script Generator — Know Exactly What to Say | AI Dispute Engine",
  description:
    "AI-written talking points for calling the other party, with objection handling, escalation language, and follow-up templates. $3 per script.",
  openGraph: {
    title:
      "Phone Call Script Generator — Know Exactly What to Say | AI Dispute Engine",
    description:
      "AI-written talking points for calling the other party, with objection handling, escalation language, and follow-up templates. $3 per script.",
  },
};

const CHECK = (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg
    className="ml-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const STEPS = [
  {
    step: "1",
    title: "Describe your dispute and who you're calling",
    description:
      "Tell us the company or person you need to call, the nature of your dispute, what outcome you want, and any prior communication. We tailor every word to your specific situation.",
  },
  {
    step: "2",
    title: "AI writes your script with objection responses",
    description:
      "Our AI generates a complete call script with an opening statement, key talking points, pre-written responses to the most common objections and pushback, and escalation language if the first representative can't help.",
  },
  {
    step: "3",
    title: "Practice and call",
    description:
      "Download your script, read through it once or twice, and make the call. You'll have every response ready before they even ask the question. After the call, use the included follow-up email template to document what was discussed.",
  },
];

const INCLUDED = [
  "Professional opening statement that establishes credibility and states your purpose",
  "Key talking points organized by priority with supporting facts",
  "Pre-written objection handling for common pushback and denials",
  "Escalation language for requesting supervisors and managers",
  "Call documentation template to record names, times, and commitments",
  "Follow-up email template to confirm verbal agreements in writing",
  "Legal reference points you can cite during the conversation",
  "Professional formatting with PDF & DOCX download",
];

const FAQ = [
  {
    q: "Why call instead of just sending a letter?",
    a: "Phone calls create immediate pressure that letters don't. A representative has to respond to you in real time — they can't file your complaint away and forget about it. Calls are especially effective for billing disputes, subscription cancellations, service complaints, and insurance claims where representatives have discretion to resolve issues on the spot. The ideal approach is both: call first for immediate resolution, then follow up in writing to document everything.",
  },
  {
    q: "What if the representative gets aggressive or dismissive?",
    a: "Your script includes specific language for handling difficult representatives. Stay calm, stick to facts, and use the escalation phrases we provide — phrases like 'I understand this isn't something you can resolve at your level. I'd like to speak with a supervisor who has the authority to address this.' If they refuse, ask for their name, employee ID, and note the time. This documentation strengthens your position for written complaints and regulatory filings.",
  },
  {
    q: "Should I record the phone call?",
    a: "Recording laws vary by state. In one-party consent states (about 38 states), you can record without telling the other person. In two-party or all-party consent states (like California, Florida, and Illinois), everyone on the call must agree to be recorded. If you're in a two-party state, simply say 'I'd like to record this call for my records' at the start — most companies already record calls and will agree. Your script includes the correct recording disclosure language for your state.",
  },
  {
    q: "What if they won't transfer me to a supervisor?",
    a: "Your script includes specific escalation paths for when you hit a wall. First, clearly state that the current representative cannot resolve your issue and you need someone with more authority. If they still refuse, ask for the name and mailing address of their complaints department, their corporate office address, and the name of any regulatory body that oversees them. Often, simply mentioning a regulatory complaint will prompt the transfer.",
  },
];

export default function PhoneScriptPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/disputes"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            Phone Call Script
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $3 per phone script
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Never Freeze on the Phone Again
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            You know what you want to say — until the moment someone picks up.
            Our AI writes a complete call script tailored to your dispute,
            with pre-written responses to every objection they&apos;ll throw at
            you and escalation language when the first person can&apos;t help.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Phone Script — $3
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                {CHECK} {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Walk into every call with a plan.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The person on the other end reads from a script. Now you will
            too — except yours is written to win.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Phone Script — $3
              {ARROW}
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
            name: "Phone Call Script Generator",
            description:
              "AI-written talking points for calling the other party, with objection handling, escalation language, and follow-up templates.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "3.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/phone-script",
            },
          }),
        }}
      />

      {/* Disclaimer */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. The documents generated by this service are for
            informational purposes only and do not constitute legal advice. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
