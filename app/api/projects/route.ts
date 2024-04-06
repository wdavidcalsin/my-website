import { listOfProjects } from "@/app/constants/projects";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    return NextResponse.json({
        projects: listOfProjects,
    });
}
