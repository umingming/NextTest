"use client";

import { ButtonProps } from "@/types/button";
import IconBase from "../icon/IconBase";

export default function ButtonBase({ iconKey, onClick }: ButtonProps) {
    return (
        <button
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600"
            onClick={onClick}
        >
            <IconBase iconKey={iconKey} />
        </button>
    );
}
