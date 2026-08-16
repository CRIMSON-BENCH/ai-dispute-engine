import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Follow-Up Letter Generator — Turn Up the Pressure | AI Dispute Engine",
  description:
    "They ignored your demand letter? Generate a professional follow-up letter with stronger language, shorter deadlines, and mention of next steps. $2 per letter.",
  openGraph: {
    title:
      "Follow-Up Letter Generator — Turn Up the Pressure | AI Dispute Engine",
    description:
      "They ignored your demand letter? Generate a professional follow-up letter with stronger language, shorter deadlines, and mention of next steps. $2 per letter.",
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
    title: "Reference your original letter",
    description:
      "Tell us about your original demand letter — when you sent it, what you asked for, and the deadline you set. We build on your existing case.",
  },
  {
    step: "2",
    title: "AI escalates the tone",
    description:
      "Our AI drafts a follow-up with firmer language, a shorter response deadline, and explicit mention of your next steps — including regulatory complaints and small claims court.",
  },
  {
    step: "3",
    title: "Download and send",
    description:
      "Get your follow-up letter in PDF and DOCX format. Send it via certified mail for a paper trail that holds up in court.",
  },
];

const WHEN_TO_SEND = [
  {
    title: "No response after 10-14 days",
    description:
      "The standard window. If they haven't responded to your original demand letter within two weeks, it's time to follow up.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "They acknowledged but stalled",
    description:
      "They said they'd look into it but went silent. A follow-up shows you're tracking their promises and won't be brushed off.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Partial response",
    description:
      "They addressed some concerns but ignored others. Your follow-up zeroes in on the unresolved issues with renewed urgency.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75h8.25A2.25 2.25 0 0116.5 6v12a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Before escalating to court",
    description:
      "Courts look favorably on plaintiffs who made multiple good-faith attempts to resolve the dispute before filing.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-600 dark:text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
  },
];

const INCLUDED = [
  "Follow-up letter referencing your original demand",
  "Shorter response deadline (7 days vs original 14-30)",
  "Stronger, more assertive language",
  "Mention of next steps (regulatory complaints, small claims court)",
  "Updated legal citations and statute references",
  "Professional formatting with PDF & DOCX download",
];

const FAQ = [
  {
    q: "How long should I wait before sending a follow-up?",
    a: "We recommend waiting 10-14 days after your original demand letter. This gives the recipient reasonable time to respond while showing the court you were patient.",
  },
  {
    q: "Is a follow-up letter legally required before court?",
    a: "Not in most states, but it strengthens your case. Courts appreciate plaintiffs who made multiple attempts to resolve disputes before filing. It shows good faith.",
  },
  {
    q: "What if they respond to the follow-up?",
    a: "Great — that's the goal. If their response is reasonable, you can negotiate. If it's unsatisfactory, you have documentation of multiple attempts, strengthening your position for court.",
  },
  {
    q: "Can I send a follow-up if I didn't use AI Dispute Engine for my first letter?",
    a: "Yes. Just provide the details of your original letter and dispute, and our AI will generate an appropriate follow-up that builds on your case.",
  },
  {
    q: "What's the difference between a follow-up and a final notice?",
    a: "A follow-up is the second step — it references your original letter and increases pressure. A final notice (intent to sue) is the last step before filing in court, with specific court filing deadlines and legal consequences.",
  },
];

export default function FollowUpLetterPage() {
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
            Follow-Up Letter
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per follow-up letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            They Ignored You. Don&apos;t Let Them.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            When your first letter goes unanswered, silence is not an option.
            Our AI generates a follow-up that turns up the pressure with shorter
            deadlines and stronger language.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Follow-Up Letter — $2
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

      {/* When to Send */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          When to send a follow-up
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Not sure if it&apos;s time? Here are the most common scenarios.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHEN_TO_SEND.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
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

      {/* Tone Escalation Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          How the tone escalates
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Professional throughout — but your follow-up leaves no room for
          ambiguity.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-500 dark:text-slate-400">
              Your First Letter
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Professional and measured. States the facts, cites the law,
              requests resolution within 14-30 days.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-teal-500/50 bg-white p-6 dark:bg-slate-900">
            <h3 className="font-semibold text-teal-600 dark:text-teal-400">
              Your Follow-Up
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Professional but firmer. References their failure to respond,
              shortens the deadline, explicitly mentions filing complaints and
              court action.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Silence is not a defense. Make them respond.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Your follow-up letter puts them on notice that you&apos;re not going
            away.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Follow-Up Letter — $2
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Need to go further?{" "}
            <Link
              href="/tools/final-notice"
              className="underline hover:text-white"
            >
              Try the Final Notice — Intent to Sue
            </Link>
          </p>
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
            name: "Follow-Up Letter Generator",
            description:
              "Generate a professional follow-up letter with stronger language, shorter deadlines, and mention of next steps when your demand letter goes unanswered.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/follow-up-letter",
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
