import { menuItems } from "@/app/constants/menu-navigation";
import Link from "next/link";
import React from "react";

interface MenuNavigationProps {}

const MenuNavigation: React.FC<MenuNavigationProps> = () => {
    return (
        <div className="border border-gray-200 rounded-3xl flex gap-2 overflow-hidden px-5 text-[#27272A] text-sm shadow-sm">
            {menuItems.map((item) => {
                return (
                    <Link
                        href={item.href}
                        key={item.title}
                        className="block p-2 transition-all hover:text-[#28BEAE] font-semibold"
                    >
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
};

export default MenuNavigation;
