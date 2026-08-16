"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/disputes", label: "Disputes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#how", label: "How It Works" },
] as const;

const toolLinks = [
  { href: "/tools/settlement-calculator", label: "Settlement Calculator", desc: "Free — estimate your case value" },
  { href: "/tools/response-letter", label: "Response Letter", desc: "$2 — draft a follow-up reply" },
  { href: "/tools/escalation", label: "Escalation Pack", desc: "$5 — FTC, CFPB, & AG complaints" },
  { href: "/tools/evidence-toolkit", label: "Evidence Toolkit", desc: "$3 — organize your case" },
  { href: "/tools/small-claims-kit", label: "Small Claims Kit", desc: "$15 — file without a lawyer" },
  { href: "/tools/notarized-letter", label: "Notarized Letter", desc: "$15 — add legal weight" },
  { href: "/tools/process-serving", label: "Process Serving", desc: "$50 — in-person delivery" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

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
        <ul className="hidden items-center gap-8 md:flex">
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
          <li className="relative">
            <button
              type="button"
              onClick={() => setToolsOpen(!toolsOpen)}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
            >
              Tools
              <svg className={`h-3.5 w-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                {toolLinks.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="block text-sm font-medium text-slate-900 dark:text-white">{tool.label}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{tool.desc}</span>
                  </Link>
                ))}
                <div className="mt-1 border-t border-slate-100 pt-1 dark:border-slate-800">
                  <Link href="/business" className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="block text-sm font-medium text-teal-600 dark:text-teal-400">Business Plan</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">$49/mo — unlimited for your team</span>
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 md:flex">
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
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
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
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-900">
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
            <p className="mt-4 border-t border-slate-200 px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-700">Tools</p>
            {toolLinks.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {tool.label}
              </Link>
            ))}
            <Link
              href="/business"
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-teal-600 hover:bg-slate-100 dark:text-teal-400 dark:hover:bg-slate-800"
            >
              Business Plan
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
