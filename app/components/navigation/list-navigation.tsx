import { menuItems } from "@/app/constants/menu-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ListNavigationProps {
    variant?: "full" | "mobile";
    onclick?: () => void;
}

const ListNavigation: React.FC<ListNavigationProps> = ({
    variant = "full",
    onclick,
}) => {
    const pathname = usePathname();

    return (
        <>
            {menuItems.map((item) => {
                return (
                    <Link
                        href={item.href}
                        key={item.title}
                        className={cn(
                            "relative block p-2 py-3 transition-all hover:text-[#28BEAE] font-semibold",
                            pathname === item.href ? "text-[#28BEAE] " : "",
                            variant === "full" ? "" : "text-center"
                        )}
                        onClick={onclick}
                    >
                        {item.title}
                        {pathname === item.href && (
                            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                        )}
                    </Link>
                );
            })}
        </>
    );
};

export default ListNavigation;
