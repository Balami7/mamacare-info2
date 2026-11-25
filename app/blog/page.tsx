import StaggerText from "@/components/stagger-text";
import ArticleList from "./article-list";
import { ARTICLES } from "./articles";

export default function BlogPage() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
                <StaggerText
                    as="h1"
                    text="Tips, Guides & Real Stories"
                    className="text-3xl font-bold text-gray-900 sm:text-4xl"
                />
                <p className="mt-3 text-sm text-gray-600">
                    Helpful content to support you on your pregnancy journey.
                </p>
            </div>

            <ArticleList articles={ARTICLES} />
        </section>
    );
}
