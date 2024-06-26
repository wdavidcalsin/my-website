"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AvatarCustom: React.FC = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        !isHomePage && (
            <Link href="/">
                <Avatar>
                    <AvatarImage src="/images/avatar-2.webp" alt="@wdavid" />
                    <AvatarFallback>WD</AvatarFallback>
                </Avatar>
            </Link>
        )
    );
};

export default AvatarCustom;
