import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
// import YouTube from "@/components/mdx/youtube";
// import Code from "@/components/mdx/code-component/code";

import { getArticle } from "@/app/services/articles";
import type { Metadata, ResolvingMetadata } from "next";
import Code from "./code";
import ChevronLeftIcon from "@/app/components/icons/chevron-left-icon";
import Back from "./back";
import Image from "next/image";

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
        // add other metadata fields as needed
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

    // console.log(props.meta);

    const components = {
        pre: Code,
        h1: (props: any) => <h1 {...props} className="text-2xl font-bold" />,
        h2: (props: any) => (
            <h2
                {...props}
                className="text-lg text-zinc-700  dark:text-zinc-200 mt-16 font-semibold"
            />
        ),
        h3: (props: any) => (
            <h3 {...props} className="text-lg text-zinc-200 mt-10 font-bold" />
        ),
        p: (props: any) => (
            <p
                {...props}
                className="text-base my-4 text-zinc-700 dark:text-zinc-400 leading-9"
            />
        ),
        a: (props: any) => (
            <a
                {...props}
                className="text-teal-600 font-bold hover:underline dark:text-teal-400"
            />
        ),
        li: (props: any) => (
            <li
                {...props}
                className="text-base text-zinc-700 dark:text-zinc-400 my-2"
            />
        ),
        ul: (props: any) => (
            <ul
                {...props}
                className="text-base text-zinc-700 dark:text-zinc-400 my-4"
            />
        ),
        ol: (props: any) => (
            <ol
                {...props}
                className="text-base text-zinc-700 dark:text-zinc-400 my-4"
            />
        ),
        img: (props: any) => (
            <Image
                width={600}
                height={400}
                className="rounded-lg shadow-sm w-full h-auto"
                {...props}
                alt=""
                // quality={100}
            />
        ),

        // h2: (props: any) => <h2 {...props} className="text-2xl font-bold" />,
        // YouTube,
    };

    return (
        <div className="md:relative flex flex-col gap-6 lg:gap-0">
            <Back />

            <article className="prose dark:prose-invert prose-xl mx-auto">
                <div className="flex flex-col gap-6 sm:gap-8 mb-12">
                    <div className="z-10 text-sm font-normal text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-300   dark:border-zinc-500 pl-4 ">
                        {props.formattedDate}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {props.meta.title}
                    </h1>
                    <div className="relative border border-zinc-300 dark:border-zinc-800 italic font-normal text-zinc-400 rounded-sm py-3 px-3">
                        <span className="absolute top-0 left-3 transform  -translate-y-1/2 bg-teal-500 dark:bg-teal-700  text-zinc-100 font-semibold border border-teal-500 dark:border-teal-400 rounded-sm px-1 py-0 text-xs">
                            Description
                        </span>
                        <p className="py-0 m-0 text-base text-zinc-800 dark:text-zinc-400">
                            {props.meta.description}
                        </p>
                    </div>
                </div>
                <MDXRemote source={props.content} components={components} />
            </article>
        </div>
    );
}
