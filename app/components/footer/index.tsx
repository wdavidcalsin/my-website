import React from "react";
import MenuNavigation from "./menu-navigation";
import CopyrightNotice from "./copyright-notice";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex items-center justify-center sm:justify-between  pt-20 pb-10 flex-wrap">
                <MenuNavigation />
                <CopyrightNotice />
            </div>
        </footer>
    );
};

export default Footer;
