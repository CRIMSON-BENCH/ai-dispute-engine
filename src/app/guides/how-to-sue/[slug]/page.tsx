import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  COMPANIES,
  getCompanyBySlug,
  getCompaniesByIndustry,
} from "@/lib/companies";
import { DISPUTES } from "@/lib/disputes";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  const title = `How to Sue ${company.name} — Step-by-Step Guide`;
  const description = `Learn how to hold ${company.name} accountable. Step-by-step guide to resolving disputes, sending demand letters, filing complaints, and taking ${company.name} to small claims court.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

function getDifficultyColor(level: string) {
  switch (level) {
    case "Easy":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "Medium":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    case "Hard":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400";
  }
}

function getRegulatoryDescription(body: string): string {
  const descriptions: Record<string, string> = {
    FTC: "The Federal Trade Commission handles consumer protection complaints and investigates unfair or deceptive business practices.",
    FCC: "The Federal Communications Commission handles complaints against telecom and internet providers.",
    CFPB: "The Consumer Financial Protection Bureau investigates complaints against banks, lenders, and financial service providers.",
    "State Attorney General": "Your state Attorney General's consumer protection division can investigate complaints and take legal action against businesses.",
    "State AG": "Your state Attorney General's consumer protection division investigates consumer complaints and can take legal action.",
    BBB: "The Better Business Bureau mediates disputes between consumers and businesses, and complaint records are public.",
    "State PUC": "Your state Public Utilities Commission regulates telecom and utility companies and handles billing complaints.",
    "State Insurance Commissioner": "Your state Department of Insurance investigates complaints against insurance companies and enforces insurance regulations.",
    NAIC: "The National Association of Insurance Commissioners coordinates state insurance regulation and consumer protection.",
    DOT: "The U.S. Department of Transportation handles airline consumer complaints including flight cancellations, delays, and baggage issues.",
    FAA: "The Federal Aviation Administration handles safety-related complaints about airlines and aircraft.",
    NHTSA: "The National Highway Traffic Safety Administration handles vehicle safety complaints and recalls.",
    "BBB Auto Line": "The BBB Auto Line program provides free arbitration for warranty and lemon law disputes with participating manufacturers.",
    "State DMV": "Your state Department of Motor Vehicles handles complaints related to vehicle titles, registration, and dealer practices.",
    OCC: "The Office of the Comptroller of the Currency regulates national banks and handles consumer complaints.",
    FDIC: "The Federal Deposit Insurance Corporation handles complaints against FDIC-insured banks.",
    CMS: "The Centers for Medicare & Medicaid Services handles complaints about Medicare and Medicaid health plans.",
    DOL: "The U.S. Department of Labor handles ERISA-related complaints for employer-sponsored benefit plans.",
    DMHC: "The Department of Managed Health Care (California) handles complaints against HMOs and managed care plans.",
    FMCSA: "The Federal Motor Carrier Safety Administration handles complaints about interstate movers and trucking companies.",
    FDA: "The U.S. Food and Drug Administration handles food safety and product safety complaints.",
    EPA: "The Environmental Protection Agency handles complaints related to pesticide use and environmental safety.",
  };
  return descriptions[body] || `${body} handles consumer complaints and regulatory enforcement in this area.`;
}

export default async function HowToSueCompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const matchedDisputes = company.commonDisputes
    .map((slug) => DISPUTES.find((d) => d.slug === slug))
    .filter(Boolean);

  const relatedCompanies = getCompaniesByIndustry(company.industry).filter(
    (c) => c.slug !== company.slug
  );

  const faqs = [
    {
      q: `Can I sue ${company.name} without a lawyer?`,
      a: `Yes. You can file a small claims court case against ${company.name} without an attorney. Small claims courts are designed for self-represented individuals, and the filing fees are typically between $30 and $75. The maximum amount you can sue for varies by state, usually between $5,000 and $10,000.`,
    },
    {
      q: `What is the best way to contact ${company.name} about a dispute?`,
      a: `Start by contacting ${company.name} through their official customer service channels and document everything in writing. If that does not resolve the issue, escalate by filing complaints with ${company.regulatoryBodies.slice(0, 2).join(" and ")}. A formal demand letter often gets faster results than phone calls alone.`,
    },
    {
      q: `How long does it take to resolve a dispute with ${company.name}?`,
      a: `Most disputes with ${company.name} are resolved within ${company.estimatedResolutionTime} when you send a formal demand letter. Filing regulatory complaints can add additional time but often accelerates the company's response. Small claims court cases typically take 30 to 60 days to get a hearing date.`,
    },
    {
      q: `What should I include in a demand letter to ${company.name}?`,
      a: `Your demand letter should include: a clear description of the problem, the specific resolution you want (refund amount, repair, etc.), a deadline for the company to respond (typically 14 days), relevant order numbers or account details, and a statement that you will pursue legal remedies if the demand is not met.`,
    },
    {
      q: `Can I file a complaint against ${company.name} with a government agency?`,
      a: `Yes. You can file complaints with ${company.regulatoryBodies.join(", ")}. Government agencies investigate patterns of complaints and can take enforcement action. Filing a complaint also creates an official record that strengthens your case if you need to go to court.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://aidisputeengine.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: "https://aidisputeengine.com/guides/how-to-sue",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `How to Sue ${company.name}`,
            item: `https://aidisputeengine.com/guides/how-to-sue/${company.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/guides/how-to-sue"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            How to Sue {company.name}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Sue {company.name} — Step-by-Step Guide
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            Get results without a lawyer. Here&apos;s how to hold{" "}
            {company.name} accountable.
          </p>
        </div>

        {/* Key Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Industry
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {company.industry}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Headquarters
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {company.headquarters}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Difficulty
            </p>
            <p className="mt-1">
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${getDifficultyColor(company.difficultyLevel)}`}
              >
                {company.difficultyLevel}
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Est. Resolution
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {company.estimatedResolutionTime}
            </p>
          </div>
        </div>

        {/* Common Complaints */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Common Complaints Against {company.name}
          </h2>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
            These are the most common dispute types filed against{" "}
            {company.name}. Click any dispute to generate a demand letter.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {matchedDisputes.map((dispute) =>
              dispute ? (
                <Link
                  key={dispute.slug}
                  href={`/disputes/${dispute.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 hover:bg-teal-50/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700 dark:hover:bg-teal-900/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-slate-800">
                    {dispute.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {dispute.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {dispute.description}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </section>

        {/* Step 1: Resolve Directly */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Step 1: Try to Resolve It Directly
          </h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Before taking formal action, try contacting {company.name}{" "}
              directly through their official customer service channels. Many
              disputes can be resolved at this stage if you communicate clearly
              and document everything.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Contact {company.name} customer service and explain your issue
                clearly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Keep records of all communications — save emails, take
                screenshots of chats, and note the date, time, and name of
                every representative you speak with
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Request a supervisor or manager if the first representative
                cannot help
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Put your complaint in writing — email or certified mail creates
                a paper trail
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Set a clear deadline (e.g., 14 days) for {company.name} to
                respond
              </li>
            </ul>
          </div>
        </section>

        {/* Step 2: Send a Demand Letter */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Step 2: Send a Demand Letter
          </h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              A demand letter is a formal written notice that tells{" "}
              {company.name} what they owe you and gives them a deadline to pay
              or act. It demonstrates that you are serious and creates
              documentation for any future legal proceedings.
            </p>
            <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
              Why demand letters work:
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Companies take formal letters more seriously than phone calls or
                emails
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                A demand letter citing specific laws and statutes shows you know
                your rights
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                It creates a documented record that strengthens your case in
                court
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Many courts require a written demand before you can file a
                lawsuit
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/disputes"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500"
              >
                Generate Your {company.name} Demand Letter — $2
              </Link>
            </div>
          </div>
        </section>

        {/* Step 3: File Regulatory Complaints */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Step 3: File Regulatory Complaints
          </h2>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
            If {company.name} does not respond to your demand letter, file
            complaints with the following regulatory agencies. Companies are
            required to respond to government inquiries, and multiple complaints
            can trigger an investigation.
          </p>
          <div className="space-y-3">
            {company.regulatoryBodies.map((body) => (
              <div
                key={body}
                className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {body}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {getRegulatoryDescription(body)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Step 4: Small Claims Court */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Step 4: Take Them to Small Claims Court
          </h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              If {company.name} still refuses to resolve your dispute, you can
              file a case in small claims court. Small claims court is designed
              for everyday people — no lawyer is needed, and filing fees are
              typically $30 to $75.
            </p>
            <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
              How to file in small claims court:
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Check your state&apos;s small claims court limit (usually $5,000
                to $10,000)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                File the claim at your local courthouse or online in many
                jurisdictions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Serve {company.name} with the court papers (the court clerk can
                help with this)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Bring all your evidence: demand letter, communications, receipts,
                photos, and regulatory complaints
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                Present your case clearly and concisely to the judge
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/tools/small-claims-kit"
                className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Get the Small Claims Court Kit →
              </Link>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">
            Pro Tips for Your {company.name} Dispute
          </h2>
          <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 dark:border-teal-800 dark:bg-teal-900/10">
            <ul className="space-y-3">
              {company.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white">
              Ready to Hold {company.name} Accountable?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-teal-100">
              Generate a professional demand letter citing the right laws and
              statutes. Takes 60 seconds. No lawyer needed.
            </p>
            <Link
              href="/disputes"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-teal-700 shadow-sm transition-colors hover:bg-teal-50"
            >
              Generate Your {company.name} Demand Letter — $2
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">Related Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/tools/escalation"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Escalation Pack
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Includes a demand letter, regulatory complaints, and chargeback
                dispute letter.
              </p>
            </Link>
            <Link
              href="/tools/evidence-toolkit"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Evidence Toolkit
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Organize your evidence and build a documented case for court or
                negotiations.
              </p>
            </Link>
            <Link
              href="/tools/small-claims-kit"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Small Claims Kit
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Everything you need to file and win in small claims court.
              </p>
            </Link>
            <Link
              href="/tools/settlement-calculator"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Settlement Calculator
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Estimate what your dispute might be worth before negotiating.
              </p>
            </Link>
            <Link
              href="/tools/response-letter"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Response Letter
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Respond to a counteroffer or rejection from the company.
              </p>
            </Link>
            <Link
              href="/tools/notarized-letter"
              className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-teal-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Notarized Letter
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Add notarization for extra legal weight to your demand letter.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-4">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Companies */}
        {relatedCompanies.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">
              Other {company.industry} Companies
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedCompanies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/how-to-sue/${related.slug}`}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-700 dark:hover:text-teal-400"
                >
                  {related.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mb-12">
          <Link
            href="/guides/how-to-sue"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            ← Browse all company guides
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
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
