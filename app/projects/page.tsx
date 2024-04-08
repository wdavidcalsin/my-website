import React from "react";
import ProjectsSection from "./components/projects-section";
import { listOfProjects } from "../constants/projects";
import { getProjects } from "../services/projects";

interface PageProps {}

const Page: React.FC<PageProps> = async () => {
    const projects = await getProjects();

    return (
        <main>
            <div>
                <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Things I have done to showcase my work.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I have worked on different personal projects, which
                        allowed me to discover technologies and various ways of
                        developing software. Here are some of them:
                    </p>
                </header>
                <ProjectsSection projects={projects} />
            </div>
        </main>
    );
};

export default Page;
