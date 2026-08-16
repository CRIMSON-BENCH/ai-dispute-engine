import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Court Appearance Prep Kit — Walk Into Court Ready to Win",
  description:
    "What to wear, say, bring, and expect in court. AI-powered practice Q&A for your specific case type. Courtroom etiquette, judge questions, and state-specific procedures. $15.",
  openGraph: {
    title:
      "Court Appearance Prep Kit — Walk Into Court Ready to Win",
    description:
      "What to wear, say, bring, and expect in court. AI-powered practice Q&A for your specific case type. Courtroom etiquette, judge questions, and state-specific procedures. $15.",
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
    title: "Enter your case details and court date",
    description:
      "Tell us your case type, court location, hearing date, and what the dispute is about. We tailor everything to your specific situation.",
  },
  {
    step: "2",
    title: "AI builds your personalized prep kit",
    description:
      "Get a complete courtroom guide including what to wear, what to bring, how to address the judge, and a timeline of exactly what will happen.",
  },
  {
    step: "3",
    title: "Practice with AI judge Q&A simulation",
    description:
      "Our AI simulates the questions a judge will likely ask for your case type. Practice your answers until you feel confident and prepared.",
  },
];

const INCLUDED = [
  "Courtroom etiquette guide — how to stand, speak, and address the judge",
  "What to wear checklist tailored to your court type",
  "Document preparation checklist so you don&apos;t forget anything",
  "Opening statement template customized to your case",
  "AI judge Q&A practice — simulate real questions for your case type",
  "Timeline of what happens in court from arrival to verdict",
  "Common judge questions for your specific case type with suggested answers",
  "State-specific court procedures and local rules",
];

const FAQ = [
  {
    q: "Is this for small claims or regular court?",
    a: "Both. When you enter your case details, we tailor the prep kit to your specific court type — small claims, civil, family, traffic, or landlord-tenant. Each court has different procedures, and your kit reflects exactly what to expect in yours.",
  },
  {
    q: "Do I need a lawyer if I use this?",
    a: "This kit is designed for people representing themselves (pro se). It helps you prepare like an attorney would prepare a client. However, for complex cases involving significant money or serious legal consequences, consulting with an attorney is always recommended.",
  },
  {
    q: "What should I bring to court?",
    a: "Your prep kit includes a complete document checklist specific to your case type, but generally: all evidence and documents (organized in a folder), copies for the judge and opposing party, a pen and notepad, your ID, and your case/docket number. We cover everything in detail.",
  },
  {
    q: "How long will my hearing take?",
    a: "It depends on your case type and court. Small claims hearings typically last 15-30 minutes. Civil hearings can run 1-3 hours. Your prep kit includes a realistic timeline so you know what to expect and can plan your day accordingly.",
  },
];

export default function CourtPrepPage() {
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
            Court Appearance Prep Kit
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $15 per prep kit
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Walk Into Court Ready to Win
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            What to wear, what to say, what to bring, and what to expect.
            Plus an AI practice Q&A that simulates the exact questions a judge
            will ask for your specific case. Attorneys charge $500+ for court
            prep consultations. We charge $15.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Court Prep Kit — $15
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
            Don&apos;t walk in unprepared. Walk in ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The #1 reason people lose in court is lack of preparation — not lack
            of a good case. Know what to expect, practice your answers, and show
            up like you&apos;ve done this before.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Court Prep Kit — $15
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
            name: "Court Appearance Prep Kit",
            description:
              "What to wear, say, bring, and expect in court plus AI practice Q&A for your specific case type. Courtroom etiquette, judge questions, and state-specific procedures.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "15.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/court-prep",
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
