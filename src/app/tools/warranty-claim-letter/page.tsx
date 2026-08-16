import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Warranty Claim Letter Generator | AI Dispute Engine",
  description:
    "Generate a professional warranty claim letter for $2. Our AI cites UCC provisions and manufacturer obligations to demand the repair, replacement, or refund you deserve.",
  openGraph: {
    title: "AI Warranty Claim Letter Generator | AI Dispute Engine",
    description:
      "Generate a professional warranty claim letter for $2. Our AI cites UCC provisions and manufacturer obligations to demand the repair, replacement, or refund you deserve.",
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

const ARROW = (
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
);

const STEPS = [
  {
    step: "1",
    title: "Describe your product & warranty issue",
    description:
      "Tell us the product name, purchase date, what went wrong, and whether you have a manufacturer or extended warranty. Upload your receipt or warranty card if you have one.",
  },
  {
    step: "2",
    title: "AI drafts your claim with UCC references",
    description:
      "Our AI analyzes your situation and generates a formal warranty claim letter citing the Uniform Commercial Code, implied warranty of merchantability, and applicable warranty terms.",
  },
  {
    step: "3",
    title: "Download and send to the manufacturer",
    description:
      "Download your letter as a polished PDF, ready to email or mail to the manufacturer, retailer, or warranty administrator. We include instructions for certified mail delivery.",
  },
];

const INCLUDED = [
  "Formal demand citing UCC §2-314 (implied warranty of merchantability) and §2-315 (fitness for a particular purpose)",
  "Specific reference to your warranty terms, coverage period, and remaining obligations",
  "Clear remedy demand: repair, replacement, or full refund with a response deadline",
  "Magnuson-Moss Warranty Act citations for products with written warranties",
  "Professional formatting with your details, product serial number, and purchase documentation",
  "Pre-addressed envelope template and certified mail instructions for paper trail",
];

const FAQ = [
  {
    q: "What if my warranty has expired?",
    a: "Even after a written warranty expires, you may still have rights under implied warranties created by the UCC. In most states, the implied warranty of merchantability lasts up to four years from the date of purchase, regardless of the manufacturer’s written warranty period. Our AI will identify which protections still apply to your timeline.",
  },
  {
    q: "Does this work for extended warranties purchased from retailers?",
    a: "Yes. Extended warranties (also called service contracts) are separate agreements governed by their own terms and by state consumer protection laws. Our AI tailors the letter to the specific obligations outlined in your extended warranty plan, whether it was purchased from Best Buy, Home Depot, a car dealership, or any other retailer.",
  },
  {
    q: "What kind of products does this cover?",
    a: "This tool works for any consumer product covered by a warranty—electronics, appliances, furniture, vehicles, tools, HVAC systems, roofing, and more. Whether it’s a laptop that died after three months or a dishwasher that failed within its warranty period, the letter is customized to your specific product and issue.",
  },
  {
    q: "Will a warranty claim letter actually get results?",
    a: "A well-written letter citing specific legal provisions signals to the manufacturer that you understand your rights and are prepared to escalate. Many companies resolve claims quickly once they receive a formal demand because litigation or regulatory complaints cost far more than honoring the warranty. The letter creates a documented paper trail that strengthens any future claim.",
  },
];

export default function WarrantyClaimLetterPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/disputes"
            className="hover:text-teal-600 dark:hover:text-teal-400"
          >
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            Warranty Claim Letter
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop getting stonewalled on warranty claims you&apos;re legally owed
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our AI generates a forceful warranty claim letter that cites the UCC,
            the Magnuson-Moss Warranty Act, and your specific warranty terms to
            demand the repair, replacement, or refund the manufacturer owes you.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Warranty Claim &mdash; $2
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
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
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What&apos;s included
        </h2>
        <ul className="mx-auto mt-10 max-w-xl space-y-4">
          {INCLUDED.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-slate-700 dark:text-slate-300"
            >
              {CHECK} {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your warranty means nothing if you don&apos;t enforce it
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Manufacturers count on customers giving up. A formal demand letter
            with legal citations turns a customer service runaround into a
            documented legal claim they have to address.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Your Warranty Claim &mdash; $2
              {ARROW}
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
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AI Warranty Claim Letter Generator",
            description:
              "AI-generated warranty claim letter demanding repair, replacement, or refund under manufacturer or extended warranty terms with UCC citations.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/warranty-claim-letter",
            },
          }),
        }}
      />

      {/* Disclaimer */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. The documents generated by this service are for
            informational purposes only and do not constitute legal advice. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}
