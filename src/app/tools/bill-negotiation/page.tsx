import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bill Negotiation Letter Pack — Stop Overpaying | AI Dispute Engine",
  description:
    "Medical, cable, insurance, and utility bill reduction letters. Average savings: $500+. AI-generated negotiation letters customized to your bills for $10. Bill negotiation services take 40% of your savings — keep 100% of yours.",
  openGraph: {
    title:
      "Bill Negotiation Letter Pack — Stop Overpaying | AI Dispute Engine",
    description:
      "Medical, cable, insurance, and utility bill reduction letters. Average savings: $500+. AI-generated negotiation letters customized to your bills for $10.",
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
    title: "Tell us which bills you want to negotiate",
    description:
      "Select the types of bills you&apos;re overpaying — medical, cable/internet, insurance, utilities, or subscriptions. Enter the current amounts and any details about your account history or competitor offers.",
  },
  {
    step: "2",
    title: "AI generates customized negotiation letters",
    description:
      "Our AI crafts personalized negotiation letters for each bill, citing industry-specific leverage points, competitor pricing, loyalty discounts, and regulatory requirements that companies respond to.",
  },
  {
    step: "3",
    title: "Send and start saving",
    description:
      "Download your letters in PDF or DOCX format and send them to each company. Most companies respond within 7-14 days. Our letters are designed to trigger their retention department, where the real discounts live.",
  },
];

const INCLUDED = [
  "Medical bill reduction letter citing fair pricing and financial hardship provisions",
  "Cable/internet rate negotiation letter with competitor pricing comparison",
  "Insurance premium dispute letter referencing rate justification requirements",
  "Utility bill dispute letter for overcharges and billing errors",
  "Subscription cancellation and retention offer letter",
  "Competitor pricing comparison template you can customize",
  "Average savings calculator based on your specific bills",
  "Follow-up letter template if the first attempt is declined",
];

const FAQ = [
  {
    q: "How much can I save?",
    a: "Results vary by bill type, but our users report average savings of $500+ per year across all their bills. Medical bills see the largest reductions — hospitals routinely accept 40-60% less than the billed amount. Cable and internet bills typically drop $20-50/month when you cite competitor rates. Insurance premiums can decrease 10-25% with the right leverage points.",
  },
  {
    q: "Do companies actually reduce bills from a letter?",
    a: "Yes. Companies have dedicated retention departments whose entire job is to keep customers from leaving. A well-written negotiation letter signals that you&apos;re informed, serious, and willing to switch providers. Medical providers have financial hardship programs they rarely advertise. The key is using the right language and leverage points — which is exactly what our AI is trained to do.",
  },
  {
    q: "How many letters do I get?",
    a: "You get a complete letter pack covering all the bill categories you select — medical, cable/internet, insurance, utilities, and subscriptions. Each letter is individually customized with your specific account details, amounts, and the most effective negotiation angles for that type of company. You also receive follow-up templates if your first letter doesn&apos;t get the response you want.",
  },
  {
    q: "What bills can I negotiate?",
    a: "Almost any recurring bill is negotiable. Our letter pack covers medical bills (hospital, doctor, lab, pharmacy), cable and internet, cell phone plans, insurance premiums (auto, home, health), utility bills, gym memberships, streaming services, and subscription services. If a company wants to keep your business, there&apos;s room to negotiate.",
  },
];

export default function BillNegotiationPage() {
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
            Bill Negotiation Letter Pack
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $10 per letter pack
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop Overpaying. Start Negotiating.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            You&apos;re paying too much for your medical bills, cable, insurance,
            and utilities — and the companies counting on you not asking for
            less. Our AI generates customized negotiation letters that hit the
            right pressure points. Average savings: $500+ per year. Bill
            negotiation services take 40% of your savings. Keep 100% of yours
            for $10.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Letter Pack — $10
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
            Every dollar you overpay is a dollar you chose not to keep.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            One letter pack. Multiple bills reduced. Average savings of $500+
            per year from a single $10 investment.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Letter Pack — $10
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
            name: "Bill Negotiation Letter Pack",
            description:
              "Medical, cable, insurance, and utility bill reduction letters. Average savings: $500+. AI-generated negotiation letters customized to your bills.",
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
              url: "https://aidisputeengine.com/tools/bill-negotiation",
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
