import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "FOIA Request Generator — Your Right to Know | AI Dispute Engine",
  description:
    "Generate public records requests to any federal, state, or local government agency. AI-drafted FOIA requests with proper 5 U.S.C. 552 citations and fee waiver language. $2 per request.",
  openGraph: {
    title:
      "FOIA Request Generator — Your Right to Know | AI Dispute Engine",
    description:
      "Generate public records requests to any federal, state, or local government agency. AI-drafted FOIA requests with proper 5 U.S.C. 552 citations and fee waiver language. $2 per request.",
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
    title: "Select agency and describe records",
    description:
      "Choose the government agency (federal, state, or local) and describe the records you want. Be as specific as possible — date ranges, document types, subject matter, and any known file or case numbers.",
  },
  {
    step: "2",
    title: "AI drafts your FOIA request",
    description:
      "Our AI generates a legally compliant public records request with proper citations, formatted to the agency's requirements. Includes fee waiver language and expedited processing justification where applicable.",
  },
  {
    step: "3",
    title: "Download and submit",
    description:
      "Get your request in PDF or DOCX format. Submit it to the agency via their preferred method — online portal, email, or certified mail. Most agencies must respond within 20 business days.",
  },
];

const INCLUDED = [
  "Agency-specific formatting tailored to federal, state, or local requirements",
  "Proper legal citations including 5 U.S.C. Section 552 for federal requests",
  "Fee waiver request language citing public interest and non-commercial use",
  "Expedited processing justification for time-sensitive records",
  "Narrowly tailored record descriptions to reduce processing delays",
  "Appeal template language if your request is denied or partially redacted",
  "State-specific open records law citations for non-federal agencies",
  "Professional formatting with PDF & DOCX download",
];

const FAQ = [
  {
    q: "What is FOIA and who can file a request?",
    a: "The Freedom of Information Act (FOIA) is a federal law (5 U.S.C. Section 552) that gives any person — citizen or not — the right to request access to records from any federal government agency. You do not need to explain why you want the records. Every state also has its own version of FOIA (sometimes called open records, sunshine, or public records laws) that applies to state and local agencies.",
  },
  {
    q: "How long does a FOIA request take?",
    a: "Federal agencies must respond within 20 business days, though complex requests can take much longer. Agencies can claim a 10-day extension for unusual circumstances. In practice, response times vary widely — some agencies respond in weeks, others take months or even years for large requests. State timelines vary by jurisdiction, typically ranging from 5 to 30 business days.",
  },
  {
    q: "Can the government deny my FOIA request?",
    a: "Yes, but only under specific exemptions. FOIA includes nine exemptions covering classified national security information, internal personnel rules, trade secrets, privileged communications, personal privacy, law enforcement records, financial institution data, geological data, and information specifically exempted by other statutes. If your request is denied, you have the right to appeal within the agency and then challenge the decision in federal court.",
  },
  {
    q: "Do state and local agencies follow FOIA?",
    a: "State and local agencies follow their own state's open records laws, not the federal FOIA. However, every state has some version of a public records law. The requirements, timelines, exemptions, and fees vary by state. Our AI identifies the correct law for your jurisdiction — whether it's California's Public Records Act, Texas's Public Information Act, New York's Freedom of Information Law, or your state's equivalent.",
  },
];

export default function FoiaRequestPage() {
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
            FOIA Request Generator
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per FOIA request
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Right to Know
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Every government agency is required to release records to the
            public — but they count on you not knowing how to ask. Our AI
            generates properly formatted FOIA requests with the right legal
            citations, fee waiver language, and record descriptions that get
            results instead of runarounds.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate FOIA Request — $2
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

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Transparency is the law. Use it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Journalists, researchers, business owners, and everyday citizens
            use FOIA to hold the government accountable. Your request is just
            $2 away.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate FOIA Request — $2
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
            name: "FOIA Request Generator",
            description:
              "Generate public records requests to any federal, state, or local government agency with proper legal citations and fee waiver language.",
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
              url: "https://aidisputeengine.com/tools/foia-request",
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
