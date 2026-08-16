import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Credit Repair Bundle — Three Letters, One Price, Better Credit | AI Dispute Engine",
  description:
    "Debt validation, goodwill adjustment, and credit bureau dispute letters packaged together. 3 FDCPA/FCRA-compliant letters for $15. Credit repair companies charge $79-$149/month for months — we charge $15 one time.",
  openGraph: {
    title:
      "Credit Repair Bundle — Three Letters, One Price, Better Credit | AI Dispute Engine",
    description:
      "Debt validation, goodwill adjustment, and credit bureau dispute letters packaged together. 3 FDCPA/FCRA-compliant letters for $15.",
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
    title: "Enter your credit issues and accounts",
    description:
      "Tell us about the negative items on your credit report — collections, late payments, inaccurate balances, or accounts you don&apos;t recognize. Include creditor names, account numbers, and amounts for the strongest letters.",
  },
  {
    step: "2",
    title: "AI generates all three dispute letters",
    description:
      "Our AI creates a coordinated set of three letters: a debt validation letter citing FDCPA Section 809, a goodwill adjustment letter for paid accounts, and a credit bureau dispute letter under FCRA Section 611 — each tailored to your specific accounts.",
  },
  {
    step: "3",
    title: "Send to bureaus and creditors",
    description:
      "Download all three letters in PDF or DOCX format. Send the debt validation to collectors, the goodwill letter to original creditors, and the bureau dispute to Equifax, Experian, and TransUnion. We include all mailing addresses and a follow-up calendar.",
  },
];

const INCLUDED = [
  "Debt validation letter (FDCPA Section 809 compliant) demanding proof of the alleged debt",
  "Goodwill adjustment letter requesting removal of negative marks on paid accounts",
  "Credit bureau dispute letter (FCRA Section 611 compliant) for inaccurate reporting",
  "Bureau mailing addresses for Equifax, Experian, and TransUnion",
  "Certified mail tracking guide with return receipt instructions",
  "30/60/90 day follow-up calendar with action items for each milestone",
  "Credit score improvement estimate based on your specific issues",
  "Escalation letter template if bureaus fail to respond within 30 days",
];

const FAQ = [
  {
    q: "How much will my score improve?",
    a: "Results vary based on your specific credit profile, but removing even one collection account can improve your score by 50-100 points. Late payment removals through goodwill letters typically add 20-50 points. Correcting inaccurate balances or accounts through bureau disputes can add 10-40 points. The bundle attacks your credit from three angles simultaneously to maximize improvement.",
  },
  {
    q: "Which letter should I send first?",
    a: "Send all three at the same time — they work on different targets simultaneously. The debt validation letter goes to collectors (they have 30 days to respond), the goodwill letter goes to original creditors (no legal deadline, but most respond within 2-4 weeks), and the bureau dispute goes to the credit bureaus (they have 30 days to investigate under FCRA). Sending them together starts all three clocks at once.",
  },
  {
    q: "Do I send to all three bureaus?",
    a: "Yes. Negative items often appear on all three credit reports — Equifax, Experian, and TransUnion — but sometimes with different details or only on one or two reports. Sending your dispute to all three ensures nothing is missed. We include the correct mailing addresses for each bureau&apos;s dispute department and format each letter to meet their specific requirements.",
  },
  {
    q: "How long does credit repair take?",
    a: "The legal timelines are fixed: debt collectors have 30 days to validate under FDCPA, and credit bureaus have 30 days to investigate under FCRA. Most goodwill requests are answered within 2-4 weeks. You should see the first changes on your credit report within 30-45 days. For comprehensive repair, plan for 60-90 days to address all items and send follow-ups where needed — our calendar guides you through each step.",
  },
];

export default function CreditRepairBundlePage() {
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
            Credit Repair Bundle
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $15 for all three letters
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Three Letters. One Price. Better Credit.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Fixing your credit doesn&apos;t require a monthly subscription or a
            credit repair company taking hundreds of dollars. Our AI generates
            three coordinated dispute letters — debt validation, goodwill
            adjustment, and credit bureau dispute — that attack negative items
            from every angle. Credit repair companies charge $79-$149/month for
            months. We charge $15 one time.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Credit Repair Bundle — $15
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
            Your credit score shouldn&apos;t cost $149/month to fix.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Three letters, three targets, one price. The same dispute strategy
            credit repair companies charge monthly fees for — delivered instantly
            for $15.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Credit Repair Bundle — $15
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
            name: "Credit Repair Bundle",
            description:
              "Debt validation, goodwill adjustment, and credit bureau dispute letters packaged together. 3 FDCPA/FCRA-compliant letters for one price.",
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
              url: "https://aidisputeengine.com/tools/credit-repair-bundle",
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
