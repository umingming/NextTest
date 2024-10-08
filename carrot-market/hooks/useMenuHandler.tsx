"use client";

import { MENU_CONFIG_MAP } from "@/constants/uiConstants";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useMenuHandler() {
    const currentPath = usePathname();
    const menuPath = useMemo(() => getMenuPath(currentPath), [currentPath]);

    function getMenuPath(path: string): string {
        const pattern = /^(\/[^\/]+)/;
        return path.match(pattern)?.[0] ?? "/";
    }

    function matchMenuPath(path: string): boolean {
        return path === menuPath;
    }

    function checkMenuPath(): boolean {
        return Object.keys(MENU_CONFIG_MAP).includes(menuPath);
    }

    function checkDetailPath(): boolean {
        return checkMenuPath() && currentPath !== menuPath;
    }

    return {
        currentPath,
        menuPath,
        matchMenuPath,
        checkMenuPath,
        checkDetailPath,
    };
}
