"use client";

import { ROUTE_CONFIG_MAP } from "@/constants/uiConstants";
import { useRouteHandler } from "@/hooks/useRouteHandler";
import { useEffect, useState } from "react";

export default function Header() {
    const { currentPath, getMainPath } = useRouteHandler();

    const formatTitle = (): string => {
        return ROUTE_CONFIG_MAP[getMainPath()];
    };
    const [title, setTitle] = useState(formatTitle());

    useEffect(() => {
        setTitle(formatTitle());
    }, [currentPath]);

    return (
        <div className="fixed top-0 flex w-full items-center justify-center border-b bg-white py-4 text-lg font-medium text-gray-700">
            <span>{title}</span>
        </div>
    );
}
