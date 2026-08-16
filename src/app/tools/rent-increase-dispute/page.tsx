import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Rent Increase Dispute Letter — Fight Unfair Rent Hikes | AI Dispute Engine",
  description:
    "Challenge illegal or excessive rent increases citing state rent control laws and notice requirements. AI-generated dispute letter with proper legal citations. $2 per letter.",
  openGraph: {
    title:
      "Rent Increase Dispute Letter — Fight Unfair Rent Hikes | AI Dispute Engine",
    description:
      "Challenge illegal or excessive rent increases citing state rent control laws and notice requirements. AI-generated dispute letter with proper legal citations. $2 per letter.",
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
    title: "Enter lease and rent increase details",
    description:
      "Provide your current rent, the proposed increase, your lease terms, how much notice you received, and your state and city. We use this to identify which laws protect you.",
  },
  {
    step: "2",
    title: "AI checks state and local rent laws",
    description:
      "Our AI cross-references your situation against state rent control statutes, local ordinances, required notice periods, and allowable increase percentages to build your case.",
  },
  {
    step: "3",
    title: "Download your dispute letter",
    description:
      "Get a professionally formatted letter citing the specific laws your landlord may be violating. Download in PDF or DOCX and deliver to your landlord or property management company.",
  },
];

const INCLUDED = [
  "State and local rent control law citations specific to your jurisdiction",
  "Required notice period analysis (30, 60, or 90 days depending on your state)",
  "Percentage increase calculation compared to legal limits",
  "Landlord obligation summary under applicable tenant protection laws",
  "Tenant rights overview including retaliation protections",
  "Demand to rescind or reduce the increase with a response deadline",
  "References to local rent board or housing authority for enforcement",
  "Professional formatting with PDF & DOCX download",
];

const FAQ = [
  {
    q: "How do I know if my rent increase is illegal?",
    a: "A rent increase may be illegal if it exceeds your state or city's allowable percentage cap (in rent-controlled areas), if your landlord failed to give proper written notice (typically 30-90 days depending on the amount and jurisdiction), if it violates the terms of your current lease, or if it appears retaliatory — for example, raised shortly after you filed a maintenance complaint. Our AI checks all of these factors against your local laws.",
  },
  {
    q: "What states have rent control or tenant protection laws?",
    a: "As of 2025, states with some form of rent control or stabilization include California (AB 1482 caps increases at 5% plus CPI), Oregon (statewide 7% plus CPI cap), New York, New Jersey, Maryland, and the District of Columbia. Many cities have additional local ordinances. Even states without formal rent control often have notice requirements and anti-retaliation protections that landlords must follow.",
  },
  {
    q: "What if my landlord retaliates after I dispute the increase?",
    a: "Most states have anti-retaliation laws that prohibit landlords from evicting, harassing, or reducing services in response to a tenant exercising their legal rights. If your landlord retaliates, document everything and file a complaint with your local housing authority. Retaliation can actually strengthen your position in court and may entitle you to additional damages.",
  },
  {
    q: "Can I withhold rent if I believe the increase is illegal?",
    a: "Generally, you should continue paying your current (pre-increase) rent amount while the dispute is active. Withholding rent entirely can give your landlord grounds for eviction even if the increase was illegal. Pay what you owe under your current lease terms, dispute the increase in writing, and keep records of every payment. If the increase is found unlawful, you may be entitled to recover any overpayment.",
  },
];

export default function RentIncreaseDisputePage() {
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
            Rent Increase Dispute
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $2 per dispute letter
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Fight Back Against Unfair Rent Hikes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Not every rent increase is legal. Many landlords ignore notice
            requirements, exceed allowable caps, or raise rent in retaliation.
            Our AI checks your increase against state and local laws and
            generates a dispute letter citing the exact statutes your landlord
            may be violating.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Dispute Letter — $2
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
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your landlord has obligations. Hold them to it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            A formal dispute letter citing the law is the first step to
            reversing an illegal rent increase — before it becomes your new
            normal.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Generate Dispute Letter — $2
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
            name: "Rent Increase Dispute Letter Generator",
            description:
              "Challenge illegal or excessive rent increases citing state rent control laws and notice requirements. AI-generated dispute letter with proper legal citations.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/rent-increase-dispute",
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
