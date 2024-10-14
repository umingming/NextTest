"use client";

import { MENU_KEY } from "@/constants/keyConstants";
import { TEXT } from "@/constants/styleConstants";
import { MENU_CONFIGS } from "@/constants/uiConstants";
import { useMenuHandler } from "@/hooks/useMenuHandler";
import Link from "next/link";
import IconBase from "./icon/IconBase";

export default function NavBar() {
    const { checkMenuPath, matchMenuPath } = useMenuHandler();

    if (!checkMenuPath()) {
        return null;
    }

    return (
        <nav className="fixed bottom-0 flex w-full items-center justify-between border-t bg-white px-10 py-3">
            {MENU_CONFIGS.map((config) => (
                <Link key={config.path} href={config[MENU_KEY.PATH]}>
                    <div
                        className={`flex flex-col items-center space-y-2 ${matchMenuPath(config[MENU_KEY.PATH]) ? `font-semibold ${TEXT.COLOR.PRIMARY}` : TEXT.COLOR.DEFAULT}`}
                    >
                        <IconBase
                            iconKey={config[MENU_KEY.ICON]}
                            strokeWidth={1.5}
                        />
                        <span>{config[MENU_KEY.TITLE]}</span>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
