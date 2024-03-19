import React from "react";
import { getArticles } from "../services/articles";
import ArticleCard from "./article-card";

interface ArticlesProps {}

const Articles: React.FC = () => {
    const articles = getArticles();

    return (
        <ul className="flex flex-col gap-16">
            {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
            ))}
        </ul>
    );
};

export default Articles;
