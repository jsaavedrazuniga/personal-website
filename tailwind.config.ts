import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "Inter", "sans-serif"],
    },
    colors: {
        gray: colors.zinc,
        primary: colors.blue,
        secondary: colors.emerald,
    }
  },
} satisfies Config;
