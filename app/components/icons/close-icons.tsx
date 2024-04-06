import { cn } from "@/lib/utils";
import React from "react";

interface CloseIconProps {
    className?: string;
    isWidth?: boolean;
    onClick?: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({
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
            <path d="M10 10l4 4m0 -4l-4 4" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
    );
};

export default CloseIcon;
