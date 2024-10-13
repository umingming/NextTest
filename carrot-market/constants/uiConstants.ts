import { IconKey, ICON_KEY, MENU_KEY } from "@/constants/keyConstants";
import { MenuConfig } from "@/types/route";

export const ICON: Record<IconKey, string> = {
    [ICON_KEY.CHAT]:
        "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
    [ICON_KEY.COMMUNITY]:
        "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
    [ICON_KEY.CREATE]: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    [ICON_KEY.HOME]:
        "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    [ICON_KEY.LIVE]:
        "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
    [ICON_KEY.PROFILE]:
        "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    [ICON_KEY.WRITE]:
        "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
};

export const MENU_CONFIGS: MenuConfig[] = [
    {
        [MENU_KEY.PATH]: "/",
        [MENU_KEY.TITLE]: "홈",
        [MENU_KEY.ICON]: ICON[ICON_KEY.HOME],
    },
    {
        [MENU_KEY.PATH]: "/community",
        [MENU_KEY.TITLE]: "동네생활",
        [MENU_KEY.ICON]: ICON[ICON_KEY.COMMUNITY],
    },
    {
        [MENU_KEY.PATH]: "/chats",
        [MENU_KEY.TITLE]: "채팅",
        [MENU_KEY.ICON]: ICON[ICON_KEY.CHAT],
    },
    {
        [MENU_KEY.PATH]: "/live",
        [MENU_KEY.TITLE]: "라이브",
        [MENU_KEY.ICON]: ICON[ICON_KEY.LIVE],
    },
    {
        [MENU_KEY.PATH]: "/profile",
        [MENU_KEY.TITLE]: "프로필",
        [MENU_KEY.ICON]: ICON[ICON_KEY.PROFILE],
    },
];

export const MENU_CONFIG_MAP = MENU_CONFIGS.reduce(
    (acc, cur) => {
        acc[cur[MENU_KEY.PATH]] = cur[MENU_KEY.TITLE];
        return acc;
    },
    {} as Record<string, string>,
);
