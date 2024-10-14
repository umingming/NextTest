"use client";

import { IconKey } from "@/constants/keyConstants";
import { ICON } from "@/constants/uiConstants";

export default function IconBase({
    iconKey,
    size = 6,
    color,
    isFill = false,
}: Readonly<{
    iconKey: IconKey;
    size?: number;
    color?: string;
    isFill?: boolean;
}>) {
    return (
        <svg
            aria-hidden="true"
            className={`h-${size} w-${size} ${color}`}
            fill={isFill ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={ICON[iconKey]}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
