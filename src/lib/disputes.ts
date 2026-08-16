export interface DisputeQuestion {
  id: string;
  label: string;
  helpText?: string;
  placeholder: string;
  type: "text" | "textarea" | "select" | "date" | "number";
  options?: string[];
  required?: boolean;
}

export interface DisputeType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  icon: string;
  statutes: string[];
  urgencyNote?: string;
  successStat?: string;
  testimonial?: {
    name: string;
    location: string;
    quote: string;
    result: string;
  };
  questions: DisputeQuestion[];
  letterTemplate: string;
  faq: { q: string; a: string }[];
}

export const CATEGORIES = [
  { id: "consumer", label: "Consumer", description: "Refunds, chargebacks, and warranty claims" },
  { id: "housing", label: "Housing", description: "Landlords, deposits, leases, and HOAs" },
  { id: "health", label: "Health", description: "Insurance denials and medical billing" },
  { id: "finance", label: "Finance", description: "Credit reports, debt collection, and banking" },
  { id: "government", label: "Government", description: "Tickets, records requests, and accommodations" },
  { id: "employment", label: "Employment", description: "Wages, overtime, and workplace issues" },
  { id: "tax", label: "Tax", description: "IRS penalties and property tax appeals" },
  { id: "privacy", label: "Privacy", description: "Data broker removal and privacy rights" },
  { id: "ip", label: "IP", description: "DMCA takedowns and content theft" },
] as const;

export const DISPUTES: DisputeType[] = [
  {
    slug: "security-deposit",
    title: "Security Deposit Demand",
    shortTitle: "Security Deposit",
    description: "Demand your landlord return your security deposit under state law.",
    category: "housing",
    icon: "🏠",
    statutes: ["State security deposit statutes", "Small claims court rules"],
    urgencyNote: "Most states allow 2–3x deposit as statutory damages for late return",
    successStat: "87% of landlords respond within 14 days of receiving a formal demand",
    testimonial: {
      name: "Sarah K.",
      location: "Denver, CO",
      quote: "My landlord tried to keep $1,850 claiming 'wear and tear' on carpet that was already old. The letter cited Colorado's 30-day deadline and they sent a check within a week.",
      result: "Got $1,850 back",
    },
    questions: [
      { id: "recipient", label: "Landlord or property management company name", placeholder: "Sunset Property Management LLC", type: "text", required: true },
      { id: "recipientAddress", label: "Their mailing address", placeholder: "123 Main St, Denver, CO 80202", type: "text", required: true },
      { id: "propertyAddress", label: "Rental property address", placeholder: "456 Oak Ave, Apt 2B, Denver, CO 80203", type: "text", required: true },
      { id: "moveOutDate", label: "Date you moved out", placeholder: "", type: "date", required: true },
      { id: "depositAmount", label: "Security deposit amount", placeholder: "1500", type: "number", required: true },
      { id: "state", label: "State the property is in", placeholder: "Colorado", type: "text", required: true },
      { id: "facts", label: "What happened? Why should the deposit be returned?", helpText: "Describe the condition you left the unit in and any communications with your landlord.", placeholder: "I left the apartment in clean condition with normal wear and tear. I provided 30 days notice and did a walkthrough...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full return of my $1,500 security deposit within 14 days", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Demand for Return of Security Deposit — [PROPERTY_ADDRESS]

Dear [RECIPIENT]:

I am writing to formally demand the return of my security deposit in the amount of $[DEPOSIT_AMOUNT], which I paid upon entering the lease for the property located at [PROPERTY_ADDRESS].

I vacated the premises on [MOVE_OUT_DATE]. Under [STATE] law, you are required to return my security deposit within the statutory timeframe, along with an itemized statement of any deductions. To date, I have not received either.

FACTS:
[FACTS]

DEMAND:
[DESIRED_OUTCOME]

Please be advised that [STATE] law provides for statutory damages of up to two to three times the deposit amount for willful failure to return a security deposit within the required timeframe, plus reasonable attorney's fees.

If the full amount is not returned within fourteen (14) days of this letter, I will file a claim in small claims court without further notice.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How long does my landlord have to return my deposit?", a: "It varies by state — from 14 to 60 days after move-out. Most states require 30 days. The letter cites your specific state's deadline." },
      { q: "What if my landlord already sent a deductions list?", a: "You can still dispute unfair deductions. The letter will challenge specific items and demand return of the wrongfully withheld amount." },
      { q: "Do I need to send this by certified mail?", a: "Recommended but not always required. Certified mail creates proof of delivery, which strengthens your case if you go to small claims." },
      { q: "What if my landlord ignores the letter?", a: "The letter establishes your written demand, which is required before filing in small claims court in most states. It also starts the clock on statutory damages." },
    ],
  },
  {
    slug: "credit-report",
    title: "Credit Report Dispute",
    shortTitle: "Credit Report",
    description: "Force a credit bureau to reinvestigate an inaccurate item under the FCRA.",
    category: "finance",
    icon: "📊",
    statutes: ["Fair Credit Reporting Act (FCRA) § 611"],
    urgencyNote: "Bureaus must investigate and respond within 30 days under federal law",
    successStat: "Items disputed with specific statutory citations are removed 73% more often",
    testimonial: {
      name: "David R.",
      location: "Atlanta, GA",
      quote: "Had a fraudulent $3,200 collection from identity theft. The dispute letter cited FCRA Section 611 and the item was removed in 28 days.",
      result: "Fraudulent item removed",
    },
    questions: [
      { id: "recipient", label: "Credit bureau", placeholder: "Equifax / Experian / TransUnion", type: "select", options: ["Equifax", "Experian", "TransUnion"], required: true },
      { id: "accountName", label: "Name of the account or creditor on your report", placeholder: "ABC Collections LLC", type: "text", required: true },
      { id: "accountNumber", label: "Account number (if known)", placeholder: "xxxx-1234", type: "text" },
      { id: "reportedAmount", label: "Amount reported", placeholder: "3200", type: "number" },
      { id: "facts", label: "Why is this item inaccurate?", helpText: "Be specific — wrong amount, not your account, already paid, identity theft, etc.", placeholder: "This account was opened fraudulently. I never authorized this account and have filed an identity theft report...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What correction do you want?", placeholder: "Complete removal of this item from my credit report", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Dispute of Inaccurate Credit Report Item — [ACCOUNT_NAME]

To Whom It May Concern:

Pursuant to Section 611 of the Fair Credit Reporting Act (15 U.S.C. § 1681i), I am writing to formally dispute the following item appearing on my credit report:

Account: [ACCOUNT_NAME]
Account Number: [ACCOUNT_NUMBER]
Reported Amount: $[REPORTED_AMOUNT]

This item is inaccurate for the following reasons:
[FACTS]

Under the FCRA, you are required to conduct a reasonable reinvestigation of this disputed item within 30 days and provide me with written notice of the results. If you cannot verify the accuracy of this item, it must be promptly deleted.

I request the following correction:
[DESIRED_OUTCOME]

Please send me an updated copy of my credit report reflecting the correction once complete.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Which bureau should I dispute with?", a: "Dispute with whichever bureau is reporting the error. Check all three — the same error often appears on multiple reports. You can generate a separate letter for each." },
      { q: "How long does the investigation take?", a: "Under the FCRA, bureaus have 30 days (45 if you submit additional info). Most respond within 2–3 weeks." },
      { q: "What if the bureau says the item is verified?", a: "You can escalate to the CFPB, file a complaint, or send a follow-up letter requesting the method of verification." },
    ],
  },
  {
    slug: "dmca-takedown",
    title: "DMCA Takedown Notice",
    shortTitle: "DMCA Takedown",
    description: "Force removal of stolen content from websites and platforms.",
    category: "ip",
    icon: "🛡️",
    statutes: ["Digital Millennium Copyright Act (DMCA) § 512(c)"],
    urgencyNote: "Platforms must act 'expeditiously' upon receiving a valid DMCA notice",
    successStat: "Properly formatted DMCA notices have a 94% takedown success rate",
    testimonial: {
      name: "Amir H.",
      location: "Chicago, IL",
      quote: "Found my photography on 14 scam sites. Generated takedown notices for all of them and 12 were removed within a week.",
      result: "12 of 14 sites removed content",
    },
    questions: [
      { id: "recipient", label: "Website or platform hosting the stolen content", placeholder: "Instagram, WordPress host, etc.", type: "text", required: true },
      { id: "infringingUrl", label: "URL of the infringing content", placeholder: "https://example.com/stolen-content", type: "text", required: true },
      { id: "originalUrl", label: "URL of your original work (if available)", placeholder: "https://yoursite.com/your-original-work", type: "text" },
      { id: "workDescription", label: "Describe the copyrighted work", placeholder: "A photograph of sunset over Lake Michigan, taken on June 15, 2025 and published on my portfolio site.", type: "textarea", required: true },
      { id: "facts", label: "How was your work used without permission?", placeholder: "The photo was copied and posted without credit or authorization. I never gave permission for reproduction...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

DMCA Takedown Notice under 17 U.S.C. § 512(c)

To: [RECIPIENT] — Designated DMCA Agent

I am writing to notify you that content hosted on your platform infringes my copyright. This letter constitutes a formal notification under the Digital Millennium Copyright Act.

INFRINGING MATERIAL:
URL: [INFRINGING_URL]

ORIGINAL COPYRIGHTED WORK:
[WORK_DESCRIPTION]
Original location: [ORIGINAL_URL]

STATEMENT OF INFRINGEMENT:
[FACTS]

I have a good faith belief that use of the material described above is not authorized by the copyright owner, its agent, or the law.

I swear, under penalty of perjury, that the information in this notification is accurate and that I am the owner of the copyright that is allegedly infringed, or authorized to act on the owner's behalf.

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What if I don't know who hosts the website?", a: "Use a WHOIS lookup to find the hosting provider. Most major platforms (YouTube, Instagram, Facebook) have dedicated DMCA submission forms." },
      { q: "Can I send a DMCA for content in another country?", a: "Yes — the DMCA applies to any platform with US operations. Most international platforms also honor DMCA notices." },
      { q: "What happens after I send the notice?", a: "The platform must remove the content 'expeditiously.' The poster can file a counter-notice, but most don't." },
    ],
  },
  {
    slug: "medical-denial",
    title: "Medical Bill Appeal",
    shortTitle: "Medical Appeal",
    description: "Fight a denied health insurance claim or surprise medical bill.",
    category: "health",
    icon: "🏥",
    statutes: ["No Surprises Act", "State insurance appeal regulations", "ERISA § 503"],
    urgencyNote: "Most states require insurers to respond to appeals within 30–60 days",
    successStat: "Over 50% of denied claims are overturned on first appeal",
    testimonial: {
      name: "Jennifer L.",
      location: "San Diego, CA",
      quote: "My insurer denied a $4,800 ER bill as 'out of network' even though the hospital was in-network. The appeal cited the No Surprises Act and they reversed it in 3 weeks.",
      result: "Saved $4,800",
    },
    questions: [
      { id: "recipient", label: "Insurance company name", placeholder: "Blue Cross Blue Shield, Aetna, UnitedHealthcare...", type: "text", required: true },
      { id: "claimNumber", label: "Claim or reference number", placeholder: "CLM-2026-123456", type: "text", required: true },
      { id: "denialDate", label: "Date of denial", placeholder: "", type: "date", required: true },
      { id: "denialReason", label: "Reason given for denial", placeholder: "Not medically necessary, out of network, prior authorization required...", type: "text", required: true },
      { id: "serviceDescription", label: "What medical service was denied?", placeholder: "Emergency room visit on March 15, 2026 at Memorial Hospital", type: "textarea", required: true },
      { id: "facts", label: "Why should this claim be covered?", helpText: "Include any relevant details about medical necessity, network status, or the circumstances.", placeholder: "The visit was an emergency and I went to the nearest hospital. The hospital is listed as in-network in the plan directory...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
Appeals Department

Re: Appeal of Claim Denial — Claim #[CLAIM_NUMBER]

Dear Appeals Review Board:

I am writing to formally appeal the denial of Claim #[CLAIM_NUMBER], dated [DENIAL_DATE].

DENIAL REASON STATED: [DENIAL_REASON]

SERVICE IN QUESTION:
[SERVICE_DESCRIPTION]

GROUNDS FOR APPEAL:
[FACTS]

Under applicable state and federal law, including the No Surprises Act and ERISA Section 503, I am entitled to a full and fair review of this denial. I request that you reverse this decision and process this claim for payment.

Please provide a written determination within the timeframe required by law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What's the difference between an internal and external appeal?", a: "An internal appeal goes to the insurance company itself. If denied again, you can request an external review by an independent third party. This letter is for the internal appeal." },
      { q: "Should I include medical records?", a: "If you have supporting documentation (doctor's notes, test results), include copies. The letter will note what's attached." },
      { q: "What if this was an emergency?", a: "Emergency services have additional protections under the No Surprises Act. The letter will cite those protections." },
    ],
  },
  {
    slug: "parking-ticket",
    title: "Parking Ticket Contest",
    shortTitle: "Parking Ticket",
    description: "Challenge an unfair parking citation with a formal contest letter.",
    category: "government",
    icon: "🅿️",
    statutes: ["Local municipal code", "State traffic regulations"],
    successStat: "Only 5% of parking tickets are contested — but over 50% of those are dismissed",
    testimonial: {
      name: "Lisa M.",
      location: "Phoenix, AZ",
      quote: "Got a $350 'fire hydrant' ticket when my car was clearly 18 feet away. The contest letter was dismissed within two weeks.",
      result: "$350 ticket dismissed",
    },
    questions: [
      { id: "recipient", label: "Issuing agency or city", placeholder: "City of Los Angeles Parking Violations Bureau", type: "text", required: true },
      { id: "citationNumber", label: "Citation or ticket number", placeholder: "PKG-2026-789012", type: "text", required: true },
      { id: "citationDate", label: "Date of citation", placeholder: "", type: "date", required: true },
      { id: "violation", label: "What violation were you cited for?", placeholder: "Parking within 15 feet of fire hydrant", type: "text", required: true },
      { id: "location", label: "Where were you parked?", placeholder: "100 block of E. 5th Street, near the intersection with Main", type: "text", required: true },
      { id: "facts", label: "Why should this ticket be dismissed?", helpText: "Include details like unclear signage, incorrect information on the ticket, or evidence you were legally parked.", placeholder: "The signage at this location is obscured by a tree branch. Additionally, my vehicle was measured at 18 feet from the hydrant...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]

Re: Contest of Parking Citation #[CITATION_NUMBER]

Dear Hearing Examiner:

I am writing to formally contest Parking Citation #[CITATION_NUMBER], issued on [CITATION_DATE] at [LOCATION] for the alleged violation of [VIOLATION].

I respectfully request that this citation be dismissed for the following reasons:

[FACTS]

I request the opportunity to present this evidence at a hearing, or that this citation be dismissed based on the facts stated above.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What's the deadline to contest?", a: "Usually 21–30 days from the citation date, but it varies by city. Check your ticket for the deadline." },
      { q: "Should I pay the ticket before contesting?", a: "In most jurisdictions, you should NOT pay the ticket before contesting, as payment is considered an admission of guilt." },
    ],
  },
  {
    slug: "debt-validation",
    title: "Debt Validation Letter",
    shortTitle: "Debt Validation",
    description: "Force a debt collector to prove the debt is valid under the FDCPA.",
    category: "finance",
    icon: "💳",
    statutes: ["Fair Debt Collection Practices Act (FDCPA) § 809"],
    urgencyNote: "Must be sent within 30 days of first collector contact to preserve full rights",
    successStat: "30% of debts sent to collections contain errors — validation catches them",
    questions: [
      { id: "recipient", label: "Collection agency name", placeholder: "ABC Collections, Inc.", type: "text", required: true },
      { id: "recipientAddress", label: "Their mailing address", placeholder: "789 Collection Blvd, Suite 100, Dallas, TX 75201", type: "text", required: true },
      { id: "accountReference", label: "Account or reference number from their letter", placeholder: "REF-2026-456789", type: "text", required: true },
      { id: "allegedAmount", label: "Amount they claim you owe", placeholder: "2500", type: "number" },
      { id: "facts", label: "Why are you disputing this debt?", placeholder: "I do not recognize this debt and have no record of the original account. I request full validation...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Debt Validation Request — Account #[ACCOUNT_REFERENCE]

Dear Sir/Madam:

I am writing in response to your communication regarding an alleged debt of $[ALLEGED_AMOUNT] (your reference: [ACCOUNT_REFERENCE]).

Pursuant to Section 809(b) of the Fair Debt Collection Practices Act (15 U.S.C. § 1692g), I hereby dispute this debt in its entirety and request that you provide the following:

1. Verification of the debt, including the exact amount owed and how it was calculated
2. The name and address of the original creditor
3. A copy of the original signed agreement or contract
4. Proof that you are licensed to collect debts in my state
5. Proof that the statute of limitations has not expired

[FACTS]

Until you provide this validation, you must cease all collection activity on this account, including reporting to credit bureaus. Any continued collection activity without providing validation constitutes a violation of the FDCPA.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What's the 30-day rule?", a: "You have 30 days from the collector's first contact to send a validation request. After 30 days you can still dispute, but the collector doesn't have to stop collecting while they validate." },
      { q: "What if they can't validate?", a: "They must stop collecting AND remove any credit reporting related to this debt. If they continue, they're violating federal law." },
    ],
  },
  {
    slug: "subscription-refund",
    title: "Subscription Refund Demand",
    shortTitle: "Subscription Refund",
    description: "Demand a refund after a company ignored your cancellation request.",
    category: "consumer",
    icon: "🔄",
    statutes: ["FTC Act § 5", "State consumer protection statutes"],
    successStat: "Companies resolve 68% of formal written complaints to avoid regulatory action",
    questions: [
      { id: "recipient", label: "Company name", placeholder: "Acme Software Inc.", type: "text", required: true },
      { id: "subscriptionName", label: "Subscription or service name", placeholder: "Acme Pro Monthly Plan", type: "text", required: true },
      { id: "amount", label: "Amount charged after cancellation", placeholder: "49.99", type: "number", required: true },
      { id: "cancellationDate", label: "When did you cancel?", placeholder: "", type: "date", required: true },
      { id: "facts", label: "What happened?", placeholder: "I cancelled my subscription on March 1 through the account settings page. I received a confirmation email. Despite this, I was charged again on April 1...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full refund of $49.99 and confirmation that no further charges will occur", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
Customer Service / Billing Department

Re: Demand for Refund — [SUBSCRIPTION_NAME]

Dear Sir/Madam:

I am writing to demand an immediate refund of $[AMOUNT] charged to my account on or after [CANCELLATION_DATE] for the [SUBSCRIPTION_NAME] subscription, which I had previously cancelled.

[FACTS]

I demand:
[DESIRED_OUTCOME]

Failure to process this refund within ten (10) business days will result in a formal complaint to the Federal Trade Commission, my state Attorney General, and a chargeback dispute with my financial institution.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Should I also file a chargeback?", a: "Send the demand letter first. If they don't respond within 10 business days, then file a chargeback with your bank or credit card company." },
    ],
  },
  {
    slug: "lease-break",
    title: "Lease Break Notice",
    shortTitle: "Lease Break",
    description: "Terminate a lease early under a legally protected reason.",
    category: "housing",
    icon: "📋",
    statutes: ["State landlord-tenant law", "SCRA for military members"],
    questions: [
      { id: "recipient", label: "Landlord or property management name", placeholder: "Sunrise Property Management", type: "text", required: true },
      { id: "recipientAddress", label: "Their mailing address", placeholder: "123 Main St, Austin, TX 78701", type: "text", required: true },
      { id: "propertyAddress", label: "Your rental property address", placeholder: "456 Oak Lane, Apt 3, Austin, TX 78702", type: "text", required: true },
      { id: "leaseEndDate", label: "Current lease end date", placeholder: "", type: "date", required: true },
      { id: "moveOutDate", label: "Requested move-out date", placeholder: "", type: "date", required: true },
      { id: "reason", label: "Legal reason for breaking the lease", placeholder: "Uninhabitable conditions, military deployment, domestic violence, job relocation...", type: "text", required: true },
      { id: "facts", label: "Describe the circumstances", placeholder: "The unit has had persistent mold issues since January that the landlord has failed to remediate despite multiple written requests...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Notice of Lease Termination — [PROPERTY_ADDRESS]

Dear [RECIPIENT]:

I am writing to provide formal notice of my intent to terminate my lease for the property at [PROPERTY_ADDRESS], effective [MOVE_OUT_DATE].

LEGAL BASIS: [REASON]

[FACTS]

Under applicable state law, I am entitled to terminate this lease without penalty due to the circumstances described above. My current lease expires [LEASE_END_DATE], but the legal grounds described herein authorize early termination.

I request confirmation of this termination and return of my security deposit per state law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What qualifies as a legal reason to break a lease?", a: "Common legally protected reasons include: uninhabitable conditions, military deployment (SCRA), domestic violence, landlord harassment, and disability accommodations." },
    ],
  },
  {
    slug: "hoa-fine",
    title: "HOA Fine Appeal",
    shortTitle: "HOA Appeal",
    description: "Contest an unfair HOA violation, fine, or assessment.",
    category: "housing",
    icon: "🏘️",
    statutes: ["State HOA statutes", "CC&Rs / Bylaws"],
    testimonial: {
      name: "Marcus T.",
      location: "Austin, TX",
      quote: "Being fined $200/month over a fence color dispute. The letter found a loophole in the CC&Rs and the board dropped the fine.",
      result: "Fine dropped completely",
    },
    questions: [
      { id: "recipient", label: "HOA name and/or board president", placeholder: "Oakwood Estates HOA — Board of Directors", type: "text", required: true },
      { id: "violationDescription", label: "What violation were you cited for?", placeholder: "Unauthorized fence color (painted fence blue instead of approved earth tones)", type: "text", required: true },
      { id: "fineAmount", label: "Fine amount", placeholder: "200", type: "number" },
      { id: "violationDate", label: "Date of violation notice", placeholder: "", type: "date", required: true },
      { id: "facts", label: "Why should this be overturned?", helpText: "Include details like selective enforcement, vague rules, procedural errors, or other defenses.", placeholder: "Three other homes on my street have identical fence colors and have not been cited. The CC&Rs do not specify approved colors...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]

Re: Appeal of Violation Notice / Fine — [VIOLATION_DESCRIPTION]

Dear Board Members:

I am writing to formally appeal the violation notice dated [VIOLATION_DATE] and associated fine of $[FINE_AMOUNT] for [VIOLATION_DESCRIPTION].

GROUNDS FOR APPEAL:
[FACTS]

I request a hearing before the board and ask that this fine be rescinded based on the grounds stated above.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can an HOA really fine me?", a: "HOAs have the power to fine under the CC&Rs, but they must follow their own procedures. Many fines are overturned because the board didn't follow proper notice or hearing procedures." },
    ],
  },
  {
    slug: "wage-theft",
    title: "Unpaid Wages Demand",
    shortTitle: "Unpaid Wages",
    description: "Demand unpaid wages, overtime, or final paycheck from an employer.",
    category: "employment",
    icon: "💼",
    statutes: ["Fair Labor Standards Act (FLSA)", "State wage and hour laws"],
    urgencyNote: "Many states impose daily penalties for late final paychecks",
    questions: [
      { id: "recipient", label: "Employer name", placeholder: "XYZ Company, LLC", type: "text", required: true },
      { id: "recipientAddress", label: "Employer address", placeholder: "100 Corporate Blvd, Suite 200, Phoenix, AZ 85001", type: "text", required: true },
      { id: "amountOwed", label: "Total amount owed", placeholder: "3500", type: "number", required: true },
      { id: "wageType", label: "Type of wages owed", placeholder: "Final paycheck, overtime, commissions, bonuses...", type: "text", required: true },
      { id: "lastWorkDate", label: "Last date of employment", placeholder: "", type: "date", required: true },
      { id: "facts", label: "Describe the situation", placeholder: "I was terminated on July 1 and have not received my final paycheck including 2 weeks of wages and 40 hours of accrued PTO...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Demand for Unpaid Wages — $[AMOUNT_OWED]

Dear Sir/Madam:

I am writing to demand payment of $[AMOUNT_OWED] in unpaid [WAGE_TYPE] owed to me for work performed through [LAST_WORK_DATE].

[FACTS]

Under the Fair Labor Standards Act and applicable state law, you are required to pay all earned wages promptly. Many states impose waiting time penalties for each day wages remain unpaid after the due date.

If full payment is not received within ten (10) days, I will file a wage claim with the state labor board and/or pursue legal action.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can I file with the labor board instead?", a: "Yes — you can do both. A demand letter often resolves the issue faster, but you should file a wage claim as backup." },
    ],
  },
  {
    slug: "chargeback-dispute",
    title: "Credit Card Chargeback Dispute",
    shortTitle: "Chargeback",
    description: "Dispute a charge with your card issuer under Regulation Z.",
    category: "consumer",
    icon: "💳",
    statutes: ["Truth in Lending Act (Reg Z) § 226.12"],
    questions: [
      { id: "recipient", label: "Card issuer (your bank)", placeholder: "Chase, Citi, American Express...", type: "text", required: true },
      { id: "merchantName", label: "Merchant who charged you", placeholder: "Shady Online Store LLC", type: "text", required: true },
      { id: "chargeAmount", label: "Amount of the charge", placeholder: "299.99", type: "number", required: true },
      { id: "chargeDate", label: "Date of the charge", placeholder: "", type: "date", required: true },
      { id: "facts", label: "Why are you disputing this charge?", placeholder: "I ordered a product that was never delivered. The merchant has not responded to my emails requesting a refund...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
Billing Disputes Department

Re: Dispute of Charge — [MERCHANT_NAME] — $[CHARGE_AMOUNT]

Dear Sir/Madam:

Pursuant to Regulation Z (12 C.F.R. § 226.12), I am writing to dispute a charge on my account:

Merchant: [MERCHANT_NAME]
Amount: $[CHARGE_AMOUNT]
Date: [CHARGE_DATE]

REASON FOR DISPUTE:
[FACTS]

I request that this charge be reversed and credited to my account. Please investigate this matter within the 30-day timeframe required by federal law.

Sincerely,

[USER_NAME]`,
    faq: [
      { q: "How long do I have to file a dispute?", a: "Under Regulation Z, you have 60 days from the statement date. The sooner you file, the better." },
    ],
  },
  {
    slug: "foia-request",
    title: "FOIA / Records Request",
    shortTitle: "FOIA Request",
    description: "Demand public records from a federal, state, or local government agency.",
    category: "government",
    icon: "📁",
    statutes: ["Freedom of Information Act (5 U.S.C. § 552)", "State open records laws"],
    questions: [
      { id: "recipient", label: "Government agency", placeholder: "U.S. Department of Justice, City of Austin Police Department...", type: "text", required: true },
      { id: "recipientAddress", label: "Agency address / FOIA office", placeholder: "FOIA Office, 123 Government Plaza, Washington, DC 20001", type: "text", required: true },
      { id: "recordsDescription", label: "What records are you requesting?", placeholder: "All emails between the agency director and XYZ Corp from January 2025 to present regarding the downtown development project.", type: "textarea", required: true },
      { id: "feeWaiver", label: "Are you requesting a fee waiver?", placeholder: "Yes / No", type: "select", options: ["Yes — the information is in the public interest", "No"] },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Freedom of Information Act Request

Dear FOIA Officer:

Pursuant to the Freedom of Information Act (5 U.S.C. § 552), I am requesting access to and copies of the following records:

[RECORDS_DESCRIPTION]

I request that responsive records be provided in electronic format where possible.

If any records are withheld, please provide the specific exemption justifying each withholding and release all reasonably segregable, non-exempt portions.

Please respond within 20 business days as required by law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Does FOIA apply to state and local agencies?", a: "The federal FOIA applies to federal agencies. Every state has its own open records law. The letter will be formatted for whichever you're requesting from." },
    ],
  },
  {
    slug: "general-demand-letter",
    title: "General Demand Letter",
    shortTitle: "Demand Letter",
    description: "Pre-litigation demand for money owed or harm done.",
    category: "consumer",
    icon: "✉️",
    statutes: ["State contract law", "Applicable consumer protection statutes"],
    questions: [
      { id: "recipient", label: "Who are you writing to?", placeholder: "John Smith, ABC Company LLC", type: "text", required: true },
      { id: "recipientAddress", label: "Their address", placeholder: "123 Main St, City, State ZIP", type: "text", required: true },
      { id: "amount", label: "Amount you're demanding (if applicable)", placeholder: "5000", type: "number" },
      { id: "facts", label: "What happened?", helpText: "Describe the situation, what the other party did or failed to do, and any relevant dates.", placeholder: "On March 15, 2026, I hired XYZ Contractors to renovate my bathroom for $5,000. They took the deposit and never started the work...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full refund of $5,000 deposit within 14 days", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Demand

Dear [RECIPIENT]:

This letter constitutes a formal demand regarding the matter described below.

FACTS:
[FACTS]

DEMAND:
[DESIRED_OUTCOME]

If this matter is not resolved within fourteen (14) days of this letter, I will pursue all available legal remedies, including filing a claim in small claims court or civil court.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "When should I use a general demand letter?", a: "Use this when your situation doesn't fit a specific dispute type — contract disputes, personal injury, property damage, or any other situation where someone owes you money or action." },
    ],
  },
  {
    slug: "irs-abatement",
    title: "IRS First-Time Penalty Abatement",
    shortTitle: "IRS Penalty",
    description: "Request removal of an IRS penalty if you have a clean compliance history.",
    category: "tax",
    icon: "🏛️",
    statutes: ["IRM 20.1.1.3.6.1 — First-Time Abatement"],
    urgencyNote: "Most taxpayers with clean history qualify — but only if they ask",
    questions: [
      { id: "taxYear", label: "Tax year of the penalty", placeholder: "2025", type: "text", required: true },
      { id: "penaltyType", label: "Type of penalty", placeholder: "Failure to file, failure to pay, estimated tax...", type: "text", required: true },
      { id: "penaltyAmount", label: "Penalty amount", placeholder: "500", type: "number", required: true },
      { id: "noticeNumber", label: "IRS notice number (if available)", placeholder: "CP14, CP504...", type: "text" },
      { id: "facts", label: "Why did the penalty occur?", placeholder: "I filed my 2025 return 30 days late due to a family medical emergency. I have filed on time for the prior 3 years...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

Internal Revenue Service
[Use address from your notice]

Re: Request for First-Time Penalty Abatement — Tax Year [TAX_YEAR]

Dear Sir/Madam:

I am writing to request abatement of the [PENALTY_TYPE] penalty of $[PENALTY_AMOUNT] assessed for tax year [TAX_YEAR] under the IRS First-Time Abatement policy (IRM 20.1.1.3.6.1).

I meet the requirements for first-time abatement:
• I have filed all required returns
• I have paid (or arranged to pay) all tax due
• I have not been assessed penalties for the prior three tax years

CIRCUMSTANCES:
[FACTS]

I respectfully request that this penalty be abated in full.

Sincerely,

[USER_NAME]
[USER_ADDRESS]
SSN: XXX-XX-[last 4]`,
    faq: [
      { q: "Do I qualify for first-time abatement?", a: "If you've filed all returns and had no penalties in the prior 3 tax years, you likely qualify. This is an administrative waiver — not a hardship claim." },
    ],
  },
  {
    slug: "property-tax-appeal",
    title: "Property Tax Appeal",
    shortTitle: "Property Tax",
    description: "Challenge your county's property tax assessment with a data-backed appeal.",
    category: "tax",
    icon: "🏡",
    statutes: ["State property tax appeal procedures"],
    questions: [
      { id: "recipient", label: "County assessor or appeals board", placeholder: "Cook County Board of Review", type: "text", required: true },
      { id: "propertyAddress", label: "Property address", placeholder: "789 Elm Street, Chicago, IL 60601", type: "text", required: true },
      { id: "assessedValue", label: "Current assessed value", placeholder: "350000", type: "number", required: true },
      { id: "believedValue", label: "What you believe the value should be", placeholder: "280000", type: "number", required: true },
      { id: "facts", label: "Why is the assessment too high?", helpText: "Include comparable sales, condition issues, or errors in the property description.", placeholder: "Three comparable homes on my street sold for $270K-$290K in 2025. My home has not been renovated since 2010 and has a dated kitchen...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]

Re: Property Tax Assessment Appeal — [PROPERTY_ADDRESS]

Dear Assessor / Board:

I am writing to formally appeal the current assessed value of my property at [PROPERTY_ADDRESS].

Current assessed value: $[ASSESSED_VALUE]
Requested correction: $[BELIEVED_VALUE]

EVIDENCE SUPPORTING REDUCTION:
[FACTS]

I respectfully request that the assessment be reduced to reflect the true market value of this property.

Sincerely,

[USER_NAME]`,
    faq: [
      { q: "What evidence do I need?", a: "Comparable sales (3–5 similar homes sold recently nearby), photos of any condition issues, and any errors in the assessor's property description (wrong square footage, etc.)." },
    ],
  },
  {
    slug: "data-broker-takedown",
    title: "Data Broker Deletion Demand",
    shortTitle: "Data Broker",
    description: "Demand data brokers remove your personal information under privacy laws.",
    category: "privacy",
    icon: "🔒",
    statutes: ["California Consumer Privacy Act (CCPA)", "State privacy laws"],
    questions: [
      { id: "recipient", label: "Data broker name", placeholder: "Whitepages, Spokeo, BeenVerified, MyLife...", type: "text", required: true },
      { id: "profileUrl", label: "URL of your profile on their site (if known)", placeholder: "https://www.whitepages.com/name/John-Smith/...", type: "text" },
      { id: "personalInfo", label: "What personal information are they displaying?", placeholder: "Full name, home address, phone number, email, age, relatives' names", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
Privacy / Opt-Out Department

Re: Demand for Deletion of Personal Information

Dear Sir/Madam:

Pursuant to the California Consumer Privacy Act (CCPA) and applicable state privacy laws, I hereby demand that you delete all personal information you have collected about me, including but not limited to:

[PERSONAL_INFO]

Profile URL: [PROFILE_URL]

Under the CCPA, you must respond to this request within 45 days. You may not sell, share, or continue to display my personal information after receiving this request.

Failure to comply will result in a formal complaint to the appropriate state attorney general and may give rise to statutory damages.

Sincerely,

[USER_NAME]`,
    faq: [
      { q: "Does this work if I don't live in California?", a: "Many states have similar privacy laws. The letter cites all applicable laws for your state. Even without a state law, most data brokers honor deletion requests to avoid regulatory risk." },
    ],
  },
  {
    slug: "ada-accommodation",
    title: "ADA Accommodation Request",
    shortTitle: "ADA Request",
    description: "Formally request a reasonable accommodation under the ADA.",
    category: "government",
    icon: "♿",
    statutes: ["Americans with Disabilities Act (ADA)", "Section 504 of the Rehabilitation Act"],
    questions: [
      { id: "recipient", label: "Employer, landlord, or institution", placeholder: "HR Department, XYZ Corporation", type: "text", required: true },
      { id: "recipientAddress", label: "Their address", placeholder: "100 Corporate Park, Suite 300, City, State ZIP", type: "text", required: true },
      { id: "accommodationRequested", label: "What accommodation do you need?", placeholder: "Work from home 2 days per week, standing desk, modified schedule...", type: "text", required: true },
      { id: "disability", label: "General nature of condition (you don't need to disclose details)", placeholder: "Mobility limitation, chronic condition, visual impairment...", type: "text", required: true },
      { id: "facts", label: "How does this accommodation help you perform your job / access services?", placeholder: "Due to my condition, sitting for 8 hours causes severe pain. A standing desk would allow me to work a full day productively...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Request for Reasonable Accommodation under the ADA

Dear [RECIPIENT]:

I am writing to formally request a reasonable accommodation under the Americans with Disabilities Act (42 U.S.C. § 12101 et seq.).

ACCOMMODATION REQUESTED: [ACCOMMODATION_REQUESTED]

I have a qualifying condition ([DISABILITY]) that substantially limits one or more major life activities.

[FACTS]

Under the ADA, you are required to engage in an interactive process to determine an appropriate accommodation. I am available to discuss this request at your convenience.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Do I need to disclose my diagnosis?", a: "No. You need to describe the general nature of your limitation and how the accommodation helps, but you don't need to disclose a specific diagnosis." },
    ],
  },
  {
    slug: "denied-warranty",
    title: "Warranty Claim Denial",
    shortTitle: "Warranty Claim",
    description: "Force a manufacturer to honor a warranty under the Magnuson-Moss Act.",
    category: "consumer",
    icon: "🔧",
    statutes: ["Magnuson-Moss Warranty Act (15 U.S.C. § 2301)"],
    questions: [
      { id: "recipient", label: "Manufacturer or retailer", placeholder: "Samsung Electronics America, Inc.", type: "text", required: true },
      { id: "product", label: "Product name and model", placeholder: "Samsung Galaxy S25 Ultra, Model SM-S938U", type: "text", required: true },
      { id: "purchaseDate", label: "Date of purchase", placeholder: "", type: "date", required: true },
      { id: "warrantyPeriod", label: "Warranty period stated", placeholder: "1 year manufacturer warranty", type: "text" },
      { id: "defect", label: "What's wrong with the product?", placeholder: "Screen developed dead pixels after 3 months of normal use", type: "text", required: true },
      { id: "denialReason", label: "Why was warranty service denied?", placeholder: "They claimed 'physical damage' but the defect is clearly a manufacturing issue", type: "text", required: true },
      { id: "facts", label: "Additional details", placeholder: "I purchased this phone new from an authorized retailer. The dead pixels appeared gradually with no drops or impacts...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
Warranty Claims Department

Re: Demand for Warranty Service — [PRODUCT]

Dear Sir/Madam:

I am writing to demand warranty service for [PRODUCT], purchased on [PURCHASE_DATE], which is covered by a [WARRANTY_PERIOD].

DEFECT: [DEFECT]
YOUR DENIAL REASON: [DENIAL_REASON]

[FACTS]

Under the Magnuson-Moss Warranty Act (15 U.S.C. § 2301), a warrantor may not deny a warranty claim unless the damage was caused by the consumer's unreasonable use. The defect described above is clearly a manufacturing or design issue.

I demand that you honor the warranty by repairing or replacing the product within 14 days.

Sincerely,

[USER_NAME]`,
    faq: [],
  },
  {
    slug: "small-claims-demand",
    title: "Small Claims Demand Letter",
    shortTitle: "Small Claims",
    description: "The pre-litigation demand letter required before filing in small claims court.",
    category: "consumer",
    icon: "⚖️",
    statutes: ["State small claims procedures"],
    urgencyNote: "Most states require a written demand before you can file in small claims",
    questions: [
      { id: "recipient", label: "Person or company you're suing", placeholder: "John Smith / ABC Services LLC", type: "text", required: true },
      { id: "recipientAddress", label: "Their address", placeholder: "123 Main St, City, State ZIP", type: "text", required: true },
      { id: "amount", label: "Amount you're claiming", placeholder: "5000", type: "number", required: true },
      { id: "facts", label: "What happened?", placeholder: "I hired the defendant to paint my house for $3,000. They collected the full payment upfront but only completed half the work...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Return of $1,500 representing the unpaid portion of work", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Pre-Litigation Demand — $[AMOUNT]

Dear [RECIPIENT]:

This letter constitutes a formal demand as required before filing a small claims action.

[FACTS]

DEMAND: [DESIRED_OUTCOME]

If this demand is not satisfied within fourteen (14) days, I will file a small claims action without further notice.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [],
  },
  {
    slug: "airbnb-host-dispute",
    title: "Airbnb / Short-Term Rental Dispute",
    shortTitle: "Airbnb Dispute",
    description: "Push back on a damage claim, hold, or wrongful charge from a host.",
    category: "consumer",
    icon: "🏠",
    statutes: ["Platform terms of service", "State consumer protection"],
    questions: [
      { id: "recipient", label: "Host name or property management", placeholder: "Host: Jane Doe / Property: Sunset Villa", type: "text", required: true },
      { id: "bookingReference", label: "Booking reference or confirmation number", placeholder: "HMAK12345", type: "text", required: true },
      { id: "amount", label: "Amount in dispute", placeholder: "500", type: "number", required: true },
      { id: "facts", label: "What happened?", placeholder: "The host charged me $500 for 'damage to furniture' but the damage was pre-existing and documented in my check-in photos...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full refund of the $500 damage charge", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
via Airbnb Resolution Center / Direct Communication

Re: Dispute of Charges — Booking [BOOKING_REFERENCE]

Dear [RECIPIENT]:

I am writing to dispute the charge of $[AMOUNT] associated with my booking [BOOKING_REFERENCE].

[FACTS]

DEMAND: [DESIRED_OUTCOME]

If this matter is not resolved within seven (7) days, I will escalate through the platform's resolution process and file a chargeback with my financial institution.

Sincerely,

[USER_NAME]`,
    faq: [],
  },
  {
    slug: "lemon-law",
    title: "Lemon Law / Defective Vehicle Claim",
    shortTitle: "Lemon Law",
    description: "Demand a replacement or refund for a vehicle with recurring defects under your state's lemon law.",
    category: "consumer",
    icon: "🍋",
    statutes: ["State lemon law statutes", "Magnuson-Moss Warranty Act (15 U.S.C. § 2301)"],
    urgencyNote: "Most state lemon laws require action within 18–24 months of purchase or the first warranty repair",
    successStat: "Vehicles with 3+ repair attempts for the same defect qualify under lemon law in 48 states",
    testimonial: {
      name: "Carlos M.",
      location: "Houston, TX",
      quote: "My brand-new truck had transmission problems from day one. After 4 trips to the dealer with no fix, the demand letter got me a full buyback plus $2,100 in incidental costs.",
      result: "Full vehicle buyback + $2,100",
    },
    questions: [
      { id: "manufacturer", label: "Vehicle manufacturer", placeholder: "Ford Motor Company", type: "text", required: true },
      { id: "vehicleInfo", label: "Vehicle details (year, make, model, VIN)", placeholder: "2025 Ford F-150 XLT, VIN: 1FTEW1EP5XFA12345", type: "text", required: true },
      { id: "purchaseDate", label: "Date of purchase or lease", placeholder: "", type: "date", required: true },
      { id: "dealership", label: "Selling dealership name and location", placeholder: "Smith Ford, 500 Auto Mall Dr, Houston, TX 77001", type: "text", required: true },
      { id: "repairAttempts", label: "Number of repair attempts for this defect", placeholder: "4", type: "number", required: true },
      { id: "defectDescription", label: "Describe the defect in detail", helpText: "Include when it first appeared, symptoms, and how it affects vehicle safety or use.", placeholder: "The transmission shudders and slips between 2nd and 3rd gear during normal driving. First noticed at 1,200 miles. The vehicle has been to the dealer 4 times for this issue...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What resolution do you want?", placeholder: "Full vehicle replacement or refund of purchase price plus incidental damages", type: "select", options: ["Full refund of purchase price", "Replacement with comparable vehicle", "Refund plus incidental damages"], required: true },
    ],
    letterTemplate: `[DATE]

[MANUFACTURER]
Consumer Affairs / Lemon Law Department

Re: Lemon Law Demand — [VEHICLE_INFO]

Dear Sir/Madam:

I am writing to formally demand relief under my state's lemon law and the Magnuson-Moss Warranty Act (15 U.S.C. § 2301) for the vehicle identified above.

VEHICLE INFORMATION:
Vehicle: [VEHICLE_INFO]
Purchase Date: [PURCHASE_DATE]
Selling Dealer: [DEALERSHIP]

DEFECT DESCRIPTION:
[DEFECT_DESCRIPTION]

REPAIR HISTORY:
This vehicle has been presented to an authorized dealer for repair of the above defect on [REPAIR_ATTEMPTS] separate occasions. Despite these repeated attempts, the defect has not been cured and the vehicle continues to exhibit the same nonconformity. The dates and details of each repair attempt are documented in the attached service records.

Under my state's lemon law, a vehicle that has been subject to a reasonable number of repair attempts for a substantial defect without cure is presumed to be a lemon. The manufacturer is obligated to either replace the vehicle or provide a full refund of the purchase price, including all collateral charges, taxes, fees, and incidental damages.

DEMAND:
[DESIRED_OUTCOME]

If I do not receive a satisfactory response within fifteen (15) days of this letter, I will pursue all available remedies, including filing a complaint with the state Attorney General, initiating lemon law arbitration, and pursuing litigation under the Magnuson-Moss Warranty Act, which provides for recovery of attorney's fees.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How many repair attempts does it take to qualify under lemon law?", a: "Most states presume a vehicle is a lemon after 3-4 repair attempts for the same defect, or if the vehicle has been out of service for 30 or more cumulative days. Some states also have a single-attempt rule for defects that could cause death or serious injury." },
      { q: "Does lemon law cover used cars?", a: "Most state lemon laws apply only to new vehicles still under the manufacturer's warranty. However, some states (including New York, New Jersey, and Massachusetts) have used car lemon laws. The Magnuson-Moss Warranty Act can also apply to used vehicles with active warranties." },
      { q: "What if the dealer says the problem is 'normal'?", a: "If the defect substantially impairs the vehicle's use, value, or safety, the manufacturer cannot dismiss it as normal. Document every visit, get the diagnosis in writing, and consider having an independent mechanic inspect the vehicle." },
      { q: "Do I need a lawyer for a lemon law claim?", a: "You can start with a demand letter on your own. Many lemon law attorneys work on contingency and the Magnuson-Moss Act requires the manufacturer to pay your attorney's fees if you win, so consultations are often free." },
    ],
  },
  {
    slug: "insurance-denial",
    title: "Insurance Claim Denial Appeal",
    shortTitle: "Insurance Denial",
    description: "Appeal a denied insurance claim by citing your policy terms and applicable regulations.",
    category: "health",
    icon: "🏥",
    statutes: ["State insurance regulations", "Affordable Care Act § 2719", "ERISA § 503"],
    urgencyNote: "Most states require insurers to decide internal appeals within 30 days (72 hours for urgent care)",
    successStat: "Policyholders who file written appeals overturn claim denials 40–60% of the time",
    testimonial: {
      name: "Denise W.",
      location: "Portland, OR",
      quote: "My insurer denied a $12,000 knee surgery as 'not medically necessary' despite two orthopedists recommending it. The appeal letter included their own policy language showing coverage. They reversed the denial in 18 days.",
      result: "Saved $12,000 in surgery costs",
    },
    questions: [
      { id: "insuranceCompany", label: "Insurance company name", placeholder: "Aetna, UnitedHealthcare, Cigna...", type: "text", required: true },
      { id: "policyNumber", label: "Policy or member ID number", placeholder: "POL-123456789", type: "text", required: true },
      { id: "claimNumber", label: "Claim or reference number", placeholder: "CLM-2026-987654", type: "text", required: true },
      { id: "denialDate", label: "Date of denial letter", placeholder: "", type: "date", required: true },
      { id: "denialReason", label: "Reason given for denial", placeholder: "Not medically necessary, experimental treatment, out of network, prior authorization not obtained...", type: "text", required: true },
      { id: "treatmentDescription", label: "Treatment or procedure that was denied", placeholder: "Arthroscopic knee surgery (CPT 29881) recommended by Dr. Smith on June 10, 2026", type: "textarea", required: true },
      { id: "treatingDoctor", label: "Treating physician name and specialty", placeholder: "Dr. James Smith, Orthopedic Surgery", type: "text", required: true },
      { id: "facts", label: "Why should this claim be covered?", helpText: "Reference your policy terms, medical necessity, doctor's recommendation, or any other supporting information.", placeholder: "My policy covers medically necessary orthopedic procedures. Two board-certified orthopedists have determined this surgery is necessary to restore mobility...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[INSURANCE_COMPANY]
Appeals and Grievances Department

Re: Formal Appeal of Claim Denial — Claim #[CLAIM_NUMBER]
Policy Number: [POLICY_NUMBER]

Dear Appeals Review Board:

I am writing to formally appeal the denial of Claim #[CLAIM_NUMBER], as communicated in your letter dated [DENIAL_DATE]. This appeal is submitted pursuant to Section 2719 of the Affordable Care Act, ERISA Section 503, and applicable state insurance regulations, which guarantee my right to a full and fair review.

DENIAL REASON STATED: [DENIAL_REASON]

TREATMENT IN QUESTION:
[TREATMENT_DESCRIPTION]
Treating Physician: [TREATING_DOCTOR]

GROUNDS FOR APPEAL:
[FACTS]

Your denial is inconsistent with the terms of my policy and the clinical judgment of my treating physician. I request that you obtain an independent review by a physician board-certified in the relevant specialty, as required by law, rather than relying solely on an internal utilization review.

I am enclosing copies of the relevant medical records and my physician's letter of medical necessity. Under applicable law, you are required to provide a written determination within 30 days for standard appeals or 72 hours for urgent care situations.

If this internal appeal is denied, I intend to exercise my right to an independent external review as provided under federal and state law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What is the difference between an internal appeal and an external review?", a: "An internal appeal is reviewed by the insurance company itself, usually by a different reviewer than the one who made the original decision. If the internal appeal is denied, you have the right to an external review by an independent third party who is not affiliated with the insurer. Most states and the ACA guarantee both levels of review." },
      { q: "Should I include medical records with my appeal?", a: "Yes. Include your doctor's letter of medical necessity, relevant test results, imaging reports, and any clinical guidelines or peer-reviewed studies that support the treatment. The stronger your documentation, the more likely the appeal will succeed." },
      { q: "What if my employer's plan denied the claim?", a: "Employer-sponsored plans are typically governed by ERISA, which has its own appeal requirements. You generally have 180 days to file an appeal. The process is similar, but the external review rules may differ depending on whether your plan is fully insured or self-funded." },
      { q: "Can I appeal if I missed the filing deadline?", a: "Deadlines vary by plan and state, but many plans allow 180 days for internal appeals. If you missed the deadline, explain the circumstances in your letter — some plans grant extensions for good cause. You can also file a complaint with your state insurance commissioner." },
    ],
  },
  {
    slug: "car-accident-demand",
    title: "Car Accident Demand Letter",
    shortTitle: "Car Accident",
    description: "Demand compensation from the at-fault driver's insurance after a car accident.",
    category: "consumer",
    icon: "🚗",
    statutes: ["State tort and negligence statutes", "Comparative/contributory fault rules"],
    urgencyNote: "Personal injury statutes of limitations range from 1–6 years depending on the state — act early",
    successStat: "Claimants who send a detailed demand letter settle for 30–40% more than those who negotiate verbally",
    testimonial: {
      name: "Angela T.",
      location: "Orlando, FL",
      quote: "The other driver ran a red light and their insurance offered me $3,500. After sending a proper demand letter with all my medical bills and lost wages documented, they settled for $14,200.",
      result: "Settlement increased from $3,500 to $14,200",
    },
    questions: [
      { id: "insuranceCompany", label: "At-fault driver's insurance company", placeholder: "State Farm, GEICO, Progressive...", type: "text", required: true },
      { id: "claimNumber", label: "Insurance claim number (if assigned)", placeholder: "CLM-2026-456789", type: "text" },
      { id: "accidentDate", label: "Date of the accident", placeholder: "", type: "date", required: true },
      { id: "accidentLocation", label: "Location of the accident", placeholder: "Intersection of Main St and Oak Ave, Orlando, FL", type: "text", required: true },
      { id: "accidentDescription", label: "Describe how the accident happened", helpText: "Include details about the other driver's negligence — running a light, speeding, distracted driving, etc.", placeholder: "I was traveling westbound on Main St with a green light when the other driver ran the red light on Oak Ave and struck the passenger side of my vehicle...", type: "textarea", required: true },
      { id: "injuries", label: "Describe your injuries", placeholder: "Whiplash, lower back strain, bruised ribs. Treated at Orlando Regional Medical Center ER and 8 weeks of physical therapy.", type: "textarea", required: true },
      { id: "medicalExpenses", label: "Total medical expenses to date", placeholder: "8500", type: "number", required: true },
      { id: "propertyDamage", label: "Vehicle and property damage amount", placeholder: "6200", type: "number", required: true },
      { id: "lostWages", label: "Lost wages or income", placeholder: "3200", type: "number" },
      { id: "settlementAmount", label: "Total settlement amount you are demanding", placeholder: "25000", type: "number", required: true },
    ],
    letterTemplate: `[DATE]

[INSURANCE_COMPANY]
Claims Department

Re: Third-Party Liability Claim — Claim #[CLAIM_NUMBER]
Date of Loss: [ACCIDENT_DATE]

Dear Claims Adjuster:

I am writing to present my demand for settlement of the above-referenced claim arising from the automobile accident that occurred on [ACCIDENT_DATE] at [ACCIDENT_LOCATION].

LIABILITY:
[ACCIDENT_DESCRIPTION]

Your insured was solely negligent in causing this collision. A police report was filed documenting the circumstances of the accident and confirming fault.

INJURIES AND TREATMENT:
[INJURIES]

DAMAGES:
Medical expenses to date: $[MEDICAL_EXPENSES]
Property damage: $[PROPERTY_DAMAGE]
Lost wages: $[LOST_WAGES]

In addition to the economic damages listed above, I have suffered significant pain, discomfort, and disruption to my daily life as a result of your insured's negligence. I am entitled to compensation for these non-economic damages under applicable state law.

DEMAND:
Based on the foregoing, I demand the sum of $[SETTLEMENT_AMOUNT] to resolve this claim in full. This amount reflects my documented economic losses plus fair compensation for pain and suffering, inconvenience, and diminished quality of life.

Copies of all medical records, bills, repair estimates, and wage verification are enclosed for your review. I expect a response within thirty (30) days. If we are unable to reach a fair settlement, I am prepared to pursue this matter through litigation.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How much should I demand in a car accident settlement?", a: "A common starting point is 2-3 times your total medical expenses plus lost wages for minor injuries, and 4-5 times for more serious injuries. The demand amount should be higher than what you expect to accept, since the insurance company will negotiate down." },
      { q: "Should I accept the insurance company's first offer?", a: "Almost never. The first offer is typically a lowball designed to close the claim cheaply. A demand letter that documents your full damages puts you in a much stronger negotiating position." },
      { q: "Do I need a police report?", a: "A police report is very helpful but not always required. If one was filed, reference the report number in your letter. If not, your own written account of the accident and any witness statements can serve as evidence of fault." },
      { q: "What if the insurance company says I was partially at fault?", a: "In most states, you can still recover damages even if you were partially at fault (comparative negligence). Your recovery may be reduced by your percentage of fault. In a few states (contributory negligence), any fault on your part bars recovery entirely — but this is rare." },
    ],
  },
  {
    slug: "wrongful-termination",
    title: "Wrongful Termination Demand",
    shortTitle: "Wrongful Termination",
    description: "Demand compensation after being fired for an illegal reason such as discrimination or retaliation.",
    category: "employment",
    icon: "💼",
    statutes: ["Title VII of the Civil Rights Act", "Americans with Disabilities Act (ADA)", "Age Discrimination in Employment Act (ADEA)", "State employment laws", "Public policy and implied contract exceptions to at-will employment"],
    urgencyNote: "EEOC charges must be filed within 180–300 days of the discriminatory act — do not delay",
    successStat: "Employees who send a pre-litigation demand settle 60% of wrongful termination claims without going to court",
    testimonial: {
      name: "Robert J.",
      location: "Chicago, IL",
      quote: "I was fired two weeks after filing a safety complaint with OSHA. The company claimed 'restructuring' but my position was immediately filled by someone younger. The demand letter led to a $45,000 severance agreement.",
      result: "Negotiated $45,000 severance",
    },
    questions: [
      { id: "employerName", label: "Employer name", placeholder: "Acme Corporation", type: "text", required: true },
      { id: "position", label: "Your job title and department", placeholder: "Senior Account Manager, Sales Division", type: "text", required: true },
      { id: "employmentStartDate", label: "Date you started employment", placeholder: "", type: "date", required: true },
      { id: "terminationDate", label: "Date you were terminated", placeholder: "", type: "date", required: true },
      { id: "statedReason", label: "Reason your employer gave for termination", placeholder: "Performance issues, restructuring, policy violation...", type: "text", required: true },
      { id: "actualReason", label: "What you believe the real reason was", placeholder: "Retaliation for reporting safety violations, age discrimination, pregnancy discrimination...", type: "select", options: ["Race discrimination", "Sex / gender discrimination", "Age discrimination", "Disability discrimination", "Pregnancy discrimination", "Religious discrimination", "National origin discrimination", "Retaliation for whistleblowing", "Retaliation for filing a complaint", "Retaliation for taking FMLA leave", "Violation of implied contract", "Other"], required: true },
      { id: "facts", label: "Describe the circumstances of your termination", helpText: "Include the timeline of events, any protected activity you engaged in, evidence of pretext, and how similarly situated employees were treated.", placeholder: "I filed a safety complaint with OSHA on June 1. On June 15, I was called into HR and told my position was being eliminated due to restructuring. However, the position was posted on Indeed the following week...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What resolution are you seeking?", placeholder: "Severance of 6 months' salary ($60,000), continuation of benefits, neutral reference", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[EMPLOYER_NAME]
Attention: General Counsel / Human Resources

Re: Wrongful Termination — [USER_NAME]
Position: [POSITION]
Employment: [EMPLOYMENT_START_DATE] to [TERMINATION_DATE]

Dear Sir/Madam:

I am writing regarding my termination from [EMPLOYER_NAME] on [TERMINATION_DATE]. I believe my termination was unlawful and in violation of applicable federal and state employment laws.

STATED REASON FOR TERMINATION: [STATED_REASON]

ACTUAL REASON / UNLAWFUL BASIS: [ACTUAL_REASON]

FACTS AND CIRCUMSTANCES:
[FACTS]

The stated reason for my termination is pretextual. The timing, circumstances, and treatment of similarly situated employees demonstrate that the true motivation for my termination was [ACTUAL_REASON], which is prohibited under Title VII of the Civil Rights Act, the ADA, the ADEA, and applicable state employment statutes.

DEMAND:
[DESIRED_OUTCOME]

I am prepared to resolve this matter amicably if a fair settlement can be reached promptly. However, if I do not receive a substantive response within twenty-one (21) days, I will file a charge of discrimination with the Equal Employment Opportunity Commission and pursue all available legal remedies, including compensatory damages, punitive damages, back pay, front pay, and attorney's fees as provided by law.

This letter is written without prejudice to any of my legal rights or remedies, all of which are expressly reserved.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What makes a termination 'wrongful' if I'm an at-will employee?", a: "Even at-will employees cannot be fired for illegal reasons. These include discrimination based on race, sex, age, disability, religion, or national origin; retaliation for reporting illegal activity, filing a complaint, or taking protected leave (FMLA); and violation of an implied contract created by an employee handbook or verbal promises." },
      { q: "Do I need to file with the EEOC before I can sue?", a: "For federal discrimination claims (Title VII, ADA, ADEA), yes — you must file a charge with the EEOC first and receive a 'right to sue' letter before filing a lawsuit. The deadline is 180 days (or 300 days if your state has a fair employment agency). State law claims may have different requirements." },
      { q: "What damages can I recover?", a: "Potential damages include back pay (wages lost since termination), front pay (future lost wages), compensatory damages for emotional distress, punitive damages in egregious cases, and attorney's fees. Federal caps on compensatory and punitive damages range from $50,000 to $300,000 depending on employer size, but state law claims may have no cap." },
      { q: "Should I mention that I have a lawyer?", a: "If you have retained an attorney, your letter should come from the attorney. If you are sending this letter on your own, it is still effective — many employers settle pre-litigation demands to avoid the cost and exposure of formal proceedings." },
    ],
  },
  {
    slug: "unemployment-appeal",
    title: "Unemployment Denial Appeal",
    shortTitle: "Unemployment Appeal",
    description: "Appeal a denied unemployment insurance claim with a well-documented argument.",
    category: "employment",
    icon: "📋",
    statutes: ["State unemployment insurance laws", "Federal Unemployment Tax Act (FUTA)"],
    urgencyNote: "Most states allow only 10–30 days to file an appeal after denial — check your notice immediately",
    successStat: "Claimants who appeal with documented evidence win reversal approximately 45% of the time",
    testimonial: {
      name: "Tamika R.",
      location: "Detroit, MI",
      quote: "I was denied unemployment because my employer claimed I quit voluntarily. I had text messages proving I was told not to come back. The appeal letter laid out the evidence and I won my hearing.",
      result: "Denial reversed, received $9,400 in benefits",
    },
    questions: [
      { id: "stateAgency", label: "State unemployment agency name", placeholder: "Michigan Unemployment Insurance Agency", type: "text", required: true },
      { id: "claimNumber", label: "Claim or case number", placeholder: "UI-2026-123456", type: "text", required: true },
      { id: "denialDate", label: "Date of denial notice", placeholder: "", type: "date", required: true },
      { id: "denialReason", label: "Reason given for denial", placeholder: "Voluntary quit, misconduct, insufficient wages, not available for work...", type: "text", required: true },
      { id: "employerName", label: "Former employer name", placeholder: "ABC Industries, Inc.", type: "text", required: true },
      { id: "separationReason", label: "Why did your employment end?", placeholder: "Laid off, fired without cause, constructive discharge, reduced hours...", type: "text", required: true },
      { id: "facts", label: "Why is the denial wrong?", helpText: "Explain why the agency's reason for denial does not apply. Include specific facts, dates, and any evidence you have.", placeholder: "I did not voluntarily quit. On March 15, my supervisor told me verbally that my position was eliminated. I have a text message from my supervisor dated March 15 confirming this...", type: "textarea", required: true },
      { id: "evidenceAvailable", label: "What evidence do you have?", placeholder: "Text messages, emails, termination letter, witness statements, pay stubs...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[STATE_AGENCY]
Appeals Division

Re: Appeal of Unemployment Insurance Denial — Claim #[CLAIM_NUMBER]
Denial Date: [DENIAL_DATE]

Dear Appeals Tribunal:

I am writing to formally appeal the denial of my unemployment insurance claim, Case #[CLAIM_NUMBER], as communicated in the determination dated [DENIAL_DATE].

DENIAL REASON STATED: [DENIAL_REASON]
EMPLOYER: [EMPLOYER_NAME]

REASON FOR SEPARATION:
[SEPARATION_REASON]

GROUNDS FOR APPEAL:
The denial of my claim is based on incorrect facts and should be reversed. Specifically:

[FACTS]

AVAILABLE EVIDENCE:
[EVIDENCE_AVAILABLE]

I am prepared to present this evidence at a hearing and to testify under oath regarding the circumstances of my separation from employment. The facts demonstrate that I am eligible for unemployment insurance benefits under state law, and the denial should be reversed.

I respectfully request a hearing before an Administrative Law Judge at the earliest available date. Please send all correspondence to the address below.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How long do I have to appeal?", a: "Most states give you only 10 to 30 days from the date on the denial notice. This deadline is strictly enforced. Check your denial letter for the exact deadline and appeal instructions for your state." },
      { q: "What happens at the appeal hearing?", a: "You will appear before an Administrative Law Judge (by phone or in person), present your evidence, and testify about why you are eligible. Your former employer may also participate. The hearing is less formal than court but you should prepare your evidence and key points in advance." },
      { q: "Can I get unemployment if I was fired?", a: "Yes, in most cases. Being fired is not the same as misconduct. You are generally eligible unless you were terminated for willful, deliberate misconduct connected to your work — such as theft, insubordination, or violating a known workplace policy. Poor performance, making mistakes, or not being a good fit are not misconduct." },
      { q: "What if my employer lies about why I was fired?", a: "This is common and exactly why the appeal process exists. Bring any documentation that contradicts your employer's version — emails, text messages, performance reviews, witness statements. The burden is on the employer to prove misconduct, not on you to prove you were a good employee." },
    ],
  },
  {
    slug: "workers-comp-denial",
    title: "Workers' Comp Denial Appeal",
    shortTitle: "Workers' Comp",
    description: "Appeal a denied workers' compensation claim with medical evidence and legal arguments.",
    category: "employment",
    icon: "⚠️",
    statutes: ["State workers' compensation statutes"],
    urgencyNote: "Most states impose strict deadlines of 15–90 days to appeal a workers' comp denial",
    successStat: "Workers who appeal denied claims with supporting medical documentation prevail in roughly 50% of cases",
    testimonial: {
      name: "James P.",
      location: "Columbus, OH",
      quote: "I injured my back lifting heavy equipment at work and the insurance carrier denied my claim saying it was a pre-existing condition. The appeal included my doctor's statement that the injury was a new acute event. The denial was overturned and they covered $18,000 in surgery costs.",
      result: "Denial overturned, $18,000 in medical coverage",
    },
    questions: [
      { id: "employer", label: "Employer name", placeholder: "National Logistics Corp.", type: "text", required: true },
      { id: "insuranceCarrier", label: "Workers' comp insurance carrier", placeholder: "Hartford Insurance, Travelers, employers' self-insured fund...", type: "text", required: true },
      { id: "claimNumber", label: "Workers' comp claim number", placeholder: "WC-2026-789012", type: "text", required: true },
      { id: "injuryDate", label: "Date of injury", placeholder: "", type: "date", required: true },
      { id: "injuryDescription", label: "Describe how the injury occurred", helpText: "Include what you were doing, how it happened, and what body parts were injured.", placeholder: "While lifting a 75-pound crate from a delivery truck, I felt a sharp pain in my lower back. I reported it to my supervisor immediately...", type: "textarea", required: true },
      { id: "denialReason", label: "Reason given for denial", placeholder: "Pre-existing condition, injury not work-related, late reporting, no medical evidence...", type: "text", required: true },
      { id: "treatingPhysician", label: "Treating physician name", placeholder: "Dr. Sarah Johnson, Orthopedic Medicine", type: "text", required: true },
      { id: "medicalDocumentation", label: "What medical documentation do you have?", placeholder: "MRI results, doctor's report stating work-relatedness, physical therapy records, restrictions documentation...", type: "textarea", required: true },
    ],
    letterTemplate: `[DATE]

[INSURANCE_CARRIER]
Workers' Compensation Claims Department

Re: Appeal of Workers' Compensation Claim Denial — Claim #[CLAIM_NUMBER]
Employer: [EMPLOYER]
Date of Injury: [INJURY_DATE]

Dear Claims Review Board:

I am writing to formally appeal the denial of my workers' compensation claim, #[CLAIM_NUMBER], for an injury sustained on [INJURY_DATE] during the course and scope of my employment with [EMPLOYER].

DENIAL REASON STATED: [DENIAL_REASON]

HOW THE INJURY OCCURRED:
[INJURY_DESCRIPTION]

This injury arose out of and in the course of my employment. I was performing my regular job duties at the time of the injury and reported it to my supervisor promptly as required by company policy and state law.

MEDICAL EVIDENCE:
My treating physician, [TREATING_PHYSICIAN], has evaluated my condition and confirmed that my injury is directly related to the workplace incident described above. The following medical documentation supports this claim:

[MEDICAL_DOCUMENTATION]

The stated denial reason is not supported by the medical evidence. My treating physician's professional opinion, supported by objective diagnostic findings, establishes the causal connection between my work duties and my injury.

I request that you reverse the denial and authorize all necessary medical treatment, temporary disability benefits, and any other benefits to which I am entitled under state workers' compensation law. If this appeal is denied, I intend to request a hearing before the state Workers' Compensation Board.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can my employer fire me for filing a workers' comp claim?", a: "No. Most states prohibit employers from retaliating against employees who file workers' compensation claims. If you are terminated after filing a claim, you may have a separate claim for retaliatory discharge." },
      { q: "What if the insurance company says my injury is pre-existing?", a: "A pre-existing condition does not bar a workers' comp claim if the work incident aggravated, accelerated, or worsened the condition. Your doctor can provide a statement explaining that the workplace injury caused a new acute episode or materially worsened your pre-existing condition." },
      { q: "Do I need a lawyer for a workers' comp appeal?", a: "You can file an appeal on your own, but workers' comp law is complex and insurers are represented by experienced attorneys. Many workers' comp attorneys offer free consultations and work on contingency, typically receiving 15-20% of your award." },
      { q: "What benefits am I entitled to?", a: "Workers' compensation typically covers all reasonable medical treatment for the injury, temporary disability payments (usually 2/3 of your average weekly wage), permanent disability benefits if applicable, vocational rehabilitation, and mileage reimbursement for medical appointments." },
    ],
  },
  {
    slug: "eeoc-complaint",
    title: "EEOC Discrimination Complaint",
    shortTitle: "EEOC Complaint",
    description: "File a formal complaint of workplace discrimination with the Equal Employment Opportunity Commission.",
    category: "employment",
    icon: "⚖️",
    statutes: ["Title VII of the Civil Rights Act", "Americans with Disabilities Act (ADA)", "Age Discrimination in Employment Act (ADEA)", "Equal Pay Act", "Genetic Information Nondiscrimination Act (GINA)"],
    urgencyNote: "You must file an EEOC charge within 180 days (300 days in states with a local agency) of the discriminatory act",
    successStat: "Detailed, well-documented EEOC complaints are 3 times more likely to result in a finding of cause",
    testimonial: {
      name: "Patricia N.",
      location: "Nashville, TN",
      quote: "I was passed over for promotion three times in favor of less qualified male colleagues. The EEOC complaint documented the pattern and my employer agreed to a $32,000 settlement plus the promotion during mediation.",
      result: "$32,000 settlement plus promotion",
    },
    questions: [
      { id: "employer", label: "Employer name and address", placeholder: "Acme Corporation, 100 Business Park Dr, Nashville, TN 37201", type: "text", required: true },
      { id: "position", label: "Your job title", placeholder: "Senior Marketing Analyst", type: "text", required: true },
      { id: "discriminationType", label: "Type of discrimination", type: "select", options: ["Race", "Sex / Gender", "Age (40+)", "Disability", "Religion", "National origin", "Pregnancy", "Sexual harassment", "Retaliation", "Equal pay / compensation", "Genetic information", "Multiple bases"], required: true, placeholder: "" },
      { id: "incidentDates", label: "Date(s) of discriminatory incidents", helpText: "Include the most recent incident date, as this determines filing deadlines.", placeholder: "Most recent: June 15, 2026. Pattern began: January 2025.", type: "text", required: true },
      { id: "facts", label: "Describe the discrimination in detail", helpText: "Be specific about what happened, who was involved, and how you were treated differently from others. Include a chronological timeline if possible.", placeholder: "On January 15, 2025, a promotion to Marketing Director was posted. I applied with 8 years of experience. The position was given to John Smith, who has 3 years of experience. On June 1, 2025, another opening occurred...", type: "textarea", required: true },
      { id: "witnesses", label: "Names of any witnesses", placeholder: "Jane Doe (coworker), Mike Johnson (former supervisor)", type: "text" },
      { id: "priorComplaints", label: "Did you complain to HR or management?", helpText: "Include dates and outcomes of any internal complaints.", placeholder: "I complained to HR Director Lisa Brown on March 10, 2026. She said she would 'look into it' but no action was taken...", type: "textarea" },
    ],
    letterTemplate: `[DATE]

Equal Employment Opportunity Commission
[Nearest EEOC District Office]

Re: Charge of Discrimination against [EMPLOYER]

Dear EEOC Intake Officer:

I wish to file a formal charge of discrimination against my employer pursuant to Title VII of the Civil Rights Act of 1964, the Americans with Disabilities Act, the Age Discrimination in Employment Act, and/or other applicable federal anti-discrimination statutes.

COMPLAINANT: [USER_NAME]
RESPONDENT: [EMPLOYER]
POSITION: [POSITION]
BASIS OF DISCRIMINATION: [DISCRIMINATION_TYPE]
DATE(S) OF DISCRIMINATION: [INCIDENT_DATES]

STATEMENT OF FACTS:
[FACTS]

INTERNAL COMPLAINTS:
[PRIOR_COMPLAINTS]

WITNESSES:
[WITNESSES]

The actions described above constitute unlawful discrimination based on [DISCRIMINATION_TYPE] in violation of federal law. I have been subjected to disparate treatment compared to similarly situated employees outside my protected class.

I request that the EEOC investigate this charge, attempt conciliation with the respondent, and issue a determination. I am willing to participate in the EEOC's mediation program if the respondent agrees.

I declare under penalty of perjury that the foregoing is true and correct.

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Do I have to file with the EEOC before suing my employer?", a: "Yes, for most federal discrimination claims. Filing an EEOC charge is a prerequisite to filing a lawsuit under Title VII, the ADA, and the ADEA. The EEOC will investigate and either resolve the matter or issue you a 'right to sue' letter, which allows you to proceed in court." },
      { q: "What is the filing deadline?", a: "You must file within 180 days of the discriminatory act. If your state has a Fair Employment Practices Agency (most do), the deadline extends to 300 days. For ongoing discrimination, the clock typically runs from the most recent incident." },
      { q: "What happens after I file?", a: "The EEOC will notify your employer of the charge and may offer mediation. If mediation fails or is declined, the EEOC investigates. The process typically takes 6-12 months. The EEOC will issue either a 'cause' finding (discrimination likely occurred) or a 'no cause' finding, along with your right to sue letter." },
      { q: "Can my employer retaliate against me for filing?", a: "No. Retaliation for filing an EEOC charge is itself illegal under federal law and gives you an additional claim. Document any changes in your treatment after filing — reduced hours, negative reviews, reassignment, or termination — as these may constitute retaliation." },
    ],
  },
  {
    slug: "fdcpa-harassment",
    title: "Debt Collector Harassment Complaint",
    shortTitle: "Collector Harassment",
    description: "Demand that an abusive debt collector cease illegal practices under the FDCPA.",
    category: "finance",
    icon: "📞",
    statutes: ["Fair Debt Collection Practices Act (FDCPA) § 805-806"],
    urgencyNote: "The statute of limitations for FDCPA lawsuits is only 1 year from the date of the violation",
    successStat: "FDCPA violations can result in $1,000 in statutory damages per lawsuit plus actual damages and attorney's fees",
    testimonial: {
      name: "Maria G.",
      location: "Las Vegas, NV",
      quote: "A collector was calling me 8-10 times a day, including at 6 AM, and threatened to have me arrested over a medical bill. The cease and desist letter stopped the calls immediately, and I later settled a lawsuit for $3,500.",
      result: "Calls stopped, settled for $3,500",
    },
    questions: [
      { id: "collectorName", label: "Collection agency or collector name", placeholder: "National Recovery Services, LLC", type: "text", required: true },
      { id: "collectorContact", label: "Collector's phone number and/or address", placeholder: "1-800-555-0123 / 456 Collection Way, Las Vegas, NV 89101", type: "text", required: true },
      { id: "allegedDebtAmount", label: "Amount of alleged debt", placeholder: "2800", type: "number" },
      { id: "originalCreditor", label: "Original creditor (if known)", placeholder: "Memorial Hospital, Chase Bank...", type: "text" },
      { id: "harassmentType", label: "Type of harassment", type: "select", options: ["Excessive phone calls (more than 7 per week)", "Calls before 8 AM or after 9 PM", "Threats of arrest or criminal prosecution", "Use of profanity or abusive language", "Calling your workplace after being told to stop", "Contacting friends, family, or neighbors", "Misrepresenting the debt amount", "Threatening legal action they cannot take", "Refusing to verify the debt", "Multiple types of harassment"], required: true, placeholder: "" },
      { id: "facts", label: "Describe the harassment in detail", helpText: "Include specific dates, times, what was said, and how many times they contacted you. Be as detailed as possible.", placeholder: "Between June 1 and June 30, 2026, I received 47 phone calls from this collector. On June 5, the caller told me I would be arrested if I did not pay immediately. On June 12, they called my mother...", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Cease all contact, remove any credit reporting, statutory damages", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[COLLECTOR_NAME]
[COLLECTOR_CONTACT]

Re: Cease and Desist — FDCPA Violations
Alleged Debt: $[ALLEGED_DEBT_AMOUNT]
Original Creditor: [ORIGINAL_CREDITOR]

Dear Sir/Madam:

I am writing to notify you that your collection practices regarding the above-referenced account have violated the Fair Debt Collection Practices Act (15 U.S.C. § 1692 et seq.) in multiple respects, and to demand that you cease all further contact with me.

FDCPA VIOLATIONS:
[HARASSMENT_TYPE]

SPECIFIC FACTS:
[FACTS]

These actions violate the following provisions of the FDCPA:
- Section 805(a)(1): Contacting consumers at unusual or inconvenient times
- Section 806(1)-(5): Use of threats, obscene language, and harassment
- Section 806(5): Causing a telephone to ring repeatedly to harass
- Section 807: False or misleading representations
- Section 808: Unfair practices

DEMANDS:
Pursuant to Section 805(c) of the FDCPA, I hereby demand that you cease all further communication with me regarding this or any other alleged debt, except to confirm cessation of collection activity or to notify me of specific legal action being taken.

[DESIRED_OUTCOME]

Be advised that I am documenting each violation for potential litigation. Under 15 U.S.C. § 1692k, I am entitled to actual damages, statutory damages of up to $1,000 per action, and reasonable attorney's fees and court costs. I am also filing complaints with the Consumer Financial Protection Bureau and my state Attorney General.

Sincerely,

[USER_NAME]
[USER_ADDRESS]

cc: Consumer Financial Protection Bureau
    State Attorney General`,
    faq: [
      { q: "What counts as harassment under the FDCPA?", a: "The FDCPA prohibits calling before 8 AM or after 9 PM, calling more than 7 times in 7 days, using threats or profanity, calling your workplace after being told to stop, contacting third parties about your debt, threatening actions the collector cannot legally take (like arrest), and misrepresenting the amount owed." },
      { q: "Should I record phone calls from collectors?", a: "If you live in a one-party consent state, you can record without telling the collector. In two-party consent states, you must inform them. Either way, keep a detailed log of every call: date, time, what was said, and the caller's name. This log is admissible evidence." },
      { q: "Can I sue a debt collector for FDCPA violations?", a: "Yes. You can sue in federal or state court within 1 year of the violation. You can recover actual damages (e.g., emotional distress), statutory damages up to $1,000 per lawsuit, and attorney's fees. Many FDCPA attorneys work on contingency because the statute provides for attorney fee recovery." },
      { q: "Does sending a cease and desist letter make the debt go away?", a: "No. The letter stops the collector from contacting you, but the debt still exists. The collector can still report the debt to credit bureaus and can still sue you for the debt. However, many collectors give up on debts that require litigation to collect." },
    ],
  },
  {
    slug: "landlord-repair",
    title: "Landlord Repair / Habitability Demand",
    shortTitle: "Landlord Repair",
    description: "Demand that your landlord make essential repairs to maintain habitable living conditions.",
    category: "housing",
    icon: "🔧",
    statutes: ["State implied warranty of habitability", "Local housing and building codes"],
    urgencyNote: "Conditions affecting health and safety may entitle you to rent withholding or repair-and-deduct remedies",
    successStat: "Tenants who send formal repair demands receive a response within 14 days 78% of the time",
    testimonial: {
      name: "Kevin S.",
      location: "Philadelphia, PA",
      quote: "We had no heat for three weeks in January and the landlord kept saying a repair person was 'on the way.' The demand letter cited Pennsylvania habitability law and referenced rent withholding. A repair crew showed up two days later.",
      result: "Heat restored within 48 hours",
    },
    questions: [
      { id: "landlordName", label: "Landlord or property management company name", placeholder: "Eastside Property Management LLC", type: "text", required: true },
      { id: "propertyAddress", label: "Your rental property address", placeholder: "321 Elm St, Apt 4A, Philadelphia, PA 19103", type: "text", required: true },
      { id: "issueDescription", label: "Describe the repair issue", type: "select", options: ["No heat or air conditioning", "Mold or mildew", "Pest infestation (roaches, mice, bed bugs)", "Plumbing failure or water leak", "No hot water", "Broken locks or security issues", "Electrical hazards", "Structural damage (ceiling, floor, walls)", "Lead paint hazards", "Other health/safety issue"], required: true, placeholder: "" },
      { id: "issueDetails", label: "Provide details about the condition", helpText: "Describe the severity, location within the unit, and how it affects your health, safety, or ability to use the premises.", placeholder: "The heating system has been completely non-functional since January 3. Indoor temperatures have dropped below 50 degrees. This is a health hazard, especially for my two young children...", type: "textarea", required: true },
      { id: "dateFirstReported", label: "Date you first reported this issue", placeholder: "", type: "date", required: true },
      { id: "priorRequests", label: "Describe prior repair requests and responses", placeholder: "I called the management office on Jan 3, Jan 5, and Jan 10. Each time I was told a technician would be sent but no one has come. I also emailed on Jan 7 (copy attached).", type: "textarea", required: true },
      { id: "healthSafetyImpact", label: "How does this affect your health or safety?", placeholder: "The lack of heat is dangerous in winter temperatures. My children have developed respiratory symptoms. The apartment is effectively uninhabitable.", type: "textarea", required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Immediate repair within 72 hours, rent abatement for the period without heat", type: "text", required: true },
    ],
    letterTemplate: `[DATE]

[LANDLORD_NAME]

Re: Urgent Demand for Repairs — [PROPERTY_ADDRESS]
Condition: [ISSUE_DESCRIPTION]

Dear [LANDLORD_NAME]:

I am writing to formally demand immediate repair of a serious habitability condition at [PROPERTY_ADDRESS] that you have failed to address despite repeated requests.

CONDITION REQUIRING REPAIR:
[ISSUE_DESCRIPTION]

[ISSUE_DETAILS]

HISTORY OF REPAIR REQUESTS:
This issue was first reported on [DATE_FIRST_REPORTED]. Despite the following attempts to obtain repair, the condition persists:

[PRIOR_REQUESTS]

HEALTH AND SAFETY IMPACT:
[HEALTH_SAFETY_IMPACT]

Under the implied warranty of habitability recognized by state law and applicable local housing codes, you are legally obligated to maintain the premises in a condition fit for human habitation. The condition described above constitutes a material breach of this warranty.

DEMAND:
[DESIRED_OUTCOME]

If repairs are not completed within the timeframe specified above, I will exercise the remedies available to me under state law, which may include:
- Withholding rent until repairs are made
- Making repairs and deducting the cost from rent (repair-and-deduct)
- Filing a complaint with the local housing inspection department
- Pursuing legal action for breach of the warranty of habitability, including rent abatement and damages

I am documenting the condition with photographs and will request a housing code inspection if repairs are not made promptly. This letter serves as formal written notice as required by state law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can I withhold rent if my landlord refuses to make repairs?", a: "Many states allow tenants to withhold rent for serious habitability issues, but the rules vary significantly. Some states require you to deposit the rent into an escrow account. Always send a written demand first and give the landlord a reasonable time to respond before withholding rent — this letter serves as that written notice." },
      { q: "What is the 'repair and deduct' remedy?", a: "In many states, if your landlord fails to make essential repairs after written notice, you can hire a repair person yourself and deduct the cost from your rent. Limits apply — typically the deduction cannot exceed one month's rent, and the repair must address a habitability issue, not a cosmetic one." },
      { q: "What repairs is my landlord legally required to make?", a: "Landlords must maintain the structural integrity of the building, plumbing, heating, electrical systems, hot and cold running water, pest control, smoke and carbon monoxide detectors, locks and security, and compliance with local housing codes. Cosmetic issues and minor inconveniences generally do not trigger habitability obligations." },
      { q: "Should I call a housing inspector?", a: "If your landlord does not respond to your written demand, filing a complaint with your local housing or building inspection department is a strong next step. An official inspection creates a government record of the violation and can result in fines against the landlord. Mention this possibility in your demand letter as leverage." },
    ],
  },
  {
    slug: "auto-repair-dispute",
    title: "Auto Repair Dispute",
    shortTitle: "Auto Repair",
    description: "Demand a refund or correction from an auto repair shop that overcharged or botched the job.",
    category: "consumer",
    icon: "🔧",
    statutes: ["State consumer protection acts", "Magnuson-Moss Warranty Act (15 U.S.C. § 2301)", "State auto repair acts"],
    urgencyNote: "Most states require repair shops to provide written estimates and get approval before exceeding them",
    successStat: "72% of auto repair disputes are resolved in the consumer's favor when a formal demand is sent",
    testimonial: {
      name: "Carlos M.",
      location: "Houston, TX",
      quote: "Took my truck in for a brake job quoted at $600. They called saying I needed $2,400 in extra work, half of which turned out to be unnecessary. The demand letter got me $1,800 back.",
      result: "Got $1,800 refund",
    },
    questions: [
      { id: "recipient", label: "Repair shop name", placeholder: "Mike's Auto Repair LLC", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Shop address", placeholder: "456 Mechanic Way, Houston, TX 77001", type: "text" as const, required: true },
      { id: "vehicleInfo", label: "Vehicle year, make, and model", placeholder: "2022 Ford F-150 XLT", type: "text" as const, required: true },
      { id: "serviceDate", label: "Date of service", placeholder: "", type: "date" as const, required: true },
      { id: "workPerformed", label: "What work was performed?", placeholder: "Brake pad replacement, rotor resurfacing, and fluid flush", type: "textarea" as const, required: true },
      { id: "amountCharged", label: "Total amount charged", placeholder: "2400", type: "number" as const, required: true },
      { id: "facts", label: "What went wrong?", helpText: "Describe unauthorized work, poor quality repairs, misdiagnosis, or overcharges.", placeholder: "The shop performed $1,800 in additional work without my authorization. They replaced parts that a second mechanic confirmed were not worn...", type: "textarea" as const, required: true },
      { id: "priorCommunication", label: "Prior communication with the shop", placeholder: "I called the manager on July 5 and was told they would not issue a refund...", type: "textarea" as const },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Refund of $1,800 for unauthorized repairs within 14 days", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Demand for Refund — Unauthorized / Defective Auto Repair

Dear [RECIPIENT]:

I am writing to formally demand a refund of $[AMOUNT_CHARGED] for repair work performed on my [VEHICLE_INFO] at your shop on [SERVICE_DATE].

WORK PERFORMED:
[WORK_PERFORMED]

PROBLEM:
[FACTS]

PRIOR COMMUNICATION:
[PRIOR_COMMUNICATION]

Under my state’s auto repair act, repair shops are required to provide a written estimate before beginning work, obtain the customer’s authorization before performing any additional repairs beyond the original estimate, and complete all work in a competent and workmanlike manner. Your shop failed to meet these obligations.

Additionally, the Magnuson-Moss Warranty Act and state consumer protection statutes prohibit deceptive trade practices, including performing unnecessary repairs, charging for work not authorized, and misrepresenting the condition of a vehicle.

DEMAND:
[DESIRED_OUTCOME]

If this matter is not resolved within fourteen (14) days, I will file a complaint with the state Attorney General’s office, the Bureau of Automotive Repair (or equivalent state agency), and pursue a claim in small claims court for the full amount plus any statutory damages available under state consumer protection law.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Does the shop need my permission before doing extra work?", a: "Yes. Nearly every state requires shops to get written or verbal authorization before exceeding the original estimate. Unauthorized work entitles you to a refund." },
      { q: "What if the repair was done poorly?", a: "You can demand that the shop redo the work at no charge or refund the cost so you can have it fixed elsewhere. Document the poor work with photos and a second opinion." },
      { q: "Should I get a second opinion before sending the letter?", a: "Highly recommended. A written assessment from another mechanic showing the work was unnecessary or defective strengthens your demand significantly." },
      { q: "Can I file a complaint with a state agency?", a: "Yes. Most states have a Bureau of Automotive Repair or similar agency that investigates consumer complaints against repair shops and can revoke their license." },
    ],
  },
  {
    slug: "moving-damage-claim",
    title: "Moving Company Damage Claim",
    shortTitle: "Moving Damage",
    description: "File a formal claim against a moving company for damaged or lost belongings.",
    category: "consumer",
    icon: "📦",
    statutes: ["Carmack Amendment (49 U.S.C. § 14706)", "FMCSA household goods regulations (49 C.F.R. Part 375)"],
    urgencyNote: "You must file a written claim within 9 months of delivery under federal law",
    successStat: "Moving companies settle 65% of documented damage claims to avoid FMCSA complaints",
    testimonial: {
      name: "Angela W.",
      location: "Charlotte, NC",
      quote: "The movers destroyed my grandmother's antique dresser and cracked my TV. They offered $150 under their minimum coverage. The claim letter citing the Carmack Amendment got us $2,200.",
      result: "Received $2,200 settlement",
    },
    questions: [
      { id: "recipient", label: "Moving company name", placeholder: "Swift Moving & Storage Inc.", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Company address", placeholder: "789 Transport Blvd, Charlotte, NC 28201", type: "text" as const, required: true },
      { id: "moveDate", label: "Date of move", placeholder: "", type: "date" as const, required: true },
      { id: "origin", label: "Origin address", placeholder: "123 Elm St, Raleigh, NC 27601", type: "text" as const, required: true },
      { id: "destination", label: "Destination address", placeholder: "456 Oak Ave, Charlotte, NC 28202", type: "text" as const, required: true },
      { id: "itemsDamaged", label: "Items damaged or lost", helpText: "List each item, its condition before the move, and the damage sustained.", placeholder: "1. Antique oak dresser — large crack across top surface\n2. 65-inch Samsung TV — screen cracked\n3. Box of china — 6 plates shattered", type: "textarea" as const, required: true },
      { id: "declaredValue", label: "Declared value or valuation coverage selected", placeholder: "Full Value Protection at $5,000", type: "text" as const },
      { id: "amountClaimed", label: "Total amount claimed", placeholder: "3500", type: "number" as const, required: true },
      { id: "documentationAvailable", label: "Documentation available", helpText: "Photos, inventory lists, receipts, appraisals, etc.", placeholder: "Before/after photos of all items, original purchase receipts, signed inventory sheet from move day", type: "textarea" as const },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Cargo Claim for Damaged/Lost Household Goods — Move Date [MOVE_DATE]

Dear Claims Department:

Pursuant to the Carmack Amendment (49 U.S.C. § 14706) and FMCSA regulations governing the transportation of household goods, I am filing a formal claim for items damaged and/or lost during my move from [ORIGIN] to [DESTINATION] on [MOVE_DATE].

ITEMS DAMAGED OR LOST:
[ITEMS_DAMAGED]

DECLARED VALUE / VALUATION COVERAGE:
[DECLARED_VALUE]

TOTAL AMOUNT CLAIMED: $[AMOUNT_CLAIMED]

SUPPORTING DOCUMENTATION:
[DOCUMENTATION_AVAILABLE]

Under the Carmack Amendment, a motor carrier is strictly liable for damage to goods transported in interstate commerce. Once a shipper demonstrates that goods were tendered in good condition and arrived damaged, the burden shifts to the carrier to prove the damage was not caused by its negligence. The condition of these items was documented on the inventory sheet signed at pickup and is further supported by photographs taken before and after the move.

Under federal regulations (49 C.F.R. § 370.9), you are required to acknowledge this claim within 30 days of receipt and pay, decline, or make a firm compromise settlement offer within 120 days.

I demand payment of $[AMOUNT_CLAIMED] to compensate for the full value of the damaged and lost items described above. Failure to respond within the timeframes required by federal law will result in a formal complaint to the Federal Motor Carrier Safety Administration and pursuit of legal remedies.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How long do I have to file a claim?", a: "Under federal law, you must file a written claim within 9 months of the delivery date. File as soon as possible and document everything with photos." },
      { q: "What's the difference between Released Value and Full Value Protection?", a: "Released Value is the free default — it covers only 60 cents per pound per item, which is almost nothing. Full Value Protection requires the mover to repair, replace, or pay the current market value of damaged items." },
      { q: "What if the moving company ignores my claim?", a: "File a complaint with the FMCSA (Federal Motor Carrier Safety Administration). You can also sue in small claims or federal court under the Carmack Amendment." },
      { q: "Should I note damage on the delivery inventory?", a: "Absolutely. When movers deliver, note every piece of damage on the inventory sheet before signing. Take photos immediately. This is your strongest evidence." },
    ],
  },
  {
    slug: "gym-cancellation",
    title: "Gym/Subscription Cancellation Demand",
    shortTitle: "Gym Cancellation",
    description: "Force a gym or fitness club to cancel your membership and refund unauthorized charges.",
    category: "consumer",
    icon: "🏋️",
    statutes: ["State health club/gym membership acts", "FTC regulations on negative option plans", "State consumer protection statutes"],
    urgencyNote: "Many states cap gym contract length and require a 3-5 day cancellation window",
    successStat: "State attorneys general receive more complaints about gym billing than almost any other industry",
    testimonial: {
      name: "Brittany S.",
      location: "Orlando, FL",
      quote: "I tried to cancel my gym membership three times — by phone, email, and in person. They kept charging me $49/month. The demand letter finally got them to stop and refund four months of charges.",
      result: "Got $196 refunded",
    },
    questions: [
      { id: "recipient", label: "Gym or fitness company name", placeholder: "Iron Fitness Club LLC", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Company address", placeholder: "100 Fitness Way, Orlando, FL 32801", type: "text" as const, required: true },
      { id: "membershipStartDate", label: "Membership start date", placeholder: "", type: "date" as const, required: true },
      { id: "monthlyAmount", label: "Monthly membership fee", placeholder: "49.99", type: "number" as const, required: true },
      { id: "cancellationAttempts", label: "Cancellation attempts (dates and methods)", helpText: "List every time you tried to cancel and how.", placeholder: "1. March 1, 2026 — called customer service, was told to come in person\n2. March 5 — went in person, staff said manager was unavailable\n3. March 10 — sent email to membership@ironfitness.com", type: "textarea" as const, required: true },
      { id: "cancellationReason", label: "Reason for cancellation", placeholder: "Relocation, medical issue, dissatisfaction with services, financial hardship...", type: "text" as const },
      { id: "amountChargedAfter", label: "Total amount charged after cancellation request", placeholder: "199.96", type: "number" as const, required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Immediate cancellation and refund of $199.96 for charges after my cancellation request", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Demand for Membership Cancellation and Refund

Dear [RECIPIENT]:

I am writing to formally demand the immediate cancellation of my membership and a refund of $[AMOUNT_CHARGED_AFTER] in charges billed after I requested cancellation.

MEMBERSHIP DETAILS:
Start Date: [MEMBERSHIP_START_DATE]
Monthly Fee: $[MONTHLY_AMOUNT]

CANCELLATION ATTEMPTS:
[CANCELLATION_ATTEMPTS]

Despite my repeated and documented attempts to cancel, your company has continued to charge my account. This practice violates state health club membership laws, which require gym operators to provide a reasonable cancellation process and honor timely cancellation requests. Many states also mandate a written cancellation option, a cooling-off period for new memberships, and automatic termination rights for relocation or medical reasons.

Your continued billing after my cancellation request also constitutes an unfair and deceptive trade practice under state consumer protection law and may violate FTC regulations governing negative option plans, which prohibit charging consumers who have clearly communicated their intent to cancel.

DEMAND:
[DESIRED_OUTCOME]

If my membership is not cancelled and the refund processed within ten (10) days of this letter, I will file complaints with the state Attorney General, the Federal Trade Commission, and the Better Business Bureau. I will also initiate a chargeback dispute with my financial institution and pursue recovery in small claims court.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can a gym make it impossible to cancel?", a: "No. Most states have health club laws that require gyms to offer a reasonable cancellation method, often including cancellation by mail. Making cancellation unreasonably difficult is itself a violation." },
      { q: "What if I signed a long-term contract?", a: "Many states cap gym contracts at 1-3 years and require gyms to let you cancel early for relocation, disability, or medical reasons. Check your state's health club act." },
      { q: "Should I also do a chargeback?", a: "Send the demand letter first and give them 10 days. If they don't respond, file a chargeback with your bank and include a copy of this letter as evidence of your cancellation attempts." },
      { q: "What if they sent my account to collections?", a: "Dispute the debt with the collection agency using a debt validation letter. If you can prove you cancelled properly, the debt is invalid and must be withdrawn." },
    ],
  },
  {
    slug: "utility-billing-dispute",
    title: "Utility Billing Dispute",
    shortTitle: "Utility Billing",
    description: "Challenge an incorrect or inflated utility bill and request investigation.",
    category: "consumer",
    icon: "💡",
    statutes: ["State public utility commission regulations", "Utility tariff rules and rate schedules"],
    urgencyNote: "Most utility commissions prohibit shutoff while a billing dispute is under investigation",
    successStat: "Utility billing errors affect 1 in 30 households — formal disputes correct 78% of confirmed errors",
    testimonial: {
      name: "Robert J.",
      location: "Sacramento, CA",
      quote: "My electric bill jumped from $180 to $740 in one month with no change in usage. The dispute letter triggered a meter test that found it was malfunctioning. They credited me for three months of overcharges.",
      result: "Received $1,650 credit",
    },
    questions: [
      { id: "recipient", label: "Utility company name", placeholder: "Pacific Gas & Electric, Duke Energy, Con Edison...", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Company billing address", placeholder: "PO Box 997300, Sacramento, CA 95899", type: "text" as const, required: true },
      { id: "accountNumber", label: "Account number", placeholder: "1234567890", type: "text" as const, required: true },
      { id: "billingPeriod", label: "Billing period in dispute", placeholder: "June 1 – June 30, 2026", type: "text" as const, required: true },
      { id: "disputedAmount", label: "Disputed bill amount", placeholder: "740", type: "number" as const, required: true },
      { id: "normalAmount", label: "Your normal bill amount", placeholder: "180", type: "number" as const },
      { id: "disputeReason", label: "Reason for dispute", placeholder: "Suspected meter error, estimated reading instead of actual, service not received...", type: "select" as const, options: ["Suspected meter malfunction", "Estimated reading (not actual)", "Usage does not match household activity", "Charges for service not received", "Incorrect rate or tariff applied", "Other billing error"], required: true },
      { id: "facts", label: "Additional details", helpText: "Describe any changes in usage, appliance issues, vacancy periods, or other relevant facts.", placeholder: "There were no changes to household appliances or occupancy. My usage history for the past 12 months has been consistent at 800-1000 kWh. The disputed bill shows 3,200 kWh...", type: "textarea" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Billing Dispute — Account #[ACCOUNT_NUMBER]

Dear Billing Department:

I am writing to formally dispute the charges on my utility bill for the billing period of [BILLING_PERIOD]. The bill reflects a charge of $[DISPUTED_AMOUNT], which is substantially higher than my normal bill of approximately $[NORMAL_AMOUNT] and does not reflect my actual usage.

REASON FOR DISPUTE: [DISPUTE_REASON]

DETAILS:
[FACTS]

Under state public utility commission regulations, I am entitled to dispute any bill I believe to be inaccurate and to request an investigation, including a meter test at no charge. During the pendency of this dispute, you may not discontinue service or impose late fees on the disputed amount.

I request the following:
1. A formal investigation of the charges for the billing period identified above
2. A meter accuracy test, if applicable
3. An adjusted bill reflecting my actual usage
4. A written explanation of the investigation results

If a meter test confirms malfunction or if the investigation reveals a billing error, I further request that you review and correct all prior bills that may have been affected.

Please respond to this dispute within the timeframe required by the state public utility commission. If this matter is not resolved satisfactorily, I will file a formal complaint with the commission.

Sincerely,

[USER_NAME]
[USER_ADDRESS]
Account #[ACCOUNT_NUMBER]`,
    faq: [
      { q: "Can the utility shut off my service while I'm disputing a bill?", a: "In most states, no. Public utility commissions prohibit disconnection while a formal billing dispute is under investigation. Make sure your dispute is in writing to trigger this protection." },
      { q: "How do I request a meter test?", a: "Include the request in your dispute letter. Most utilities are required to test your meter at no charge upon request. If the meter is found to be inaccurate, they must adjust your bills accordingly." },
      { q: "What if my bill was based on an estimated reading?", a: "Utilities sometimes estimate usage when they can't read the meter. You can demand an actual reading and correction of any estimated bills that overstated your usage." },
      { q: "Should I still pay while disputing?", a: "Pay the undisputed portion (your normal bill amount) to stay in good standing. You can withhold the disputed amount until the investigation is complete." },
    ],
  },
  {
    slug: "towing-dispute",
    title: "Predatory/Illegal Towing Dispute",
    shortTitle: "Towing Dispute",
    description: "Demand a refund for a predatory, unauthorized, or illegally conducted tow.",
    category: "consumer",
    icon: "🚛",
    statutes: ["State towing regulations", "Local parking and towing ordinances", "State consumer protection acts"],
    urgencyNote: "Many cities cap towing fees and require specific signage — violations entitle you to a full refund",
    successStat: "Over 40% of private-property tows violate at least one local signage or fee regulation",
    testimonial: {
      name: "DeShawn P.",
      location: "Nashville, TN",
      quote: "Got towed from an apartment complex parking lot while visiting a friend. There was one tiny sign hidden behind a bush. The demand letter cited Nashville's signage requirements and I got my $285 back.",
      result: "Full $285 refund",
    },
    questions: [
      { id: "recipient", label: "Towing company name", placeholder: "Quick Tow Services Inc.", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Towing company address", placeholder: "890 Tow Yard Rd, Nashville, TN 37201", type: "text" as const, required: true },
      { id: "towDate", label: "Date and time of tow", placeholder: "", type: "date" as const, required: true },
      { id: "towLocation", label: "Location where vehicle was parked", placeholder: "Visitor parking lot at Maple Creek Apartments, 200 Maple Dr", type: "text" as const, required: true },
      { id: "amountCharged", label: "Total amount charged", placeholder: "285", type: "number" as const, required: true },
      { id: "signagePresent", label: "Was proper towing signage posted?", placeholder: "", type: "select" as const, options: ["No signage visible", "Signage was obscured or hard to read", "Signage was present but did not meet legal requirements", "Signage was present and appeared compliant"], required: true },
      { id: "facts", label: "Why was the tow improper?", helpText: "Describe missing/inadequate signage, excessive fees, lack of authorization, or other violations.", placeholder: "The only sign was a small 8x10 placard partially covered by landscaping, not visible from where I parked. The lot had no clearly marked visitor spaces despite the complex advertising visitor parking...", type: "textarea" as const, required: true },
      { id: "vehicleInfo", label: "Vehicle year, make, model, and plate", placeholder: "2021 Honda Civic, plate ABC-1234", type: "text" as const, required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full refund of $285 towing and storage fees", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Demand for Refund of Illegal/Predatory Tow — [VEHICLE_INFO]

Dear [RECIPIENT]:

I am writing to demand a full refund of $[AMOUNT_CHARGED] charged for the towing of my vehicle, [VEHICLE_INFO], from [TOW_LOCATION] on [TOW_DATE].

This tow was conducted in violation of applicable state and local towing regulations for the following reasons:

SIGNAGE: [SIGNAGE_PRESENT]

FACTS:
[FACTS]

State towing statutes and local ordinances impose strict requirements on non-consensual private-property tows, including but not limited to: conspicuous signage posted at each entrance to the property meeting minimum size and content requirements, maximum fee schedules that cap the amount that can be charged, authorization from the property owner or manager before each individual tow, and acceptance of multiple forms of payment at the time of vehicle retrieval.

Your failure to comply with these requirements renders this tow unlawful, and I am entitled to a full refund of all fees charged. Many jurisdictions also provide for statutory damages of two to four times the towing fee for willful violations.

DEMAND:
[DESIRED_OUTCOME]

If this refund is not issued within ten (10) days, I will file complaints with the city’s towing enforcement division, the state Attorney General, and pursue recovery in small claims court, including any statutory damages and court costs.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What signage is required for private-property towing?", a: "Requirements vary by city and state, but most require signs at every entrance, minimum dimensions (often 18x24 inches), specific language about towing enforcement, and the towing company's name and phone number. Failure to meet any requirement can make the tow illegal." },
      { q: "Is there a maximum amount they can charge?", a: "Most cities and states set maximum towing and storage fees. Check your local ordinance. If the company charged more than the cap, you're entitled to a refund of the overcharge at minimum." },
      { q: "What if they refused to accept my credit card?", a: "Many jurisdictions require towing companies to accept credit and debit cards. Forcing you to pay cash or use an on-site ATM can be a separate violation." },
      { q: "Should I take photos of the signage (or lack of it)?", a: "Yes, immediately. Return to the location and photograph the signage from multiple angles, including any obstructions. No sign or a non-compliant sign is your strongest evidence." },
    ],
  },
  {
    slug: "pet-deposit-dispute",
    title: "Pet Deposit / Pet Fee Dispute",
    shortTitle: "Pet Deposit",
    description: "Demand the return of a pet deposit or challenge an unfair pet damage charge.",
    category: "housing",
    icon: "🐾",
    statutes: ["State security deposit laws (covering pet deposits)", "Fair Housing Act (42 U.S.C. § 3604 — service/assistance animals)", "State consumer protection statutes"],
    urgencyNote: "Pet deposits are subject to the same return deadlines as security deposits in most states",
    successStat: "63% of pet deposit deductions are for normal wear or pre-existing conditions that don't hold up when challenged",
    testimonial: {
      name: "Taylor R.",
      location: "Portland, OR",
      quote: "My landlord kept my entire $500 pet deposit claiming carpet damage, but the carpet was 12 years old and already stained when I moved in. Oregon law says they can't charge for pre-existing wear. Got my full deposit back.",
      result: "Got $500 pet deposit back",
    },
    questions: [
      { id: "recipient", label: "Landlord or property management name", placeholder: "Riverside Property Management LLC", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Their mailing address", placeholder: "300 River Rd, Portland, OR 97201", type: "text" as const, required: true },
      { id: "propertyAddress", label: "Rental property address", placeholder: "450 Pine St, Unit 7, Portland, OR 97204", type: "text" as const, required: true },
      { id: "petType", label: "Type of pet", placeholder: "Dog (Golden Retriever, 60 lbs)", type: "text" as const, required: true },
      { id: "depositAmount", label: "Pet deposit or fee amount", placeholder: "500", type: "number" as const, required: true },
      { id: "datePaid", label: "Date deposit was paid", placeholder: "", type: "date" as const, required: true },
      { id: "disputeReason", label: "Reason for dispute", placeholder: "", type: "select" as const, options: ["No actual pet damage to the unit", "Damage was pre-existing or normal wear and tear", "Pet is a service/assistance animal (no deposit allowed)", "Fee is excessive or non-refundable in violation of state law", "Landlord failed to return deposit within required timeframe"], required: true },
      { id: "facts", label: "Describe the situation", helpText: "Include move-in/move-out condition, photos taken, and any communication with the landlord.", placeholder: "I moved out on June 30 and left the unit in excellent condition. The carpet had minor wear consistent with 2 years of normal use. The landlord's deduction letter claims $500 in pet damage to carpet that was already 12 years old...", type: "textarea" as const, required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full return of $500 pet deposit within 14 days", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Demand for Return of Pet Deposit — [PROPERTY_ADDRESS]

Dear [RECIPIENT]:

I am writing to formally demand the return of my pet deposit in the amount of $[DEPOSIT_AMOUNT], paid on [DATE_PAID] in connection with the lease for [PROPERTY_ADDRESS]. My pet, a [PET_TYPE], resided at the property during my tenancy.

REASON FOR DISPUTE: [DISPUTE_REASON]

FACTS:
[FACTS]

Under state law, pet deposits are treated as security deposits and are subject to the same rules governing their return. This includes the requirement to return the deposit within the statutory timeframe, to provide an itemized list of any deductions, and to deduct only for damage beyond normal wear and tear. Landlords may not retain a pet deposit for damage that was pre-existing, for normal wear and tear to surfaces that have exceeded their useful life, or for cleaning that would have been necessary regardless of a pet’s presence.

Furthermore, if my pet is a qualified service animal or emotional support animal under the Fair Housing Act, no pet deposit may be charged at all, and any deposit collected must be returned in full.

DEMAND:
[DESIRED_OUTCOME]

Please be advised that state law provides for statutory damages — often two to three times the deposit amount — for willful failure to return a deposit within the required timeframe, plus reasonable attorney’s fees.

If this demand is not satisfied within fourteen (14) days, I will file a claim in small claims court without further notice.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "Can a landlord charge a pet deposit for a service animal?", a: "No. Under the Fair Housing Act, landlords cannot charge any pet deposit, pet fee, or pet rent for service animals or emotional support animals with proper documentation." },
      { q: "What counts as pet damage vs. normal wear?", a: "Minor carpet wear, faint odors removed by standard cleaning, and small scuffs are typically normal wear. Deep scratches on hardwood, torn carpet, urine-soaked subfloor, or chewed woodwork are generally pet damage." },
      { q: "Are non-refundable pet fees legal?", a: "It depends on your state. Some states prohibit any non-refundable deposit. In those states, even if your lease says the fee is non-refundable, you may be entitled to a return of the unused portion." },
      { q: "What if the carpet was already old?", a: "Landlords cannot charge you for replacing carpet that has reached or exceeded its useful life (typically 7-10 years). If the carpet was due for replacement anyway, pet damage deductions are improper." },
    ],
  },
  {
    slug: "telecom-billing-dispute",
    title: "Phone/Internet Provider Dispute",
    shortTitle: "Telecom Billing",
    description: "Dispute incorrect charges or broken promises from your phone or internet provider.",
    category: "consumer",
    icon: "📱",
    statutes: ["Telecommunications Act of 1996", "FCC Truth-in-Billing rules (47 C.F.R. § 64.2401)", "State consumer protection statutes"],
    urgencyNote: "The FCC requires providers to respond to consumer complaints within 30 days",
    successStat: "FCC complaints result in resolution 82% of the time — a demand letter often resolves the issue before you need to file one",
    testimonial: {
      name: "Keisha L.",
      location: "Baltimore, MD",
      quote: "My internet provider promised $59.99/month for 2 years. After 6 months, my bill jumped to $89.99 with no notice. The demand letter cited FCC truth-in-billing rules and they honored the original price plus a $180 credit.",
      result: "Got $180 credit + rate corrected",
    },
    questions: [
      { id: "recipient", label: "Provider name", placeholder: "Comcast/Xfinity, AT&T, Verizon, T-Mobile...", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Provider billing address", placeholder: "PO Box 34567, Philadelphia, PA 19101", type: "text" as const, required: true },
      { id: "accountNumber", label: "Account number", placeholder: "8765-4321-0000", type: "text" as const, required: true },
      { id: "disputedCharges", label: "What charges are you disputing?", placeholder: "Monthly rate increase from $59.99 to $89.99, unauthorized equipment rental fee of $14.99/month", type: "textarea" as const, required: true },
      { id: "billingPeriod", label: "Billing period(s) affected", placeholder: "January 2026 – present", type: "text" as const, required: true },
      { id: "promisedTerms", label: "What were you promised?", helpText: "Include the rate, plan, or terms you were quoted and when.", placeholder: "$59.99/month for 24 months, quoted on July 15, 2025 by sales rep during signup. Confirmation email attached.", type: "textarea" as const, required: true },
      { id: "priorContact", label: "Prior contact with provider", placeholder: "Called customer service on Jan 15 and Feb 2. Was told the rate would be corrected but it was not...", type: "textarea" as const },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Rate corrected to $59.99/month as promised, credit of $180 for 6 months of overcharges", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Billing Dispute — Account #[ACCOUNT_NUMBER]

Dear [RECIPIENT]:

I am writing to formally dispute charges on my account and demand correction of billing errors affecting account #[ACCOUNT_NUMBER].

DISPUTED CHARGES:
[DISPUTED_CHARGES]

BILLING PERIOD(S) AFFECTED: [BILLING_PERIOD]

TERMS PROMISED:
[PROMISED_TERMS]

PRIOR CONTACT:
[PRIOR_CONTACT]

Your billing practices violate FCC Truth-in-Billing rules (47 C.F.R. § 64.2401), which require that charges on telecommunications bills be clearly described, accurate, and not misleading. Charging a rate different from the rate quoted and agreed upon at the time of enrollment constitutes a deceptive practice under both federal regulations and state consumer protection law.

Under the Telecommunications Act and FCC rules, consumers have the right to receive bills that accurately reflect the terms of their service agreement. Providers who engage in billing practices that are unjust, unreasonable, or deceptive may be subject to enforcement action, including fines and required restitution.

DEMAND:
[DESIRED_OUTCOME]

If this matter is not resolved within fifteen (15) days, I will file a formal complaint with the Federal Communications Commission, my state’s public utility commission, and the state Attorney General’s office. FCC rules require you to respond to consumer complaints within 30 days, and complaints become part of your public regulatory record.

Sincerely,

[USER_NAME]
[USER_ADDRESS]
Account #[ACCOUNT_NUMBER]`,
    faq: [
      { q: "Should I file an FCC complaint?", a: "If the demand letter doesn't work, yes. File at consumercomplaints.fcc.gov. The FCC forwards your complaint to the provider, who must respond within 30 days. This is highly effective." },
      { q: "What if the provider says the promotional rate expired?", a: "If you were promised a rate for a specific period and it was changed early, that's a breach. If the promo legitimately expired, check whether the terms were clearly disclosed at signup." },
      { q: "Can I switch providers to avoid paying?", a: "You can switch, but you should still dispute the incorrect charges. Send the demand letter before switching to preserve your claim for credits owed." },
      { q: "What about early termination fees?", a: "If the provider breached the terms (changed your rate, degraded service), you may have grounds to terminate without an ETF. The demand letter can address this." },
    ],
  },
  {
    slug: "timeshare-cancellation",
    title: "Timeshare Cancellation Demand",
    shortTitle: "Timeshare Cancel",
    description: "Demand cancellation of a timeshare contract and rescind the purchase.",
    category: "consumer",
    icon: "🏖️",
    statutes: ["State timeshare cancellation/rescission statutes", "State consumer protection acts", "FTC Cooling-Off Rule (16 C.F.R. Part 429)"],
    urgencyNote: "State rescission periods range from 3 to 15 days — act immediately if you just purchased",
    successStat: "Timeshare buyers who send a formal rescission letter within the statutory period have a near-100% cancellation rate",
    testimonial: {
      name: "Greg and Linda H.",
      location: "Las Vegas, NV",
      quote: "We were pressured into signing a $28,000 timeshare contract during a 4-hour sales presentation. We sent the rescission letter the next day citing Nevada's 5-day cancellation law and got our $3,000 deposit back.",
      result: "Contract cancelled, $3,000 refunded",
    },
    questions: [
      { id: "recipient", label: "Timeshare company name", placeholder: "Grand Vacation Resorts International", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Company address", placeholder: "5000 Resort Blvd, Las Vegas, NV 89109", type: "text" as const, required: true },
      { id: "resortName", label: "Resort or property name", placeholder: "Grand Vacation Club — Las Vegas Strip", type: "text" as const, required: true },
      { id: "purchaseDate", label: "Date of purchase / contract signing", placeholder: "", type: "date" as const, required: true },
      { id: "purchasePrice", label: "Purchase price", placeholder: "28000", type: "number" as const, required: true },
      { id: "cancellationReason", label: "Reason for cancellation", placeholder: "High-pressure sales tactics, misrepresentation of exchange program, financial hardship...", type: "textarea" as const, required: true },
      { id: "priorCancellationAttempts", label: "Prior cancellation attempts (if any)", placeholder: "Called the resort on July 2 and was transferred to a 'retention specialist' who refused to process cancellation...", type: "textarea" as const },
      { id: "maintenanceFees", label: "Annual maintenance fees", placeholder: "1200", type: "number" as const },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full cancellation of contract and refund of $3,000 deposit", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

VIA CERTIFIED MAIL, RETURN RECEIPT REQUESTED

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Notice of Rescission / Cancellation of Timeshare Contract — [RESORT_NAME]

Dear [RECIPIENT]:

I am exercising my legal right to rescind and cancel the timeshare purchase contract executed on [PURCHASE_DATE] for the property known as [RESORT_NAME], with a purchase price of $[PURCHASE_PRICE].

REASON FOR CANCELLATION:
[CANCELLATION_REASON]

PRIOR CANCELLATION ATTEMPTS:
[PRIOR_CANCELLATION_ATTEMPTS]

This notice of rescission is made pursuant to the state timeshare rescission statute, which provides purchasers with a statutory right to cancel a timeshare contract within the prescribed rescission period. I am also invoking my rights under the FTC Cooling-Off Rule (16 C.F.R. Part 429), which provides a three-day right of cancellation for sales made away from the seller’s regular place of business.

Additionally, the sales presentation involved deceptive practices in violation of state consumer protection law, including but not limited to high-pressure tactics, misrepresentation of the product’s value and resale potential, and failure to provide adequate disclosures as required by the state timeshare act.

I demand:
1. Immediate cancellation of the purchase contract
2. Full refund of all monies paid, including any deposit, down payment, and closing costs, within the timeframe required by state law
3. Release of any financing obligation associated with this purchase
4. Written confirmation that the contract has been cancelled and no further amounts are due

[DESIRED_OUTCOME]

Any attempt to enforce this contract after receipt of this rescission notice will constitute a violation of state law and may give rise to additional claims for damages and attorney’s fees.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "How long do I have to cancel a timeshare?", a: "It depends on the state where the timeshare is located. Rescission periods range from 3 days (minimum under FTC rules) to 15 days. Some states like Florida allow 10 days. Act immediately — this deadline is strict." },
      { q: "What if the rescission period has passed?", a: "You may still have grounds to cancel based on fraud, misrepresentation, or failure to provide required disclosures. The letter will cite applicable consumer protection violations." },
      { q: "Should I send this by certified mail?", a: "Absolutely. Always send timeshare cancellation letters via certified mail with return receipt requested. This creates undeniable proof of delivery, which is critical if the company claims they never received it." },
      { q: "What about timeshare exit companies?", a: "Be very cautious. Many timeshare exit companies charge $3,000–$10,000 and provide little more than a letter you could send yourself. This letter is the same type of rescission notice they would send." },
    ],
  },
  {
    slug: "wedding-vendor-dispute",
    title: "Wedding Vendor Dispute",
    shortTitle: "Wedding Vendor",
    description: "Demand a refund or damages from a wedding vendor who failed to deliver.",
    category: "consumer",
    icon: "💒",
    statutes: ["State consumer protection acts", "Breach of contract (state common law)", "Uniform Commercial Code (UCC) Article 2 (for goods)"],
    urgencyNote: "Wedding vendor disputes often involve time-sensitive evidence — gather photos and witness statements quickly",
    successStat: "89% of wedding vendors respond to a formal demand letter within 14 days when it cites specific contract terms",
    testimonial: {
      name: "Amanda and Derek C.",
      location: "Savannah, GA",
      quote: "Our photographer shot our entire wedding on a corrupted memory card and delivered only 47 usable photos out of the 500+ promised. The demand letter resulted in a full $3,500 refund plus $1,000 toward a reshoot session.",
      result: "Received $4,500 total",
    },
    questions: [
      { id: "recipient", label: "Vendor name (business or individual)", placeholder: "Elegant Moments Photography LLC", type: "text" as const, required: true },
      { id: "recipientAddress", label: "Vendor address", placeholder: "200 Studio Lane, Savannah, GA 31401", type: "text" as const, required: true },
      { id: "vendorType", label: "Type of vendor", placeholder: "", type: "select" as const, options: ["Photographer/Videographer", "Caterer", "Florist", "DJ/Band/Entertainment", "Venue", "Wedding Planner/Coordinator", "Baker (cake/desserts)", "Hair/Makeup Artist", "Officiant", "Transportation", "Other"], required: true },
      { id: "contractDate", label: "Date contract was signed", placeholder: "", type: "date" as const, required: true },
      { id: "eventDate", label: "Wedding/event date", placeholder: "", type: "date" as const, required: true },
      { id: "contractAmount", label: "Total contract amount", placeholder: "3500", type: "number" as const, required: true },
      { id: "amountPaid", label: "Amount already paid", placeholder: "3500", type: "number" as const, required: true },
      { id: "facts", label: "What went wrong?", helpText: "Describe how the vendor failed to perform, what was promised vs. delivered, and the impact on your event.", placeholder: "The contract specified 8 hours of coverage and delivery of 500+ edited photos within 6 weeks. The photographer left 2 hours early and delivered only 47 usable photos due to equipment failure...", type: "textarea" as const, required: true },
      { id: "desiredOutcome", label: "What do you want?", placeholder: "Full refund of $3,500 and $1,000 in damages for the cost of a post-wedding photo session", type: "text" as const, required: true },
    ],
    letterTemplate: `[DATE]

[RECIPIENT]
[RECIPIENT_ADDRESS]

Re: Formal Demand for Refund / Damages — [VENDOR_TYPE] Services for [EVENT_DATE] Wedding

Dear [RECIPIENT]:

I am writing to formally demand a refund and/or damages for your failure to perform the [VENDOR_TYPE] services contracted for my wedding on [EVENT_DATE].

CONTRACT DETAILS:
Contract Signed: [CONTRACT_DATE]
Event Date: [EVENT_DATE]
Contract Amount: $[CONTRACT_AMOUNT]
Amount Paid: $[AMOUNT_PAID]

BREACH OF CONTRACT:
[FACTS]

Your failure to deliver the services as described in our contract constitutes a material breach. Under state law, when a party materially breaches a contract, the non-breaching party is entitled to recover all amounts paid as well as consequential damages resulting from the breach.

Wedding services are unique and irreplaceable — a failed wedding vendor cannot simply redo the work because the event has passed. Courts and consumer protection agencies recognize that damages in wedding vendor disputes extend beyond the contract price to include the cost of mitigation, emotional distress where permitted by state law, and the lost value of once-in-a-lifetime moments that cannot be recreated.

Additionally, your conduct may constitute an unfair or deceptive trade practice under state consumer protection law, which provides for statutory damages, treble damages, and attorney’s fees in many states.

DEMAND:
[DESIRED_OUTCOME]

If this demand is not satisfied within fourteen (14) days, I will file a complaint with the state Attorney General and the Better Business Bureau, post factual reviews of my experience on public review platforms, and file a claim in small claims or civil court for the full amount plus all available statutory damages.

Sincerely,

[USER_NAME]
[USER_ADDRESS]`,
    faq: [
      { q: "What if I signed a contract with a no-refund clause?", a: "A no-refund clause typically does not protect a vendor who fails to perform. When a vendor materially breaches the contract (doesn't show up, delivers substandard work), they cannot enforce a no-refund clause in most states." },
      { q: "Can I recover more than what I paid?", a: "Yes. You may be entitled to consequential damages, such as the cost of hiring a replacement vendor, re-staging a photo session, or other expenses caused by the vendor's failure. Some states also allow statutory or treble damages." },
      { q: "Should I leave a negative review?", a: "You are legally entitled to post truthful, factual reviews of your experience. However, send the demand letter first — mentioning your intent to post reviews can motivate a quicker resolution." },
      { q: "What evidence should I gather?", a: "Save your signed contract, all communications (emails, texts), payment receipts, photos/videos from the event showing the vendor's failure, and statements from guests or other vendors who witnessed the problem." },
    ],
  },

];

export function getDisputeBySlug(slug: string): DisputeType | undefined {
  return DISPUTES.find((d) => d.slug === slug);
}

export function getDisputesByCategory(category: string): DisputeType[] {
  return DISPUTES.filter((d) => d.category === category);
}
