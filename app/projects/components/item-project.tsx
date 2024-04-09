import GitHubIcon from "@/app/components/icons/github-icon";
import LinkIcon from "@/app/components/icons/link-icon";
import { IProject } from "@/app/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProjectProps {
    project: IProject;
}

const ItemProject: React.FC<ItemProjectProps> = ({ project }) => {
    const { title, description, githubLink, previewLink, logo } = project;
    return (
        <div className="group relative flex flex-col gap-6 items-start ">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <div className="relative z-10">
                <Image
                    width={30}
                    height={30}
                    src={project.logo || "/images/sample-icons.svg"}
                    alt=""
                    className="rounded-lg"
                    // suggest
                    // layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                {/* <img
                    width={30}
                    height={30}
                    src={project.logo || "/images/sample-icons.svg"}
                    alt=""
                /> */}
            </div>
            <div className="relative z-10 flex flex-col gap-3">
                <h2 className="font-semibold text-zinc-900 dark:text-zinc-200">
                    <span>{title}</span>
                </h2>

                <p className="font-normal text-sm text-zinc-500">
                    {description
                        ? description
                        : "The description for this project will be added soon."}
                </p>
            </div>
            {(githubLink || previewLink) && (
                <div className="relative flex gap-4 z-10 text-zinc-500 dark:text-zinc-300">
                    {githubLink && (
                        <Link
                            href={githubLink}
                            className="group-link flex gap-2  items-center hover:text-teal-500 "
                            target="_blank"
                        >
                            <GitHubIcon
                                className="w-4 h-4 group-link-hover:text-teal-500 "
                                isWidth={true}
                            />
                            <span className="">github.com</span>
                        </Link>
                    )}
                    {previewLink && (
                        <Link
                            href={previewLink}
                            className="group-link flex gap-2  items-center hover:text-teal-500 "
                            target="_blank"
                        >
                            <LinkIcon
                                className="w-4 h-4 group-link-hover:text-teal-500 "
                                isWidth={true}
                            />

                            <span className="">preview</span>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemProject;
