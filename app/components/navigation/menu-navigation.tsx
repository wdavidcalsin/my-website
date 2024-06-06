"use client";

import React from "react";
import ChevronDownIcon from "../icons/chevron-down-icon";
import ListNavigation from "./list-navigation";

interface MenuNavigationProps {
    onClick?: () => void;
}

const MenuNavigation: React.FC<MenuNavigationProps> = ({ onClick }) => {
    return (
        <div>
            <div className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mt-14">
                <ListNavigation />
            </div>

            <div
                className="group block cursor-pointer sm:hidden rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                onClick={onClick}
            >
                <span className="relative flex items-center gap-1 p-2 py-2  transition-all group-hover:text-[#28BEAE] font-semibold">
                    Menu
                    <ChevronDownIcon isWidth className="w-4 -mb-1" />
                </span>
            </div>
        </div>
    );
};

export default MenuNavigation;
