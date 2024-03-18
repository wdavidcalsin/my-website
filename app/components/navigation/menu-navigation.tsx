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
        <div className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
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
