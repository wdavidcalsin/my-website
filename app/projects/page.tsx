import React from "react";
import { IProject } from "../types/project";
import ProjectsSection from "./components/projects-section";

interface PageProps {
    // Define the props for your page component here
}

const listOfProjects: IProject[] = [
    {
        title: "Project 1",
        description: "Description of the project 1",
        githubLink: "https://github.com",
        previewLink: "https://preview.com",
        logo: "/images/sample-icons.svg",
    },
    {
        title: "Project 2",
        description: "Description of the project 2",

        previewLink: "https://preview.com",
        logo: "/images/sample-icons.svg",
    },
    {
        title: "Project 3",
        description: "Description of the project 3",
        githubLink: "https://github.com",

        logo: "/images/sample-icons.svg",
    },
    {
        title: "Project 4",
        description: "Description of the project 4",
        githubLink: "https://github.com",
        previewLink: "https://preview.com",
        logo: "/images/sample-icons.svg",
    },
];

const Page: React.FC<PageProps> = () => {
    return (
        <main>
            <div>
                <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Things I’ve made trying to put my dent in the universe.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’ve worked on tons of little projects over the years
                        but these are the ones that I’m most proud of. Many of
                        them are open-source, so if you see something that
                        piques your interest, check out the code and contribute
                        if you have ideas for how it can be improved.
                    </p>
                </header>
                <ProjectsSection projects={listOfProjects} />
            </div>
        </main>
    );
};

export default Page;
