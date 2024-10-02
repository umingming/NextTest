"use client";

import { usePathname } from "next/navigation";

export function useRouteHandler() {
    const currentPath = usePathname();

    function getMainPath() {
        const pattern = /^(\/[^\/]+)/;
        return currentPath.match(pattern)?.[0] ?? "/";
    }

    function matchMainPath(path: string) {
        return path === getMainPath();
    }

    return { currentPath, getMainPath, matchMainPath };
}
