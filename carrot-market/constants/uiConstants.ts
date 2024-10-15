import { IconKey, ICON_KEY, MENU_KEY } from "@/constants/keyConstants";
import { MenuConfig } from "@/types/route";

export const ICON: Record<IconKey, string> = {
    [ICON_KEY.CART]:
        "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    [ICON_KEY.CHAT]:
        "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
    [ICON_KEY.CHECK]: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    [ICON_KEY.COMMUNITY]:
        "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
    [ICON_KEY.CURRENCY]:
        "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    [ICON_KEY.CREATE]: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    [ICON_KEY.HOME]:
        "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    [ICON_KEY.IMAGE]:
        "M14 4H6a2 2 0 00-2 2v10m16-6v4m0 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m16-2l-1.586-1.586a2 2 0 00-2.828 0L14 14M4 16l4.586-4.586a2 2 0 012.828 0L14 14m0 0l2 2m2-12h4m-2-2v4m-6 2h.01",
    [ICON_KEY.LIVE]:
        "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
    [ICON_KEY.LIKE]:
        "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    [ICON_KEY.QUESTION]:
        "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
    [ICON_KEY.PROFILE]:
        "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    [ICON_KEY.SHOP]: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    [ICON_KEY.STAR]:
        "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    [ICON_KEY.WRITE]:
        "M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z",
};

export const MENU_CONFIGS: MenuConfig[] = [
    {
        [MENU_KEY.PATH]: "/items",
        [MENU_KEY.TITLE]: "홈",
        [MENU_KEY.ICON]: ICON_KEY.HOME,
    },
    {
        [MENU_KEY.PATH]: "/community",
        [MENU_KEY.TITLE]: "동네생활",
        [MENU_KEY.ICON]: ICON_KEY.COMMUNITY,
    },
    {
        [MENU_KEY.PATH]: "/chats",
        [MENU_KEY.TITLE]: "채팅",
        [MENU_KEY.ICON]: ICON_KEY.CHAT,
    },
    {
        [MENU_KEY.PATH]: "/live",
        [MENU_KEY.TITLE]: "라이브",
        [MENU_KEY.ICON]: ICON_KEY.LIVE,
    },
    {
        [MENU_KEY.PATH]: "/profile",
        [MENU_KEY.TITLE]: "프로필",
        [MENU_KEY.ICON]: ICON_KEY.PROFILE,
    },
];

export const MENU_CONFIG_MAP = MENU_CONFIGS.reduce(
    (acc, cur) => {
        acc[cur[MENU_KEY.PATH]] = cur[MENU_KEY.TITLE];
        return acc;
    },
    {} as Record<string, string>,
);
