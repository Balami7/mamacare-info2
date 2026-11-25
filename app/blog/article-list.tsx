"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Article } from "./articles";

const BRAND_GREEN = "#1A7A4A";
const PREVIEW_ARTICLE_COUNT = 3;

export default function ArticleList({ articles }: { articles: Article[] }) {
    const [showAll, setShowAll] = useState(false);
    const hasMoreArticles = articles.length > PREVIEW_ARTICLE_COUNT;
    const visibleArticles = showAll
        ? articles
        : articles.slice(0, PREVIEW_ARTICLE_COUNT);

    return (
        <>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleArticles.map((article) => (
                    <article key={article.slug} className="flex flex-col">
                        <Link
                            href={`/blog/${article.slug}`}
                            aria-label={`Read ${article.title}`}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100"
                        >
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                        <span
                            className="mt-4 text-xs font-bold tracking-wide"
                            style={{ color: BRAND_GREEN }}
                        >
                            {article.category}
                        </span>
                        <h2 className="mt-1 text-sm font-bold text-gray-900">
                            <Link
                                href={`/blog/${article.slug}`}
                                className="transition-colors hover:text-[#1A7A4A]"
                            >
                                {article.title}
                            </Link>
                        </h2>
                        <Link
                            href={`/blog/${article.slug}`}
                            className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
                            style={{ color: BRAND_GREEN }}
                        >
                            Read More →
                        </Link>
                    </article>
                ))}
            </div>

            {hasMoreArticles && (
                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setShowAll((current) => !current)}
                        aria-expanded={showAll}
                        className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: BRAND_GREEN }}
                    >
                        {showAll ? "Show fewer articles" : "View all articles"}
                    </button>
                </div>
            )}
        </>
    );
}
