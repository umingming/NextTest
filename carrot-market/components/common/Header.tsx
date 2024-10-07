"use client";

import { MENU_CONFIG_MAP } from "@/constants/uiConstants";
import { useMenuHandler } from "@/hooks/useMenuHandler";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Header() {
    const { menuPath, checkMenuPath, checkDetailPath } = useMenuHandler();

    if (!checkMenuPath()) {
        return null;
    }

    const title = useMemo(() => MENU_CONFIG_MAP[menuPath], [menuPath]);

    const router = useRouter();
    const goBack = () => router.push(menuPath);

    return (
        <div className="fixed top-0 flex w-full items-center justify-center border-b bg-white py-4 text-lg font-medium text-gray-700">
            {checkDetailPath() && (
                <button className="absolute left-5" onClick={goBack}>
                    &larr;
                </button>
            )}
            <span>{title}</span>
        </div>
    );
}
