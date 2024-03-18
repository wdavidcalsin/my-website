"use client";

import useScrollNav from "@/app/hooks/useScrollNav";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Container } from "../container";
import AvatarCustom from "./avatar-custom";
import MenuNavigation from "./menu-navigation";
import { ModeToggle } from "./mode-toggle";

const Navigation: React.FC = () => {
    const { navClass } = useScrollNav();

    return (
        <div className="relative w-full">
            <nav
                className={cn(
                    "transition-all delay-300 fixed left-0 right-0 z-50 ",
                    navClass
                )}
            >
                <Container variant={"fullMobileConstrainedPadded"}>
                    <div className="flex justify-between min-h-20 items-center ">
                        <div className="w-5">
                            <AvatarCustom />
                        </div>
                        <div>
                            <MenuNavigation />
                        </div>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </Container>
            </nav>
        </div>
    );
};

export default Navigation;
