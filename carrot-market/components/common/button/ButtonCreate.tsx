"use client";

import { ICON_KEY } from "@/constants/keyConstants";
import { useMenuHandler } from "@/libs/client/hooks/useMenuHandler";
import { ButtonProps } from "@/types/button";
import { useRouter } from "next/navigation";

import ButtonIcon from "./ButtonIcon";

export default function ButtonCreate({
    iconKey = ICON_KEY.CREATE,
}: ButtonProps) {
    const router = useRouter();
    const { menuPath } = useMenuHandler();

    const goCreate = () => router.push(`${menuPath}/create`);

    return (
        <div className="fixed bottom-24 right-5 rounded-full shadow-xl">
            <ButtonIcon iconKey={iconKey} onClick={goCreate} />
        </div>
    );
}
