"use client";

import { useState } from "react";
import Link from "next/link";
import type { DisputeType } from "@/lib/disputes";

export function DisputeFormClient({ dispute }: { dispute: DisputeType }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const question = dispute.questions[step];
  const totalSteps = dispute.questions.length;
  const progress = Math.round(((step + 1) / totalSteps) * 100);

  function handleNext() {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  function updateAnswer(value: string) {
    setAnswers({ ...answers, [question.id]: value });
  }

  function renderPreviewLetter() {
    let letter = dispute.letterTemplate;
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    letter = letter.replace("[DATE]", today);

    const fieldMap: Record<string, string> = {
      "[RECIPIENT]": answers.recipient || "[recipient name]",
      "[RECIPIENT_ADDRESS]": answers.recipientAddress || "[recipient address]",
      "[PROPERTY_ADDRESS]": answers.propertyAddress || "[property address]",
      "[MOVE_OUT_DATE]": answers.moveOutDate || "[move out date]",
      "[DEPOSIT_AMOUNT]": answers.depositAmount || "[amount]",
      "[STATE]": answers.state || "[state]",
      "[FACTS]": answers.facts || "[your facts will appear here]",
      "[DESIRED_OUTCOME]": answers.desiredOutcome || "[desired outcome]",
      "[USER_NAME]": "[Your Name]",
      "[USER_ADDRESS]": "[Your Address]",
      "[ACCOUNT_NAME]": answers.accountName || "[account name]",
      "[ACCOUNT_NUMBER]": answers.accountNumber || "[account number]",
      "[REPORTED_AMOUNT]": answers.reportedAmount || "[amount]",
      "[INFRINGING_URL]": answers.infringingUrl || "[URL]",
      "[ORIGINAL_URL]": answers.originalUrl || "[URL]",
      "[WORK_DESCRIPTION]": answers.workDescription || "[description]",
      "[CLAIM_NUMBER]": answers.claimNumber || "[claim number]",
      "[DENIAL_DATE]": answers.denialDate || "[date]",
      "[DENIAL_REASON]": answers.denialReason || "[reason]",
      "[SERVICE_DESCRIPTION]": answers.serviceDescription || "[service]",
      "[CITATION_NUMBER]": answers.citationNumber || "[citation #]",
      "[CITATION_DATE]": answers.citationDate || "[date]",
      "[LOCATION]": answers.location || "[location]",
      "[VIOLATION]": answers.violation || answers.violationDescription || "[violation]",
      "[ACCOUNT_REFERENCE]": answers.accountReference || "[reference]",
      "[ALLEGED_AMOUNT]": answers.allegedAmount || "[amount]",
      "[SUBSCRIPTION_NAME]": answers.subscriptionName || "[subscription]",
      "[AMOUNT]": answers.amount || answers.chargeAmount || "[amount]",
      "[CANCELLATION_DATE]": answers.cancellationDate || "[date]",
      "[LEASE_END_DATE]": answers.leaseEndDate || "[date]",
      "[REASON]": answers.reason || "[reason]",
      "[FINE_AMOUNT]": answers.fineAmount || "[amount]",
      "[VIOLATION_DATE]": answers.violationDate || "[date]",
      "[VIOLATION_DESCRIPTION]": answers.violationDescription || "[violation]",
      "[AMOUNT_OWED]": answers.amountOwed || "[amount]",
      "[WAGE_TYPE]": answers.wageType || "[wage type]",
      "[LAST_WORK_DATE]": answers.lastWorkDate || "[date]",
      "[MERCHANT_NAME]": answers.merchantName || "[merchant]",
      "[CHARGE_AMOUNT]": answers.chargeAmount || "[amount]",
      "[CHARGE_DATE]": answers.chargeDate || "[date]",
      "[RECORDS_DESCRIPTION]": answers.recordsDescription || "[records]",
      "[TAX_YEAR]": answers.taxYear || "[year]",
      "[PENALTY_TYPE]": answers.penaltyType || "[penalty type]",
      "[PENALTY_AMOUNT]": answers.penaltyAmount || "[amount]",
      "[ASSESSED_VALUE]": answers.assessedValue || "[value]",
      "[BELIEVED_VALUE]": answers.believedValue || "[value]",
      "[PERSONAL_INFO]": answers.personalInfo || "[personal info]",
      "[PROFILE_URL]": answers.profileUrl || "[URL]",
      "[ACCOMMODATION_REQUESTED]": answers.accommodationRequested || "[accommodation]",
      "[DISABILITY]": answers.disability || "[condition]",
      "[PRODUCT]": answers.product || "[product]",
      "[PURCHASE_DATE]": answers.purchaseDate || "[date]",
      "[WARRANTY_PERIOD]": answers.warrantyPeriod || "[warranty period]",
      "[DEFECT]": answers.defect || "[defect]",
      "[BOOKING_REFERENCE]": answers.bookingReference || "[booking ref]",
    };

    for (const [key, value] of Object.entries(fieldMap)) {
      letter = letter.replaceAll(key, value);
    }
    return letter;
  }

  if (completed) {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center dark:border-teal-800 dark:bg-teal-900/20">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
            <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">Your letter is ready.</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Create a free account to download your letter as PDF or DOCX.
            Your first letter is completely free.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-500"
          >
            Create free account to download
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-600 underline dark:text-teal-400">
              Sign in
            </Link>
          </p>
        </div>

        {/* Full preview */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Your letter preview
          </p>
          <div className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            {renderPreviewLetter()}
          </div>
          <div className="mt-6 border-t border-slate-200 pt-4 text-center dark:border-slate-700">
            <p className="text-xs text-slate-500">
              Download as PDF or DOCX after creating your free account
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Question {step + 1} of {totalSteps}
          </span>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
            {progress}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-8 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-1.5 rounded-full bg-teal-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <label className="mb-2 block text-sm font-semibold">
          {question.label}
          {question.required && <span className="text-red-500"> *</span>}
        </label>
        {question.helpText && (
          <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
            {question.helpText}
          </p>
        )}

        {question.type === "textarea" ? (
          <textarea
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-500"
            rows={4}
            placeholder={question.placeholder}
            value={answers[question.id] || ""}
            onChange={(e) => updateAnswer(e.target.value)}
          />
        ) : question.type === "select" && question.options ? (
          <select
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800"
            value={answers[question.id] || ""}
            onChange={(e) => updateAnswer(e.target.value)}
          >
            <option value="">Select...</option>
            {question.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={question.type}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:placeholder-slate-500"
            placeholder={question.placeholder}
            value={answers[question.id] || ""}
            onChange={(e) => updateAnswer(e.target.value)}
          />
        )}

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-700 disabled:invisible dark:text-slate-400"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            {step === totalSteps - 1 ? "Generate letter" : "Next →"}
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 dark:border-slate-800">
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            256-bit encryption
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Your data is never shared
          </span>
        </div>
      </div>

      {/* Live letter preview */}
      <div className="hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Live preview
          </p>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Updates as you type
          </span>
        </div>
        <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-800/50">
          <div className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            {renderPreviewLetter()}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          Complete all questions to generate your letter
        </p>
      </div>
    </div>
  );
}
