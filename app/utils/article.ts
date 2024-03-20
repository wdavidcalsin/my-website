export const isIncludePathname = (
    currentPathname: string,
    pathname: string
) => {
    console.log("Current and Pathname:", currentPathname, pathname);
    if (pathname === "/" && currentPathname === "/") {
        return currentPathname === pathname;
    }

    const removeLeadingSlash = pathname.replace(/^\//, "");
    console.log("Remove: ", removeLeadingSlash);

    return currentPathname.includes(removeLeadingSlash);
};
