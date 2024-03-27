"use client";

import useScrollNav from "@/app/hooks/useScrollNav";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Container } from "../container";
import AvatarCustom from "./avatar-custom";
import MenuNavigation from "./menu-navigation";
import { ModeToggle } from "./mode-toggle";
import ListNavigation from "./list-navigation";

const Navigation: React.FC = () => {
    const { navClass } = useScrollNav();
    const [isToggled, setIsToggled] = React.useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    };

    React.useEffect(() => {
        if (isToggled) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isToggled]);

    return (
        <div className="relative w-full">
            <nav
                className={cn(
                    "transition-all delay-300 fixed left-0 right-0 z-50 ",
                    navClass
                )}
            >
                <Container variant={"fullMobileConstrainedPadded"}>
                    <div className="flex justify-between min-h-20 items-center gap-2 sm:gap-0 ">
                        <div className="w-5">
                            <AvatarCustom />
                        </div>
                        <div className="ml-auto sm:ml-0">
                            <MenuNavigation onClick={handleChange} />
                        </div>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </Container>
            </nav>
            <div
                className={cn(
                    "fixed min-h-screen left-0 right-0 top-0 bottom-0 bg-zinc-950/70 z-[2000] p-2 sm:p-4",
                    isToggled ? "block" : "hidden"
                )}
                // className="fixed  left-0 right-0 top-0 bottom-0 bg-orange-400 z-[2000] overflow-y-hidden"
            >
                <div className=" bg-zinc-800 py-6 rounded-lg">
                    <h1 className="text-center font-semibold text-xl mb-6">
                        Navigation
                    </h1>
                    <ListNavigation variant="mobile" onclick={handleChange} />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
