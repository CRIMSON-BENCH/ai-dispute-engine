import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_ARTICLES,
  getArticleBySlug,
  getAllArticleSlugs,
  getArticlesByCategory,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | AI Dispute Engine`,
    description: article.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  /* Find related articles (same category, excluding this one) */
  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  /* Table of contents from section headings */
  const toc = article.sections.map((s, i) => ({
    id: `section-${i}`,
    heading: s.heading,
  }));

  /* JSON-LD Article schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "AI Dispute Engine",
      url: "https://aidisputeengine.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aidisputeengine.com/blog/${article.slug}`,
    },
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white">
            {article.title}
          </span>
        </nav>

        {/* Meta bar */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {article.category}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {article.publishedDate}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            &middot; {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {article.title}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
          {/* Main content */}
          <div>
            {/* Table of contents (mobile-visible box) */}
            <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5 lg:hidden dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                In this article
              </h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            {article.sections.map((section, i) => (
              <div key={i}>
                <section id={`section-${i}`} className="mb-8">
                  <h2 className="mb-4 text-xl font-bold">{section.heading}</h2>
                  <div
                    className="prose prose-slate max-w-none dark:prose-invert prose-a:text-teal-600 dark:prose-a:text-teal-400"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>

                {/* Mid-article CTA after the second section */}
                {i === 1 && (
                  <div className="my-10 rounded-xl bg-teal-600 p-6 text-center text-white sm:p-8">
                    <h3 className="text-lg font-bold sm:text-xl">
                      Generate Your Demand Letter
                    </h3>
                    <p className="mt-2 text-sm text-teal-100">
                      Our AI writes a professional demand letter that cites the
                      right statutes for your state. Ready in 60 seconds.
                    </p>
                    <Link
                      href="/disputes"
                      className="mt-4 inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                    >
                      Get started free
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar — table of contents (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                In this article
              </h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* CTA at end */}
        {article.cta && (
          <div className="mt-12 text-center">
            <Link
              href={article.cta.href}
              className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              {article.cta.text}
            </Link>
          </div>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-teal-800"
                >
                  <span className="mb-2 inline-block w-fit rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium capitalize text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {a.category}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {a.metaDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span>{a.publishedDate}</span>
                    <span>&middot;</span>
                    <span>{a.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
          >
            &larr; Back to blog
          </Link>
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
