import { menuItems } from "@/app/constants/menu-navigation";
import Link from "next/link";
import React from "react";

const MenuNavigation: React.FC = () => {
    return (
        <div className="flex gap-2 font-bold text-sm justify-center text-zinc-700">
            {menuItems.map((item, index) => {
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
