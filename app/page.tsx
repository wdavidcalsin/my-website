import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { socialNetworks } from "./constants/social-networks";
import styles from "./css-module/home-page.module.css";
import ArticleCard from "./articles/article-card";
import { getArticles } from "./services/articles";
import Articles from "./articles/articles";

// Interface for list icons for social networks

const rotates = [
    "rotate-2",
    "rotate-3",
    "rotate-4",
    "rotate-6",

    "-rotate-2",
    "-rotate-3",
    "-rotate-4",
    "-rotate-6",
];

interface IProjectImage {
    href: string;
    src: string;
}

const projectsImages: IProjectImage[] = [
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
    {
        href: "",
        src: "/images/project-1.webp",
    },
];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default function Home() {
    const articles = getArticles();

    return (
        <main className="">
            <div>
                <header className="max-w-2xl">
                    <div className="mb-6 ">
                        <Avatar className="w-14 h-14">
                            <AvatarImage
                                src="/images/avatar-2.png"
                                alt="@wdavid"
                            />
                            <AvatarFallback>WD</AvatarFallback>
                        </Avatar>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Software designer, founder, and amateur astronaut.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Spencer, a software designer and entrepreneur based
                        in New York City. I’m the founder and CEO of Planetaria,
                        where we develop technologies that empower regular
                        people to explore space on their own terms.
                    </p>
                    <div className="mt-6 flex gap-4 text-zinc-500 ">
                        {socialNetworks.map((item, index) => {
                            return (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="block p-2 transition-all hover:text-[#52525B] dark:hover:text-zinc-400 font-semibold"
                                >
                                    {item.children}
                                </Link>
                            );
                        })}
                    </div>
                </header>
                <div className="mt-6">
                    <h2 className="w-auto text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 hover:underline">
                        <Link href="/projects">Projects</Link>
                    </h2>
                    <div
                        className={cn(
                            "flex gap-8 py-8 overflow-y-auto",
                            styles.no_scrollbar
                        )}
                    >
                        {projectsImages.map((item, index) => {
                            return (
                                <Link href={item.href} key={index}>
                                    <div
                                        key={index}
                                        className={cn(
                                            "rounded-2xl overflow-hidden min-w-60 min-h-72 relative",
                                            `bg-[url('https://img.freepik.com/foto-gratis/tranquila-puesta-sol-verano-sobre-silueta-montana-generada-ia_188544-19648.jpg')] bg-no-repeat bg-cover`,
                                            index !== 0 &&
                                                rotates[getRandomInt(8)]
                                        )}
                                    ></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="w-auto text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-600 hover:underline">
                        <Link href="/articles">Articles</Link>
                    </h2>
                    <div className="py-10">
                        <Articles />
                    </div>
                </div>
            </div>
        </main>
    );
}
