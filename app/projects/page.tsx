import React from "react";
import ProjectsSection from "./components/projects-section";
import { listOfProjects } from "../constants/projects";

interface PageProps {}

async function getProjects() {
    const response = await fetch(`${process.env.BASE_API_URL}/api/projects`, {
        method: "GET",
    });
    return response.json();
}

const Page: React.FC<PageProps> = async () => {
    const { projects } = await getProjects();
    return (
        <main>
            <div>
                <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Cosas que he hecho para mostrar mi trabajo
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hey trabajado en diferentes proyectos personales, que me
                        permitieron descubrir tecnologias y algunas maneras de
                        desarrollar software, aqui algunos de ellos:
                    </p>
                </header>
                <ProjectsSection projects={projects} />
            </div>
        </main>
    );
};

export default Page;
