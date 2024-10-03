"use client";

import { MENU_CONFIG_MAP } from "@/constants/uiConstants";
import { useMenuHandler } from "@/hooks/useMenuHandler";
import { useMemo } from "react";

export default function Header() {
    const { menuPath, checkMenuPath } = useMenuHandler();

    if (!checkMenuPath()) {
        return null;
    }

    const title = useMemo(() => MENU_CONFIG_MAP[menuPath], [menuPath]);

    return (
        <div className="fixed top-0 flex w-full items-center justify-center border-b bg-white py-4 text-lg font-medium text-gray-700">
            <span>{title}</span>
        </div>
    );
}
