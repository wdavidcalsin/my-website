"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";
import { FadeLoader } from "react-spinners";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    materialLight,
    oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import style from "../../../css-module/code-format-mdx.module.css";
import AdminBar from "./admin-bar";

const PreBlock = ({
    children,
    ...rest
}: {
    children: React.ReactElement | React.ReactElement[];
}) => {
    if ("type" in children && children["type"] === "code") {
        return Code(children["props"]);
    }
    return <pre {...rest}>{children}</pre>;
};

export default PreBlock;

const Code = ({
    className,
    children,
}: {
    className: string;
    children: string;
}) => {
    let lang = "text";

    const { resolvedTheme } = useTheme();
    const [isDark, setIsDark] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (resolvedTheme) {
            setIsDark(resolvedTheme === "dark");
            setIsLoading(false);
        }
    }, [resolvedTheme]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <FadeLoader color={"#3F3F46"} />
                {/* <FadeLoader color="#36d7b7" loading /> */}
            </div>
        );
    }

    if (className && className.startsWith("lang-")) {
        lang = className.replace("lang-", "");
    }

    return (
        <div className="text-sm flex flex-col gap-0 ">
            <AdminBar code={children} language={lang} />
            <SyntaxHighlighter
                language={lang}
                className={cn(
                    "rounded-lg bg-zinc-900 border border-zinc-300 dark:border-zinc-800",
                    isDark ? style.code_format_dark : style.code_format_light
                )}
                customStyle={{
                    background: isDark ? "transparent" : "#FAFAFA",
                }}
                style={isDark ? oneDark : materialLight}
                // style={oneDark}
                wrapLines={true}
                showLineNumbers={true}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};
