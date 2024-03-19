"use client";

import ChevronLeftIcon from "@/app/components/icons/chevron-left-icon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface BackProps {
    slug?: string;
}

const Back: React.FC<BackProps> = ({ slug }) => {
    const pathname = usePathname();
    const finalSlashIndex = pathname.lastIndexOf("/");
    const previousPathname = pathname.slice(0, finalSlashIndex);

    return (
        <div className="relative flex lg:absolute lg:top-0 lg:left-0 lg:-translate-y-2 ">
            <Link className="" href={previousPathname}>
                <ChevronLeftIcon
                    className="w-8 h-8 text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-500 p-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 shadow-md"
                    isWidth={true}
                />
            </Link>
        </div>
    );
};

export default Back;
