import * as React from "react";
import { menuItems } from "@/app/constants/menu-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagicTabSelect } from "react-magic-motion";

interface ListNavigationProps {
    variant?: "full" | "mobile";
    onclick?: () => void;
}

const ListNavigation: React.FC<ListNavigationProps> = ({
    variant = "full",
    onclick,
}) => {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = React.useState(pathname);
    const [selectIndex, setSelectIndex] = React.useState(pathname);

    console.log(pathname);

    React.useEffect(() => {
        if (pathname === "/") {
            setHoveredIndex("/");
            setSelectIndex("/");
        }
    }, [pathname]);

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
                        onClick={() => {
                            if (onclick) {
                                onclick();
                            }

                            setSelectIndex(item.href);
                            // setHoveredIndex(item.href);
                        }}
                        onMouseEnter={() => setHoveredIndex(item.href)}
                        onMouseLeave={() => {
                            if (hoveredIndex !== selectIndex)
                                setHoveredIndex(selectIndex);
                        }}
                    >
                        {item.title}
                        {hoveredIndex === item.href && (
                            <MagicTabSelect
                                id="nav-select"
                                // key={pathname}
                                transition={{
                                    type: "spring",
                                    bounce: 0.35,
                                }}
                            >
                                <span className="absolute right-0 left-0 inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 mix-blend-difference" />
                                {/* <span
                                    style={{
                                        borderRadius: "999px",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 10,
                                        backgroundColor: "white",
                                        mixBlendMode: "difference",
                                    }}
                                /> */}
                            </MagicTabSelect>
                        )}
                    </Link>
                );
            })}
        </>
    );
};

export default ListNavigation;
