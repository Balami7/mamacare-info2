import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "../articles";

const BRAND_GREEN = "#1A7A4A";

export default async function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = ARTICLES.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
                href="/blog"
                className="text-sm font-semibold hover:opacity-80"
                style={{ color: BRAND_GREEN }}
            >
                ← Back to all articles
            </Link>

            <div className="mt-8">
                <span
                    className="text-xs font-bold tracking-wide"
                    style={{ color: BRAND_GREEN }}
                >
                    {article.category}
                </span>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                    {article.title}
                </h1>
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <p className="mt-8 text-base leading-8 text-gray-700">
                {article.content}
            </p>
        </article>
    );
}
