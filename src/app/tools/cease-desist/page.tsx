import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cease & Desist Letter Generator — Stop Harassment, Infringement & More",
  description:
    "Generate a professional cease and desist letter for harassment, copyright infringement, defamation, stalking, or debt collector abuse. AI-powered with legal citations. $2.",
  openGraph: {
    title:
      "Cease & Desist Letter Generator — Stop Harassment, Infringement & More",
    description:
      "Generate a professional cease and desist letter for harassment, copyright infringement, defamation, stalking, or debt collector abuse. AI-powered with legal citations. $2.",
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
    title: "Select the violation type",
    description:
      "Choose from harassment, copyright infringement, defamation, trademark violation, stalking, debt collector abuse, privacy violation, or neighbor harassment.",
  },
  {
    step: "2",
    title: "Describe what's happening",
    description:
      "Tell us the details — who's doing it, what they're doing, how long it's been going on, and any evidence you have.",
  },
  {
    step: "3",
    title: "Get your cease & desist letter",
    description:
      "Download a professional cease and desist letter with relevant statutes, a clear demand to stop, and consequences if they continue.",
  },
];

const LETTER_TYPES = [
  {
    title: "Harassment",
    description:
      "Unwanted contact, threats, intimidation. Cites state harassment statutes and potential criminal penalties.",
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
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "Copyright Infringement",
    description:
      "Someone using your content, images, or creative work without permission. Cites DMCA and Copyright Act provisions.",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Defamation",
    description:
      "False statements damaging your reputation. Covers both libel (written) and slander (spoken) with applicable state laws.",
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
    title: "Trademark Violation",
    description:
      "Unauthorized use of your brand name, logo, or trade dress. Cites Lanham Act provisions.",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Stalking",
    description:
      "Repeated unwanted following, monitoring, or contact. References criminal stalking statutes and restraining order procedures.",
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
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Debt Collector Abuse",
    description:
      "Illegal debt collection practices. Cites FDCPA violations and state consumer protection laws.",
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Privacy Violation",
    description:
      "Unauthorized sharing of personal information, images, or data. References state privacy laws and potential penalties.",
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
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Neighbor Harassment",
    description:
      "Ongoing neighbor disputes including noise, property damage, or threatening behavior. Cites local ordinances and state laws.",
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
];

const CEASE_DESIST_FEATURES = [
  "Demands they STOP a behavior",
  "Used for ongoing violations",
  "Focuses on future conduct",
  "Creates legal paper trail for escalation",
];

const DEMAND_LETTER_FEATURES = [
  "Demands they PAY money owed",
  "Used for financial disputes",
  "Focuses on past damages",
  "Precursor to small claims court filing",
];

const INCLUDED = [
  "AI-generated cease & desist letter customized to your situation",
  "Relevant federal and state statute citations",
  "Clear demand to stop the specific behavior",
  "Consequences for non-compliance (legal action, authorities)",
  "Professional business letter formatting",
  "PDF and DOCX download",
];

const FAQ = [
  {
    q: "Is a cease and desist letter legally binding?",
    a: "A cease and desist letter is not a court order, so it's not legally binding on its own. However, it creates an important paper trail showing that the person was formally warned. If you later need to take legal action, the letter demonstrates they were put on notice and chose to continue.",
  },
  {
    q: "What if they ignore the cease and desist?",
    a: "If they continue the behavior, you have several options: file a police report (for harassment or stalking), file a lawsuit, seek a restraining order, or report to relevant authorities. The cease and desist letter becomes evidence that you attempted to resolve it first.",
  },
  {
    q: "Can I send a cease and desist without a lawyer?",
    a: "Yes. Anyone can send a cease and desist letter. While attorney letters carry additional weight, a well-crafted letter citing the correct statutes is often equally effective, especially when the recipient knows their behavior is illegal.",
  },
  {
    q: "What's the difference between this and a restraining order?",
    a: "A cease and desist is a letter you send yourself — it's a formal warning. A restraining order is issued by a court and is legally enforceable. If a cease and desist doesn't stop the behavior, a restraining order is often the next step.",
  },
  {
    q: "How should I send the cease and desist letter?",
    a: "Send via certified mail with return receipt requested. This creates proof that the person received the letter and when they received it. Keep a copy for your records. This documentation is crucial if you need to escalate to legal action.",
  },
];

export default function CeaseDesistPage() {
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
            Cease &amp; Desist
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per cease &amp; desist letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop Them in Their Tracks.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A cease and desist letter is a formal legal warning demanding someone
            stop specific behavior. Our AI generates yours with the right
            statutes and legal language in 60 seconds.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Cease &amp; Desist — $2
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

      {/* Types of Cease & Desist Letters */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Types of cease &amp; desist letters
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Select your situation and our AI generates the right letter with the
          right statutes.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {LETTER_TYPES.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {type.icon}
              </div>
              <h3 className="font-semibold">{type.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cease & Desist vs Demand Letter */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Cease &amp; Desist vs. Demand Letter — What&apos;s the Difference?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-teal-500/50 bg-white p-6 dark:bg-slate-900">
              <h3 className="font-semibold text-teal-600 dark:text-teal-400">
                Cease &amp; Desist Letter
              </h3>
              <ul className="mt-4 space-y-3">
                {CEASE_DESIST_FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {CHECK} {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold text-slate-500 dark:text-slate-400">
                Demand Letter
              </h3>
              <ul className="mt-4 space-y-3">
                {DEMAND_LETTER_FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {CHECK} {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
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

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Put them on notice. Legally.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A cease and desist letter is often all it takes to stop unwanted
            behavior. When they see legal language and statute citations, they
            take it seriously.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Cease &amp; Desist — $2
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Need to demand payment instead?{" "}
            <Link href="/disputes" className="underline hover:text-white">
              Try our Demand Letter
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
            name: "Cease & Desist Letter Generator",
            description:
              "Generate a professional cease and desist letter for harassment, copyright infringement, defamation, stalking, or debt collector abuse with AI-powered legal citations.",
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
              url: "https://aidisputeengine.com/tools/cease-desist",
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
