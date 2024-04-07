import React from "react";
import Articles from "./components/articles";

interface PageProps {}

async function getArticles() {
    const response = await fetch(`${process.env.BASE_API_URL}/api/articles`, {
        method: "GET",
    });
    console.log(__dirname);
    return response.json();
}

const Page: React.FC<PageProps> = async () => {
    const { articles } = await getArticles();

    return (
        <div>
            <section className="flex flex-col gap-16">
                <header className="max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Writing on software design, company building, and the
                        aerospace industry.
                    </h2>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        All of my long-form thoughts on programming, leadership,
                        product design, and more, collected in chronological
                        order.
                    </p>
                </header>
                <Articles articles={articles} />
            </section>
        </div>
    );
};

export default Page;
