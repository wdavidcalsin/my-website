import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { socialNetworks } from "./constants/social-networks";

import Articles from "./articles/components/articles";
import ProjectsCarousel from "./components/home/projects-carousel";

async function getProjects() {
    const response = await fetch(`${process.env.BASE_API_URL}/api/projects`, {
        method: "GET",
    });
    return response.json();
}

async function getArticles() {
    const response = await fetch(`${process.env.BASE_API_URL}/api/articles`, {
        method: "GET",
    });
    return response.json();
}

async function Page() {
    const { projects } = await getProjects();
    const { articles } = await getArticles();

    return (
        <main className="">
            <div>
                <header className="max-w-2xl">
                    <div className="mb-6 ">
                        <Avatar className="w-14 h-14">
                            <AvatarImage
                                src="/images/avatar-2.webp"
                                alt="@wdavid"
                            />
                            <AvatarFallback>WD</AvatarFallback>
                        </Avatar>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Fullstack programmer and bike enthusiast.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I&#39;m David, a full stack programmer, and I love
                        working with React, I&#39;m also passionate about riding
                        bicycles.
                    </p>
                    <div className="mt-6 flex gap-6 text-zinc-500 ">
                        {socialNetworks.map((item, index) => {
                            return (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="block transition-all hover:text-[#52525B] dark:hover:text-zinc-400 font-semibold"
                                >
                                    {item.children}
                                </Link>
                            );
                        })}
                    </div>
                </header>
                <div className="mt-12">
                    <h2 className="w-auto text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-500 hover:underline">
                        <Link href="/projects">Projects</Link>
                    </h2>
                    <ProjectsCarousel projects={projects} />
                </div>
                <div className="mt-12">
                    <h2 className="w-auto text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-600 hover:underline">
                        <Link href="/articles">Articles</Link>
                    </h2>
                    <div className="py-10">
                        <Articles articles={articles} variant="compact" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
