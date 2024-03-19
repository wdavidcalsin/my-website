import { cn } from "@/lib/utils";
import JavaScriptIcon from "../components/icons/javascript-icon";
import TypeScriptIcon from "../components/icons/typescript-icon";

const WIDTH_ICON = "w-4";
const HEIGHT_ICON = "h-4";

const isWidthIcon = true;

interface ILanguage {
    [key: string]: {
        name: string;
        extension: string;
        icon: React.ReactNode;
    };
}

export const LANGUAGES: ILanguage = {
    javascript: {
        name: "JavaScript",
        extension: "js",
        icon: (
            <JavaScriptIcon
                className={cn(WIDTH_ICON, HEIGHT_ICON)}
                isWidth={isWidthIcon}
            />
        ),
    },
    typescript: {
        name: "JavaScript",
        extension: "js",
        icon: (
            <TypeScriptIcon
                className={cn(WIDTH_ICON, HEIGHT_ICON)}
                isWidth={isWidthIcon}
            />
        ),
    },
};
