"use client";

import { MENU_CONFIG_MAP } from "@/constants/uiConstants";
import { useMenuHandler } from "@/libs/client/hooks/useMenuHandler";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { signOut } from "next-auth/react";

export default function Header() {
    const { menuPath, checkMenuPath, checkDetailPath } = useMenuHandler();

    const title = useMemo(() => MENU_CONFIG_MAP[menuPath], [menuPath]);

    const router = useRouter();
    const goBack = () => router.back();

    if (!checkMenuPath()) {
        return null;
    }

    return (
        <div className="fixed top-0 flex h-14 w-full items-center justify-center border-b bg-white text-lg font-medium text-gray-700">
            {checkDetailPath() ? (
                <button className="absolute left-5" onClick={goBack}>
                    &larr;
                </button>
            ) : (
                <span>{title}</span>
            )}
            <button
                className="absolute right-8 text-sm"
                onClick={() => signOut()}
            >
                Logout
            </button>
        </div>
    );
}
