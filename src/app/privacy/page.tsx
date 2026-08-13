import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>
      <div className="prose prose-slate mt-8 dark:prose-invert max-w-none space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Information We Collect
        </h2>
        <p>
          We collect the information you provide when creating an account (name,
          email) and when generating letters (dispute details). We use this
          information solely to generate your documents and provide our service.
        </p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          How We Use Your Information
        </h2>
        <p>
          Your dispute details are used to generate your letter and are stored
          securely in your account. We do not sell, share, or rent your personal
          information to third parties.
        </p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Data Security
        </h2>
        <p>
          All data is encrypted in transit (TLS) and at rest (AES-256). Payment
          information is processed by Stripe and never touches our servers.
        </p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Your Rights
        </h2>
        <p>
          You can request deletion of your account and all associated data at
          any time by contacting us. We will process your request within 30
          days.
        </p>
      </div>
    </div>
  );
}
