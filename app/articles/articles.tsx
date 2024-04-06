import { cn } from "@/lib/utils";
import React from "react";
import ArticleCard from "./article-card";

interface ArticlesProps {
    articles: {
        slug: string;
        formattedDate: string;
        meta: {
            [key: string]: any;
        };
    }[];
    variant?: "default" | "compact";
}

const Articles: React.FC<ArticlesProps> = ({
    variant = "default",
    articles,
}) => {
    return (
        <ul
            className={cn(
                "flex flex-col gap-16  border-zinc-100 dark:border-zinc-800 mt-6",
                variant === "default" &&
                    "md:border-l border-zinc-100 dark:border-zinc-800"
            )}
        >
            {articles.map((article) => (
                <ArticleCard
                    key={article.slug}
                    article={article}
                    variant={variant}
                />
            ))}
        </ul>
    );
};

export default Articles;
