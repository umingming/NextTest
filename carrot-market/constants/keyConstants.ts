export const ICON_KEY = {
    CART: "cart",
    CHAT: "chat",
    COMMUNITY: "community",
    CURRENCY: "currency",
    CREATE: "create",
    HOME: "home",
    LIKE: "like",
    LIVE: "live",
    PROFILE: "profile",
    SHOP: "shop",
    STAR: "star",
    WRITE: "write",
} as const;

export type IconKey = (typeof ICON_KEY)[keyof typeof ICON_KEY];

export const MENU_KEY = {
    PATH: "path",
    TITLE: "title",
    ICON: "icon",
} as const;
