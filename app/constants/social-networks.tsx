import GitHubIcon from "../components/icons/github-icon";
import InstagramIcon from "../components/icons/instagram-icon";
import LinkedInIcon from "../components/icons/linkedin-icon";
import XIcon from "../components/icons/x-icon";

export interface ISocialNetworks {
    title?: string;
    href: string;
    children: React.ReactNode;
}

export const socialNetworks: ISocialNetworks[] = [
    {
        title: "X",
        href: "https://twitter.com/wdavidcalsin",
        children: <XIcon />,
    },
    {
        title: "GitHub",
        href: "https://github.com/wdavidcalsin",
        children: <GitHubIcon />,
    },
    {
        title: "LinkedIn",
        href: "",
        children: <LinkedInIcon />,
    },
];
