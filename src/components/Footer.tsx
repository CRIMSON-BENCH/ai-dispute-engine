import Link from "next/link";
import { Scale } from "lucide-react";

const productLinks = [
  { href: "/disputes", label: "All Disputes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/local", label: "Local Pages" },
  { href: "/business", label: "Business Plan" },
  { href: "/lawyer-referral", label: "Find a Lawyer" },
  { href: "/compare", label: "Compare Services" },
] as const;

const toolLinks = [
  { href: "/tools/settlement-calculator", label: "Settlement Calculator" },
  { href: "/tools/legal-checkup", label: "Legal Checkup" },
  { href: "/tools/full-fight", label: "Full Fight Bundle" },
  { href: "/tools/follow-up-letter", label: "Follow-Up Letter" },
  { href: "/tools/response-letter", label: "Response Letter" },
  { href: "/tools/cease-desist", label: "Cease & Desist" },
  { href: "/tools/escalation", label: "Escalation Pack" },
  { href: "/tools/court-filing", label: "Court Filing Kit" },
  { href: "/tools/attorney-review", label: "Attorney Review" },
  { href: "/tools/small-claims-kit", label: "Small Claims Kit" },
  { href: "/tools/notarized-letter", label: "Notarized Letter" },
  { href: "/tools/process-serving", label: "Process Serving" },
] as const;

const resourceLinks = [
  { href: "/guides", label: "State Guides" },
  { href: "/guides/how-to-sue", label: "How to Sue a Company" },
  { href: "/blog", label: "Blog" },
  { href: "/templates", label: "Letter Templates" },
  { href: "/glossary", label: "Legal Glossary" },
] as const;

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Scale className="h-5 w-5 text-teal-600" />
              <span className="text-base font-bold text-slate-900 dark:text-white">
                AI Dispute Engine
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              AI-powered demand letters starting at $2. 38 dispute types, all 50 states, 60 seconds. Not a law firm.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
              <span>$2/letter</span>
              <span>•</span>
              <span>93% cheaper</span>
              <span>•</span>
              <span>30,000+ pages</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Product
            </h3>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Tools
            </h3>
            <ul className="mt-3 space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
            <strong>Disclaimer:</strong> AI Dispute Engine is not a law firm and
            does not provide legal advice. The documents generated by this
            service are for informational and self-help purposes only and do not
            constitute legal advice. No attorney-client relationship is created
            by using this service. For legal advice specific to your situation,
            consult a licensed attorney in your jurisdiction. AI Dispute Engine
            is a document preparation service as defined under applicable state
            and federal law.
          </p>
          <p className="mt-4 text-xs text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} AI Dispute Engine. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
