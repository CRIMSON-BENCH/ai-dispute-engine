import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "First letter free. $2 to download. $8 certified mail. $10/mo unlimited. Full Fight Bundle $25. Court Filing $50. Attorney Review $65. 93% cheaper than competitors.",
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
            93% cheaper than the next best option
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            $2 per letter. That&apos;s it.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            PettyLawsuit charges $29. Sue.com charges $129. Lawyers charge $300+.
            We charge $2. Same AI-powered letters, same state-specific statutes — just without the markup.
          </p>
        </div>

        {/* Core 4 tiers */}
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
                {CHECK} Free settlement calculator
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Free legal checkup tool
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} No credit card required
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
            <p className="mt-6 text-center text-xs text-slate-500">
              PettyLawsuit charges $29 for the same thing
            </p>
          </div>

          {/* Mail It — $8 */}
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
              PettyLawsuit charges $29 and it&apos;s included — we still save you $21
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
                {CHECK} Follow-up &amp; escalation letters
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Letter tracking dashboard
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Cease &amp; desist letters
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Priority support
              </li>
              <li className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                {CHECK} Cancel anytime
              </li>
            </ul>
            <p className="mt-6 text-center text-xs text-slate-500">
              Pays for itself after 2 letters
            </p>
          </div>
        </div>

        {/* Premium Bundles */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              Go beyond a single letter
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Premium Bundles</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Competitors charge $49–$299 for these services. We offer the same thing for half the price — or less.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Full Fight Bundle */}
            <div className="relative rounded-2xl border-2 border-amber-500 bg-white p-6 dark:bg-slate-900">
              <span className="absolute -top-3 left-4 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold text-white">
                Best value
              </span>
              <Link href="/tools/full-fight" className="group block">
                <h3 className="font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">Full Fight Bundle</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">6 letters. One price. Full pressure campaign.</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$25</span>
                  <span className="ml-1 text-xs text-slate-400 line-through">$49 at PettyLawsuit</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex gap-1.5">{CHECK} Demand letter</li>
                  <li className="flex gap-1.5">{CHECK} Follow-up letter (Day 10)</li>
                  <li className="flex gap-1.5">{CHECK} Final notice (Day 21)</li>
                  <li className="flex gap-1.5">{CHECK} FTC, CFPB, AG complaints</li>
                  <li className="flex gap-1.5">{CHECK} Timeline reminders</li>
                </ul>
              </Link>
            </div>

            {/* Court Filing Kit */}
            <Link href="/tools/court-filing" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <h3 className="font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">Court Filing Kit</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Pre-filled court forms for your state.</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">$50</span>
                <span className="ml-1 text-xs text-slate-400 line-through">$99 at PettyLawsuit</span>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex gap-1.5">{CHECK} State-specific court forms</li>
                <li className="flex gap-1.5">{CHECK} Filing instructions</li>
                <li className="flex gap-1.5">{CHECK} Evidence worksheet</li>
                <li className="flex gap-1.5">{CHECK} Complaint template</li>
              </ul>
            </Link>

            {/* Attorney Review */}
            <Link href="/tools/attorney-review" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <h3 className="font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">Attorney Review</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Real lawyer reviews your letter.</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">$65</span>
                <span className="ml-1 text-xs text-slate-400 line-through">$129 at Sue.com</span>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex gap-1.5">{CHECK} Licensed attorney review</li>
                <li className="flex gap-1.5">{CHECK} Formal letterhead</li>
                <li className="flex gap-1.5">{CHECK} Statute verification</li>
                <li className="flex gap-1.5">{CHECK} 24-48 hour turnaround</li>
              </ul>
            </Link>

            {/* AI Mediation */}
            <Link href="/tools/ai-mediation" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
              <h3 className="font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">AI Mediation</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Both sides tell their story. AI proposes a fair deal.</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">$150</span>
                <span className="ml-1 text-xs text-slate-400 line-through">$299 at Dyspute</span>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex gap-1.5">{CHECK} Both parties submit</li>
                <li className="flex gap-1.5">{CHECK} AI-proposed settlement</li>
                <li className="flex gap-1.5">{CHECK} Settlement agreement</li>
                <li className="flex gap-1.5">{CHECK} E-signatures</li>
              </ul>
            </Link>
          </div>
        </div>

        {/* Real competitor comparison */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-center text-xl font-bold">How we stack up against the competition</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500 dark:text-slate-400">
            Real prices. Real comparison. See why 93% cheaper isn&apos;t a typo.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">Service</th>
                  <th className="pb-3 text-left font-medium text-slate-500">AI Dispute Engine</th>
                  <th className="pb-3 text-left font-medium text-slate-500">PettyLawsuit</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Sue.com</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Dyspute</th>
                  <th className="pb-3 text-left font-medium text-slate-500">Attorney</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 font-medium">Demand Letter</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$2</td>
                  <td className="py-3">$29</td>
                  <td className="py-3">$129</td>
                  <td className="py-3">$29</td>
                  <td className="py-3">$300+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Certified Mail</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$8</td>
                  <td className="py-3">Included ($29)</td>
                  <td className="py-3">Included ($129)</td>
                  <td className="py-3">$69</td>
                  <td className="py-3">$20+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Full Pressure Campaign</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$25</td>
                  <td className="py-3">$49</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$1,000+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Court Filing</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$50</td>
                  <td className="py-3">$99</td>
                  <td className="py-3">$249</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$500+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Attorney Review</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$65</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$129</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$300+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">AI Mediation</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$150</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$299</td>
                  <td className="py-3">$500+</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Unlimited Plan</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">$10/mo</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">N/A</td>
                  <td className="py-3">$5,000+ retainer</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Free Preview</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">Yes</td>
                  <td className="py-3">No</td>
                  <td className="py-3">No</td>
                  <td className="py-3">No</td>
                  <td className="py-3">No</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Dispute Types</td>
                  <td className="py-3 font-bold text-teal-600 dark:text-teal-400">38+</td>
                  <td className="py-3">General</td>
                  <td className="py-3">General</td>
                  <td className="py-3">General</td>
                  <td className="py-3">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Competitor pricing verified August 2026. Prices may change.
          </p>
        </div>

        {/* Add-ons & Tools */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">Add-ons &amp; Tools</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500 dark:text-slate-400">
            Mix and match to build exactly the fight you need.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/tools/follow-up-letter", name: "Follow-Up Letter", price: "$2", desc: "Escalated follow-up when they ignore your first letter." },
              { href: "/tools/response-letter", name: "Response Letter", price: "$2", desc: "Point-by-point rebuttal when they write back." },
              { href: "/tools/cease-desist", name: "Cease & Desist", price: "$2", desc: "Formal warning to stop harassment, infringement, or abuse." },
              { href: "/tools/complaint-letter", name: "Complaint Letter", price: "$2", desc: "File complaints with BBB, FTC, CFPB, or your state AG." },
              { href: "/tools/final-notice", name: "Final Notice", price: "$3", desc: "Intent-to-sue letter — last warning before court." },
              { href: "/tools/evidence-toolkit", name: "Evidence Toolkit", price: "$3", desc: "Timeline builder, expense tracker, and document checklist." },
              { href: "/tools/escalation", name: "Escalation Pack", price: "$5", desc: "FTC + CFPB + State AG complaint bundle (3 letters)." },
              { href: "/tools/skip-tracing", name: "Skip Tracing", price: "$10", desc: "Find their current address from public records." },
              { href: "/tools/small-claims-kit", name: "Small Claims Kit", price: "$15", desc: "State-specific filing guide and court prep checklist." },
              { href: "/tools/notarized-letter", name: "Notarized Letter", price: "$15", desc: "Online notarization — adds legal weight and court credibility." },
              { href: "/tools/process-serving", name: "Process Serving", price: "$50", desc: "Licensed server delivers your documents in person." },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400">{tool.name}</h3>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold dark:bg-slate-800">{tool.price}</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{tool.desc}</p>
              </Link>
            ))}
          </div>

          {/* Free tools callout */}
          <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-950/30">
            <h3 className="text-sm font-bold text-teal-800 dark:text-teal-300">Free tools — no account needed</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/tools/settlement-calculator" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:text-teal-300">
                Settlement Calculator
              </Link>
              <Link href="/tools/legal-checkup" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:text-teal-300">
                Legal Checkup
              </Link>
              <Link href="/tools/letter-tracker" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:text-teal-300">
                Letter Tracker (with Unlimited)
              </Link>
              <Link href="/templates" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:text-teal-300">
                Letter Templates
              </Link>
              <Link href="/glossary" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:text-teal-300">
                Legal Glossary
              </Link>
            </div>
          </div>

          {/* Business Plan CTA */}
          <div className="mt-8 rounded-2xl border-2 border-teal-600 bg-teal-50 p-8 text-center dark:bg-teal-950/30">
            <h3 className="text-lg font-bold">Sending more than a few letters?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Our Business Plan gives your team unlimited letters for $49/month. Property managers, HR teams, and small businesses save thousands.
            </p>
            <Link
              href="/business"
              className="mt-4 inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              See Business Plan
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
                q: "How are you so much cheaper than PettyLawsuit and Sue.com?",
                a: "AI does the work. PettyLawsuit charges $29 because they bundle certified mail and overhead into one price. Sue.com charges $129 for attorney involvement. We let AI draft the letter in 60 seconds and charge $2 for the download. If you want certified mail, add $6 more. You pay for exactly what you need — nothing extra.",
              },
              {
                q: "What's the Full Fight Bundle?",
                a: "It's our answer to PettyLawsuit's $49 'Go Full Petty' package — but at $25. You get 6 letters: your initial demand, a follow-up on Day 10, a final notice on Day 21, and FTC/CFPB/State AG complaint letters. It's a complete 30-day pressure campaign that covers every escalation step.",
              },
              {
                q: "How does the certified mail option work?",
                a: "Choose the $8 'Mail It' option and enter the recipient's address. We print your letter, put it in a professional envelope, and send it via USPS Certified Mail. You get a tracking number and proof of delivery — which is admissible evidence in court.",
              },
              {
                q: "When does the Unlimited plan make sense?",
                a: "If your first letter doesn't resolve things and you need follow-ups, escalation letters, or cease & desists. Most successful disputes take 2-3 letters. At $10/month, it pays for itself after just 2 letters — and you get tracking and priority support included.",
              },
              {
                q: "What's the difference between the Court Filing Kit ($50) and Small Claims Kit ($15)?",
                a: "The Small Claims Kit is a general guide — state-specific filing instructions, limits, and a court prep checklist. The Court Filing Kit is case-specific — we pre-fill your actual court forms with your dispute details, organize your evidence, and give you a complaint template ready to file.",
              },
              {
                q: "Is this legal advice?",
                a: "No. AI Dispute Engine is a self-help document preparation tool, not a law firm. We generate documents based on publicly available legal information. We do not represent you in court or provide legal opinions. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes. If you're not satisfied with your letter, contact us within 24 hours for a full refund. No questions asked.",
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

        {/* Disclaimer */}
        <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-xs leading-relaxed text-slate-500">
            <strong>Disclaimer:</strong> AI Dispute Engine is not a law firm and does not provide legal advice.
            The documents and tools offered through this service are for informational and self-help purposes only
            and do not constitute legal advice. Prices shown for competitors were verified in August 2026 and may
            change. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
            Use of this service does not create an attorney-client relationship.
          </p>
        </div>
      </div>
    </div>
  );
}
