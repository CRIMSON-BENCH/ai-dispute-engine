import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  result: string;
  disputeType: string;
}

export function TestimonialCard({
  name,
  location,
  quote,
  result,
  disputeType,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      {/* Star rating */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {location}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
          {disputeType}
        </span>
      </div>

      {/* Result badge */}
      <div className="mt-3">
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-900/20 dark:text-green-400 dark:ring-green-500/30">
          {result}
        </span>
      </div>
    </div>
  );
}
