import type { Config } from "tailwindcss";
import { TEXT } from "./constants/styleConstants";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    darkMode: "class",
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        {
            pattern: /(h|w)-\d+/, // h-숫자, w-숫자 형태의 모든 클래스를 포함
        },
        ...Object.values(TEXT.COLOR),
    ],
};
export default config;
