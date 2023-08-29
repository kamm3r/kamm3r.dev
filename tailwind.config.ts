import type { Config } from "tailwindcss";
import { fontFamily, spacing } from 'tailwindcss/defaultTheme'

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["SpaceGroteskVariable", "Space Grotesk"],
                sans: ["InterVariable", "Inter", ...fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')]
} satisfies Config;
