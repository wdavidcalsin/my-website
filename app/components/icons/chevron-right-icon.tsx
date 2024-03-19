import { cn } from "@/lib/utils";
import React from "react";

interface ChevronRightIconProps {
    className?: string;
    isWidth?: boolean;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
    className,
    isWidth = false,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(!isWidth && "w-6 h-6", className)}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
        </svg>
    );
};

export default ChevronRightIcon;
