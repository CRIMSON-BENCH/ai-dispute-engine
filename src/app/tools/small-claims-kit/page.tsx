import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Claims Court Filing Kit — Sue Without a Lawyer",
  description:
    "Step-by-step guide to filing in small claims court, customized to your state and county. Complaint templates, evidence worksheets, and court prep for $15.",
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

const INCLUDES = [
  {
    title: "State-specific filing guide",
    desc: "Filing limits, court fees, statute of limitations, courthouse locations, and step-by-step instructions for your state and county.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Complaint form template",
    desc: "Pre-filled with your dispute information, the defendant's details, and your damages claim. Just review, sign, and file.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Evidence organization worksheet",
    desc: "Categorize and label every piece of evidence. Includes exhibit labels, a summary sheet for the judge, and tips on presentation order.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
  {
    title: "Court day preparation checklist",
    desc: "What to wear, what to bring, when to arrive, courtroom etiquette, and common mistakes to avoid. You'll walk in confident.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Opening statement template",
    desc: "A structured script for presenting your case to the judge. Fill in the blanks, practice once, and deliver a clear, compelling argument.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

const STATE_LIMITS = [
  { state: "California", limit: "$12,500" },
  { state: "Texas", limit: "$20,000" },
  { state: "New York", limit: "$10,000" },
  { state: "Florida", limit: "$8,000" },
  { state: "Illinois", limit: "$10,000" },
  { state: "Pennsylvania", limit: "$12,000" },
  { state: "Ohio", limit: "$6,000" },
  { state: "Georgia", limit: "$15,000" },
  { state: "Michigan", limit: "$6,500" },
  { state: "North Carolina", limit: "$10,000" },
  { state: "New Jersey", limit: "$5,000" },
  { state: "Tennessee", limit: "$25,000" },
];

const TIMELINE_STEPS = [
  {
    step: "1",
    title: "Send your demand letter",
    desc: "Always try to resolve it first. This shows the judge you acted in good faith.",
    time: "Day 1",
  },
  {
    step: "2",
    title: "Wait for a response",
    desc: "Give them 14-30 days to respond. Document everything.",
    time: "Day 1-30",
  },
  {
    step: "3",
    title: "File your complaint",
    desc: "Go to your local courthouse or file online. Pay the filing fee ($30-$100 in most states).",
    time: "Day 30-45",
  },
  {
    step: "4",
    title: "Serve the defendant",
    desc: "The defendant must be formally notified. Most courts offer service by mail or sheriff.",
    time: "Day 45-60",
  },
  {
    step: "5",
    title: "Prepare your case",
    desc: "Organize evidence, practice your statement, and review the court rules.",
    time: "Day 60-90",
  },
  {
    step: "6",
    title: "Go to court",
    desc: "Present your case to the judge. Most hearings take 15-30 minutes.",
    time: "Day 90+",
  },
];

const FAQ = [
  {
    q: "Do I really not need a lawyer for small claims court?",
    a: "Correct. Small claims court was specifically designed for people to represent themselves. In fact, some states (like California) don't even allow lawyers in small claims court. The process is simplified, and judges are used to working with non-lawyers.",
  },
  {
    q: "What's the maximum I can sue for?",
    a: "It depends on your state — limits range from $2,500 to $25,000. Our filing kit includes your state's specific limit. If your claim exceeds the small claims limit, you can either reduce your claim to fit or file in a higher court (which usually requires a lawyer).",
  },
  {
    q: "How do I serve papers on the defendant?",
    a: "Most states allow service by certified mail, sheriff's office, or professional process server. Our kit includes the specific rules for your state, the forms you need, and step-by-step instructions for each service method.",
  },
  {
    q: "What if the defendant doesn't show up to court?",
    a: "If the defendant was properly served and doesn't appear, you win by default judgment. The judge will typically award you the amount you asked for. Our kit covers how to ensure proper service so a default judgment holds up.",
  },
];

export default function SmallClaimsKitPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Small Claims Court Kit</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $15 — vs $200+ for a lawyer
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Take Them to Court. No Lawyer Needed.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Step-by-step guide to filing in small claims court, customized to
            your state and county.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Filing Kit — $15
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          Everything you need to file and win
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
          {/* Price comparison card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-teal-600 bg-teal-50 p-6 text-center dark:bg-teal-900/10">
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              All of this for
            </p>
            <p className="mt-2 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              $15
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              A lawyer charges <span className="line-through">$200+</span> just
              for a consultation
            </p>
            <Link
              href="/disputes"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Get started
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* State Limits Table */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Small claims limits by state
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            Each state sets its own maximum for small claims court. Your filing
            kit includes the exact rules for your state.
          </p>
          <div className="mx-auto mt-10 max-w-2xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">
                    State
                  </th>
                  <th className="pb-3 text-right font-medium text-slate-500">
                    Maximum claim
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {STATE_LIMITS.map((s) => (
                  <tr key={s.state}>
                    <td className="py-3 font-medium text-slate-900 dark:text-white">
                      {s.state}
                    </td>
                    <td className="py-3 text-right font-semibold text-teal-600 dark:text-teal-400">
                      {s.limit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Limits shown are for individual plaintiffs. Your kit includes the
              current limit for all 50 states.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            The letter didn&apos;t work — now what?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
            Here&apos;s the typical timeline from demand letter to court date.
          </p>
          <div className="mt-12 space-y-0">
            {TIMELINE_STEPS.map((item, i) => (
              <div key={item.step} className="relative flex gap-6 pb-8">
                {/* Vertical line */}
                {i < TIMELINE_STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-slate-200 dark:bg-slate-700" />
                )}
                {/* Circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-center text-xl font-bold">
            What it actually costs to go to court
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Expense
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    With a lawyer
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    With AI Dispute Engine
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 text-slate-700 dark:text-slate-300">Case preparation</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">$200-500</td>
                  <td className="py-3 font-semibold text-teal-600 dark:text-teal-400">$15</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-700 dark:text-slate-300">Filing fees</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">$30-100</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">$30-100 (court fee)</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-700 dark:text-slate-300">Serving papers</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">$50-150</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">$20-50 (sheriff/mail)</td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-3">Total</td>
                  <td className="py-3 text-slate-900 dark:text-white">$280-750</td>
                  <td className="py-3 text-teal-600 dark:text-teal-400">$65-165</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            They had their chance. Time to go to court.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Everything you need to file, serve, prepare, and present your case
            in small claims court — for the price of lunch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Your Filing Kit — $15
              {ARROW}
            </Link>
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3.5 text-base font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Start with a demand letter first
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Not ready for court?{" "}
            <Link href="/tools/escalation" className="underline hover:text-white">
              Try the Escalation Letter Pack
            </Link>{" "}
            or{" "}
            <Link href="/pricing" className="underline hover:text-white">
              see all pricing
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
            name: "Small Claims Court Filing Kit",
            description:
              "Step-by-step guide to filing in small claims court. State-specific filing guide, complaint template, evidence worksheet, court prep checklist, and opening statement template.",
            offers: {
              "@type": "Offer",
              price: "15.00",
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
