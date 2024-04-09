import Link from "next/link";
import React from "react";
import ChevronRightIcon from "../../components/icons/chevron-right-icon";
import { cn } from "@/lib/utils";

interface IArticle {
    slug: string;
    formattedDate: string;
    meta: {
        [key: string]: any;
    };
}

interface ArticleCardProps {
    article: IArticle;
    variant?: "default" | "compact";
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant }) => {
    return (
        <li key={article.slug}>
            <div className="md:flex">
                {variant === "default" && (
                    <div className="hidden md:block w-1/4 pt-2 z-10 text-sm font-normal text-zinc-400 dark:text-zinc-500 pl-6 ">
                        {article.formattedDate}
                    </div>
                )}
                <Link href={`/articles/${article.slug}`} className="w-3/4">
                    <div className="group relative flex flex-col gap-4 items-start ">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                        <div
                            className={cn(
                                " z-10 text-sm font-normal text-zinc-400 dar:text-zinc-500 border-l-2 border-zinc-300   dark:border-zinc-500 pl-4 ",
                                variant === "default" && "block md:hidden"
                            )}
                        >
                            {article.formattedDate}
                        </div>
                        <div className="relative z-10 flex flex-col gap-3">
                            <h2 className="font-semibold text-zinc-900 dark:text-zinc-200">
                                <span>{article.meta.title}</span>
                            </h2>

                            <p className="font-normal text-sm text-zinc-500 line-clamp-3">
                                {article.meta.description}
                            </p>
                        </div>

                        <div className="relative z-10 font-semibold text-sm group-link flex gap-2 items-center text-teal-500 ">
                            <span className="">Read Article</span>
                            <ChevronRightIcon
                                className="w-4 h-4 text-teal-500 "
                                isWidth={true}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default ArticleCard;
