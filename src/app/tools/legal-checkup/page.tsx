"use client";

import Link from "next/link";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type DisputeCategory =
  | "charged-unfairly"
  | "didnt-get-paid-for"
  | "landlord-housing"
  | "workplace"
  | "insurance"
  | "harassment"
  | "contract-broken"
  | "vehicle";

type OpponentType =
  | "company"
  | "person"
  | "employer"
  | "insurance-company"
  | "government";

type TimeFrame =
  | "less-30-days"
  | "1-6-months"
  | "6-12-months"
  | "1-2-years"
  | "more-2-years";

type AmountRange =
  | "under-500"
  | "500-2000"
  | "2000-5000"
  | "5000-10000"
  | "over-10000"
  | "not-about-money";

interface CategoryOption {
  value: DisputeCategory;
  label: string;
  description: string;
  icon: string;
}

interface OpponentOption {
  value: OpponentType;
  label: string;
}

interface TimeOption {
  value: TimeFrame;
  label: string;
}

interface AmountOption {
  value: AmountRange;
  label: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const CATEGORY_OPTIONS: CategoryOption[] = [
  { value: "charged-unfairly", label: "Charged unfairly", description: "Overcharged, hidden fees, billing error", icon: "\u{1F4B3}" },
  { value: "didnt-get-paid-for", label: "Didn't get what I paid for", description: "Defective product, incomplete service", icon: "\u{1F4E6}" },
  { value: "landlord-housing", label: "Landlord/housing issue", description: "Security deposit, repairs, lease violations", icon: "\u{1F3E0}" },
  { value: "workplace", label: "Workplace issue", description: "Unpaid wages, discrimination, wrongful termination", icon: "\u{1F4BC}" },
  { value: "insurance", label: "Insurance problem", description: "Claim denied, underpaid, bad faith", icon: "\u{1F4CB}" },
  { value: "harassment", label: "Harassment or threats", description: "Debt collectors, stalking, neighbor disputes", icon: "\u{1F6E1}\u{FE0F}" },
  { value: "contract-broken", label: "Contract broken", description: "Someone didn't hold up their end", icon: "\u{1F4DD}" },
  { value: "vehicle", label: "Vehicle issue", description: "Accident, lemon, repair fraud", icon: "\u{1F697}" },
];

const OPPONENT_OPTIONS: OpponentOption[] = [
  { value: "company", label: "A company or business" },
  { value: "person", label: "A person (landlord, contractor, individual)" },
  { value: "employer", label: "My employer" },
  { value: "insurance-company", label: "An insurance company" },
  { value: "government", label: "A government agency" },
];

const TIME_OPTIONS: TimeOption[] = [
  { value: "less-30-days", label: "Less than 30 days" },
  { value: "1-6-months", label: "1-6 months ago" },
  { value: "6-12-months", label: "6-12 months ago" },
  { value: "1-2-years", label: "1-2 years ago" },
  { value: "more-2-years", label: "More than 2 years ago" },
];

const AMOUNT_OPTIONS: AmountOption[] = [
  { value: "under-500", label: "Under $500" },
  { value: "500-2000", label: "$500 - $2,000" },
  { value: "2000-5000", label: "$2,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "over-10000", label: "Over $10,000" },
  { value: "not-about-money", label: "It's not about money (stop a behavior)" },
];

const RIGHTS_SUMMARIES: Record<DisputeCategory, string> = {
  "charged-unfairly":
    "Under federal and state consumer protection laws, you have the right to dispute unfair charges, demand refunds for unauthorized fees, and file complaints with the FTC and CFPB. Many states allow treble (3x) damages for deceptive business practices.",
  "didnt-get-paid-for":
    "Contract law and consumer protection statutes protect your right to receive what you paid for. You may be entitled to a full refund, replacement, or damages for breach of warranty under the UCC (Uniform Commercial Code).",
  "landlord-housing":
    "Tenant protection laws require landlords to maintain habitable conditions, return security deposits within legal deadlines, and follow proper eviction procedures. Many states allow 2-3x damages for violations.",
  "workplace":
    "The Fair Labor Standards Act (FLSA) and state labor laws protect your right to fair wages, overtime pay, and a discrimination-free workplace. Liquidated damages can double your recovery.",
  "insurance":
    "State insurance regulations require insurers to handle claims in good faith. Bad faith denials can result in the claim amount plus additional penalties, attorney fees, and consequential damages.",
  "harassment":
    "The FDCPA protects against abusive debt collection ($1,000+ per violation). State anti-harassment and anti-stalking laws provide civil remedies and criminal penalties.",
  "contract-broken":
    "Contract law entitles you to the benefit of your bargain. Remedies include specific performance (forcing them to fulfill the contract), compensatory damages, and in some cases consequential damages.",
  "vehicle":
    "State lemon laws, the Magnuson-Moss Warranty Act, and consumer protection statutes protect car buyers. Remedies include replacement, refund, or damages plus attorney fees.",
};

/* ------------------------------------------------------------------ */
/*  Results logic                                                      */
/* ------------------------------------------------------------------ */

type CaseStrength = "Strong" | "Moderate" | "Needs More Info";

function getCaseStrength(
  time: TimeFrame,
  amount: AmountRange,
  category: DisputeCategory
): CaseStrength {
  const isRecent = time === "less-30-days" || time === "1-6-months";
  const isMidAge = time === "6-12-months";
  const isOld = time === "1-2-years" || time === "more-2-years";
  const isVeryOld = time === "more-2-years";

  const clearCategories: DisputeCategory[] = [
    "charged-unfairly",
    "didnt-get-paid-for",
    "landlord-housing",
    "workplace",
    "insurance",
    "vehicle",
  ];
  const isClear = clearCategories.includes(category);

  const significantAmount =
    amount !== "under-500" && amount !== "not-about-money";

  if (isVeryOld) return "Needs More Info";
  if (isRecent && isClear && significantAmount) return "Strong";
  if (isRecent && isClear) return "Strong";
  if (isMidAge && isClear) return "Moderate";
  if (isOld) return "Needs More Info";
  if (!isClear && isRecent) return "Moderate";
  return "Moderate";
}

interface RecommendedProduct {
  name: string;
  description: string;
  price: string;
  href: string;
}

function getRecommendedProducts(
  category: DisputeCategory,
  opponent: OpponentType,
  time: TimeFrame,
  amount: AmountRange
): RecommendedProduct[] {
  const products: RecommendedProduct[] = [];

  // Always recommend demand letter
  products.push({
    name: "AI Demand Letter",
    description:
      "Generate a professional demand letter citing the right statutes for your state.",
    price: "$2",
    href: "/disputes",
  });

  // If harassment, recommend cease & desist
  if (category === "harassment") {
    products.push({
      name: "Cease & Desist Letter",
      description:
        "Formally demand someone stop harmful behavior with legal consequences outlined.",
      price: "$2",
      href: "/tools/cease-desist",
    });
  }

  // If amount > $5,000 or opponent is insurance company
  if (
    amount === "5000-10000" ||
    amount === "over-10000" ||
    opponent === "insurance-company"
  ) {
    products.push({
      name: "Attorney Review",
      description:
        "Have a licensed attorney review your case and provide personalized legal guidance.",
      price: "$65",
      href: "/tools/attorney-review",
    });
  }

  // If time is recent and amount is significant
  const isRecent = time === "less-30-days" || time === "1-6-months";
  const isSignificant =
    amount === "2000-5000" ||
    amount === "5000-10000" ||
    amount === "over-10000";
  if (isRecent && isSignificant) {
    products.push({
      name: "Full Fight Bundle",
      description:
        "Complete dispute toolkit: demand letter, follow-up, escalation templates, and strategy guide.",
      price: "$25",
      href: "/tools/full-fight",
    });
  }

  // Always recommend settlement calculator
  products.push({
    name: "Settlement Calculator",
    description:
      "Estimate the total value of your dispute including statutory damages and penalties.",
    price: "Free",
    href: "/tools/settlement-calculator",
  });

  return products;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const CHEVRON_RIGHT = (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const STEP_LABELS = ["What happened?", "Who's involved?", "When?", "How much?", "Results"];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: "Is the Legal Checkup really free?",
    a: "Yes, completely free with no account required. It's designed to help you understand your rights and decide on next steps. If you want to take action, our tools start at just $2.",
  },
  {
    q: "How accurate is the Legal Checkup?",
    a: "The checkup provides general guidance based on federal and state consumer protection laws. Every situation is unique, so the results are a starting point, not legal advice. For complex situations, we recommend attorney review.",
  },
  {
    q: "What happens to my answers?",
    a: "We don't store your answers or require any personal information. The checkup runs entirely in your browser. If you choose to generate a letter, you'll provide details at that point.",
  },
  {
    q: "What if my situation doesn't fit the categories?",
    a: "Choose the closest match. Our AI-generated letters are customized to your specific situation, not limited to categories. The checkup categories are starting points to help identify your rights.",
  },
  {
    q: "Should I talk to a lawyer instead?",
    a: "For disputes over $10,000 or complex legal situations (discrimination, medical malpractice, serious injury), consulting an attorney is recommended. For consumer disputes under $10,000, our tools are often the most cost-effective first step.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LegalCheckupPage() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<DisputeCategory | "">("");
  const [opponent, setOpponent] = useState<OpponentType | "">("");
  const [timeFrame, setTimeFrame] = useState<TimeFrame | "">("");
  const [amount, setAmount] = useState<AmountRange | "">("");

  function handleCategorySelect(val: DisputeCategory) {
    setCategory(val);
    setStep(2);
  }

  function handleOpponentSelect(val: OpponentType) {
    setOpponent(val);
    setStep(3);
  }

  function handleTimeSelect(val: TimeFrame) {
    setTimeFrame(val);
    setStep(4);
  }

  function handleAmountSelect(val: AmountRange) {
    setAmount(val);
    setStep(5);
  }

  function handleReset() {
    setStep(1);
    setCategory("");
    setOpponent("");
    setTimeFrame("");
    setAmount("");
  }

  // Derived results
  const caseStrength =
    category && timeFrame && amount
      ? getCaseStrength(timeFrame, amount, category)
      : null;

  const rightsSummary = category ? RIGHTS_SUMMARIES[category] : "";

  const recommendedProducts =
    category && opponent && timeFrame && amount
      ? getRecommendedProducts(category, opponent, timeFrame, amount)
      : [];

  const showStatuteWarning = timeFrame === "more-2-years";

  const strengthColor: Record<CaseStrength, string> = {
    Strong: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Moderate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    "Needs More Info": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  };

  /* ---- JSON-LD ---- */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Legal Checkup",
    description:
      "Free legal checkup tool. Answer 4 quick questions to learn your rights, assess your case strength, and get recommended next steps. No account required.",
    url: "https://aidisputeengine.com/tools/legal-checkup",
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
        <nav
          className="mx-auto max-w-6xl px-4 pt-6 sm:px-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-slate-700 dark:hover:text-slate-300"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              {CHEVRON_RIGHT}
              <span>Tools</span>
            </li>
            <li className="flex items-center gap-1.5">
              {CHEVRON_RIGHT}
              <span className="font-medium text-slate-900 dark:text-white">
                Legal Checkup
              </span>
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
              Free Legal Checkup &mdash; What Are Your Rights?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Answer 4 quick questions to understand your legal rights, assess
              the strength of your case, and get personalized next steps &mdash;
              all in under 60 seconds.
            </p>
          </div>
        </section>

        {/* Interactive Tool */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {/* Progress bar */}
            <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        step >= s
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                      }`}
                    >
                      {step > s ? (
                        <svg
                          className="h-3.5 w-3.5"
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
                      ) : (
                        s
                      )}
                    </span>
                    <span
                      className={`hidden text-sm font-medium lg:inline ${
                        step >= s
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {STEP_LABELS[s - 1]}
                    </span>
                    {s < 5 && (
                      <div className="mx-1 hidden h-px w-4 bg-slate-200 dark:bg-slate-700 lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Step 1 — What happened? */}
              {step === 1 && (
                <div>
                  <h2 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                    What happened?
                  </h2>
                  <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                    Select the category that best describes your situation.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {CATEGORY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleCategorySelect(opt.value)}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left transition hover:border-teal-500 hover:bg-teal-50/50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500 dark:hover:bg-teal-900/20"
                      >
                        <span className="text-2xl">{opt.icon}</span>
                        <div>
                          <span className="font-medium text-slate-900 dark:text-white">
                            {opt.label}
                          </span>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            {opt.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — Who's involved? */}
              {step === 2 && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Who&apos;s involved?
                      </h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Who is the other party in your dispute?
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Back
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {OPPONENT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOpponentSelect(opt.value)}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left font-medium text-slate-900 transition hover:border-teal-500 hover:bg-teal-50/50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-teal-500 dark:hover:bg-teal-900/20"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — When? */}
              {step === 3 && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        How long ago did this happen?
                      </h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        The timing of your dispute affects your legal options.
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Back
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {TIME_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleTimeSelect(opt.value)}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left font-medium text-slate-900 transition hover:border-teal-500 hover:bg-teal-50/50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-teal-500 dark:hover:bg-teal-900/20"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 — How much? */}
              {step === 4 && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        How much money is involved?
                      </h2>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        This helps determine the best course of action.
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Back
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {AMOUNT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAmountSelect(opt.value)}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left font-medium text-slate-900 transition hover:border-teal-500 hover:bg-teal-50/50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-teal-500 dark:hover:bg-teal-900/20"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5 — Results */}
              {step === 5 && caseStrength && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Your Legal Checkup Results
                    </h2>
                    <button
                      onClick={handleReset}
                      className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      Start over
                    </button>
                  </div>

                  {/* Case Strength */}
                  <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
                    <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                      Case Strength Assessment
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span
                        className={`inline-flex rounded-full px-4 py-1.5 text-sm font-bold ${strengthColor[caseStrength]}`}
                      >
                        {caseStrength}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {caseStrength === "Strong" &&
                          "Your situation has strong legal protections and favorable timing."}
                        {caseStrength === "Moderate" &&
                          "You likely have legal options, but the situation may require more detail."}
                        {caseStrength === "Needs More Info" &&
                          "Time-sensitive factors may affect your case. Consider acting quickly."}
                      </span>
                    </div>
                  </div>

                  {/* Statute of Limitations Warning */}
                  {showStatuteWarning && (
                    <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-900/20">
                      <div className="flex gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-amber-800 dark:text-amber-300">
                            Warning: Statute of Limitations
                          </p>
                          <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                            Many claims have a statute of limitations of 2-4
                            years. Your claim may be time-sensitive. We strongly
                            recommend consulting with an attorney to understand
                            your state&apos;s specific deadlines.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Your Rights */}
                  <div className="mt-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Your Rights
                    </h3>
                    <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {rightsSummary}
                      </p>
                    </div>
                  </div>

                  {/* Recommended Next Steps */}
                  <div className="mt-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Recommended Next Steps
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {recommendedProducts.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-500 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500"
                        >
                          <div className="flex items-start justify-between">
                            <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                              {product.name}
                            </h4>
                            <span
                              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                product.price === "Free"
                                  ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
                                  : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {product.price}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                            {product.description}
                          </p>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                            {product.price === "Free"
                              ? "Try it free"
                              : "Get started"}
                            <svg
                              className="h-3.5 w-3.5"
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
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/disputes"
                      className="flex flex-1 items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
                    >
                      Generate Demand Letter &mdash; $2
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
                    <button
                      onClick={handleReset}
                      className="flex-1 rounded-lg border border-slate-200 px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why a Legal Checkup? */}
        <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why a Legal Checkup?
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
              Understanding your rights is the first step to resolving any
              dispute. A 60-second checkup gives you clarity and confidence.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Know your rights
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Most people don&apos;t know they have legal protections. A
                  60-second checkup tells you exactly where you stand.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Save time and money
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Understanding your rights before acting helps you choose the
                  right approach &mdash; whether it&apos;s a $2 letter or a
                  consultation with an attorney.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Take action with confidence
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  When you know the law is on your side, you negotiate from a
                  position of strength.
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

        {/* Disclaimer */}
        <section className="border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
              Disclaimer: AI Dispute Engine is not a law firm and does not
              provide legal advice. The documents generated by this service are
              for informational purposes only and do not constitute legal advice.
              For legal advice specific to your situation, consult a licensed
              attorney in your jurisdiction.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
