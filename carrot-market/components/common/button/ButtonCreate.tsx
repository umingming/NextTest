"use client";

import { ICON_KEY } from "@/constants/keyConstants";
import { ICON } from "@/constants/uiConstants";
import { useMenuHandler } from "@/hooks/useMenuHandler";
import { ButtonProps } from "@/types/button";
import { useRouter } from "next/navigation";

export default function ButtonCreate({
    iconKey = ICON_KEY.CREATE,
}: ButtonProps) {
    const router = useRouter();
    const { menuPath } = useMenuHandler();

    const goCreate = () => router.push(`${menuPath}/create`);

    return (
        <button
            className="fixed bottom-24 right-5 cursor-pointer rounded-full bg-orange-400 p-3 text-white shadow-xl transition-colors hover:bg-orange-500"
            onClick={goCreate}
        >
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
        </button>
    );
}
