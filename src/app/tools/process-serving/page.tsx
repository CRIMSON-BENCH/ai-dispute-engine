import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Process Serving — Serve Your Documents for $50",
  description:
    "Hire a licensed process server to deliver your legal documents in person. Available in all 50 states. Proof of service affidavit included. $50 flat rate.",
  openGraph: {
    title: "Professional Process Serving — Serve Your Documents for $50",
    description:
      "When certified mail isn't enough, hire a professional process server for $50. Proof of service included.",
  },
};

const CHECK = (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const whenNeeded = [
  {
    title: "Filing a lawsuit",
    description:
      "Courts require proof that the defendant was properly notified. A process server provides legally admissible proof of service.",
  },
  {
    title: "Restraining orders",
    description:
      "Protective orders must be personally served to the respondent before they take effect.",
  },
  {
    title: "Landlord/tenant legal action",
    description:
      "Eviction notices and court summons often require personal service, not just mailing.",
  },
  {
    title: "When certified mail is refused or ignored",
    description:
      "If the recipient won't sign for certified mail, a process server can hand-deliver the documents directly.",
  },
];

const steps = [
  {
    step: "1",
    title: "Upload your document",
    description:
      "Upload the legal document you need served -- your demand letter, court summons, subpoena, or any other legal notice.",
  },
  {
    step: "2",
    title: "Enter the recipient's address",
    description:
      "Provide the name and address of the person or business being served. Include any alternate addresses if available.",
  },
  {
    step: "3",
    title: "A licensed process server delivers in person",
    description:
      "A professional process server from our network visits the recipient and hand-delivers the documents according to your state's rules.",
  },
  {
    step: "4",
    title: "You get a signed affidavit of service",
    description:
      "Receive a notarized affidavit of service -- court-admissible proof that the documents were properly delivered.",
  },
];

const whatYouGet = [
  "In-person delivery by a licensed process server",
  "Signed and notarized affidavit of service (proof for court)",
  "Up to 3 delivery attempts included",
  "Photo documentation of the service attempt",
  "Real-time tracking and status updates",
  "Court-compliant service in all 50 states",
];

const faqs = [
  {
    q: "What is process serving and when is it required?",
    a: "Process serving is the formal delivery of legal documents to a person or business involved in a court case. It's required whenever you file a lawsuit, petition for a restraining order, issue a subpoena, or need court-admissible proof that someone received your documents. Many courts won't proceed until proper service is confirmed.",
  },
  {
    q: "How long does delivery take?",
    a: "Most services are completed within 3-5 business days. Rush service is available in some areas for an additional fee. If the first attempt is unsuccessful, the process server will make up to 3 attempts at different times of day.",
  },
  {
    q: "What if the person can't be found or avoids service?",
    a: "Our process servers make up to 3 attempts at different times and days. If the person cannot be served after all attempts, you receive a detailed declaration of due diligence documenting every attempt. This document may qualify you for alternative service (posting or publication) depending on your state's rules.",
  },
  {
    q: "Is this available in my state?",
    a: "Yes. We have a network of 5,000+ licensed process servers covering all 50 states and Washington, D.C. Service methods comply with each state's specific rules of civil procedure.",
  },
];

export default function ProcessServingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/pricing" className="hover:text-teal-600 dark:hover:text-teal-400">
              Tools
            </Link>
          </li>
          <li>/</li>
          <li className="text-slate-900 dark:text-slate-100">Process Serving</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero */}
        <div className="text-center">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
            Premium Service — $50
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Serve It Right. Serve It Legal.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            When certified mail isn&apos;t enough, hire a professional process
            server to deliver your documents in person.
          </p>
        </div>

        {/* When You Need Process Serving */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            When you need process serving
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whenNeeded.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-bold">Nationwide coverage</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Available in all 50 states through our network of 5,000+ licensed
            process servers. Every server is bonded, insured, and compliant with
            state-specific service requirements.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">50</p>
              <p className="mt-1 text-sm text-slate-500">States covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">5,000+</p>
              <p className="mt-1 text-sm text-slate-500">Licensed servers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">3-5 days</p>
              <p className="mt-1 text-sm text-slate-500">Typical delivery</p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            What&apos;s included for $50
          </h2>
          <div className="mx-auto mt-8 max-w-xl">
            <ul className="space-y-4">
              {whatYouGet.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  {CHECK} {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Comparison */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            Save on process serving
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="mx-auto w-full max-w-2xl text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Option
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Cost
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 font-semibold text-teal-600 dark:text-teal-400">
                    Through AI Dispute Engine
                  </td>
                  <td className="py-3 font-bold">$50</td>
                  <td className="py-3">
                    3 attempts, affidavit, photo docs, tracking
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Independent process server
                  </td>
                  <td className="py-3">$75-150</td>
                  <td className="py-3">Varies by provider</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Sheriff / constable service
                  </td>
                  <td className="py-3">$30-75</td>
                  <td className="py-3">
                    1 attempt, weeks-long backlog
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Attorney-arranged service
                  </td>
                  <td className="py-3">$150-300</td>
                  <td className="py-3">
                    Includes attorney markup
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center text-2xl font-bold">Common questions</h2>
          <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
            {faqs.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold">
            Need your documents served?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Upload your document, enter the recipient&apos;s address, and a
            licensed process server handles the rest. Court-admissible proof of
            service included.
          </p>
          <Link
            href="/tools/process-serving/order"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Serve Your Documents — $50
          </Link>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Flat rate. No hidden fees. Affidavit of service included.
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Professional Process Serving",
            description:
              "Licensed process server delivers your legal documents in person. Includes up to 3 delivery attempts, signed affidavit of service, and photo documentation. Available in all 50 states.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "50.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/process-serving",
            },
          }),
        }}
      />
    </div>
  );
}
