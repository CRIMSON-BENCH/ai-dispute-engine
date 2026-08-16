import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES, getStateBySlug, getAllStateSlugs } from "@/lib/states";
import { DISPUTES, type DisputeType } from "@/lib/disputes";

// ---------------------------------------------------------------------------
// Static params: 51 states x 38 disputes = 1,938 pages
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const params: { state: string; dispute: string }[] = [];
  for (const stateSlug of getAllStateSlugs()) {
    for (const dispute of DISPUTES) {
      params.push({ state: stateSlug, dispute: dispute.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; dispute: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, dispute: disputeSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const dispute = DISPUTES.find((d) => d.slug === disputeSlug);
  if (!state || !dispute) return {};

  return {
    title: `${dispute.shortTitle} in ${state.name} — Your Rights & How to Fight`,
    description: `Learn about ${dispute.title.toLowerCase()} rights in ${state.name}. Small claims limit: $${state.smallClaimsLimit.toLocaleString()}. Know the statutes, deadlines, and how to send a demand letter.`,
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getRelevantStatute(
  state: { name: string; abbreviation: string; keyStatutes: string[] },
  dispute: DisputeType
): string {
  // Try to find a state-specific statute that matches the dispute category
  const categoryKeywords: Record<string, string[]> = {
    housing: ["landlord", "tenant", "deposit", "habitability", "lease", "rent"],
    consumer: ["consumer", "trade", "fraud", "deceptive", "warranty", "lemon"],
    finance: ["credit", "debt", "banking", "fair", "collection"],
    health: ["insurance", "health", "medical"],
    employment: ["employment", "wage", "labor", "worker"],
    government: ["records", "FOIA", "public"],
    tax: ["tax", "revenue", "assessment"],
    privacy: ["privacy", "data", "consumer"],
    ip: ["copyright", "intellectual", "DMCA"],
  };

  const keywords = categoryKeywords[dispute.category] || [];
  const match = state.keyStatutes.find((statute) =>
    keywords.some((kw) => statute.toLowerCase().includes(kw.toLowerCase()))
  );

  return match || state.keyStatutes[0] || "State consumer protection statute";
}

function getDisputeChecklist(dispute: DisputeType): string[] {
  const checklists: Record<string, string[]> = {
    "security-deposit": [
      "Copy of your signed lease agreement",
      "Move-in and move-out condition photos or video",
      "Proof of security deposit payment",
      "Landlord's name and mailing address",
      "Any written communication about deductions",
      "Your forwarding address notice",
    ],
    "credit-report": [
      "Copy of your credit report showing the error",
      "Account name, number, and reported amount",
      "Supporting documents proving the inaccuracy",
      "Any prior dispute confirmation numbers",
      "Identity theft report (if applicable)",
    ],
    "dmca-takedown": [
      "URL of the infringing content",
      "URL or copy of your original work",
      "Proof of copyright ownership",
      "Description of the copyrighted material",
      "Platform's DMCA agent contact information",
    ],
    "medical-denial": [
      "Denial letter or Explanation of Benefits (EOB)",
      "Claim number and date of service",
      "Your insurance policy or plan summary",
      "Doctor's letter of medical necessity",
      "Relevant medical records",
    ],
    "lemon-law": [
      "Purchase or lease agreement",
      "All repair orders and invoices",
      "Documentation of reported problems",
      "Manufacturer's warranty information",
      "Timeline of repair attempts",
    ],
    "insurance-denial": [
      "Insurance policy and declarations page",
      "Claim denial letter with reason codes",
      "All claim-related correspondence",
      "Photos, estimates, or medical records supporting the claim",
      "Timeline of events",
    ],
  };

  return (
    checklists[dispute.slug] || [
      "All relevant contracts, agreements, or receipts",
      "Copies of written communication (emails, texts, letters)",
      "Photos or video evidence (if applicable)",
      "Timeline of events with dates",
      "Names and contact information of all parties involved",
      "Proof of any payments made",
    ]
  );
}

function getEscalationSteps(
  stateName: string,
  dispute: DisputeType
): string[] {
  return [
    `File a complaint with the ${stateName} Attorney General's office`,
    `File in small claims court in ${stateName}`,
    "Report to the Better Business Bureau (BBB)",
    `Contact the ${stateName} consumer protection agency`,
    "Consider mediation or arbitration as alternatives",
    "Consult with a licensed attorney about your options",
  ];
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function StateDisputePage({
  params,
}: {
  params: Promise<{ state: string; dispute: string }>;
}) {
  const { state: stateSlug, dispute: disputeSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const dispute = DISPUTES.find((d) => d.slug === disputeSlug);
  if (!state || !dispute) notFound();

  const relevantStatute = getRelevantStatute(state, dispute);
  const checklist = getDisputeChecklist(dispute);
  const escalation = getEscalationSteps(state.name, dispute);

  // Cross-link data: other disputes in this state + this dispute in other states
  const otherDisputes = DISPUTES.filter(
    (d) => d.slug !== dispute.slug
  ).slice(0, 6);

  const otherStates = STATES.filter(
    (s) => s.slug !== state.slug
  ).slice(0, 6);

  const faq = [
    {
      q: `What are my ${dispute.shortTitle.toLowerCase()} rights in ${state.name}?`,
      a: `In ${state.name}, your rights are protected under ${relevantStatute} and related consumer protection laws. These statutes establish your right to seek remedies including damages up to the small claims limit of $${state.smallClaimsLimit.toLocaleString()}.`,
    },
    {
      q: `How do I file a ${dispute.shortTitle.toLowerCase()} claim in ${state.name}?`,
      a: `Start by sending a formal demand letter. If the other party doesn't respond, you can file a claim in ${state.courtName} for up to $${state.smallClaimsLimit.toLocaleString()}. Filing fees range from ${state.filingFeeRange}.`,
    },
    {
      q: `What is the deadline to file a ${dispute.shortTitle.toLowerCase()} case in ${state.name}?`,
      a: `The statute of limitations in ${state.name} is ${state.statuteOfLimitations}. Act promptly -- evidence deteriorates and memories fade over time. Starting with a demand letter preserves your claim while you decide on next steps.`,
    },
    {
      q: `Do I need a lawyer for a ${dispute.shortTitle.toLowerCase()} dispute in ${state.name}?`,
      a: state.lawyersAllowed
        ? `Lawyers are permitted in ${state.name} small claims court but are not required. A well-drafted demand letter often resolves the dispute without needing to hire an attorney.`
        : `${state.name} does not allow lawyers in small claims court. The process is designed for self-representation, and a professional demand letter is often enough to resolve the dispute before court.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/guides"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Guides
          </Link>
          <span>/</span>
          <Link
            href={`/guides/${state.slug}`}
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            {state.name}
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            {dispute.shortTitle}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
              {dispute.icon}
            </span>
            <div>
              <div className="mb-1 flex flex-wrap gap-2">
                <span className="inline-block rounded-md bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                  {state.name}
                </span>
                <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {dispute.category}
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {dispute.shortTitle} in {state.name} — Your Rights &amp; How to
                Fight
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {dispute.description} Learn how {state.name} law protects you
                and the steps to take.
              </p>
            </div>
          </div>
        </div>

        {/* Key stat cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {state.name} Small Claims Limit
            </p>
            <p className="mt-1 text-2xl font-bold text-teal-600">
              ${state.smallClaimsLimit.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Relevant Statute
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
              {relevantStatute}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Filing Deadline
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
              {state.statuteOfLimitations}
            </p>
          </div>
        </div>

        {/* Your Rights section */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Your Rights Under {state.name} Law
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Under {relevantStatute} and {state.name}&apos;s consumer
              protection laws, you have the right to seek remedies for{" "}
              {dispute.title.toLowerCase()} disputes. {state.name} provides
              several protections:
            </p>
            <ul className="mt-4 space-y-2">
              {state.keyConsumerProtections.map((protection) => (
                <li
                  key={protection}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {protection}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              You can file a claim in {state.courtName} for up to $
              {state.smallClaimsLimit.toLocaleString()}.{" "}
              {state.lawyersAllowed
                ? "Lawyers are allowed but not required."
                : "Lawyers are not permitted, making the process more accessible for individuals."}{" "}
              Filing fees range from {state.filingFeeRange}.
            </p>
          </div>
        </section>

        {/* How to send a demand letter */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            How to Send a Demand Letter for {dispute.shortTitle} in{" "}
            {state.name}
          </h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Document Everything",
                description: `Gather all evidence related to your ${dispute.shortTitle.toLowerCase()} dispute. This includes contracts, receipts, photos, emails, and a timeline of events. Strong documentation is key under ${state.name} law.`,
              },
              {
                step: 2,
                title: "Generate Your Demand Letter",
                description: `Use AI Dispute Engine to create a professional demand letter that cites ${state.name} statutes, including ${relevantStatute}. The letter will reference the specific laws that protect your rights.`,
              },
              {
                step: 3,
                title: "Send via Certified Mail",
                description: `Send the letter via USPS certified mail with return receipt requested. This creates a legal record that the other party received your demand, which is important for any future ${state.courtName} proceedings.`,
              },
              {
                step: 4,
                title: "Set a Deadline",
                description:
                  "Give the other party 14-30 days to respond to your demand. Be specific about the amount you are demanding and the consequences of non-compliance.",
              },
              {
                step: 5,
                title: "Follow Up or Escalate",
                description: `If the other party doesn't respond or refuses your demand, you can file in ${state.courtName} (up to $${state.smallClaimsLimit.toLocaleString()}) or explore other remedies under ${state.name} law.`,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/40 dark:text-teal-400">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            What to Include in Your {state.name} {dispute.shortTitle} Letter
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800">
                    <svg
                      className="h-3 w-3 text-teal-600 dark:text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* If They Don't Respond */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            If They Don&apos;t Respond
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              If the other party ignores your demand letter or refuses to
              resolve the dispute, you have several escalation options under{" "}
              {state.name} law:
            </p>
            <ul className="space-y-3">
              {escalation.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
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
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/tools/escalation"
                className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Get our Escalation Pack for step-by-step guidance
                <svg
                  className="h-4 w-4"
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
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-slate-900 p-8 text-center dark:bg-slate-800 sm:p-10">
          <h2 className="text-2xl font-bold text-white">
            Generate Your {dispute.shortTitle} Demand Letter — $2
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Our AI creates a professional demand letter citing {state.name}{" "}
            statutes including {relevantStatute}. First letter free.
          </p>
          <Link
            href={`/disputes/${dispute.slug}`}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
          >
            Start your {dispute.shortTitle.toLowerCase()} letter
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
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
            {faq.map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* Other disputes in this state */}
          <section>
            <h2 className="mb-4 text-lg font-bold">
              Other Disputes in {state.name}
            </h2>
            <div className="space-y-2">
              {otherDisputes.map((d) => (
                <Link
                  key={d.slug}
                  href={`/guides/${state.slug}/${d.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 transition-all hover:border-teal-300 dark:border-slate-700 dark:hover:border-teal-700"
                >
                  <span className="text-lg">{d.icon}</span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-teal-600 dark:text-slate-300 dark:group-hover:text-teal-400">
                    {d.shortTitle} in {state.abbreviation}
                  </span>
                </Link>
              ))}
              <Link
                href={`/guides/${state.slug}`}
                className="mt-2 block text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
              >
                View all {state.name} guides &rarr;
              </Link>
            </div>
          </section>

          {/* This dispute in other states */}
          <section>
            <h2 className="mb-4 text-lg font-bold">
              {dispute.shortTitle} in Other States
            </h2>
            <div className="space-y-2">
              {otherStates.map((s) => (
                <Link
                  key={s.slug}
                  href={`/guides/${s.slug}/${dispute.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 transition-all hover:border-teal-300 dark:border-slate-700 dark:hover:border-teal-700"
                >
                  <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                    {s.abbreviation}
                  </span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-teal-600 dark:text-slate-300 dark:group-hover:text-teal-400">
                    {dispute.shortTitle} in {s.name}
                  </span>
                </Link>
              ))}
              <Link
                href="/guides"
                className="mt-2 block text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
              >
                Browse all state guides &rarr;
              </Link>
            </div>
          </section>
        </div>

        {/* Tool CTAs */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
          <h2 className="mb-4 text-lg font-bold text-teal-900 dark:text-teal-100">Take action on your {dispute.shortTitle.toLowerCase()} dispute in {state.name}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href={`/disputes/${dispute.slug}`} className="rounded-lg border border-teal-200 bg-white p-3 text-center transition hover:shadow-sm dark:border-teal-800 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Demand Letter</p>
              <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">$2</p>
            </Link>
            <Link href="/tools/follow-up-letter" className="rounded-lg border border-teal-200 bg-white p-3 text-center transition hover:shadow-sm dark:border-teal-800 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Follow-Up Letter</p>
              <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">$2</p>
            </Link>
            <Link href="/tools/full-fight" className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center transition hover:shadow-sm dark:border-amber-800 dark:bg-amber-900/20">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">Full Fight Bundle</p>
              <p className="mt-1 text-xs font-semibold text-amber-600 dark:text-amber-400">$25</p>
            </Link>
            <Link href="/tools/small-claims-kit" className="rounded-lg border border-teal-200 bg-white p-3 text-center transition hover:shadow-sm dark:border-teal-800 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Small Claims Kit</p>
              <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">$15</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
            <strong>Disclaimer:</strong> AI Dispute Engine is not a law firm and
            does not provide legal advice. This information is for educational
            purposes only. For legal advice specific to your situation, consult a
            licensed attorney in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
