import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Response Letter Generator — They Wrote Back, Now What?",
  description:
    "Paste their reply. Our AI drafts a professional point-by-point rebuttal in 60 seconds. $2 per response letter. Same legal citations, same formatting.",
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

const SCENARIOS = [
  {
    title: "They offered too little",
    desc: "Companies lowball hoping you'll take it. Our AI drafts a counter that explains why their offer falls short and cites the actual damages you're owed.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "They denied responsibility",
    desc: "They say it's not their fault. Our AI finds the holes in their argument, cites the statutes they're violating, and makes the case they can't ignore.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "They threatened legal action",
    desc: "Don't panic. Most threats are scare tactics. Our AI drafts a firm, professional response that stands your ground while keeping the door open for resolution.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "They asked for more time",
    desc: "Sometimes legitimate, sometimes a stall. Our AI drafts a response that agrees to a reasonable deadline while keeping pressure on and preserving your rights.",
    icon: (
      <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "What do I need to paste in?",
    a: "Copy and paste the company's response — email, letter, or even a screenshot transcription. The more of their response you include, the more targeted your rebuttal will be. Our AI analyzes every claim and argument they make.",
  },
  {
    q: "Does it reference my original demand letter?",
    a: "Yes. If you generated your demand letter with AI Dispute Engine, we can pull in your original dispute details and statutes. The response letter builds on your original case, maintaining consistency and escalating appropriately.",
  },
  {
    q: "Can I use this if I didn't use AI Dispute Engine for my first letter?",
    a: "Absolutely. Just paste their response and give us a brief summary of your original dispute. Our AI will draft a professional follow-up regardless of how you sent your first letter.",
  },
  {
    q: "What if their response is reasonable and I want to accept?",
    a: "Our AI will tell you if their offer seems fair based on your situation. If it is, we'll draft an acceptance letter that protects your interests — including language about final settlement, release of claims, and payment timelines.",
  },
];

export default function ResponseLetterPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Response Letter</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per response letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            They Responded. Let&apos;s Respond Better.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Paste their reply. Our AI drafts your follow-up in 60 seconds.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Draft Your Response — $2
              {ARROW}
            </Link>
          </div>
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
                title: "Paste their response",
                desc: "Copy the company's reply — email, letter, or message — and paste it into our tool. Include everything they said.",
              },
              {
                step: "2",
                title: "AI analyzes their arguments",
                desc: "Our AI identifies every claim, excuse, and argument in their response. It cross-references your original dispute and the relevant laws.",
              },
              {
                step: "3",
                title: "Get a point-by-point rebuttal",
                desc: "Download a professional follow-up letter that addresses every argument they made, with updated legal citations and a clear demand.",
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

      {/* Common Scenarios */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Whatever they said, we have a response
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Our AI handles every common scenario companies throw at you.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">&ldquo;{s.title}&rdquo;</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Same AI. Same quality. Same results.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Legal citations</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Every response letter includes state-specific statute citations
                relevant to your dispute.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Professional formatting</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Proper business letter format with your details, their details,
                dates, and reference numbers.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">PDF &amp; DOCX download</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Download your response letter in both formats. Edit the DOCX if
                you want to customize before sending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:bg-slate-900 dark:border dark:border-slate-700">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Don&apos;t let their response be the last word.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Their reply is just the next move in the negotiation. Make yours count.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Draft Your Response — $2
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Need to escalate instead?{" "}
            <Link href="/tools/escalation" className="underline hover:text-white">
              Try the Escalation Letter Pack
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-20">
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
            name: "Response Letter Generator",
            description:
              "AI-powered point-by-point rebuttal letter. Paste their reply, get a professional follow-up in 60 seconds.",
            offers: {
              "@type": "Offer",
              price: "2.00",
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
