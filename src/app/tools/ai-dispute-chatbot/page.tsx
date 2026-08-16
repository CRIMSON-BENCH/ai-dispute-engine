import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Dispute Chatbot | AI Dispute Engine",
  description:
    "Unlimited AI-powered dispute assistant for $5/mo. Get real-time guidance drafting letters, escalating complaints, and resolving disputes through conversational AI.",
  openGraph: {
    title: "AI Dispute Chatbot | AI Dispute Engine",
    description:
      "Unlimited AI-powered dispute assistant for $5/mo. Get real-time guidance drafting letters, escalating complaints, and resolving disputes through conversational AI.",
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
    title: "Subscribe for $5/mo",
    description:
      "Unlock unlimited conversations with our dispute AI. Cancel anytime with no commitment.",
  },
  {
    step: "2",
    title: "Chat with your AI advisor",
    description:
      "Describe your situation in plain language. The chatbot asks clarifying questions and builds your case in real time.",
  },
  {
    step: "3",
    title: "Get custom guidance",
    description:
      "Receive tailored dispute language, escalation strategies, and next-step recommendations you can act on immediately.",
  },
];

const INCLUDED = [
  "Unlimited conversations across all dispute types",
  "AI-drafted dispute language ready to copy and send",
  "Smart escalation suggestions when initial attempts fail",
  "Coverage for credit, billing, landlord, and consumer disputes",
  "Conversation history saved so you can pick up where you left off",
  "New dispute categories and capabilities added monthly",
];

const FAQ = [
  {
    q: "How is this different from the free letter generator?",
    a: "The free generator creates a single letter from a template. The chatbot is a conversational advisor that walks you through your entire dispute strategy, drafts custom language, suggests when and how to escalate, and adapts in real time as your situation evolves.",
  },
  {
    q: "What kinds of disputes can the chatbot help with?",
    a: "The AI handles credit report errors, billing disputes, landlord-tenant issues, debt collection harassment, insurance claim denials, warranty complaints, and more. If your dispute involves a company or institution treating you unfairly, the chatbot can help.",
  },
  {
    q: "Is the advice legally binding?",
    a: "No. The chatbot provides informational guidance and suggested language based on consumer protection frameworks. It is not a lawyer and does not provide legal advice. For complex legal matters, we recommend consulting a licensed attorney.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. There are no contracts or cancellation fees. You can cancel from your account settings and retain access through the end of your billing period.",
  },
];

export default function AIDisputeChatbotPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
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
            AI Dispute Chatbot
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5/month
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your 24/7 AI Dispute Advisor
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Stop guessing what to say. Chat with an AI that understands consumer
            rights, drafts dispute language on the fly, and tells you exactly
            when to escalate.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start Chatting Now
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Fight smarter for $5/month
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Most disputes are won or lost based on the language you use. Let AI
            give you the words that work.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Subscribe Now
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AI Dispute Chatbot",
            description:
              "Unlimited conversational AI that walks users through disputes, drafts language, and suggests escalation strategies.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/ai-dispute-chatbot",
            },
          }),
        }}
      />

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
