import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notarized Demand Letter — Add Legal Weight for $15",
  description:
    "Get your AI-generated demand letter notarized online in minutes. A notarized letter sends a powerful signal. Online notarization for just $15.",
  openGraph: {
    title: "Notarized Demand Letter — Add Legal Weight for $15",
    description:
      "Make it official. Get your demand letter notarized online in minutes for $15.",
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

const steps = [
  {
    step: "1",
    title: "Generate your letter",
    description:
      "Use AI Dispute Engine to create your demand letter as usual. Pick your dispute type, answer the questions, and review your letter.",
  },
  {
    step: "2",
    title: "Add notarization for $15",
    description:
      "At checkout, select the notarization add-on. We handle scheduling and preparation so you don't have to.",
  },
  {
    step: "3",
    title: "Brief video call with a licensed notary",
    description:
      "Connect with a commissioned notary via a short video call. Verify your identity and sign your letter on camera. Takes about 10 minutes.",
  },
  {
    step: "4",
    title: "Download your notarized, stamped letter",
    description:
      "Receive your letter with an official notary seal, signature, and commission details. Ready to send or file with the court.",
  },
];

const whenToNotarize = [
  "High-value disputes ($5,000+)",
  "Landlord/tenant disputes",
  "Insurance claims and denials",
  "Debt collection disputes",
  "Before filing in small claims or civil court",
  "When the other side is ignoring you",
];

const faqs = [
  {
    q: "What does notarization actually do?",
    a: "A notary public is a state-commissioned official who verifies your identity and witnesses your signature. The notary seal confirms you are who you say you are and that you signed the document willingly. While not legally required for demand letters, it adds credibility and shows you're serious.",
  },
  {
    q: "Is online notarization legally valid?",
    a: "Yes. Remote online notarization (RON) is legal in all 50 states as of 2024. Our notaries are commissioned and comply with their state's electronic notarization laws. Online notarized documents carry the same legal weight as in-person notarization.",
  },
  {
    q: "What do I need for the video call?",
    a: "A government-issued photo ID (driver's license, passport, or state ID), a webcam or smartphone camera, and a stable internet connection. The call typically takes under 10 minutes.",
  },
  {
    q: "Can I notarize a letter I already generated?",
    a: "Yes. If you've already downloaded a letter from AI Dispute Engine, you can purchase the notarization add-on separately. Upload your existing letter and we'll schedule your notary session.",
  },
];

export default function NotarizedLetterPage() {
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
          <li className="text-slate-900 dark:text-slate-100">Notarized Letter</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero */}
        <div className="text-center">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
            Add-on Service — $15
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Make It Official. Get Your Letter Notarized.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A notarized demand letter tells them you mean business. Online
            notarization in minutes.
          </p>
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

        {/* Why Notarize */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-center text-xl font-bold">
            Why notarize your demand letter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
            A notarized letter isn&apos;t legally required, but it sends a
            powerful signal. It shows you&apos;re documenting everything for
            potential court action. Recipients take notarized letters more
            seriously because they know you&apos;re building a paper trail.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <h3 className="text-sm font-semibold">When to notarize:</h3>
            <ul className="mt-4 space-y-3">
              {whenToNotarize.map((item) => (
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
            Better price. Less hassle.
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
                    Time
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Convenience
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 font-semibold text-teal-600 dark:text-teal-400">
                    Through AI Dispute Engine
                  </td>
                  <td className="py-3 font-bold">$15</td>
                  <td className="py-3">10 minutes</td>
                  <td className="py-3">From your couch</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Online notarization services
                  </td>
                  <td className="py-3">$25</td>
                  <td className="py-3">15-30 minutes</td>
                  <td className="py-3">Online, but you schedule separately</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Post office / UPS Store
                  </td>
                  <td className="py-3">$15</td>
                  <td className="py-3">30-60 minutes</td>
                  <td className="py-3">Drive there, wait in line</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Mobile notary (comes to you)
                  </td>
                  <td className="py-3">$50-100</td>
                  <td className="py-3">Same day or next day</td>
                  <td className="py-3">Convenient, but expensive</td>
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
            Add weight to your letter
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Generate your demand letter first, then add notarization at
            checkout. Done in 10 minutes without leaving your home.
          </p>
          <Link
            href="/disputes"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Notarize Your Letter — $15
          </Link>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Generate your letter first, then add notarization during checkout
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
            name: "Notarized Demand Letter",
            description:
              "Get your AI-generated demand letter notarized online via video call with a licensed notary. Includes official notary seal and signature.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "15.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/notarized-letter",
            },
          }),
        }}
      />
    </div>
  );
}
