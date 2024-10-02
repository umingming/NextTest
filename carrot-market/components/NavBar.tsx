"use client";

import { MENU_KEY } from "@/constants/keyConstants";
import { MENU_CONFIGS } from "@/constants/uiConstants";
import { useMenuHandler } from "@/hooks/useMenuHandler";
import Link from "next/link";

export default function NavBar() {
    const { checkMenuPath, matchMenuPath } = useMenuHandler();

    if (!checkMenuPath()) {
        return null;
    }

    return (
        <nav className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white px-10 py-3">
            {MENU_CONFIGS.map((config) => (
                <Link href={config[MENU_KEY.PATH]}>
                    <div
                        className={`flex flex-col items-center space-y-2 ${matchMenuPath(config[MENU_KEY.PATH]) ? "font-semibold text-orange-500" : "text-gray-800"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={config[MENU_KEY.ICON]}
                            />
                        </svg>
                        <span>{config[MENU_KEY.TITLE]}</span>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
