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
import style from "../../css-module/code-format-mdx.module.css";
import AdminBar from "./admin-bar";

const Code = (props: any) => {
    const { resolvedTheme } = useTheme();
    const [isDark, setIsDark] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (resolvedTheme) {
            setIsDark(resolvedTheme === "dark");
            setIsLoading(false);
        }
    }, [resolvedTheme]);

    const codeContent =
        typeof props.children === "string"
            ? props.children
            : props.children.props.children;
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    const language = matches?.groups?.lang || "";

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <FadeLoader color={"#3F3F46"} />
                {/* <FadeLoader color="#36d7b7" loading /> */}
            </div>
        );
    }

    return (
        <div className="text-sm flex flex-col gap-0 ">
            <AdminBar code={codeContent} language={language} />
            <SyntaxHighlighter
                language={language}
                className={cn(
                    "rounded-lg bg-zinc-900 border border-zinc-300 dark:border-zinc-800",
                    isDark ? style.code_format_dark : style.code_format_light
                )}
                customStyle={{
                    background: isDark ? "transparent" : "#FAFAFA",
                }}
                style={isDark ? oneDark : materialLight}
                wrapLines={true}
                showLineNumbers={true}
            >
                {codeContent}
            </SyntaxHighlighter>
        </div>
    );
};

export default Code;
