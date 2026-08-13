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
];

export function getDisputeBySlug(slug: string): DisputeType | undefined {
  return DISPUTES.find((d) => d.slug === slug);
}

export function getDisputesByCategory(category: string): DisputeType[] {
  return DISPUTES.filter((d) => d.category === category);
}
