import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find a Lawyer Near You — AI Dispute Engine",
  description:
    "When your case goes beyond a demand letter, connect with a verified attorney in your area. Free initial consultations available.",
  openGraph: {
    title: "Find a Lawyer Near You — AI Dispute Engine",
    description:
      "Some fights need a lawyer. We match you with verified attorneys who handle your exact case type.",
  },
};

const needsLawyer = [
  {
    text: "Your dispute involves more than $25,000",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "You've been physically injured",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    text: "You're facing criminal charges",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    text: "The other side has a lawyer",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    text: "You need to file a lawsuit (not just small claims)",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    text: "Your employer is retaliating against you",
    icon: (
      <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const practiceAreas = [
  {
    name: "Personal Injury",
    description: "Car accidents, slip-and-fall, medical malpractice, product liability.",
  },
  {
    name: "Employment Law",
    description: "Wrongful termination, discrimination, wage theft, retaliation.",
  },
  {
    name: "Tenant Rights",
    description: "Illegal eviction, security deposit theft, habitability issues.",
  },
  {
    name: "Consumer Protection",
    description: "Fraud, deceptive practices, warranty disputes, debt collection abuse.",
  },
  {
    name: "Insurance Disputes",
    description: "Denied claims, bad faith, underpayment, delayed processing.",
  },
  {
    name: "Family Law",
    description: "Custody disputes, divorce, child support, domestic violence protection.",
  },
];

const steps = [
  {
    step: "1",
    title: "Tell us your dispute type and location",
    description:
      "Select your case category and enter your city or zip code so we can find attorneys licensed in your jurisdiction.",
  },
  {
    step: "2",
    title: "We match you with attorneys who handle that exact case type",
    description:
      "Our network includes thousands of verified attorneys across all 50 states, filtered by practice area and location.",
  },
  {
    step: "3",
    title: "Free initial consultation",
    description:
      "Most attorneys in our network offer a free initial consultation so you can discuss your case before committing.",
  },
];

const faqs = [
  {
    q: "Does AI Dispute Engine provide legal advice?",
    a: "No. We are a self-help document tool and referral service, not a law firm. Our referral service connects you with independent attorneys who can provide legal advice directly.",
  },
  {
    q: "How much does the referral cost me?",
    a: "Nothing. The referral is free to you. AI Dispute Engine earns a referral fee from the attorney at no additional cost to you. This never affects the legal fees your attorney quotes.",
  },
  {
    q: "How are attorneys selected for the network?",
    a: "We only refer to attorneys with 4.5+ ratings, 5+ years of experience, active bar membership, and malpractice insurance. We verify credentials annually.",
  },
  {
    q: "What if I already sent a demand letter through AI Dispute Engine?",
    a: "Great -- share it with your attorney. A well-documented demand letter strengthens your case and shows you attempted resolution before filing suit. Your attorney can use it as part of your case file.",
  },
];

export default function LawyerReferralPage() {
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
          <li className="text-slate-900 dark:text-slate-100">Lawyer Referral</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Hero */}
        <div className="text-center">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
            Attorney Referral Network
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Some Fights Need a Lawyer. We&apos;ll Help You Find One.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            When your case goes beyond a demand letter, connect with a verified
            attorney in your area.
          </p>
        </div>

        {/* When You Need a Lawyer */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            When you need a lawyer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
            A demand letter handles most disputes. But some situations call for
            professional representation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {needsLawyer.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="shrink-0">{item.icon}</div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            How our referral works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
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

        {/* Practice Areas */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            Practice areas we cover
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="text-lg font-semibold">{area.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-bold">Verified attorneys only</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            We only refer to attorneys with 4.5+ ratings and 5+ years of
            experience. Every attorney in our network carries active malpractice
            insurance and is in good standing with their state bar.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">4.5+</p>
              <p className="mt-1 text-sm text-slate-500">Minimum rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">5+ yrs</p>
              <p className="mt-1 text-sm text-slate-500">Minimum experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">50</p>
              <p className="mt-1 text-sm text-slate-500">States covered</p>
            </div>
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
            Ready to talk to an attorney?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Tell us about your case and we&apos;ll match you with a verified
            attorney in your area. Most offer a free initial consultation.
          </p>
          <Link
            href="/lawyer-referral/find"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Find a Lawyer Near You
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            AI Dispute Engine earns a referral fee at no additional cost to you.
            We are not a law firm and do not provide legal advice. Attorney
            referrals are based on practice area and location. The attorneys in
            our network are independent practitioners and are not employees or
            agents of AI Dispute Engine. Results vary by case.
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Dispute Engine Lawyer Referral",
            description:
              "Free attorney referral service connecting consumers with verified lawyers across all 50 states.",
            provider: {
              "@type": "Organization",
              name: "AI Dispute Engine",
              url: "https://aidisputeengine.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            serviceType: "Lawyer Referral",
          }),
        }}
      />
    </div>
  );
}
