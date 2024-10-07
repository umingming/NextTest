export const ICON_KEY = {
    CHAT: "chat",
    COMMUNITY: "community",
    CREATE: "create",
    HOME: "home",
    LIVE: "live",
    PROFILE: "profile",
} as const;

export type IconKey = (typeof ICON_KEY)[keyof typeof ICON_KEY];
