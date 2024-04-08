import { listOfProjects } from "@/app/constants/projects";
import { create } from "domain";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    const projects = listOfProjects.map((project) => {
        const date = new Date(project.createdAt);

        date.setDate(date.getDate() + 1);

        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return {
            ...project,
            createdAt: formattedDate,
        };
    });

    const resultProjects = projects.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
        projects: resultProjects,
    });
}
