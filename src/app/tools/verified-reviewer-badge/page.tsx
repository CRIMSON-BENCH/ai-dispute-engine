import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verified Reviewer Badge | AI Dispute Engine",
  description:
    "Annual verified badge for successful dispute resolvers at $10/yr. Get priority support, a trust profile, and recognition for your dispute wins.",
  openGraph: {
    title: "Verified Reviewer Badge | AI Dispute Engine",
    description:
      "Annual verified badge for successful dispute resolvers at $10/yr. Get priority support, a trust profile, and recognition for your dispute wins.",
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
    title: "Verify your win",
    description:
      "Submit proof of a successful dispute resolution: a correction letter, settlement confirmation, or credit report update.",
  },
  {
    step: "2",
    title: "Get your badge",
    description:
      "Once verified, your profile displays a Verified Reviewer badge. Other users can see you have real dispute experience.",
  },
  {
    step: "3",
    title: "Unlock exclusive perks",
    description:
      "Enjoy priority customer support, early access to new tools, and the ability to mentor other users in the community.",
  },
];

const INCLUDED = [
  "Verified Reviewer badge displayed on your profile and reviews",
  "Priority customer support with faster response times",
  "Early access to new dispute tools and features before public launch",
  "Ability to mentor and advise other users in the community forum",
  "Higher visibility for your marketplace listings if you sell templates",
  "Annual verification renewal to keep your badge active",
];

const FAQ = [
  {
    q: "What counts as a verified win?",
    a: "Any documented successful dispute resolution qualifies. This includes a credit bureau correction letter, a debt collector ceasing collection, a billing adjustment confirmation, a landlord compliance letter, or a settlement agreement. We review the documentation to confirm the outcome.",
  },
  {
    q: "How long does verification take?",
    a: "Most verifications are completed within 48 hours. Our team reviews your submitted documentation and confirms the outcome. You will receive an email when your badge is activated.",
  },
  {
    q: "Does the badge renew automatically?",
    a: "The badge is an annual subscription at $10 per year. It renews automatically unless you cancel. Your verified status remains active as long as your subscription is current.",
  },
  {
    q: "Can I use the badge if I sell on the marketplace?",
    a: "Yes. Verified Reviewer badges are displayed on your marketplace seller profile and next to your template listings. Buyers consistently report that verified sellers earn more trust and more sales.",
  },
];

export default function VerifiedReviewerBadgePage() {
  return (
    <div className="bg-white dark:bg-slate-950">
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
            Verified Reviewer Badge
          </span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $10/year
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Prove You Won. Earn the Badge.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A verified badge that tells the community you have real dispute
            experience. Get priority support, early access to tools, and
            recognition for your wins.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get Verified
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12 dark:border dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Stand out in the community
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Anyone can claim they won a dispute. The badge proves it. Join the
            verified community and help others fight back with confidence.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Verify Your Win
              {ARROW}
            </Link>
          </div>
        </div>
      </section>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Verified Reviewer Badge",
            description:
              "Annual badge for successful dispute resolvers with priority support and trust profile.",
            brand: { "@type": "Brand", name: "AI Dispute Engine" },
            offers: {
              "@type": "Offer",
              price: "10.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/verified-reviewer-badge",
            },
          }),
        }}
      />

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
