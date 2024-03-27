import { cn } from "@/lib/utils";
import React from "react";

interface ChevronLeftIconProps {
    className?: string;
    isWidth?: boolean;
    onClick?: () => void;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({
    className,
    isWidth = false,
    onClick,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(!isWidth && "w-6 h-6", className)}
            onClick={onClick}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
        </svg>
    );
};

export default ChevronLeftIcon;
