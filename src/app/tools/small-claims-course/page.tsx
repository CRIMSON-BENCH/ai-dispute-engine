import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Small Claims Court Course — Win Your Case Without a Lawyer",
  description:
    "On-demand video course covering filing procedures, evidence presentation, cross-examination techniques, and judgment collection. State-specific modules for all 50 states. $19.",
  openGraph: {
    title:
      "Small Claims Court Course — Win Your Case Without a Lawyer",
    description:
      "On-demand video course covering filing procedures, evidence presentation, cross-examination techniques, and judgment collection. State-specific modules for all 50 states. $19.",
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
    title: "Purchase the course",
    description:
      "Instant access to every module. No subscriptions, no recurring fees. Pay once and learn at your own pace with lifetime access.",
  },
  {
    step: "2",
    title: "Access state-specific modules",
    description:
      "Select your state and get targeted lessons on local filing procedures, court rules, fee schedules, and deadlines that apply to your case.",
  },
  {
    step: "3",
    title: "Prepare for court day",
    description:
      "Walk through mock hearings, practice cross-examination techniques, and build a winning evidence presentation before you ever set foot in a courtroom.",
  },
];

const INCLUDED = [
  "Filing procedures and forms walkthrough",
  "Evidence presentation strategy",
  "Cross-examination techniques",
  "Judgment collection methods",
  "State-specific court rules",
  "Courtroom etiquette and dos/don&apos;ts",
  "Settlement negotiation tactics",
  "Lifetime access to all updates",
];

const FAQ = [
  {
    q: "How long does the course take to complete?",
    a: "The full course is about 4 hours of video content broken into short, focused modules. Most people complete the modules relevant to their case in under 2 hours. You can skip directly to the topics you need and come back to the rest later. The course is self-paced, so there are no deadlines.",
  },
  {
    q: "Is the course really specific to my state?",
    a: "Yes. Every state has different small claims rules, filing limits, fee schedules, and procedures. After purchasing, you select your state and the course surfaces the modules and rules that apply to you. We cover all 50 states and update the content as laws change.",
  },
  {
    q: "What if I lose my case? Can I get a refund?",
    a: "We stand behind the quality of the course content. If you complete the course and feel it didn&apos;t prepare you, reach out within 30 days of purchase for a full refund. We can&apos;t guarantee a specific outcome in court, but we can guarantee you&apos;ll walk in better prepared than 90% of self-represented litigants.",
  },
  {
    q: "Do I still need a lawyer if I take this course?",
    a: "Small claims court was specifically designed for people to represent themselves without attorneys. In some states, lawyers aren&apos;t even allowed. This course teaches you the same preparation steps an attorney would take: organizing evidence, building your argument, anticipating the other side&apos;s defense, and presenting clearly to a judge.",
  },
];

export default function SmallClaimsCoursePage() {
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
            Small Claims Court Course
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-600 dark:text-teal-400">
            $19 — less than 10 minutes of a lawyer&apos;s time
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Walk Into Court Ready to Win.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            On-demand video course that teaches you exactly how to file, present
            evidence, cross-examine the other side, and collect your judgment.
            State-specific modules for all 50 states.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Course — $19
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
            Your case is worth preparing for.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Most people lose in small claims court because they show up
            unprepared. Disorganized evidence, rambling statements, and not
            knowing the rules. This course fixes all of that for less than the
            cost of a parking ticket.
          </p>
          <div className="mt-8">
            <Link
              href="/disputes"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-500"
            >
              Get the Course — $19
              {ARROW}
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Not ready for court yet?{" "}
            <Link href="/tools/small-claims-kit" className="underline hover:text-white">
              Start with the Small Claims Filing Kit
            </Link>
          </p>
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
            name: "Small Claims Court Course",
            description:
              "On-demand video course covering filing procedures, evidence presentation, cross-examination techniques, and judgment collection for small claims court. State-specific modules for all 50 states.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: {
              "@type": "Offer",
              price: "19.00",
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://aidisputeengine.com/tools/small-claims-course",
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
