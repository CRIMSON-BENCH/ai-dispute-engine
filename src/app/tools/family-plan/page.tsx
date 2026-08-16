import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Plan | AI Dispute Engine",
  description:
    "Dispute tools for the whole family for $19/mo. Up to 5 members share unlimited dispute letters, individual profiles, and a shared document vault.",
  openGraph: {
    title: "Family Plan | AI Dispute Engine",
    description:
      "Dispute tools for the whole family for $19/mo. Up to 5 members share unlimited dispute letters, individual profiles, and a shared document vault.",
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
    title: "Create Your Family Account",
    description:
      "Sign up for the Family Plan and set up your primary account. You become the account owner and manage billing, invitations, and settings from one dashboard.",
  },
  {
    step: "2",
    title: "Invite Up to 5 Members",
    description:
      "Send invitations to up to 5 family members by email. Each person creates their own profile with a separate dispute history, documents, and letters.",
  },
  {
    step: "3",
    title: "Everyone Gets Unlimited Access",
    description:
      "Every member generates unlimited dispute letters, accesses the shared document vault, and receives SMS tracking alerts — all under one $19/month subscription.",
  },
];

const INCLUDED = [
  "Unlimited dispute letters for up to 5 family members",
  "Individual profiles with separate dispute history per member",
  "Shared document vault for family-wide file storage",
  "SMS and email tracking alerts for every dispute",
  "Priority support for all members on the plan",
  "Family dashboard showing all active cases at a glance",
];

const FAQ = [
  {
    q: "Who counts as a family member?",
    a: "A family member is anyone living in your household — spouses, partners, adult children, parents, siblings, or other relatives sharing your address. Each member must be at least 18 years old to have their own profile.",
  },
  {
    q: "Does each member have a separate account?",
    a: "Yes. Every family member gets their own individual profile with separate dispute history, documents, and letter generation. One member filing a dispute does not affect another member. Only billing is shared under the primary account holder.",
  },
  {
    q: "Can I add more than 5 members?",
    a: "The Family Plan supports up to 5 members. If your household needs more than 5 seats, contact our support team to set up a custom plan at a per-seat rate.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or cancellation fees. Cancel anytime and all members keep access through the end of the current billing period. Document vaults remain accessible for 30 days after cancellation.",
  },
];

export default function FamilyPlanPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link href="/disputes" className="hover:text-teal-600 dark:hover:text-teal-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">Family Plan</span>
        </nav>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">$19/month</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Dispute Tools for the Whole Family</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            One plan, up to 5 members, unlimited letters. Everyone in your household gets their own profile, full access to every dispute tool, and a shared document vault — all for $19/month.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start the Family Plan — $19/mo{ARROW}
            </Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">One Plan. Five Members. Unlimited Letters.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Disputes affect the whole household. With the Family Plan, everyone is covered — unlimited letters, individual profiles, and a shared vault for $19/month.
          </p>
          <div className="mt-8">
            <Link href="/disputes" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500">
              Start the Family Plan — $19/mo{ARROW}
            </Link>
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
        name: "Family Plan", description: "Dispute tools for the whole family. Up to 5 members share unlimited dispute letters, individual profiles, and a shared document vault.",
        brand: { "@type": "Brand", name: "AI Dispute Engine" },
        offers: { "@type": "Offer", price: "19.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: "https://aidisputeengine.com/tools/family-plan" },
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
