import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escalation Letter Pack — When They Ignore Your First Letter",
  description:
    "File complaints with the FTC, CFPB, and your State Attorney General. Three regulatory complaint letters for $5. When your demand letter is ignored, escalate.",
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

const FAQ = [
  {
    q: "When should I escalate instead of sending another demand letter?",
    a: "If the company ignores your demand letter for 14+ days, sends a generic denial, or refuses to negotiate in good faith, it's time to escalate. Regulatory complaints put your dispute on the record and can trigger formal investigations.",
  },
  {
    q: "How long do FTC and CFPB investigations take?",
    a: "The agencies don't investigate every individual complaint, but they use complaints to identify patterns. The CFPB typically contacts the company within 15 days and expects a response within 60 days. The FTC uses complaints to build cases against repeat offenders.",
  },
  {
    q: "Will filing a complaint actually help my case?",
    a: "Yes. Companies take regulatory complaints seriously because they create a paper trail. Many companies have compliance departments that escalate CFPB and state AG complaints internally — often to people with actual authority to resolve your issue.",
  },
  {
    q: "Can I file these complaints even if I already sent a demand letter?",
    a: "Absolutely. In fact, mentioning that you already attempted resolution through a demand letter strengthens your complaint. It shows you tried to resolve the issue directly before involving regulators.",
  },
];

export default function EscalationPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Escalation Letter Pack</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            3 letters for $5
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            They Ignored You. Now Escalate.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            File complaints with the FTC, CFPB, and your State Attorney General.
            One click, three letters.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Escalation Pack — $5
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Letter Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          Three complaints. Three pressure points.
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* FTC */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">FTC Complaint Letter</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              For unfair business practices, scams, fraud, deceptive advertising,
              and companies that refuse to honor warranties or guarantees.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Federal Trade Commission format
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} FTC Act Section 5 citations
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Ready to file online or by mail
              </li>
            </ul>
          </div>

          {/* CFPB */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">CFPB Complaint Letter</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              For financial companies, banks, credit bureaus, debt collectors,
              mortgage servicers, and student loan companies.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Consumer Financial Protection Bureau format
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} FCRA / FDCPA citations included
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Companies must respond within 60 days
              </li>
            </ul>
          </div>

          {/* State AG */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">State Attorney General Complaint</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              For consumer protection violations in your state — landlord issues,
              contractor disputes, insurance bad faith, and local business fraud.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} State-specific consumer protection statutes
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Formatted for your state&apos;s AG office
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Can trigger state-level investigation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            All three letters for <span className="font-semibold text-slate-900 dark:text-white">$5</span>{" "}
            <span className="line-through">$6 if bought separately</span>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Tell us what happened",
                desc: "Describe the issue, the company, and what resolution you tried. If you used our demand letter tool, we can pull in your details automatically.",
              },
              {
                step: "2",
                title: "We draft all 3 complaint letters",
                desc: "Our AI generates properly formatted complaints for the FTC, CFPB, and your state Attorney General — each citing the relevant laws and regulations.",
              },
              {
                step: "3",
                title: "Download and file them",
                desc: "Get all three letters as PDF. Each includes filing instructions — where to submit, what to attach, and what to expect next.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Escalate */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Why regulatory complaints work
          </h2>
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold">They create a permanent paper trail</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Every complaint is logged in a federal or state database. If the
                company has a pattern of complaints, regulators notice. Your
                complaint becomes part of a larger case against bad actors.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold">Companies have to respond</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                The CFPB requires companies to respond to complaints within 60
                days. State Attorney General offices contact companies directly.
                Ignoring a regulator is much harder than ignoring a consumer.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold">They can trigger investigations</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                The FTC has brought enforcement actions against companies based on
                consumer complaint patterns. State AGs have the power to sue
                companies on behalf of consumers. Your complaint could be the one
                that tips the scale.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-semibold">They strengthen your legal position</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                If you end up in small claims court, having filed regulatory
                complaints shows you exhausted all available options. Judges
                notice. It demonstrates good faith and seriousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stop waiting. Start escalating.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Three professionally drafted complaint letters, customized to your
            dispute, for less than the cost of a coffee.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Escalation Pack — $5
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Works with any dispute type.{" "}
            <Link href="/pricing" className="underline hover:text-white">
              See all pricing
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
            name: "Escalation Letter Pack",
            description:
              "Three regulatory complaint letters — FTC, CFPB, and State Attorney General — customized to your dispute.",
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
          }),
        }}
      />
    </div>
  );
}
