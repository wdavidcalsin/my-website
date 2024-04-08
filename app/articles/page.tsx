import React from "react";
import Articles from "./components/articles";
import { getArticles } from "../services/articles";

interface PageProps {}

const Page: React.FC<PageProps> = async () => {
    const articles = await getArticles();

    return (
        <div>
            <section className="flex flex-col gap-16">
                <header className="max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I write about software design, and I also enjoy writing
                        about other topics that interest me.
                    </h2>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        All my reflections on programming, product design, and
                        much more, compiled in chronological order.
                    </p>
                </header>
                <Articles articles={articles} />
            </section>
        </div>
    );
};

export default Page;
