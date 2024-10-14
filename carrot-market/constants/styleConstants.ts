const PREFIX = {
    BACK_GROUND: "bg",
    TEXT: "text",
} as const;

type Prefix = (typeof PREFIX)[keyof typeof PREFIX];

export const COLOR = {
    DARK: "gray-900",
    DEFAULT: "gray-700",
    GOLD: "yellow-400",
    HOVER: "orange-600",
    PRIMARY: "orange-500",
    SOFT: "gray-400",
};

export const SIZE = {
    BASE: "base",
    LARGE: "lg",
    SMALL: "sm",
};

type Config = typeof COLOR | typeof SIZE;

function appendConfig(prefix: Prefix, config: Config): Record<string, string> {
    return Object.entries(config).reduce(
        (acc, [key, value]) => {
            acc[key] = `${prefix}-${value}`;
            return acc;
        },
        {} as Record<string, string>,
    );
}

export const TEXT = {
    COLOR: appendConfig(PREFIX.TEXT, COLOR),
    SIZE: appendConfig(PREFIX.TEXT, SIZE),
};
