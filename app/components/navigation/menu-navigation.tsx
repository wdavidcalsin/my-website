"use client";

import { menuItems } from "@/app/constants/menu-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuNavigationProps {}

const MenuNavigation: React.FC<MenuNavigationProps> = () => {
    const pathname = usePathname();

    return (
        <div className="border border-gray-200 rounded-3xl flex gap-2 px-5 text-[#27272A] text-sm shadow-sm">
            {menuItems.map((item) => {
                return (
                    <Link
                        href={item.href}
                        key={item.title}
                        className={cn(
                            "relative block p-2 py-3 transition-all hover:text-[#28BEAE] font-semibold",
                            pathname === item.href ? "text-[#28BEAE] " : ""
                        )}
                    >
                        {item.title}
                        {pathname === item.href && (
                            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default MenuNavigation;
