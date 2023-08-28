import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display:["SpaceGroteskVariable", "Space Grotesk"],
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [],
} satisfies Config;
