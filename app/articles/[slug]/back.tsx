"use client";

import ChevronLeftIcon from "@/app/components/icons/chevron-left-icon";
import { useRouter } from "next/router";
import React from "react";

interface BackProps {
    slug?: string;
}

const Back: React.FC<BackProps> = ({ slug }) => {
    const router = useRouter();
    const { isPreview } = useRouter();
    console.log("Is preview: ", isPreview);

    return (
        <div
            className="absolute rounded-full border border-zinc-500 p-2"
            onClick={() => router.back()}
        >
            <ChevronLeftIcon
                className="w-5 h-5 text-zinc-400 "
                isWidth={true}
            />
        </div>
    );
};

export default Back;
