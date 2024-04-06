import fs from "fs";
import path from "path";

import { getArticle } from "@/app/services/articles";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Back from "./back";
import { PreBlock } from "./code";

import Markdown, { MarkdownToJSX } from "markdown-to-jsx";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = await getArticle(params);

    const title = post.meta.title;
    const description = post.meta.description;

    return {
        title: title,
        description: description,
    };
}

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("articles"));
    const params = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const props = await getArticle(params);

    const options: MarkdownToJSX.Options = {
        overrides: {
            img: {
                component: Image,
                props: {
                    width: 600,
                    height: 400,
                    className: "rounded-lg shadow-sm w-full h-auto",
                },
            },
            p: {
                component: "p",
                props: {
                    className:
                        "text-base my-4 text-zinc-700 dark:text-zinc-400 leading-9",
                },
            },
            h1: {
                component: "h1",
                props: {
                    className: "text-2xl font-bold",
                },
            },
            h2: {
                component: "h2",
                props: {
                    className:
                        "text-lg text-zinc-700 dark:text-zinc-200 mt-16 font-semibold",
                },
            },
            h3: {
                component: "h3",
                props: {
                    className: "text-lg text-zinc-200 mt-10 font-bold",
                },
            },
            pre: {
                component: PreBlock,
                props: {},
            },
            ul: {
                component: "ul",
                props: {
                    className:
                        "text-base text-zinc-700 dark:text-zinc-400 my-4",
                },
            },
            ol: {
                component: "ol",
                props: {
                    className:
                        "text-base text-zinc-700 dark:text-zinc-400 my-4",
                },
            },
            li: {
                component: "li",
                props: {
                    className:
                        "text-base text-zinc-700 dark:text-zinc-400 my-2",
                },
            },
            a: {
                component: "a",
                props: {
                    className:
                        "text-teal-600 font-bold hover:underline dark:text-teal-400",
                },
            },
        },
    };

    return (
        <div className="md:relative flex flex-col gap-6 lg:gap-0">
            <Back />

            <article className="prose dark:prose-invert prose-xl mx-auto">
                <div className="flex flex-col gap-6 sm:gap-8 mb-12">
                    <div className="z-10 text-sm font-normal text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-300   dark:border-zinc-500 pl-4 ">
                        {props.formattedDate}
                    </div>
                    <h1 className="text-4xl m-0 font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {props.meta.title}
                    </h1>
                    <div className="relative border border-zinc-300 dark:border-zinc-800 italic font-normal text-zinc-400 rounded-sm py-3 px-3">
                        {/* <span className="absolute top-0 left-3 transform  -translate-y-1/2 bg-teal-500 dark:bg-teal-700  text-zinc-100 font-semibold border border-teal-500 dark:border-teal-400 rounded-sm px-1 py-0 text-xs">
                            Description
                        </span> */}
                        <p className="py-0 m-0 text-base text-zinc-800 dark:text-zinc-400">
                            {props.meta.description}
                        </p>
                    </div>
                </div>

                <Markdown options={options}>{props.content}</Markdown>
            </article>
        </div>
    );
}
