import * as React from "react";

export const useScrollNav = () => {
    const [lastPositionY, setLastPositionY] = React.useState<number>(0);
    const [navClass, setNavClass] = React.useState<string>("");

    React.useEffect(() => {
        const handleScroll = () => {
            const windowScrollY = window.scrollY;

            if (windowScrollY <= 0) {
                setLastPositionY(0);
                setNavClass("translate-y-0");
            } else if (windowScrollY > lastPositionY) {
                setLastPositionY(windowScrollY);
                setNavClass("-translate-y-40");
                // setNavClass("-top-96");
            } else {
                setLastPositionY(windowScrollY);
                setNavClass("translate-y-0");
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, [lastPositionY, navClass]);

    return { navClass };
};

export default useScrollNav;
