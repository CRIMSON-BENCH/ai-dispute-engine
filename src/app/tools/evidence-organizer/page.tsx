import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence Organizer — AI Dispute Engine",
  description:
    "Upload, tag, and organize your evidence into a court-ready PDF binder. AI-powered auto-tagging, chronological timelines, and professional evidence indexes. Only $5/mo.",
  openGraph: {
    title: "Evidence Organizer — AI Dispute Engine",
    description:
      "Upload, tag, and organize your evidence into a court-ready PDF binder. AI-powered auto-tagging, chronological timelines, and professional evidence indexes. Only $5/mo.",
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
  {
    step: "1",
    title: "Upload Your Documents",
    description:
      "Drag and drop contracts, emails, screenshots, receipts, letters, photos, and any other evidence. Supports PDF, images, Word documents, and text files — no file limit.",
  },
  {
    step: "2",
    title: "AI Tags and Organizes",
    description:
      "Our AI reads each document, identifies what it is, extracts dates and key details, and automatically categorizes everything into a logical structure. Review and adjust tags with one click.",
  },
  {
    step: "3",
    title: "Export a Court-Ready Binder",
    description:
      "Download a professionally formatted PDF binder with a numbered evidence index, tabbed sections, chronological timeline, and Bates-style page numbering — ready to file or hand to your attorney.",
  },
];

const INCLUDED = [
  "Unlimited document uploads (PDF, images, Word, text)",
  "AI-powered auto-tagging and document classification",
  "Court-ready PDF binder export with evidence index",
  "Annotation and highlight tools for key passages",
  "Chronological timeline view of all evidence",
  "Bates-style page numbering across all exhibits",
  "Drag-and-drop organization with custom categories",
  "Secure encrypted cloud storage for all uploads",
];

const FAQ = [
  {
    q: "What file types can I upload?",
    a: "The Evidence Organizer accepts PDFs, images (JPG, PNG, HEIC, TIFF), Word documents (DOC, DOCX), text files, and screenshots. You can upload contracts, emails, text message screenshots, receipts, letters, photos of damage, bank statements, and any other document relevant to your case. There is no limit on the number of files you can upload.",
  },
  {
    q: "How does AI auto-tagging work?",
    a: "When you upload a document, our AI reads the content and automatically identifies what type of evidence it is — contract, correspondence, financial record, photograph, receipt, and so on. It also extracts key dates, parties mentioned, and dollar amounts. You can accept the AI&apos;s tags, modify them, or create your own custom categories. The more documents you add, the better the AI gets at organizing your specific case.",
  },
  {
    q: "Will courts accept the binder format?",
    a: "Yes. The exported binder follows the same conventions used by attorneys and paralegals when submitting exhibits to courts. It includes a table of contents with exhibit numbers, tabbed section dividers, Bates-style page numbering, and a professional layout. Judges and clerks are accustomed to this format. Whether you are filing in small claims court, civil court, or submitting evidence to an arbitration panel, the binder format is appropriate and professional.",
  },
  {
    q: "Is my evidence secure?",
    a: "All uploads are encrypted in transit and at rest using AES-256 encryption — the same standard used by banks and healthcare providers. Your documents are stored in isolated, access-controlled cloud storage. Only you can access your files. We do not share, sell, or use your documents for any purpose other than providing the Evidence Organizer service. You can delete all of your data at any time from your account settings.",
  },
];

export default function EvidenceOrganizerPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Evidence Organizer</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $5/mo — cancel anytime
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Stop Scrambling. Start Winning.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Upload every piece of evidence — contracts, emails, screenshots, receipts — and let AI organize it into a court-ready binder with an evidence index, page numbers, and a chronological timeline. Walk into any hearing looking like you hired a paralegal.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Organizing — $5/mo{ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
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

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included</h2>
          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">{CHECK} {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">Organized Evidence Wins Cases</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Paralegals charge $50 to $150 an hour to organize evidence binders. Get the same professional result — with AI doing the heavy lifting — for $5 a month.</p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start Organizing — $5/mo{ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold">Common questions</h2>
        <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="text-sm font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Evidence Organizer",
          description: "Cloud-based tool to upload, tag, and organize evidence into a court-ready PDF binder with AI-powered auto-tagging, chronological timelines, and professional evidence indexes.",
          brand: { "@type": "Brand", name: "AI Dispute Engine" },
          offers: { "@type": "Offer", price: "5.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/evidence-organizer" },
        }),
      }} />

      {/* Disclaimer */}
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
