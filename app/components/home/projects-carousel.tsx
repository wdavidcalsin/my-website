"use client";

import { IProject } from "@/app/types/project";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import Carousel, { ArrowProps, ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../css-module/home-page.module.css";
import ChevronLeftIcon from "../icons/chevron-left-icon";
import ChevronRightIcon from "../icons/chevron-right-icon";
import ProjectCoverCard from "./project-cover-card";

interface ProjectsCarousel {
    projects: IProject[];
}

const responsive: ResponsiveType = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const LinkMoreProjects = () => {
    return (
        <div className="mx-2 h-full flex justify-center items-center">
            <Link
                href={"projects"}
                className="transition-all border border-zinc-300 dark:border-zinc-800 rounded-full  hover:bg-zinc-200  dark:hover:bg-zinc-800/30 dark:text-zinc-500 dark:hover:text-zinc-400  font-serif px-4 py-2 shadow-md italic"
            >
                More Projects
            </Link>
        </div>
    );
};

const ProjectsCarousel: React.FC<ProjectsCarousel> = ({ projects }) => {
    const CustomRight = ({ onClick }: ArrowProps) => (
        <ChevronRightIcon
            onClick={onClick}
            className="absolute top-1/2 right-4 transition-all -mt-2 sm:-mt-4 cursor-pointer w-8 h-8 text-zinc-700 dark:text-zinc-50 bg-zinc-200 dark:bg-zinc-950/70 rounded-full hover:scale-110  border-zinc-200 dark:border-zinc-800 p-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-950/60 shadow-md"
            isWidth={true}
        />
    );
    const CustomLeft = ({ onClick }: ArrowProps) => (
        <ChevronLeftIcon
            onClick={onClick}
            className="absolute top-1/2 left-4 transition-all -mt-2 sm:-mt-4 cursor-pointer w-8 h-8 text-zinc-700 dark:text-zinc-50 bg-zinc-200 dark:bg-zinc-950/70 rounded-full hover:scale-110  border-zinc-200 dark:border-zinc-800 p-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-950/60 shadow-md"
            isWidth={true}
        />
    );

    return (
        <div
            className={cn(
                "flex gap-8 relative overflow-y-auto ",
                styles.no_scrollbar
            )}
        >
            <Carousel
                arrows
                responsive={responsive}
                className="w-full flex py-8 relative"
                // sliderClass="[&>*:nth-child(even)]:px-10 "

                autoPlay
                customRightArrow={<CustomRight />}
                customLeftArrow={<CustomLeft />}
                slidesToSlide={1}
                swipeable
            >
                {projects.slice(0, 4).map((item, index) => {
                    return (
                        <ProjectCoverCard
                            key={index}
                            project={item}
                            index={index}
                        />
                    );
                })}
                <LinkMoreProjects />
            </Carousel>
        </div>
    );
};

export default ProjectsCarousel;
