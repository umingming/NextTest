"use client";

import { IconKey } from "@/constants/keyConstants";
import { ICON } from "@/constants/uiConstants";

export default function IconBase({
    iconKey,
    size = 6,
    color,
    strokeWidth = 2,
    isFill = false,
    onClick,
}: Readonly<{
    iconKey: IconKey;
    size?: number;
    color?: string;
    isFill?: boolean;
    strokeWidth?: number;
    onClick?: () => void;
}>) {
    const iconStyle = `h-${size} w-${size} ${color}`;

    return (
        <svg
            aria-hidden="true"
            className={iconStyle}
            fill={isFill ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d={ICON[iconKey]}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
}
