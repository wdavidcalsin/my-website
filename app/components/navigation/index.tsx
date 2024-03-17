import React from "react";
import AvatarCustom from "./avatar-custom";
import MenuNavigation from "./menu-navigation";
import { ModeToggle } from "./mode-toggle";

const Navigation: React.FC = () => {
    return (
        <nav>
            <div className="flex justify-between min-h-20 items-center">
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
        </nav>
    );
};

export default Navigation;
