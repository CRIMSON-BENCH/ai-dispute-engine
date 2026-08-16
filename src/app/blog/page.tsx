import type { Metadata } from "next";
import Link from "next/link";
import {
  BLOG_ARTICLES,
  getAllBlogCategories,
  getArticlesByCategory,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Legal Guides & Tips",
  description:
    "Legal guides, tips, and insights to help you fight back. Learn about demand letters, small claims court, consumer rights, and more.",
};

export default function BlogPage() {
  const categories = getAllBlogCategories();

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Legal guides, tips, and insights to help you fight back
        </p>

        {/* Category nav */}
        <nav className="mt-8 flex flex-wrap gap-2">
          <a
            href="#all"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white"
          >
            All
          </a>
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              {cat}
            </a>
          ))}
        </nav>

        {/* Articles grouped by category */}
        <div id="all" className="mt-12 space-y-14">
          {categories.map((category) => {
            const articles = getArticlesByCategory(category);
            if (articles.length === 0) return null;
            return (
              <section
                key={category}
                id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {category}
                </h2>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group flex flex-col rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800"
                    >
                      <span className="mb-2 inline-block w-fit rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {article.metaDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                        <span>{article.publishedDate}</span>
                        <span>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-xs leading-relaxed text-slate-500">
            Disclaimer: AI Dispute Engine is not a law firm and does not provide
            legal advice. This information is for educational purposes only. For
            legal advice specific to your situation, consult a licensed attorney
            in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
