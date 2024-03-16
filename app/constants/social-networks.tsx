import GitHubIcon from "../components/icons/github-icon";
import InstagramIcon from "../components/icons/instagram-icon";
import LinkedInIcon from "../components/icons/linkedin-icon";
import XIcon from "../components/icons/x-icon";

interface ISocialNetworks {
    title?: string;
    href: string;
    children: React.ReactNode;
}

export const socialNetworks: ISocialNetworks[] = [
    {
        title: "X",
        href: "",
        children: <XIcon />,
    },
    {
        title: "Instagram",
        href: "",
        children: <InstagramIcon />,
    },
    {
        title: "GitHub",
        href: "",
        children: <GitHubIcon />,
    },
    {
        title: "LinkedIn",
        href: "",
        children: <LinkedInIcon />,
    },
];
