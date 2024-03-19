import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { type Category } from "./categories";

export interface Post {
    slug: string;
    title: string;
    publishDate: string;
    //   categories: Category[];
}

const PATH_MDX = "articles";

export function getArticles() {
    const blogDirectory = path.join(process.cwd(), PATH_MDX);
    const fileNames = fs.readdirSync(blogDirectory);

    const articles = fileNames.map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data: frontMatter } = matter(fileContents);

        const date = new Date(frontMatter.date);
        date.setDate(date.getDate() + 1); // Add 1 day to the date

        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return {
            slug,
            formattedDate,
            meta: frontMatter,
        };
    });

    console.log(articles);

    articles.sort(
        (a, b) =>
            new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );

    return articles;
}

export async function getArticle({ slug }: { slug: string }) {
    try {
        const markdownFile = fs.readFileSync(
            path.join("articles", slug + ".mdx"),
            "utf-8"
        );
        const { data: frontMatter, content } = matter(markdownFile);

        const date = new Date(frontMatter.date);
        date.setDate(date.getDate() + 1);

        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return {
            meta: frontMatter,
            formattedDate,
            slug,
            content,
        };
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(`Unable to fetch the post for slug: ${slug}`);
    }
}
