import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI Negotiation Coach — Practice Before the Real Thing | AI Dispute Engine",
  description:
    "Practice your negotiation with AI role-playing as the other party. Get real-time argument scoring, weakness identification, and strategy feedback for $10. Negotiation coaches charge $200+/hour — practice unlimited for $10.",
  openGraph: {
    title:
      "AI Negotiation Coach — Practice Before the Real Thing | AI Dispute Engine",
    description:
      "Practice your negotiation with AI role-playing as the other party. Get real-time argument scoring, weakness identification, and strategy feedback for $10.",
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
    title: "Describe your dispute and the other party",
    description:
      "Tell us what you&apos;re negotiating, who the other party is, what you want, and what you think they&apos;ll push back on. The more context you provide, the more realistic the simulation.",
  },
  {
    step: "2",
    title: "AI role-plays as your opponent",
    description:
      "Our AI takes on the role of the other party — a landlord, insurance adjuster, debt collector, HR rep, or anyone else — and responds to your arguments with realistic objections, deflections, and counteroffers.",
  },
  {
    step: "3",
    title: "Get scored feedback and improve your strategy",
    description:
      "After each round, receive detailed scoring on your argument strength, emotional control, and persuasion tactics. Get specific suggestions to improve your approach before the real conversation.",
  },
];

const INCLUDED = [
  "AI role-play simulation tailored to your specific dispute",
  "Real-time argument scoring after each exchange",
  "Weakness identification in your negotiation position",
  "Suggested counter-arguments for the other party&apos;s likely objections",
  "Emotional control coaching and de-escalation techniques",
  "Comprehensive negotiation strategy report after each session",
  "Unlimited practice sessions for 24 hours from purchase",
  "Scenario variations to prepare for different outcomes",
];

const FAQ = [
  {
    q: "How realistic is the simulation?",
    a: "Very. Our AI is trained on thousands of real negotiation transcripts, dispute outcomes, and behavioral psychology research. It doesn&apos;t just throw softballs — it pushes back with the same tactics real opponents use: deflection, anchoring, emotional pressure, and strategic silence. Users consistently report that the real negotiation felt easier than the practice.",
  },
  {
    q: "Can I practice for phone negotiations?",
    a: "Yes. While the practice sessions are text-based, the strategies, counter-arguments, and scripts you develop work for phone calls, in-person meetings, and written communications. The AI provides specific talking points and phrases you can use word-for-word in phone conversations, along with coaching on tone and pacing.",
  },
  {
    q: "What negotiation strategies does it teach?",
    a: "The coach draws from established negotiation frameworks including BATNA analysis, principled negotiation, anchoring techniques, the contrast principle, and strategic concession patterns. It adapts its teaching to your specific situation — a medical bill negotiation requires different tactics than a landlord dispute or salary negotiation.",
  },
  {
    q: "Can I save my practice sessions?",
    a: "Yes. Every practice session is saved for the full 24-hour access period. You can review past sessions, track your improvement across rounds, and export your negotiation strategy report as a reference document to use during the real conversation.",
  },
];

export default function NegotiationCoachPage() {
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
            AI Negotiation Coach
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $10 for 24-hour access
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Practice Your Negotiation Before the Real Thing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            You wouldn&apos;t walk into a job interview without practicing. Why
            walk into a negotiation unprepared? Our AI plays the other side —
            pushing back, making counteroffers, and using real tactics — so you
            can sharpen your arguments before the stakes are real. Negotiation
            coaches charge $200+/hour. Practice unlimited for $10.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start Practicing — $10
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
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
            Win the negotiation before it starts.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Every practice round sharpens your arguments, exposes your
            weaknesses, and builds the confidence you need to get the outcome
            you deserve.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Start Practicing — $10
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
            name: "AI Negotiation Coach",
            description:
              "Practice your negotiation with AI role-playing as the other party. Get real-time argument scoring, weakness identification, and strategy feedback.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "10.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/negotiation-coach",
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
