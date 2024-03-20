"use client";

import { rotates } from "@/app/constants/projects";
import { IProject } from "@/app/types/project";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import GitHubIcon from "../icons/github-icon";
import LinkIcon from "../icons/link-icon";

interface ProjectCoverCardProps {
    project: IProject;
    index: number;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const ProjectCoverCard: React.FC<ProjectCoverCardProps> = ({
    project,
    index,
}) => {
    const { coverImage, githubLink, previewLink } = project;
    const [cardClass, setCardClass] = React.useState<string>("");

    const handleOnMouseOver = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setCardClass("top-0 bottom-0 h-full");
    };
    const handleOnMouseLeave = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setCardClass("-top-full");
    };

    return (
        <div
            className={cn(
                "relative transition-all rounded-2xl overflow-hidden  min-h-72 ",
                `bg-[url('https://img.freepik.com/foto-gratis/tranquila-puesta-sol-verano-sobre-silueta-montana-generada-ia_188544-19648.jpg')] bg-no-repeat bg-cover`,
                index !== 0 && rotates[getRandomInt(rotates.length - 1)],
                "hover:rotate-0 "
            )}
            onMouseOver={(e) => handleOnMouseOver(e)}
            onMouseLeave={(e) => handleOnMouseLeave(e)}
        >
            <div
                className={cn(
                    "transition-all absolute right-0 left-0  w-full bg-zinc-100/10  dark:bg-zinc-100/10 flex justify-center items-center",
                    cardClass ? cardClass : "-top-full"
                )}
            >
                <div className=" flex gap-2 p-2 text-white dark:text-zinc-300">
                    {githubLink && (
                        <Link href={githubLink} target="_blank">
                            <div className="transition-all bg-zinc-800/60 p-1 rounded-md  hover:scale-110">
                                <GitHubIcon
                                    className="h-4 w-4"
                                    isWidth={true}
                                />
                            </div>
                        </Link>
                    )}
                    {previewLink && (
                        <Link href={previewLink} target="_blank">
                            <div className="transition-all bg-zinc-800/60 p-1 rounded-md  hover:scale-110">
                                <LinkIcon className="h-4 w-4" isWidth={true} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            {/* <div className="absolute top right-0 flex gap-2 p-2 text-white dark:text-zinc-300">
                {githubLink && (
                    <Link href={githubLink} target="_blank">
                        <div className="transition-all bg-zinc-800/60 p-1 rounded-md  hover:scale-110">
                            <GitHubIcon className="h-4 w-4" isWidth={true} />
                        </div>
                    </Link>
                )}
                {previewLink && (
                    <Link href={previewLink} target="_blank">
                        <div className="transition-all bg-zinc-800/60 p-1 rounded-md  hover:scale-110">
                            <LinkIcon className="h-4 w-4" isWidth={true} />
                        </div>
                    </Link>
                )}
            </div> */}
        </div>
    );
};

export default ProjectCoverCard;
