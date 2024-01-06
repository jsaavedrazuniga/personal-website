import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "Inter", "sans-serif"],
    },
  },
} satisfies Config;
