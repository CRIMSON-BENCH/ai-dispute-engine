"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/disputes", label: "Disputes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how", label: "How It Works" },
] as const;

const toolCategories = [
  {
    label: "Free Tools",
    items: [
      { href: "/tools/settlement-calculator", label: "Settlement Calculator", desc: "Estimate your case value" },
      { href: "/tools/legal-checkup", label: "Legal Checkup", desc: "Check your rights" },
      { href: "/tools/letter-tracker", label: "Letter Tracker", desc: "Track your dispute" },
      { href: "/tools/statute-lookup", label: "Statute Lookup", desc: "$1 — filing deadlines" },
    ],
  },
  {
    label: "Letters & Documents",
    items: [
      { href: "/tools/follow-up-letter", label: "Follow-Up Letter", desc: "$2" },
      { href: "/tools/response-letter", label: "Response Letter", desc: "$2" },
      { href: "/tools/cease-desist", label: "Cease & Desist", desc: "$2" },
      { href: "/tools/complaint-letter", label: "Complaint Letter", desc: "$2" },
      { href: "/tools/debt-validation", label: "Debt Validation", desc: "$2" },
      { href: "/tools/goodwill-letter", label: "Goodwill Letter", desc: "$2" },
      { href: "/tools/hardship-letter", label: "Hardship Letter", desc: "$2" },
      { href: "/tools/warranty-claim-letter", label: "Warranty Claim", desc: "$2" },
      { href: "/tools/hoa-violation-response", label: "HOA Response", desc: "$2" },
      { href: "/tools/subscription-cancellation", label: "Cancel Subscription", desc: "$2" },
      { href: "/tools/rent-increase-dispute", label: "Rent Increase Dispute", desc: "$2" },
      { href: "/tools/foia-request", label: "FOIA Request", desc: "$2" },
      { href: "/tools/final-notice", label: "Final Notice", desc: "$3" },
      { href: "/tools/wage-dispute-letter", label: "Wage Dispute", desc: "$3" },
      { href: "/tools/insurance-denial-appeal", label: "Insurance Appeal", desc: "$3" },
      { href: "/tools/medical-bill-dispute", label: "Medical Bill Dispute", desc: "$3" },
      { href: "/tools/data-breach-demand", label: "Data Breach Demand", desc: "$3" },
      { href: "/tools/chargeback-evidence", label: "Chargeback Evidence", desc: "$3" },
      { href: "/tools/phone-script", label: "Phone Script", desc: "$3" },
      { href: "/tools/lemon-law-demand", label: "Lemon Law Demand", desc: "$5" },
      { href: "/tools/settlement-agreement", label: "Settlement Agreement", desc: "$5" },
      { href: "/tools/affidavit-generator", label: "Affidavit Generator", desc: "$5" },
      { href: "/tools/letter-translation", label: "Letter Translation", desc: "$5" },
      { href: "/tools/witness-statement", label: "Witness Statement", desc: "$5" },
    ],
  },
  {
    label: "Bundles & Kits",
    items: [
      { href: "/tools/escalation", label: "Escalation Pack", desc: "$5" },
      { href: "/tools/evidence-toolkit", label: "Evidence Toolkit", desc: "$3" },
      { href: "/tools/bill-negotiation", label: "Bill Negotiation Pack", desc: "$10" },
      { href: "/tools/credit-repair-bundle", label: "Credit Repair Bundle", desc: "$15" },
      { href: "/tools/small-claims-kit", label: "Small Claims Kit", desc: "$15" },
      { href: "/tools/court-prep", label: "Court Prep Kit", desc: "$15" },
      { href: "/tools/full-fight", label: "Full Fight Bundle", desc: "$25" },
      { href: "/tools/auto-campaign", label: "Pressure Campaign", desc: "$35" },
      { href: "/tools/court-filing", label: "Court Filing Kit", desc: "$50" },
    ],
  },
  {
    label: "Premium Services",
    items: [
      { href: "/tools/dispute-strength-score", label: "Case Strength Score", desc: "$3" },
      { href: "/tools/company-dossier", label: "Company Dossier", desc: "$5" },
      { href: "/tools/landlord-report", label: "Landlord Report", desc: "$5" },
      { href: "/tools/know-your-rights-guide", label: "Know Your Rights Guide", desc: "$5" },
      { href: "/tools/rush-processing", label: "Rush Processing", desc: "$10 add-on" },
      { href: "/tools/negotiation-coach", label: "AI Negotiation Coach", desc: "$10" },
      { href: "/tools/skip-tracing", label: "Skip Tracing", desc: "$10" },
      { href: "/tools/notarized-letter", label: "Notarized Letter", desc: "$15" },
      { href: "/tools/lease-audit", label: "Lease Audit", desc: "$25" },
      { href: "/tools/legal-research", label: "Legal Research", desc: "$25" },
      { href: "/tools/contract-review", label: "Contract Review", desc: "$25" },
      { href: "/tools/process-serving", label: "Process Serving", desc: "$50" },
      { href: "/tools/attorney-review", label: "Attorney Review", desc: "$65" },
      { href: "/tools/ai-mediation", label: "AI Mediation", desc: "$150" },
      { href: "/tools/dispute-concierge", label: "Dispute Concierge", desc: "$199" },
    ],
  },
  {
    label: "Subscriptions",
    items: [
      { href: "/tools/dispute-vault", label: "Dispute Vault", desc: "$3/mo" },
      { href: "/tools/dispute-tracker-extension", label: "Dispute Tracker", desc: "$3/mo" },
      { href: "/tools/legal-shield", label: "Legal Shield", desc: "$5/mo" },
      { href: "/tools/ai-dispute-chatbot", label: "AI Chatbot", desc: "$5/mo" },
      { href: "/tools/evidence-organizer", label: "Evidence Organizer", desc: "$5/mo" },
      { href: "/tools/family-plan", label: "Family Plan", desc: "$19/mo" },
      { href: "/tools/landlord-plan", label: "Landlord Plan", desc: "$29/mo" },
      { href: "/tools/annual-consumer-audit", label: "Consumer Audit", desc: "$25/yr" },
    ],
  },
];

const toolLinks = toolCategories.flatMap((c) => c.items);

const resourceLinks = [
  { href: "/guides", label: "State Guides", desc: "Small claims in all 50 states" },
  { href: "/guides/how-to-sue", label: "How to Sue a Company", desc: "100+ company guides" },
  { href: "/blog", label: "Blog", desc: "Legal tips and guides" },
  { href: "/templates", label: "Letter Templates", desc: "Free template previews" },
  { href: "/glossary", label: "Legal Glossary", desc: "100+ terms explained" },
  { href: "/compare", label: "Compare Services", desc: "See how we stack up" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-teal-600" />
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            AI Dispute Engine
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Tools dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => { setToolsOpen(!toolsOpen); setResourcesOpen(false); }}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
            >
              Tools
              <svg className={`h-3.5 w-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <div className="max-h-96 overflow-y-auto">
                  {toolCategories.map((cat) => (
                    <div key={cat.label}>
                      <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{cat.label}</p>
                      {cat.items.slice(0, 6).map((tool) => (
                        <Link key={tool.href} href={tool.href} className="block rounded-lg px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{tool.label}</span>
                          <span className="ml-2 text-xs text-slate-400">{tool.desc}</span>
                        </Link>
                      ))}
                      {cat.items.length > 6 && (
                        <p className="px-3 py-1 text-xs text-teal-600 dark:text-teal-400">+ {cat.items.length - 6} more</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-1 border-t border-slate-100 pt-1 dark:border-slate-800">
                  <Link href="/pricing" className="block rounded-lg px-3 py-2 text-center text-sm font-semibold text-teal-600 hover:bg-slate-50 dark:text-teal-400 dark:hover:bg-slate-800">
                    View all tools &amp; pricing &rarr;
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* Resources dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => { setResourcesOpen(!resourcesOpen); setToolsOpen(false); }}
              onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
            >
              Resources
              <svg className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                {resourceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="block text-sm font-medium text-slate-900 dark:text-white">{link.label}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{link.desc}</span>
                  </Link>
                ))}
                <div className="mt-1 border-t border-slate-100 pt-1 dark:border-slate-800">
                  <Link href="/local" className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="block text-sm font-medium text-slate-900 dark:text-white">Local Pages</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">27,000+ city-specific dispute pages</span>
                  </Link>
                  <Link href="/lawyer-referral" className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="block text-sm font-medium text-slate-900 dark:text-white">Find a Lawyer</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">When you need professional help</span>
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {link.label}
              </Link>
            ))}

            {toolCategories.map((cat) => (
              <div key={cat.label}>
                <p className="mt-4 border-t border-slate-200 px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-700">{cat.label}</p>
                {cat.items.slice(0, 5).map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-400"
                  >
                    {tool.label} <span className="text-sm text-slate-400">{tool.desc}</span>
                  </Link>
                ))}
              </div>
            ))}

            <p className="mt-4 border-t border-slate-200 px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-700">Resources</p>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/business"
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-slate-100 dark:text-teal-400 dark:hover:bg-slate-800"
            >
              Business Plan — $49/mo
            </Link>

            <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-700">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-teal-600 px-4 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-teal-700"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
