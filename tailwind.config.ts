import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          beige: "#F5F5DC",
          paper: "#E8E2D2",
          green: "#2D4B32",
          "green-light": "#4A6E4F",
          brown: "#4A3728",
        },
      },
      fontFamily: {
        serif: ["var(--font-vintage-serif)", "serif"],
        sans: ["var(--font-vintage-sans)", "sans-serif"],
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
