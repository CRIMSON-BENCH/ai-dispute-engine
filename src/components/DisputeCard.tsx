import Link from "next/link";

interface DisputeCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export function DisputeCard({
  slug,
  title,
  description,
  icon,
  category,
}: DisputeCardProps) {
  return (
    <Link
      href={`/disputes/${slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-teal-700"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-slate-800">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Category badge */}
      <div className="mt-4">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {category}
        </span>
      </div>
    </Link>
  );
}
