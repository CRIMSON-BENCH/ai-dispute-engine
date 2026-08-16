"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Types & constants                                                  */
/* ------------------------------------------------------------------ */

type DisputeType =
  | "security-deposit"
  | "car-accident"
  | "wage-theft"
  | "medical-billing"
  | "insurance-denial"
  | "landlord-repair"
  | "debt-harassment"
  | "wrongful-termination";

interface DisputeOption {
  value: DisputeType;
  label: string;
  icon: string;
  slug: string; // link to /disputes/[slug]
}

const DISPUTE_OPTIONS: DisputeOption[] = [
  { value: "security-deposit", label: "Security Deposit", icon: "🏠", slug: "security-deposit" },
  { value: "car-accident", label: "Car Accident", icon: "🚗", slug: "general-demand-letter" },
  { value: "wage-theft", label: "Wage Theft", icon: "💰", slug: "wage-theft" },
  { value: "medical-billing", label: "Medical Billing Error", icon: "🏥", slug: "medical-denial" },
  { value: "insurance-denial", label: "Insurance Denial", icon: "📋", slug: "medical-denial" },
  { value: "landlord-repair", label: "Landlord Failure to Repair", icon: "🔧", slug: "lease-break" },
  { value: "debt-harassment", label: "Debt Collection Harassment", icon: "📞", slug: "debt-validation" },
  { value: "wrongful-termination", label: "Wrongful Termination", icon: "💼", slug: "general-demand-letter" },
];

interface FieldDef {
  id: string;
  label: string;
  placeholder: string;
  type: "number" | "range";
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

const FIELDS: Record<DisputeType, FieldDef[]> = {
  "security-deposit": [
    { id: "deposit", label: "Security deposit amount", placeholder: "1500", type: "number", prefix: "$" },
    { id: "monthsLate", label: "Months landlord is late returning it", placeholder: "3", type: "number", min: 1, max: 24 },
  ],
  "car-accident": [
    { id: "medicalBills", label: "Medical bills to date", placeholder: "5000", type: "number", prefix: "$" },
    { id: "propertyDamage", label: "Property damage (vehicle repair/replacement)", placeholder: "8000", type: "number", prefix: "$" },
    { id: "lostWages", label: "Lost wages", placeholder: "3000", type: "number", prefix: "$" },
    { id: "painLevel", label: "Pain and suffering severity", placeholder: "5", type: "range", min: 1, max: 10 },
  ],
  "wage-theft": [
    { id: "hourlyRate", label: "Hourly rate", placeholder: "18", type: "number", prefix: "$" },
    { id: "hoursOwed", label: "Unpaid hours per week", placeholder: "10", type: "number" },
    { id: "weeksOwed", label: "Number of weeks owed", placeholder: "8", type: "number" },
  ],
  "medical-billing": [
    { id: "originalBill", label: "Original bill amount", placeholder: "12000", type: "number", prefix: "$" },
    { id: "insuranceShouldCover", label: "Amount insurance should have covered", placeholder: "9000", type: "number", prefix: "$" },
    { id: "outOfPocket", label: "What you paid out of pocket", placeholder: "5000", type: "number", prefix: "$" },
  ],
  "insurance-denial": [
    { id: "claimAmount", label: "Denied claim amount", placeholder: "15000", type: "number", prefix: "$" },
    { id: "treatmentCost", label: "Actual treatment cost", placeholder: "12000", type: "number", prefix: "$" },
    { id: "outOfPocket", label: "Out-of-pocket expenses", placeholder: "8000", type: "number", prefix: "$" },
  ],
  "landlord-repair": [
    { id: "monthlyRent", label: "Monthly rent", placeholder: "1800", type: "number", prefix: "$" },
    { id: "monthsIssue", label: "Months the issue has persisted", placeholder: "4", type: "number" },
    { id: "repairCost", label: "Estimated repair cost", placeholder: "3000", type: "number", prefix: "$" },
  ],
  "debt-harassment": [
    { id: "violations", label: "Number of FDCPA violations", placeholder: "5", type: "number", min: 1 },
    { id: "damages", label: "Actual damages suffered", placeholder: "500", type: "number", prefix: "$" },
  ],
  "wrongful-termination": [
    { id: "annualSalary", label: "Annual salary", placeholder: "55000", type: "number", prefix: "$" },
    { id: "monthsUnemployed", label: "Months unemployed since termination", placeholder: "3", type: "number" },
    { id: "backPayOwed", label: "Back pay owed (bonus, PTO, commissions)", placeholder: "4000", type: "number", prefix: "$" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Calculation engine                                                 */
/* ------------------------------------------------------------------ */

interface CalcResult {
  lowEstimate: number;
  highEstimate: number;
  breakdown: { label: string; low: number; high: number }[];
  explanation: string;
}

function calculate(type: DisputeType, values: Record<string, number>): CalcResult | null {
  const v = (key: string) => values[key] || 0;

  switch (type) {
    case "security-deposit": {
      const deposit = v("deposit");
      const monthsLate = v("monthsLate");
      if (!deposit) return null;
      const actual = deposit;
      const statutoryLow = deposit; // 1x
      const statutoryHigh = deposit * 2; // 2x additional
      const interestPenalty = deposit * 0.02 * Math.max(monthsLate, 1);
      const attorneyFees = Math.min(deposit * 0.5, 2500);
      return {
        lowEstimate: actual + interestPenalty,
        highEstimate: actual + statutoryHigh + interestPenalty + attorneyFees,
        breakdown: [
          { label: "Deposit refund", low: actual, high: actual },
          { label: "Statutory damages (1-3x)", low: 0, high: statutoryHigh },
          { label: "Interest / late penalties", low: interestPenalty, high: interestPenalty },
          { label: "Potential attorney fees", low: 0, high: attorneyFees },
        ],
        explanation: `Your landlord owes at least the $${actual.toLocaleString()} deposit. Many states impose 1-3x statutory damages for failing to return a deposit within the legal deadline. After ${monthsLate} month${monthsLate !== 1 ? "s" : ""}, you may be entitled to additional penalties and interest. A demand letter often resolves this without court.`,
      };
    }

    case "car-accident": {
      const medical = v("medicalBills");
      const property = v("propertyDamage");
      const wages = v("lostWages");
      const pain = Math.max(v("painLevel"), 1);
      if (!medical && !property && !wages) return null;
      const specials = medical + property + wages;
      const painMultiplierLow = 1 + pain * 0.15;
      const painMultiplierHigh = 1 + pain * 0.45;
      const lowTotal = specials * painMultiplierLow;
      const highTotal = specials * painMultiplierHigh;
      return {
        lowEstimate: lowTotal,
        highEstimate: highTotal,
        breakdown: [
          { label: "Medical bills", low: medical, high: medical },
          { label: "Property damage", low: property, high: property },
          { label: "Lost wages", low: wages, high: wages },
          { label: `Pain & suffering (${pain}/10)`, low: specials * (painMultiplierLow - 1), high: specials * (painMultiplierHigh - 1) },
        ],
        explanation: `Your special damages (medical, property, wages) total $${specials.toLocaleString()}. Insurance adjusters typically apply a multiplier of ${painMultiplierLow.toFixed(1)}-${painMultiplierHigh.toFixed(1)}x based on your pain severity (${pain}/10) to estimate general damages. A demand letter documents your claim and establishes your settlement position.`,
      };
    }

    case "wage-theft": {
      const rate = v("hourlyRate");
      const hours = v("hoursOwed");
      const weeks = v("weeksOwed");
      if (!rate || !hours || !weeks) return null;
      const unpaidWages = rate * hours * weeks;
      const liquidated = unpaidWages; // FLSA allows equal amount
      const attorneyFees = Math.min(unpaidWages * 0.4, 5000);
      return {
        lowEstimate: unpaidWages,
        highEstimate: unpaidWages + liquidated + attorneyFees,
        breakdown: [
          { label: "Unpaid wages", low: unpaidWages, high: unpaidWages },
          { label: "Liquidated damages (FLSA 2x)", low: 0, high: liquidated },
          { label: "Potential attorney fees", low: 0, high: attorneyFees },
        ],
        explanation: `You are owed $${unpaidWages.toLocaleString()} in unpaid wages (${hours} hrs/week x ${weeks} weeks x $${rate}/hr). Under the Fair Labor Standards Act, you may recover an equal amount in liquidated damages, effectively doubling your claim. Many wage theft cases also recover attorney fees.`,
      };
    }

    case "medical-billing": {
      const bill = v("originalBill");
      const shouldCover = v("insuranceShouldCover");
      const paid = v("outOfPocket");
      if (!bill) return null;
      const overcharge = Math.max(paid - (bill - shouldCover), 0);
      const refundLow = overcharge;
      const refundHigh = paid;
      const stressDamages = Math.min(paid * 0.25, 2000);
      return {
        lowEstimate: refundLow,
        highEstimate: refundHigh + stressDamages,
        breakdown: [
          { label: "Refund of overpayment", low: refundLow, high: refundHigh },
          { label: "Billing error correction", low: 0, high: shouldCover - (bill - paid) > 0 ? shouldCover - (bill - paid) : 0 },
          { label: "Stress / inconvenience damages", low: 0, high: stressDamages },
        ],
        explanation: `Your original bill was $${bill.toLocaleString()}, insurance should have covered $${shouldCover.toLocaleString()}, and you paid $${paid.toLocaleString()} out of pocket. A demand letter can force the provider to correct the billing and process the insurance claim properly.`,
      };
    }

    case "insurance-denial": {
      const claim = v("claimAmount");
      const treatment = v("treatmentCost");
      const oop = v("outOfPocket");
      if (!claim) return null;
      const badFaithLow = 0;
      const badFaithHigh = claim * 0.5;
      const consequential = oop;
      return {
        lowEstimate: claim,
        highEstimate: claim + badFaithHigh + consequential,
        breakdown: [
          { label: "Original claim amount", low: claim, high: claim },
          { label: "Bad faith damages", low: badFaithLow, high: badFaithHigh },
          { label: "Consequential damages (out-of-pocket)", low: 0, high: consequential },
        ],
        explanation: `Your denied claim is worth $${claim.toLocaleString()}. If the denial was unreasonable, many states allow bad faith damages of up to 50% or more of the claim. Your $${oop.toLocaleString()} in out-of-pocket costs are also recoverable. An appeal letter citing your policy terms and state regulations is the first step.`,
      };
    }

    case "landlord-repair": {
      const rent = v("monthlyRent");
      const months = v("monthsIssue");
      const repair = v("repairCost");
      if (!rent) return null;
      const rentAbatement = rent * months * 0.25; // 25% abatement
      const rentAbatementHigh = rent * months * 0.5; // 50% abatement
      const repairRecovery = repair;
      return {
        lowEstimate: rentAbatement,
        highEstimate: rentAbatementHigh + repairRecovery,
        breakdown: [
          { label: "Rent abatement (25-50%)", low: rentAbatement, high: rentAbatementHigh },
          { label: "Repair cost recovery", low: 0, high: repairRecovery },
          { label: "Potential code violation penalties", low: 0, high: rent },
        ],
        explanation: `For ${months} months of habitability issues at $${rent.toLocaleString()}/month rent, you may be entitled to 25-50% rent abatement ($${rentAbatement.toLocaleString()}-$${rentAbatementHigh.toLocaleString()}). If you paid for repairs yourself, that cost ($${repair.toLocaleString()}) is also recoverable. Most states require landlords to maintain habitable conditions.`,
      };
    }

    case "debt-harassment": {
      const violations = v("violations");
      const damages = v("damages");
      if (!violations) return null;
      const statutoryPerViolation = 1000;
      const statutoryDamages = violations * statutoryPerViolation;
      const attorneyFees = Math.min(statutoryDamages * 0.5, 3000);
      return {
        lowEstimate: damages + statutoryDamages,
        highEstimate: damages + statutoryDamages + attorneyFees,
        breakdown: [
          { label: "Actual damages", low: damages, high: damages },
          { label: `Statutory damages (${violations} violations x $1,000)`, low: statutoryDamages, high: statutoryDamages },
          { label: "Potential attorney fees", low: 0, high: attorneyFees },
        ],
        explanation: `Under the Fair Debt Collection Practices Act (FDCPA), each violation can result in up to $1,000 in statutory damages. With ${violations} violation${violations !== 1 ? "s" : ""}, that is $${statutoryDamages.toLocaleString()} in statutory damages alone, plus your $${damages.toLocaleString()} in actual damages. The FDCPA also allows recovery of attorney fees.`,
      };
    }

    case "wrongful-termination": {
      const salary = v("annualSalary");
      const monthsOut = v("monthsUnemployed");
      const backPay = v("backPayOwed");
      if (!salary) return null;
      const monthlySalary = salary / 12;
      const lostIncome = monthlySalary * monthsOut;
      const frontPay = monthlySalary * 3; // 3 months front pay
      const emotionalDistress = Math.min(salary * 0.15, 10000);
      return {
        lowEstimate: lostIncome + backPay,
        highEstimate: lostIncome + backPay + frontPay + emotionalDistress,
        breakdown: [
          { label: "Lost income", low: lostIncome, high: lostIncome },
          { label: "Back pay owed", low: backPay, high: backPay },
          { label: "Front pay (3 months)", low: 0, high: frontPay },
          { label: "Emotional distress", low: 0, high: emotionalDistress },
        ],
        explanation: `Based on your $${salary.toLocaleString()} salary and ${monthsOut} months of unemployment, your lost income is $${lostIncome.toLocaleString()}. Including $${backPay.toLocaleString()} in owed back pay, potential front pay, and emotional distress damages, your total claim could be significant. A demand letter is often the first step toward a severance negotiation.`,
      };
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const CHECK_ICON = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CHEVRON_RIGHT = (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: "How accurate is this settlement calculator?",
    a: "This calculator provides rough estimates based on common legal formulas and national averages. Actual settlement values vary by state, jurisdiction, strength of evidence, and individual circumstances. Use these numbers as a starting point for understanding your claim, not as legal advice.",
  },
  {
    q: "What factors affect my actual settlement amount?",
    a: "Key factors include: your state's specific laws and statutory damages, the strength of your documentation, the other party's willingness to negotiate, whether you have witnesses or written evidence, the timeline of events, and whether an attorney is involved. Cases with strong documentation typically settle higher.",
  },
  {
    q: "Do I need a lawyer to send a demand letter?",
    a: "No. Anyone can send a demand letter on their own behalf. In fact, for disputes under $10,000, a well-written demand letter is often the fastest and most cost-effective approach. Our AI generates letters that cite the correct statutes for your state, which shows the other party you mean business.",
  },
  {
    q: "What are statutory damages?",
    a: "Statutory damages are penalty amounts set by law that you can recover on top of your actual losses. For example, the FDCPA allows up to $1,000 per violation for debt collector harassment, and many states allow 2-3x the security deposit for landlords who fail to return it on time. These penalties exist to discourage bad behavior.",
  },
  {
    q: "What should I do after using the calculator?",
    a: "Generate a demand letter for your specific dispute type. The letter will cite the relevant laws, outline your damages, and give the other party a deadline to respond. Most disputes resolve within 14-30 days of receiving a formal demand letter. If they do not respond, you have documentation to support a small claims court filing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SettlementCalculatorPage() {
  const [disputeType, setDisputeType] = useState<DisputeType | "">("");
  const [values, setValues] = useState<Record<string, number>>({});
  const [step, setStep] = useState(1);

  const fields = disputeType ? FIELDS[disputeType] : [];
  const result = useMemo(() => {
    if (!disputeType) return null;
    return calculate(disputeType, values);
  }, [disputeType, values]);

  const selectedOption = DISPUTE_OPTIONS.find((o) => o.value === disputeType);

  function handleTypeSelect(type: DisputeType) {
    setDisputeType(type);
    setValues({});
    setStep(2);
  }

  function handleValueChange(id: string, val: string) {
    const num = parseFloat(val) || 0;
    setValues((prev) => ({ ...prev, [id]: num }));
  }

  function handleCalculate() {
    setStep(3);
  }

  function handleReset() {
    setDisputeType("");
    setValues({});
    setStep(1);
  }

  const hasAllRequired = fields.length > 0 && fields.every((f) => values[f.id] && values[f.id] > 0);

  /* ---- JSON-LD ---- */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Settlement Calculator",
    description:
      "Free settlement calculator. Estimate what your dispute is worth in 60 seconds. Covers security deposits, car accidents, wage theft, medical bills, and more.",
    url: "https://aidisputeengine.com/tools/settlement-calculator",
    applicationCategory: "LegalApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "AI Dispute Engine",
      url: "https://aidisputeengine.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white dark:bg-slate-950">
        {/* Breadcrumb */}
        <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">{CHEVRON_RIGHT}<span>Tools</span></li>
            <li className="flex items-center gap-1.5">
              {CHEVRON_RIGHT}
              <span className="font-medium text-slate-900 dark:text-white">Settlement Calculator</span>
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              Free tool &mdash; no account required
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              How Much Is Your Case Worth?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Estimate the value of your dispute in 60 seconds. Select your dispute type,
              enter a few numbers, and get an instant breakdown of what you could recover.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {/* Progress bar */}
            <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
              <div className="flex items-center gap-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        step >= s
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                      }`}
                    >
                      {step > s ? (
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s
                      )}
                    </span>
                    <span
                      className={`hidden text-sm font-medium sm:inline ${
                        step >= s ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {s === 1 ? "Dispute Type" : s === 2 ? "Details" : "Results"}
                    </span>
                    {s < 3 && (
                      <div className="mx-2 hidden h-px w-8 bg-slate-200 dark:bg-slate-700 sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Step 1 — Dispute type selection */}
              {step === 1 && (
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                    What type of dispute do you have?
                  </h2>
                  <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                    Select the category that best matches your situation.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {DISPUTE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleTypeSelect(opt.value)}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left transition hover:border-teal-500 hover:bg-teal-50/50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500 dark:hover:bg-teal-900/20"
                      >
                        <span className="text-2xl">{opt.icon}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — Input fields */}
              {step === 2 && disputeType && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Enter your {selectedOption?.label.toLowerCase()} details
                      </h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Provide the amounts below for an accurate estimate.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Change type
                    </button>
                  </div>

                  <div className="space-y-5">
                    {fields.map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          {field.label}
                        </label>
                        {field.type === "range" ? (
                          <div>
                            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                              <span>Mild (1)</span>
                              <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                                {values[field.id] || field.min || 1}
                              </span>
                              <span>Severe (10)</span>
                            </div>
                            <input
                              id={field.id}
                              type="range"
                              min={field.min || 1}
                              max={field.max || 10}
                              step={field.step || 1}
                              value={values[field.id] || field.min || 1}
                              onChange={(e) => handleValueChange(field.id, e.target.value)}
                              className="mt-2 w-full accent-teal-600"
                            />
                          </div>
                        ) : (
                          <div className="relative">
                            {field.prefix && (
                              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                {field.prefix}
                              </span>
                            )}
                            <input
                              id={field.id}
                              type="number"
                              min={field.min}
                              max={field.max}
                              step={field.step}
                              placeholder={field.placeholder}
                              value={values[field.id] || ""}
                              onChange={(e) => handleValueChange(field.id, e.target.value)}
                              className={`w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-3 text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-500 ${
                                field.prefix ? "pl-7" : "pl-3"
                              }`}
                            />
                            {field.suffix && (
                              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                {field.suffix}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleCalculate}
                    disabled={!hasAllRequired}
                    className="mt-8 w-full rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Calculate My Estimate
                  </button>
                </div>
              )}

              {/* Step 3 — Results */}
              {step === 3 && result && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Your Estimated Settlement Value
                    </h2>
                    <button
                      onClick={handleReset}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Start over
                    </button>
                  </div>

                  {/* Value range */}
                  <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
                    <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                      Estimated value range
                    </p>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                        {fmt(result.lowEstimate)}
                      </span>
                      <span className="text-lg text-slate-500 dark:text-slate-400">&mdash;</span>
                      <span className="text-3xl font-bold text-teal-600 dark:text-teal-400 sm:text-4xl">
                        {fmt(result.highEstimate)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-teal-700/70 dark:text-teal-400/60">
                      Based on typical outcomes and applicable statutory damages
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="mt-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Breakdown
                    </h3>
                    <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-700">
                      {result.breakdown.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-4 py-3"
                        >
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {item.label}
                          </span>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">
                            {item.low === item.high
                              ? fmt(item.low)
                              : `${fmt(item.low)} - ${fmt(item.high)}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-6 rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
                    <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                      How we calculated this
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {result.explanation}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 rounded-xl border-2 border-teal-600 bg-teal-50/50 p-6 text-center dark:border-teal-500 dark:bg-teal-900/20">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      Ready to take action?
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Generate a professional demand letter citing the right statutes for your state.
                    </p>
                    <Link
                      href={`/disputes/${selectedOption?.slug || ""}`}
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
                    >
                      Generate Your Demand Letter &mdash; $2
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      First letter free &middot; No account required
                    </p>
                  </div>

                  {/* Secondary actions */}
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Adjust numbers
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Try a different dispute
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 fallback when result is null */}
              {step === 3 && !result && (
                <div className="py-8 text-center">
                  <p className="text-slate-500 dark:text-slate-400">
                    Please enter all required values to see your estimate.
                  </p>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-4 text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
                  >
                    Go back
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How We Calculate */}
        <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How We Calculate Your Estimate
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
              Our calculator uses established legal formulas and national averages to provide realistic settlement ranges.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Actual Damages</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  We start with your real, documented losses: the money owed, bills paid, or wages stolen. This is the foundation of any claim.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Statutory Multipliers</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Many laws allow 2-3x damages as penalties. The FLSA doubles wage theft claims. State deposit laws often triple the penalty. We apply the relevant multipliers.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Ranges, Not Promises</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  We show a low-to-high range because every case is different. The low end represents conservative outcomes; the high end reflects maximum statutory recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
              {FAQ.map((item, i) => (
                <div key={i} className="py-5">
                  <dt className="font-semibold text-slate-900 dark:text-white">
                    {item.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Generate a Demand Letter
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              Know what your case is worth? Take the next step and create a professional demand letter in 60 seconds.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {DISPUTE_OPTIONS.map((opt) => (
                <Link
                  key={opt.value}
                  href={`/disputes/${opt.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-teal-500 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500"
                >
                  <span className="text-xl">{opt.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{opt.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Generate letter</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/disputes"
                className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
              >
                View all 20+ dispute templates &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
