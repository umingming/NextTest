"use client";

import { ICON } from "@/constants/uiConstants";
import { ButtonProps } from "@/types/button";

export default function ButtonBase({ label, iconKey, onClick }: ButtonProps) {
    return (
        <button
            className="cursor-pointer rounded-full bg-orange-400 p-3 text-white transition-colors hover:bg-orange-500"
            onClick={onClick}
        >
            {iconKey && (
                <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
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
            )}
            {label && label}
        </button>
    );
}
