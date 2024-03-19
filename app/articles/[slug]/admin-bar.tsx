"use client";

import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { LANGUAGES } from "@/app/constants/languages";
function AdminBar({ code, language }: { code: string; language: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="bg-zinc-300 dark:bg-zinc-800 h-[40px] relative top-3 rounded-t-lg flex justify-between items-center px-4">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 text-sm">
                {LANGUAGES[language]?.icon}
                <span className="-mt-1 ">{language}</span>
            </div>
            <button
                onClick={copyToClipboard}
                className=" text-zinc-700 dark:text-white text-sm  px-2 py-1 rounded-md active:bg-teal-600 h-6 flex items-center"
            >
                {copied ? (
                    <div className="flex gap-2 items-center text-emerald-600 font-semibold">
                        <CheckIcon />
                        Code Copied!
                    </div>
                ) : (
                    <div className="flex gap-2 items-center font-semibold">
                        <CopyIcon />
                        Copy
                    </div>
                )}
            </button>
        </div>
    );
}

export default AdminBar;
