import React from "react";
import { getArticles } from "../services/articles";
import ArticleCard from "./article-card";
import { cn } from "@/lib/utils";

interface ArticlesProps {
    variant?: "default" | "compact";
}

const Articles: React.FC<ArticlesProps> = ({ variant = "default" }) => {
    const articles = getArticles();

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
