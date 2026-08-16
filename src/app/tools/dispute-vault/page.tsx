import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dispute Vault — Encrypted Document Storage for Disputes | AI Dispute Engine",
  description:
    "Secure, encrypted cloud storage for your dispute documents, letters, and correspondence. Permanent shareable links for attorneys and courts. Just $3/month.",
  openGraph: {
    title: "Dispute Vault — Encrypted Document Storage | AI Dispute Engine",
    description:
      "Secure, encrypted cloud storage for your dispute documents, letters, and correspondence. Permanent shareable links for attorneys and courts. Just $3/month.",
  },
};

const CHECK = (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ARROW = (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const STEPS = [
  { step: "1", title: "Upload your documents", description: "Drag and drop dispute letters, receipts, contracts, photos, and correspondence. We accept PDFs, images, and common document formats." },
  { step: "2", title: "AI organizes by dispute", description: "Our AI automatically categorizes and tags each document by dispute type, date, and party — so you never lose track of a single piece of evidence." },
  { step: "3", title: "Share with attorneys or courts", description: "Generate permanent, secure links to share your entire dispute file with an attorney, mediator, or court clerk — no email attachments required." },
];

const INCLUDED = [
  "256-bit AES encryption for all stored documents",
  "Unlimited document uploads and permanent storage",
  "AI-powered auto-tagging and organization by dispute",
  "Permanent shareable links with optional password protection",
  "Full activity log — see who viewed your documents and when",
  "One-click export of your entire dispute file as a ZIP archive",
];

const FAQ = [
  {
    q: "How secure is the Dispute Vault?",
    a: "Every document is encrypted with 256-bit AES encryption at rest and in transit. Your files are stored on SOC 2 compliant infrastructure. Even our own team cannot read your documents — only you and the people you explicitly share with have access.",
  },
  {
    q: "Can I share documents with my attorney?",
    a: "Yes. You can generate a permanent, password-protected link to your entire dispute file or individual documents. Your attorney can view and download everything without creating an account. You can revoke access at any time.",
  },
  {
    q: "What file types can I upload?",
    a: "We support PDFs, Word documents, images (JPG, PNG, HEIC), text files, and most common document formats. Each file can be up to 50 MB. There is no limit on the total number of files you can store.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancel anytime with no penalty. After cancellation, your documents remain accessible for 30 days so you can download everything. We never hold your data hostage.",
  },
];

export default function DisputeVaultPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Dispute Vault</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$3/month</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Entire Dispute History, Encrypted and Organized</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">Stop losing track of letters, receipts, and responses buried in your email. Dispute Vault keeps every document encrypted, organized by dispute, and ready to share with attorneys or courts in one click.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Start Your Vault{ARROW}</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">{s.step}</div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (<li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Never Lose a Document Again</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Secure your dispute evidence for less than the price of a coffee. Cancel anytime.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">Get Dispute Vault — $3/mo{ARROW}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (<div key={item.q} className="py-5"><h3 className="text-sm font-semibold">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p></div>))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: "Dispute Vault", description: "Encrypted cloud storage for dispute documents, letters, and correspondence with permanent links and attorney sharing.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "3.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/dispute-vault" },
      }) }} />

      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide legal advice. The documents generated by this service are for informational purposes only and do not constitute legal advice. For legal advice specific to your situation, consult a licensed attorney in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
