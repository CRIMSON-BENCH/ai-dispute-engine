import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CITIES,
  LOCAL_DISPUTE_CATEGORIES,
  parseLocalPageSlug,
  getAllLocalPageSlugs,
} from "@/lib/cities";
import { getStatuteByState } from "@/lib/statutes";

export function generateStaticParams() {
  return getAllLocalPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const parsed = parseLocalPageSlug(params.slug);
  if (!parsed) return {};
  const city = CITIES.find((c) => c.slug === parsed.citySlug);
  const category = LOCAL_DISPUTE_CATEGORIES.find(
    (c) => c.id === parsed.categoryId
  );
  if (!city || !category) return {};

  const title = `${category.label} Dispute Letter — ${city.name}, ${city.stateAbbr}`;
  const description = `Generate a free demand letter for ${category.label.toLowerCase()} disputes in ${city.name}, ${city.stateAbbr}. Cites ${city.state} state law, deadlines, and penalty amounts.`;

  return { title, description };
}

function getCategoryContent(categoryId: string) {
  const content: Record<
    string,
    {
      pageTitle: (city: string, state: string) => string;
      intro: (city: string, state: string) => string;
      whatYouNeed: string[];
      whenToSend: string[];
      relatedDispute: string;
    }
  > = {
    landlord: {
      pageTitle: (city, state) =>
        `Security Deposit Demand Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `If your landlord in ${city} is withholding your security deposit, you have the right to demand its return under ${state} law. A formal demand letter is often the fastest way to get your money back — and it's required before filing in small claims court in most jurisdictions.`,
      whatYouNeed: [
        "Your landlord's name and mailing address",
        "The rental property address",
        "Your move-out date",
        "The deposit amount",
        "A description of the property's condition when you left",
      ],
      whenToSend: [
        "Your landlord hasn't returned the deposit within the legal deadline",
        "Your landlord made unfair or excessive deductions",
        "You haven't received an itemized deduction statement",
        "Your landlord is unresponsive to calls and emails",
      ],
      relatedDispute: "security-deposit",
    },
    hoa: {
      pageTitle: (city, state) =>
        `HOA Fine Appeal Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `Facing an unfair HOA fine in ${city}? ${state} law gives homeowners specific rights when it comes to HOA enforcement. A formal appeal letter that cites the CC&Rs and applicable state statutes is your strongest tool for getting a fine reduced or dismissed.`,
      whatYouNeed: [
        "Your HOA's name and board contact info",
        "The violation you were cited for",
        "The fine amount and date of the notice",
        "Your grounds for appeal (selective enforcement, vague rules, etc.)",
      ],
      whenToSend: [
        "You received a fine you believe is unfair or selectively enforced",
        "The HOA didn't follow its own procedures for notice and hearing",
        "The CC&Rs are vague about the alleged violation",
        "Other homeowners have the same 'violation' without being fined",
      ],
      relatedDispute: "hoa-fine",
    },
    medical: {
      pageTitle: (city, state) =>
        `Medical Bill Appeal Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `Denied a health insurance claim or hit with a surprise medical bill in ${city}? Under ${state} law and the federal No Surprises Act, you have the right to appeal. Over half of denied claims are overturned on first appeal — but only if you ask.`,
      whatYouNeed: [
        "Your insurance company's name",
        "The claim or reference number",
        "The denial reason",
        "A description of the medical service",
      ],
      whenToSend: [
        "Your insurance denied a claim as 'not medically necessary'",
        "You received a surprise out-of-network bill for an in-network facility",
        "Your prior authorization was denied or reversed",
        "You were charged more than your plan's allowed amount",
      ],
      relatedDispute: "medical-denial",
    },
    employer: {
      pageTitle: (city, state) =>
        `Unpaid Wages Demand Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `If an employer in ${city} owes you wages, overtime, or a final paycheck, ${state} law is on your side. Many states impose daily penalties for late wage payments. A formal demand letter creates the paper trail you need before filing a wage claim.`,
      whatYouNeed: [
        "Your employer's name and address",
        "The amount owed",
        "The type of wages (final paycheck, overtime, commissions)",
        "Your last date of employment",
      ],
      whenToSend: [
        "You weren't paid your final paycheck after leaving a job",
        "Your employer owes overtime, commissions, or bonuses",
        "You were misclassified as a contractor",
        "Your employer made unlawful deductions from your pay",
      ],
      relatedDispute: "wage-theft",
    },
    collector: {
      pageTitle: (city, state) =>
        `Debt Validation Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `Getting calls from a debt collector in ${city}? Under the federal Fair Debt Collection Practices Act and ${state} consumer protection law, you have the right to demand proof that the debt is valid. About 30% of debts in collections contain errors — a validation letter catches them.`,
      whatYouNeed: [
        "The collection agency's name and address",
        "The account or reference number from their letter",
        "The amount they claim you owe",
      ],
      whenToSend: [
        "A collector contacts you about a debt you don't recognize",
        "You believe the debt amount is wrong",
        "The debt may be past the statute of limitations",
        "You suspect identity theft or fraud",
      ],
      relatedDispute: "debt-validation",
    },
    government: {
      pageTitle: (city, state) =>
        `Parking Ticket Contest Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `Got an unfair parking ticket in ${city}? Only about 5% of tickets are contested — but over half of those are dismissed. A well-written contest letter citing the specific facts and local ordinance can save you hundreds.`,
      whatYouNeed: [
        "The citation or ticket number",
        "The date and location of the citation",
        "The violation you were cited for",
        "Your grounds for contesting (unclear signage, wrong info, etc.)",
      ],
      whenToSend: [
        "The signage was unclear or obstructed",
        "Information on the ticket is wrong (plates, location, time)",
        "You had a valid permit or were legally parked",
        "The meter was broken or the zone was unmarked",
      ],
      relatedDispute: "parking-ticket",
    },
    insurance: {
      pageTitle: (city, state) =>
        `Insurance Claim Appeal — ${city}, ${state}`,
      intro: (city, state) =>
        `Had an insurance claim denied in ${city}? ${state} has specific regulations that protect policyholders from unfair claim denials. A formal appeal letter is the first step — and insurers know that policyholders who put it in writing are more likely to escalate.`,
      whatYouNeed: [
        "Your insurance company's name",
        "The claim number and denial date",
        "The reason given for denial",
        "Details about the claim",
      ],
      whenToSend: [
        "Your claim was denied without adequate explanation",
        "The denial contradicts your policy terms",
        "The insurer is delaying payment unreasonably",
        "You disagree with the settlement amount offered",
      ],
      relatedDispute: "medical-denial",
    },
    contractor: {
      pageTitle: (city, state) =>
        `Contractor Demand Letter — ${city}, ${state}`,
      intro: (city, state) =>
        `Hired a contractor in ${city} who didn't finish the job or did it wrong? Under ${state} consumer protection law, you can demand a refund or completion. A demand letter is required before filing in small claims court in most jurisdictions — and it often resolves the issue without going to court.`,
      whatYouNeed: [
        "The contractor's name and business address",
        "The amount paid and amount owed",
        "A description of the work agreed to and what was actually done",
        "Any contracts, receipts, or communications",
      ],
      whenToSend: [
        "The contractor took payment but didn't finish the work",
        "The work was done poorly or not to the agreed specifications",
        "The contractor won't respond to requests for a fix or refund",
        "The contractor abandoned the project",
      ],
      relatedDispute: "general-demand-letter",
    },
  };
  return content[categoryId];
}

export default function LocalPage({
  params,
}: {
  params: { slug: string };
}) {
  const parsed = parseLocalPageSlug(params.slug);
  if (!parsed) notFound();

  const city = CITIES.find((c) => c.slug === parsed.citySlug);
  const category = LOCAL_DISPUTE_CATEGORIES.find(
    (c) => c.id === parsed.categoryId
  );
  if (!city || !category) notFound();

  const statute = getStatuteByState(city.stateAbbr);
  const content = getCategoryContent(category.id);
  if (!content) notFound();

  const pageTitle = content.pageTitle(city.name, city.state);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/local" className="hover:text-slate-700 dark:hover:text-slate-300">Local</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">{city.name}, {city.stateAbbr}</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {pageTitle}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {content.intro(city.name, city.state)}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/disputes/${content.relatedDispute}`}
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500"
          >
            Start your free letter
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <span className="flex items-center text-sm text-slate-500">
            <svg className="mr-1.5 h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            First letter free — no credit card
          </span>
        </div>

        {/* State law box */}
        {statute && (
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-lg font-bold">
              {city.state} law at a glance
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Return deadline
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {statute.returnDeadlineDays} days
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Max damages
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {statute.maxDamagesMultiplier}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Small claims limit
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  ${statute.smallClaimsLimit.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Statute
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {statute.relevantCode}
                </p>
              </div>
            </div>
            {statute.notes && (
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                {statute.notes}
              </p>
            )}
          </div>
        )}

        {/* What you'll need */}
        <div className="mt-10">
          <h2 className="text-lg font-bold">
            What you&apos;ll need
          </h2>
          <ul className="mt-4 space-y-2">
            {content.whatYouNeed.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* When to send */}
        <div className="mt-10">
          <h2 className="text-lg font-bold">
            When to send a {category.label.toLowerCase()} demand letter in{" "}
            {city.name}
          </h2>
          <ul className="mt-4 space-y-2">
            {content.whenToSend.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="mt-10">
          <h2 className="text-lg font-bold">How it works</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { step: "1", title: "Answer questions", desc: "A short form about your situation — about 3 minutes." },
              { step: "2", title: "We draft the letter", desc: `Our AI generates a professional letter citing ${city.state} law.` },
              { step: "3", title: "Download and send", desc: "Get your letter as a PDF or DOCX. First one is free." },
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                  {s.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-xl bg-slate-950 p-8 text-center text-white dark:bg-slate-900">
          <h2 className="text-xl font-bold">
            Ready to send your letter?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Generate a professional demand letter citing {city.state} statutes. First letter is free.
          </p>
          <Link
            href={`/disputes/${content.relatedDispute}`}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500"
          >
            Start your free letter
          </Link>
        </div>

        {/* Other cities in this state */}
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-slate-500">
            Other cities in {city.state}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CITIES.filter(
              (c) => c.stateAbbr === city.stateAbbr && c.slug !== city.slug
            ).map((c) => (
              <Link
                key={c.slug}
                href={`/local/${category.id}-${c.slug}`}
                className="rounded-md border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-teal-700 dark:hover:text-teal-400"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
