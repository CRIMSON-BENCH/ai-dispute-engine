import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Dispute Engine for Business — Unlimited Letters for Your Team",
  description:
    "Property managers, HR teams, and small businesses send dozens of letters a month. Stop paying per letter. $49/mo for unlimited letters for up to 5 team members.",
  openGraph: {
    title: "AI Dispute Engine for Business — Unlimited Letters for Your Team",
    description:
      "$49/mo for unlimited demand letters, dispute responses, and compliance notices for your whole team.",
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

const useCases = [
  {
    title: "Property Management",
    description:
      "Security deposit responses, lease violations, maintenance notices, and tenant disputes.",
    stat: "The average property manager handles 15-20 disputes per month.",
    icon: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: "HR & Employment",
    description:
      "Termination notices, wage dispute responses, ADA accommodations, and EEOC responses.",
    stat: "Stay compliant without outside counsel.",
    icon: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Small Business",
    description:
      "Vendor disputes, customer refund responses, contractor issues, and insurance claims.",
    stat: "Handle legal correspondence without a retainer.",
    icon: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const included = [
  "Unlimited letter generation for up to 5 team members",
  "All 38 dispute types",
  "Priority AI generation (faster queue)",
  "Bulk download (PDF + DOCX)",
  "Dispute tracking dashboard",
  "Custom letterhead upload",
  "Dedicated support",
];

const faqs = [
  {
    q: "How many team members can use the Business plan?",
    a: "Your subscription covers up to 5 team members. Each person gets their own login with full access to all dispute types and letter generation. Need more seats? Contact us for custom pricing.",
  },
  {
    q: "How does billing work?",
    a: "You can pay monthly at $49/mo or annually at $399/yr (saving $189). Both options include the same features. Annual billing is charged as a single payment.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel in one click from your account settings. Your access continues through the end of your current billing period. No cancellation fees, no questions asked.",
  },
  {
    q: "Do I still pay per letter on the Business plan?",
    a: "No. The Business plan includes unlimited letter generation. Download as many PDFs and DOCX files as you need. Certified mailing is an optional add-on at $6 per letter.",
  },
  {
    q: "Is there a free trial?",
    a: "You can generate your first letter completely free without an account. If your team needs volume, start the Business plan and cancel within 7 days for a full refund if it's not the right fit.",
  },
];

export default function BusinessPage() {
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
              Pricing
            </Link>
          </li>
          <li>/</li>
          <li className="text-slate-900 dark:text-slate-100">Business</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
            Business Plan — $49/mo
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            One Subscription. Unlimited Letters. Your Whole Team.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Property managers, HR teams, and small businesses send dozens of
            letters a month. Stop paying per letter.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4">{uc.icon}</div>
              <h2 className="text-xl font-bold">{uc.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {uc.description}
              </p>
              <p className="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">
                {uc.stat}
              </p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            Everything in the Business Plan
          </h2>
          <div className="mx-auto mt-8 max-w-xl">
            <ul className="space-y-4">
              {included.map((item) => (
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

        {/* Pricing Section */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">
            Simple, Predictable Pricing
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
            {/* Monthly */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold">Monthly</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                No commitment. Cancel anytime.
              </p>
              <div className="mt-6">
                <span className="text-5xl font-bold tracking-tight">$49</span>
                <span className="ml-2 text-sm text-slate-500">/month</span>
              </div>
              <Link
                href="/signup?plan=business-monthly"
                className="mt-8 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Start Monthly
              </Link>
            </div>

            {/* Annual */}
            <div className="relative rounded-2xl border-2 border-teal-600 bg-white p-8 dark:bg-slate-900">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                Save $189
              </span>
              <h3 className="text-lg font-semibold">Annual</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Best value. Two months free.
              </p>
              <div className="mt-6">
                <span className="text-5xl font-bold tracking-tight">$399</span>
                <span className="ml-2 text-sm text-slate-500">/year</span>
              </div>
              <Link
                href="/signup?plan=business-annual"
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Start Annual Plan
              </Link>
              <p className="mt-4 text-center text-xs text-slate-500">
                That&apos;s $33.25/mo billed annually
              </p>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-center text-xl font-bold">
            The Math Is Simple
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
            At $2/letter, you break even after 25 letters. Most businesses send
            30+ per month. That means you start saving from month one.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Option
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    30 letters/mo
                  </th>
                  <th className="pb-3 text-left font-medium text-slate-500">
                    Annual cost
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-3 font-semibold text-teal-600 dark:text-teal-400">
                    Business Plan
                  </td>
                  <td className="py-3 font-bold">$49/mo</td>
                  <td className="py-3 font-bold">$399/yr</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Pay-per-letter ($2 each)
                  </td>
                  <td className="py-3">$60/mo</td>
                  <td className="py-3">$720/yr</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Attorney ($300/hr)
                  </td>
                  <td className="py-3">$9,000/mo</td>
                  <td className="py-3">$108,000/yr</td>
                </tr>
                <tr>
                  <td className="py-3 text-slate-600 dark:text-slate-400">
                    Legal retainer
                  </td>
                  <td className="py-3">$5,000/mo</td>
                  <td className="py-3">$60,000/yr</td>
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
            Ready to streamline your team&apos;s legal correspondence?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 dark:text-slate-400">
            Join property managers, HR departments, and small businesses already
            saving thousands with AI Dispute Engine.
          </p>
          <Link
            href="/signup?plan=business-monthly"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Start Your Business Plan — $49/mo
          </Link>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AI Dispute Engine Business Plan",
            description:
              "Unlimited AI-generated demand letters for teams of up to 5. All 38 dispute types, priority generation, bulk download, and dispute tracking.",
            brand: {
              "@type": "Brand",
              name: "AI Dispute Engine",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Monthly",
                price: "49.00",
                priceCurrency: "USD",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
                url: "https://aidisputeengine.com/business",
              },
              {
                "@type": "Offer",
                name: "Annual",
                price: "399.00",
                priceCurrency: "USD",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
                url: "https://aidisputeengine.com/business",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
