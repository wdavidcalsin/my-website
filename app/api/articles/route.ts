import { getArticles } from "@/app/services/articles";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    return NextResponse.json({
        articles: getArticles(),
    });
}
