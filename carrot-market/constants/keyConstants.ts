export const ICON_KEY = {
    CHAT: "chat",
    COMMUNITY: "community",
    CREATE: "create",
    HOME: "home",
    LIVE: "live",
    PROFILE: "profile",
    WRITE: "write",
} as const;

export type IconKey = (typeof ICON_KEY)[keyof typeof ICON_KEY];

export const MENU_KEY = {
    PATH: "path",
    TITLE: "title",
    ICON: "icon",
} as const;
