// List of menu items
interface MenuItemProps {
    title: string;
    href: string;
    children?: MenuItemProps[];
}

// Const List of menu items
export const menuItems: MenuItemProps[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Articles",
        href: "/articles",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    // {
    //     title: "Contact",
    //     href: "/contact",
    // },
];
