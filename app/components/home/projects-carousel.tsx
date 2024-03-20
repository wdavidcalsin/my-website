"use client";

import * as React from "react";
import ProjectCoverCard from "./project-cover-card";
import { listOfProjects } from "@/app/constants/projects";
import { cn } from "@/lib/utils";
import styles from "../../css-module/home-page.module.css";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@/components/ui/button";
import ChevronRightIcon from "../icons/chevron-right-icon";
import ChevronLeftIcon from "../icons/chevron-left-icon";

interface ProjectsCarousel {}

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

const ProjectsCarousel: React.FC<ProjectsCarousel> = () => {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const {
            carouselState: { currentSlide },
        } = rest;
        return (
            <div
                className="w-0 carousel-button-group mb-4  gap-4 flex justify-end 
            items-center "
            >
                <button
                    className="absolute left-0 block p-3 bg-slate-300"
                    onClick={() => previous()}
                >
                    <ChevronLeftIcon />
                </button>
                <button onClick={() => next()}>
                    <span className="block p-3 bg-slate-300">
                        <ChevronRightIcon />
                    </span>
                </button>
            </div>
        );
    };

    return (
        <div
            className={cn(
                "flex gap-8 relative overflow-y-auto ",
                styles.no_scrollbar
            )}
        >
            <Carousel
                responsive={responsive}
                className="w-full flex gap-20 py-8 relative"
                sliderClass="[&>*:nth-child(even)]:px-6 "
                autoPlay
            >
                {listOfProjects.slice(0, 4).map((item, index) => {
                    return (
                        <ProjectCoverCard
                            key={index}
                            project={item}
                            index={index}
                        />
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ProjectsCarousel;
