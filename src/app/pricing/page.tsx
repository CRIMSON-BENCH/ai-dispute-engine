import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "First letter free. $2 to download. $8 certified mail. $10/mo unlimited. Plus escalation packs, notarized letters, process serving, and more.",
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
            Cheaper than a parking ticket
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            $2 per letter. That&apos;s it.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Generate your first letter free — no account needed. After that,
            flat pricing with no surprises. A lawyer charges $300. We charge $2.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Free</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              See it before you pay.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$0</span>
            </div>
            <Link
              href="/disputes"
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Start free
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Generate and preview your full letter
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} See your state&apos;s statute citations
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} No credit card required
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} No account required
              </li>
            </ul>
          </div>

          {/* Download — $2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Download</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your letter, ready to send.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$2</span>
              <span className="ml-2 text-sm text-slate-500">per letter</span>
            </div>
            <Link
              href="/disputes"
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Pick a dispute
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Download as PDF and DOCX
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Edit before downloading
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} State-specific statute citations
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} No subscription — pay once
              </li>
            </ul>
          </div>

          {/* Mail It — $5 */}
          <div className="relative rounded-2xl border-2 border-teal-600 bg-white p-8 dark:bg-slate-900">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
            <h2 className="text-lg font-semibold">Mail It</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              We print, stamp, and send it for you.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$8</span>
              <span className="ml-2 text-sm text-slate-500">per letter</span>
            </div>
            <Link
              href="/disputes"
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              Pick a dispute
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Everything in Download
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Printed and mailed via USPS
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Certified mail with tracking
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Proof of delivery for court
              </li>
            </ul>
            <p className="mt-6 text-center text-xs text-slate-500">
              Certified mail + printing costs $12+ at the post office
            </p>
          </div>

          {/* Unlimited — $10/mo */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Unlimited</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              For the fight that takes more than one letter.
            </p>
            <div className="mt-6">
              <span className="text-5xl font-bold tracking-tight">$10</span>
              <span className="ml-2 text-sm text-slate-500">/month</span>
            </div>
            <Link
              href="/signup"
              className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Go Unlimited
            </Link>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Unlimited letters per month
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Escalation letters (FTC, CFPB, state AG)
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Dispute tracking dashboard
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Priority support
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Cancel anytime — one click
              </li>
            </ul>
            <p className="mt-6 text-center text-xs text-slate-500">
              Pays for itself after 2 letters
            </p>
          </div>
        </div>

        {/* Comparison to alternatives */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-center text-xl font-bold">How we compare</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">Option</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Cost</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Time</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Legal citations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 font-semibold text-teal-600 dark:text-teal-400">AI Dispute Engine</td>
                  <td className="py-3 font-bold">$2</td>
                  <td className="py-3">60 seconds</td>
                  <td className="py-3">State-specific, automatic</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">Write it yourself</td>
                  <td className="py-3">Free</td>
                  <td className="py-3">2-4 hours</td>
                  <td className="py-3">You have to research them</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">LegalZoom / Rocket Lawyer</td>
                  <td className="py-3">$30-50</td>
                  <td className="py-3">30-60 minutes</td>
                  <td className="py-3">Generic templates</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">Hire an attorney</td>
                  <td className="py-3">$200-500</td>
                  <td className="py-3">3-7 days</td>
                  <td className="py-3">Yes, but expensive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-ons & Premium */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">Add-ons &amp; Premium Services</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500 dark:text-slate-400">
            Level up your dispute with tools that give you an edge.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Response Letter */}
            <Link href="/tools/response-letter" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Response Letter</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$2</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">They wrote back? Paste their reply and get a point-by-point rebuttal.</p>
            </Link>

            {/* Escalation Pack */}
            <Link href="/tools/escalation" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Escalation Pack</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$5</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">FTC + CFPB + State AG complaint letters. Three letters, one price.</p>
            </Link>

            {/* Evidence Toolkit */}
            <Link href="/tools/evidence-toolkit" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Evidence Toolkit</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$3</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Timeline builder, expense tracker, and document checklist for your case.</p>
            </Link>

            {/* Notarized Letter */}
            <Link href="/tools/notarized-letter" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Notarized Letter</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$15</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Online notarization in minutes. Adds legal weight and court credibility.</p>
            </Link>

            {/* Small Claims Kit */}
            <Link href="/tools/small-claims-kit" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Small Claims Kit</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$15</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">State-specific filing guide, complaint template, and court prep checklist.</p>
            </Link>

            {/* Process Serving */}
            <Link href="/tools/process-serving" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">Process Serving</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold dark:bg-slate-800">$50</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Licensed server delivers your documents in person. Proof of service included.</p>
            </Link>
          </div>

          {/* Business Plan CTA */}
          <div className="mt-10 rounded-2xl border-2 border-teal-600 bg-teal-50 p-8 text-center dark:bg-teal-950/30">
            <h3 className="text-lg font-bold">Sending more than a few letters?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Our Business Plan gives your team unlimited letters for $49/month. Property managers, HR teams, and small businesses save thousands.
            </p>
            <Link
              href="/business"
              className="mt-4 inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              See Business Plan →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center text-2xl font-bold">Common questions</h2>
          <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
            {[
              {
                q: "Do I need an account to try it?",
                a: "No. Pick a dispute type, answer the questions, and see your full letter — all without signing up. You only need an account to download or save it.",
              },
              {
                q: "Why is it so cheap?",
                a: "AI does the work. A lawyer spends hours researching statutes and drafting — our AI does it in 60 seconds. We pass the savings to you because we'd rather help 1,000 people at $2 than 10 people at $200.",
              },
              {
                q: "How does the certified mail option work?",
                a: "Choose the $8 'Mail It' option and enter the recipient's address. We print your letter, put it in a professional envelope, and send it via USPS Certified Mail. You get a tracking number and proof of delivery — which is evidence in court.",
              },
              {
                q: "When does Unlimited make sense?",
                a: "If your first letter doesn't resolve things and you need follow-ups or escalation letters (to the FTC, CFPB, or your state attorney general). Most successful disputes take 2-3 letters. At $10/month, it pays for itself after 2 letters.",
              },
              {
                q: "Can I cancel the Unlimited plan?",
                a: "Yes, in one click from your account settings. Your access continues through the end of the billing period.",
              },
              {
                q: "Is this legal advice?",
                a: "No. AI Dispute Engine is a self-help document tool, not a law firm. We generate letters based on publicly available legal information. For legal advice, consult an attorney.",
              },
            ].map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
