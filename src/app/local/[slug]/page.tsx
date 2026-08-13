import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllLocations,
  getAllLocalPageSlugs,
  getLocationBySlug,
  parseLocalPageSlug,
  LOCAL_DISPUTE_TYPES,
  type Location,
} from "@/lib/cities";
import { getDisputeBySlug } from "@/lib/disputes";
import { getStatuteByState, type StateStatute } from "@/lib/statutes";

// ---------------------------------------------------------------------------
// Checklist — what documents/info the user should gather per dispute type
// ---------------------------------------------------------------------------

function getChecklist(disputeSlug: string): string[] {
  const checklists: Record<string, string[]> = {
    "security-deposit": [
      "Lease agreement (signed copy)",
      "Move-in and move-out photos or video",
      "Security deposit receipt or bank statement showing the payment",
      "Your landlord's name and current mailing address",
      "Written move-out notice (if you sent one)",
      "Any correspondence with your landlord about deductions",
      "Forwarding address you provided to the landlord",
    ],
    "credit-report": [
      "Recent credit report from the bureau you are disputing with",
      "Account name, number, and reported balance of the disputed item",
      "Supporting documents (payment receipts, identity theft report, account statements)",
      "A copy of the bureau's contact information (mailing address for disputes)",
      "Any prior dispute confirmation numbers",
    ],
    "dmca-takedown": [
      "URL of the infringing content",
      "URL or copy of your original work",
      "Description of the copyrighted material",
      "Proof of ownership (publication date, metadata, watermarks)",
      "The platform's or host's designated DMCA agent contact",
    ],
    "medical-denial": [
      "Explanation of Benefits (EOB) or denial letter",
      "Claim number and date of service",
      "The specific denial reason code",
      "Your insurance policy or plan summary",
      "Doctor's notes or letter of medical necessity (if available)",
      "Any relevant medical records supporting the claim",
    ],
    "parking-ticket": [
      "Citation number and issuing agency",
      "Date, time, and exact location of the ticket",
      "Photos of the signage, meter, or parking area",
      "Photos of your vehicle's position relative to the alleged violation",
      "Any receipts for parking payment or permits",
    ],
    "debt-validation": [
      "The collector's initial contact letter or notice",
      "Account reference number from the collection notice",
      "The amount claimed and the name of the original creditor",
      "Your own records of the alleged debt (statements, payments)",
      "Identity theft report (if applicable)",
    ],
    "subscription-refund": [
      "Subscription or service name and account details",
      "Cancellation confirmation (email, screenshot, or reference number)",
      "Bank or card statements showing charges after cancellation",
      "Screenshots of the company's cancellation policy",
      "Any correspondence with customer support",
    ],
    "lease-break": [
      "Current lease agreement",
      "Written documentation of the reason for breaking the lease",
      "Evidence supporting your legal basis (repair requests, police reports, military orders)",
      "Photos or records of uninhabitable conditions (if applicable)",
      "Your landlord's name and address",
      "Your proposed move-out date",
    ],
    "hoa-fine": [
      "Violation notice from the HOA with date and fine amount",
      "Copy of the CC&Rs and relevant bylaws",
      "Photos of the alleged violation",
      "Photos of similar violations by neighbors (for selective enforcement)",
      "Any correspondence with the HOA board",
      "Meeting minutes or hearing notices",
    ],
    "wage-theft": [
      "Pay stubs or payroll records",
      "Employment contract or offer letter",
      "Time sheets, clock-in records, or work schedule",
      "Your employer's name, address, and EIN (if known)",
      "Bank statements showing missing deposits",
      "Written communications about pay or termination",
    ],
    "chargeback-dispute": [
      "Credit card statement showing the disputed charge",
      "Merchant name, transaction date, and amount",
      "Order confirmation or receipt",
      "Evidence of non-delivery, defect, or misrepresentation",
      "Any correspondence with the merchant attempting to resolve",
      "Your card issuer's dispute contact information",
    ],
    "foia-request": [
      "The exact name of the government agency you are requesting from",
      "A clear description of the records you want",
      "Approximate date range for the records",
      "The agency's FOIA office mailing address or online portal URL",
      "Fee waiver justification (if requesting one)",
    ],
    "general-demand-letter": [
      "The full name and address of the person or business you are writing to",
      "Receipts, invoices, or contracts showing the amount owed",
      "A written record of what was agreed and what was delivered",
      "Any photos, emails, or texts supporting your claim",
      "A clear dollar amount you are demanding",
    ],
    "irs-abatement": [
      "IRS notice showing the penalty (CP14, CP501, etc.)",
      "The tax year, penalty type, and penalty amount",
      "Copies of your filed returns for the penalty year and three prior years",
      "Proof of payment or installment agreement (if applicable)",
      "Documentation of reasonable cause (medical records, disaster declarations)",
    ],
    "property-tax-appeal": [
      "Current property tax assessment notice",
      "Comparable sales data (3-5 similar homes sold recently nearby)",
      "Photos of property condition issues that reduce value",
      "An independent appraisal (if available)",
      "Property description errors to point out (wrong square footage, lot size, etc.)",
      "The appeal deadline and filing form for your county",
    ],
    "data-broker-takedown": [
      "The name of the data broker site",
      "URL of your profile on their site",
      "A list of the personal information they are displaying",
      "Your state of residence (for applicable privacy law)",
      "The broker's opt-out or privacy request contact",
    ],
    "ada-accommodation": [
      "Your employer's or institution's HR contact information",
      "A general description of your condition (no diagnosis required)",
      "The specific accommodation you are requesting",
      "An explanation of how the accommodation enables you to perform essential functions",
      "A doctor's note confirming the need (if requested by employer)",
    ],
    "denied-warranty": [
      "Product name, model number, and serial number",
      "Proof of purchase (receipt, order confirmation, credit card statement)",
      "Warranty documentation or terms",
      "Description and photos of the defect",
      "The manufacturer's stated reason for denial",
      "Repair estimates from a third party (if available)",
    ],
    "small-claims-demand": [
      "The defendant's full legal name and address",
      "The exact dollar amount you are claiming",
      "A summary of the facts and dates",
      "Contracts, invoices, receipts, or other written agreements",
      "Photos, screenshots, or communications supporting your claim",
      "Your state's small claims court filing limit",
    ],
    "airbnb-host-dispute": [
      "Booking confirmation number",
      "Screenshots of the listing description versus actual conditions",
      "Photos and video taken during your stay",
      "Check-in and check-out communications with the host",
      "Receipts for any out-of-pocket expenses caused by the issue",
      "Correspondence through the platform's resolution center",
    ],
  };

  return checklists[disputeSlug] ?? [
    "Relevant contracts or agreements",
    "Correspondence (emails, letters, texts)",
    "Receipts or proof of payment",
    "Photos or other supporting evidence",
    "The other party's name and contact information",
  ];
}

// ---------------------------------------------------------------------------
// Timeline — when to take action per dispute type
// ---------------------------------------------------------------------------

function getTimeline(disputeSlug: string): Array<{ step: string; detail: string }> {
  const timelines: Record<string, Array<{ step: string; detail: string }>> = {
    "security-deposit": [
      { step: "Move-out day", detail: "Document the condition of the unit with photos and video before handing over keys." },
      { step: "Within 7 days", detail: "Send your forwarding address to the landlord in writing so the deadline clock starts." },
      { step: "After the state deadline passes", detail: "If the deposit or itemized statement has not arrived, send your demand letter immediately." },
      { step: "14 days after your letter", detail: "If there is no response, file in small claims court and cite the demand letter as evidence." },
    ],
    "credit-report": [
      { step: "Discover the error", detail: "Pull your free report from annualcreditreport.com and identify the inaccurate item." },
      { step: "Within 1 week", detail: "Send your dispute letter to the bureau reporting the error, with supporting documents." },
      { step: "30 days later", detail: "The bureau must complete its investigation and notify you of the result." },
      { step: "If not resolved", detail: "File a complaint with the CFPB and consider sending a follow-up request for the method of verification." },
    ],
    "dmca-takedown": [
      { step: "Find the infringement", detail: "Document the infringing URL and your original work's URL with screenshots and timestamps." },
      { step: "Same day if possible", detail: "Send the DMCA notice to the platform's designated agent or abuse contact." },
      { step: "Within 1-3 business days", detail: "Most platforms acknowledge receipt and begin review." },
      { step: "Within 10-14 days", detail: "The content should be removed. If the poster files a counter-notice, you have 10 business days to file a lawsuit or the content may be restored." },
    ],
    "medical-denial": [
      { step: "Receive the denial", detail: "Read the Explanation of Benefits carefully and note the specific denial reason and deadline to appeal." },
      { step: "Within 30 days", detail: "Submit your internal appeal letter with supporting medical documentation." },
      { step: "30-60 days later", detail: "The insurer must issue a determination on your internal appeal." },
      { step: "If denied again", detail: "Request an external review by an independent third party, which is your right under federal law." },
    ],
    "parking-ticket": [
      { step: "At the scene", detail: "Take photos of your vehicle, the signage, the meter, and the surrounding area." },
      { step: "Within 21-30 days", detail: "File your contest letter before the deadline printed on the ticket." },
      { step: "2-6 weeks later", detail: "Receive a decision by mail. Some cities allow an in-person hearing." },
      { step: "If denied", detail: "Most jurisdictions allow one level of appeal to a superior hearing officer." },
    ],
    "debt-validation": [
      { step: "Receive collector's first contact", detail: "Do not acknowledge the debt or make any payment." },
      { step: "Within 30 days", detail: "Send your debt validation letter by certified mail to preserve your full FDCPA rights." },
      { step: "While awaiting validation", detail: "The collector must cease all collection activity, including credit reporting." },
      { step: "If they cannot validate", detail: "The debt must be dropped and removed from your credit report. If they continue collecting, they are violating federal law." },
    ],
    "subscription-refund": [
      { step: "After the unauthorized charge", detail: "Screenshot the charge, your cancellation confirmation, and the company's refund policy." },
      { step: "Within 3 days", detail: "Contact customer service and document the interaction. Keep the reference number." },
      { step: "If no response in 5 business days", detail: "Send the formal demand letter by email and certified mail." },
      { step: "10 business days after the letter", detail: "If unresolved, file a chargeback with your bank and a complaint with your state AG and the FTC." },
    ],
    "lease-break": [
      { step: "Document the issue", detail: "Gather evidence of the condition or circumstance justifying early termination (photos, repair requests, orders)." },
      { step: "Give written notice", detail: "Send your lease termination letter to the landlord by certified mail with at least the required notice period." },
      { step: "Continue paying rent", detail: "Keep paying rent until your stated move-out date to avoid default claims." },
      { step: "Move-out day", detail: "Document the unit's condition, return all keys, and request your security deposit in writing." },
    ],
    "hoa-fine": [
      { step: "Receive the violation notice", detail: "Note the deadline to respond or request a hearing, which is usually 15-30 days." },
      { step: "Research the CC&Rs", detail: "Find the specific rule cited and check if it was followed consistently across the neighborhood." },
      { step: "Within the response deadline", detail: "Send your appeal letter and formally request a hearing before the board." },
      { step: "At the hearing", detail: "Present your evidence, including photos of similar violations by others that were not fined." },
    ],
    "wage-theft": [
      { step: "Last day of employment", detail: "Document your final hours, accrued PTO, and any unpaid commissions or bonuses in writing." },
      { step: "After the state deadline for final pay", detail: "If your paycheck has not arrived, send the demand letter immediately by certified mail." },
      { step: "10 days after the letter", detail: "If there is no payment, file a wage claim with your state labor board." },
      { step: "While the claim is pending", detail: "Many states impose daily waiting-time penalties that accrue until the wages are paid." },
    ],
    "chargeback-dispute": [
      { step: "Discover the issue", detail: "Attempt to resolve directly with the merchant first and document the attempt." },
      { step: "Within 60 days of the statement", detail: "File your dispute with your card issuer in writing. This is the federal deadline under Regulation Z." },
      { step: "Within 30 days", detail: "The bank must acknowledge your dispute and begin an investigation." },
      { step: "Within 2 billing cycles", detail: "The bank must resolve the dispute, either reversing the charge or explaining why it stands." },
    ],
    "foia-request": [
      { step: "Identify the records", detail: "Be as specific as possible about what you want, including date ranges and subject matter." },
      { step: "Submit your request", detail: "Send the FOIA letter to the agency's designated FOIA officer by mail or through their online portal." },
      { step: "Within 20 business days", detail: "The agency must respond, though they may request an extension for complex requests." },
      { step: "If denied or incomplete", detail: "File an administrative appeal within the agency, then consider filing in federal court if the appeal fails." },
    ],
    "general-demand-letter": [
      { step: "Attempt informal resolution", detail: "Make at least one attempt to resolve the issue directly and keep a record of it." },
      { step: "Send the demand letter", detail: "Mail it by certified mail with return receipt requested so you have proof of delivery." },
      { step: "Allow 14 days for response", detail: "The letter gives the other party a reasonable window to comply before legal action." },
      { step: "If no response", detail: "File in small claims court or consult an attorney. The demand letter is evidence of your good-faith effort." },
    ],
    "irs-abatement": [
      { step: "Receive the penalty notice", detail: "Review the notice type (CP14, CP501, etc.) and verify the penalty amount and tax year." },
      { step: "Verify your eligibility", detail: "Confirm that you filed all required returns and had no penalties for the prior three tax years." },
      { step: "Send the abatement request", detail: "Mail your letter to the IRS address on the notice. You can also call 800-829-1040 to request abatement by phone." },
      { step: "30-60 days later", detail: "The IRS will respond with a determination. If denied, you can appeal through the IRS Office of Appeals." },
    ],
    "property-tax-appeal": [
      { step: "Receive your assessment notice", detail: "Note the appeal deadline, which is often only 30-45 days from the notice date." },
      { step: "Research comparable sales", detail: "Find 3-5 similar homes that sold recently nearby for less than your assessment." },
      { step: "File the appeal", detail: "Submit the appeal form and your evidence to the county assessor or board of review." },
      { step: "Attend the hearing", detail: "Present your comparable sales, condition issues, and any errors in the property description." },
    ],
    "data-broker-takedown": [
      { step: "Find your profiles", detail: "Search your name on major data broker sites (Whitepages, Spokeo, BeenVerified, MyLife, etc.)." },
      { step: "Send deletion demands", detail: "Send a removal request to each broker citing CCPA or your state's privacy law." },
      { step: "Within 45 days", detail: "Under the CCPA, brokers must respond and process your request." },
      { step: "Follow up", detail: "Re-check each site after 60 days. Some brokers re-add profiles from public records, so you may need to repeat." },
    ],
    "ada-accommodation": [
      { step: "Identify the accommodation", detail: "Determine the specific accommodation that would allow you to perform your job or access services." },
      { step: "Submit your request in writing", detail: "Send the formal accommodation request letter to HR or the relevant decision-maker." },
      { step: "Interactive process", detail: "The employer must engage in an interactive process with you to identify a reasonable accommodation." },
      { step: "If denied", detail: "Request the denial in writing with the stated reason. File a complaint with the EEOC within 180 days if necessary." },
    ],
    "denied-warranty": [
      { step: "Document the defect", detail: "Take photos and video of the issue. Save the original purchase receipt and warranty card." },
      { step: "Contact the manufacturer", detail: "Attempt to resolve through their warranty process and document the denial." },
      { step: "Send the demand letter", detail: "Cite the Magnuson-Moss Warranty Act and demand repair, replacement, or refund within 14 days." },
      { step: "If unresolved", detail: "File a complaint with the FTC and your state consumer protection office, and consider small claims court." },
    ],
    "small-claims-demand": [
      { step: "Attempt to resolve informally", detail: "Document at least one good-faith attempt to settle the matter directly." },
      { step: "Send the pre-litigation demand", detail: "Most states require a written demand before filing. Send by certified mail." },
      { step: "Wait 14 days", detail: "Give the other party a reasonable time to respond or pay." },
      { step: "File in small claims court", detail: "Bring copies of the demand letter, proof of delivery, and all supporting evidence." },
    ],
    "airbnb-host-dispute": [
      { step: "During your stay", detail: "Document any issues immediately with photos, video, and timestamps." },
      { step: "Contact the host", detail: "Message the host through the platform so there is a written record." },
      { step: "Within 24-72 hours", detail: "If the host does not resolve the issue, open a case through the platform's resolution center." },
      { step: "If the platform sides with the host", detail: "Send your formal dispute letter and file a chargeback with your bank as a last resort." },
    ],
  };

  return timelines[disputeSlug] ?? [
    { step: "Gather your evidence", detail: "Collect all relevant documents, photos, and communications." },
    { step: "Send your letter", detail: "Mail the demand letter by certified mail with return receipt." },
    { step: "Allow 14 days", detail: "Give the other party time to respond." },
    { step: "Escalate if needed", detail: "File a complaint or take legal action if there is no resolution." },
  ];
}

// ---------------------------------------------------------------------------
// Intro paragraph
// ---------------------------------------------------------------------------

function getDisputeIntro(
  disputeName: string,
  locationName: string,
  stateName: string,
  statute?: StateStatute
): string {
  const base = `If you are dealing with a ${disputeName.toLowerCase()} in ${locationName}, you have legal rights under ${stateName} law.`;

  if (statute) {
    return (
      `${base} Under ${statute.relevantCode}, your landlord has ${statute.returnDeadlineDays} days to act, ` +
      `and you may be entitled to up to ${statute.maxDamagesMultiplier} the amount in damages for willful violations. ` +
      `The small claims limit in ${stateName} is $${statute.smallClaimsLimit.toLocaleString()}, so most disputes ` +
      `can be resolved without hiring an attorney. A professionally written demand letter is often the fastest ` +
      `path to resolution — and our AI generates one for you in minutes, citing the exact ${stateName} statutes that apply.`
    );
  }

  return (
    `${base} A professionally written demand letter puts the other party on notice that you know your rights ` +
    `and are prepared to take legal action. Our AI generates a customized ${disputeName.toLowerCase()} letter ` +
    `in minutes, citing the specific ${stateName} laws that protect you.`
  );
}

// ---------------------------------------------------------------------------
// Location-specific FAQ
// ---------------------------------------------------------------------------

function getLocationFaqs(
  location: Location,
  disputeSlug: string,
  statute?: StateStatute
): Array<{ q: string; a: string }> {
  const faqs: Array<{ q: string; a: string }> = [];
  const locLabel = location.type === "county" ? location.name : location.name;

  if (statute) {
    faqs.push({
      q: `Where do I file a small claims case in ${locLabel}?`,
      a: `In ${location.state}, small claims cases are filed at the local court with jurisdiction over the area where the defendant lives or where the dispute occurred. The filing limit in ${location.state} is $${statute.smallClaimsLimit.toLocaleString()}.`,
    });
  }

  if (disputeSlug === "security-deposit" && statute) {
    faqs.push({
      q: `How long does a landlord in ${location.state} have to return my deposit?`,
      a: `Under ${statute.relevantCode}, landlords in ${location.state} must return the security deposit within ${statute.returnDeadlineDays} days after the tenant moves out and provides a forwarding address. Failure to meet this deadline may entitle you to up to ${statute.maxDamagesMultiplier} the deposit amount in statutory damages.`,
    });
  }

  if (disputeSlug === "wage-theft") {
    faqs.push({
      q: `How do I file a wage claim in ${location.state}?`,
      a: `You can file a wage claim with the ${location.state} Department of Labor (or equivalent agency). In most cases, you should send a demand letter first. ${location.state} may impose daily penalties for each day wages remain unpaid after the deadline.`,
    });
  }

  if (disputeSlug === "parking-ticket") {
    faqs.push({
      q: `Can I contest a parking ticket online in ${locLabel}?`,
      a: `Many cities including ${locLabel} allow online ticket contests through their parking violations bureau website. Check your ticket for a URL or QR code. If online contest is not available, you can mail in a written contest letter, which is what our tool generates for you.`,
    });
  }

  if (disputeSlug === "debt-validation") {
    faqs.push({
      q: `What is the statute of limitations on debt in ${location.state}?`,
      a: `The statute of limitations on debt varies by type in ${location.state}. For most written contracts it is typically 3-6 years. Once the statute of limitations has expired, a collector cannot successfully sue you for the debt, though they may still attempt to collect.`,
    });
  }

  faqs.push({
    q: `Is this letter service available in ${locLabel}, ${location.stateAbbr}?`,
    a: `Yes. Our AI letter generator works for any dispute in ${locLabel} and all of ${location.state}. The letters automatically cite ${location.state} statutes, deadlines, and penalty amounts. Your first letter is free with no credit card required.`,
  });

  return faqs;
}

// ---------------------------------------------------------------------------
// generateStaticParams
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllLocalPageSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseLocalPageSlug(slug);
  if (!parsed) return {};

  const { disputeType, location } = parsed;
  const statute = getStatuteByState(location.stateAbbr);

  const statRef = statute ? ` ${location.state}'s law (${statute.relevantCode}) protects your rights.` : "";
  const title = `${disputeType.name} in ${location.name}, ${location.state} — Free AI Letter Generator`;
  const description = `Generate a free ${disputeType.name.toLowerCase()} letter for ${location.name}, ${location.state}.${statRef} AI-powered, attorney-reviewed templates.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    alternates: { canonical: `/local/${slug}` },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function LocalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseLocalPageSlug(slug);
  if (!parsed) notFound();

  const { disputeType, location } = parsed;
  const dispute = getDisputeBySlug(disputeType.slug);
  const statute = getStatuteByState(location.stateAbbr);

  const checklist = getChecklist(disputeType.slug);
  const timeline = getTimeline(disputeType.slug);
  const introText = getDisputeIntro(disputeType.name, location.name, location.state, statute);

  const disputeFaqs = dispute?.faq?.slice(0, 3) ?? [];
  const locationFaqs = getLocationFaqs(location, disputeType.slug, statute);
  const allFaqs = [...disputeFaqs, ...locationFaqs];

  const otherDisputes = LOCAL_DISPUTE_TYPES
    .filter((d) => d.slug !== disputeType.slug)
    .slice(0, 6);

  const allLocations = getAllLocations();
  const sameStateOtherLocations = allLocations
    .filter((l) => l.stateAbbr === location.stateAbbr && l.slug !== location.slug && l.type === "city")
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${disputeType.name} Letter Generator in ${location.name}, ${location.stateAbbr}`,
        description: `Free AI-powered ${disputeType.name.toLowerCase()} letter generator for residents of ${location.name}, ${location.state}.`,
        provider: {
          "@type": "Organization",
          name: "AI Dispute Engine",
          url: "https://aidisputeengine.com",
        },
        areaServed: {
          "@type": location.type === "county" ? "AdministrativeArea" : "City",
          name: location.name,
          containedInPlace: { "@type": "State", name: location.state },
        },
        serviceType: "Legal Document Generation",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "First letter free, no credit card required",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://aidisputeengine.com" },
          { "@type": "ListItem", position: 2, name: "Local", item: "https://aidisputeengine.com/local" },
          { "@type": "ListItem", position: 3, name: location.state },
          { "@type": "ListItem", position: 4, name: `${disputeType.name} in ${location.name}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">

          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
          >
            <Link href="/" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/local" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Local</Link>
            <span aria-hidden="true">/</span>
            <span>{location.state}</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900 dark:text-white font-medium">
              {disputeType.name} in {location.name}
            </span>
          </nav>

          <header>
            <div className="flex items-center gap-3 mb-4">
              {dispute?.icon && (
                <span className="text-4xl" role="img" aria-hidden="true">{dispute.icon}</span>
              )}
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                {disputeType.name} in {location.name}, {location.state}
              </h1>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
              {introText}
            </p>

            {dispute?.successStat && (
              <p className="mt-3 text-sm font-medium text-teal-700 dark:text-teal-400">
                {dispute.successStat}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/disputes/${disputeType.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
              >
                Start Your Free {disputeType.name} Letter
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free — no credit card required
              </span>
            </div>
          </header>

          {statute && (
            <section className="mt-12 rounded-xl border-l-4 border-teal-600 bg-slate-50 p-6 sm:p-8 dark:bg-slate-900/60">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {location.state} {disputeType.name} Law
              </h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Return Deadline</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{statute.returnDeadlineDays} days</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Max Damages</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{statute.maxDamagesMultiplier}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Small Claims Limit</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">${statute.smallClaimsLimit.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Statute</p>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{statute.relevantCode}</p>
                </div>
              </div>
              {statute.notes && (
                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700/50 pt-4">
                  {statute.notes}
                </p>
              )}
            </section>
          )}

          {dispute?.testimonial && (
            <section className="mt-10">
              <figure className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900/40">
                <blockquote className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 italic">
                  &ldquo;{dispute.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                    {dispute.testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{dispute.testimonial.name}</p>
                    <p className="text-xs text-slate-500">
                      {dispute.testimonial.location} &mdash;{" "}
                      <span className="font-semibold text-teal-700 dark:text-teal-400">{dispute.testimonial.result}</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </section>
          )}

          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">What You&apos;ll Need</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Gather these items before starting your letter for the best result.
            </p>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              When to Send Your {disputeType.name} Letter
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Follow this timeline to maximize your leverage in {location.name}.
            </p>
            <ol className="mt-6 relative border-l-2 border-teal-200 dark:border-teal-800 ml-3 space-y-8">
              {timeline.map((entry, i) => (
                <li key={i} className="ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white ring-4 ring-white dark:ring-slate-950">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{entry.step}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">How It Works</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Answer a Few Questions",
                  description: `Tell us about your ${disputeType.name.toLowerCase()} situation in ${location.name}. It takes about 3 minutes.`,
                },
                {
                  step: "2",
                  title: "AI Drafts Your Letter",
                  description: `Our AI generates a customized letter citing ${location.state} law${statute ? ` (${statute.relevantCode})` : ""} and the specific facts of your case.`,
                },
                {
                  step: "3",
                  title: "Download and Send",
                  description: "Get your letter as a PDF, print it, and send it by certified mail — or we can mail it for you.",
                },
              ].map((s) => (
                <div key={s.step} className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-base font-bold text-teal-700 dark:bg-teal-900/60 dark:text-teal-300">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          {dispute?.urgencyNote && (
            <div className="mt-10 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/50 dark:bg-amber-950/30">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">{dispute.urgencyNote}</p>
            </div>
          )}

          {allFaqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <dl className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
                {allFaqs.map((faq, i) => (
                  <div key={i} className="py-5">
                    <dt className="text-sm font-semibold text-slate-900 dark:text-white">{faq.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {otherDisputes.length > 0 && (
            <section className="mt-14">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Other Dispute Letters in {location.name}, {location.stateAbbr}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherDisputes.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/local/${d.slug}-${location.slug}`}
                    className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-teal-300 hover:text-teal-700 dark:hover:border-teal-700 dark:hover:text-teal-400 transition-colors"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {getDisputeBySlug(d.slug)?.icon ?? ""}
                    </span>
                    {d.name} in {location.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {sameStateOtherLocations.length > 0 && (
            <section className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {disputeType.name} in Other {location.state} Cities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {sameStateOtherLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/local/${disputeType.slug}-${l.slug}`}
                    className="rounded-full border border-slate-200 dark:border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:border-teal-400 hover:text-teal-700 dark:hover:border-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {l.name}, {l.stateAbbr}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 text-center dark:from-slate-900 dark:to-slate-950 dark:ring-1 dark:ring-slate-800">
            <h2 className="text-2xl font-bold text-white">
              Ready to fight back in {location.name}?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 max-w-xl mx-auto">
              Generate a professional {disputeType.name.toLowerCase()} letter citing {location.state}
              {statute ? ` (${statute.relevantCode})` : ""} statutes in under 5 minutes.
              Your first letter is completely free.
            </p>
            <Link
              href={`/disputes/${disputeType.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 transition-colors"
            >
              Start Your Free Letter Now
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-4 text-xs text-slate-400">
              No signup required. No credit card. Attorney-reviewed templates.
            </p>
          </section>

        </div>
      </article>
    </>
  );
}
