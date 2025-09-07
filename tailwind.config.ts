import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Meridian Design Language Colors
        abyss: "rgb(var(--abyss) / <alpha-value>)",
        axon: "rgb(var(--axon) / <alpha-value>)",
        tungsten: "rgb(var(--tungsten) / <alpha-value>)",
        "veil-100": "rgb(var(--veil-100) / <alpha-value>)",
        "veil-400": "rgb(var(--veil-400) / <alpha-value>)",
        "veil-700": "rgb(var(--veil-700) / <alpha-value>)",
        "veil-900": "rgb(var(--veil-900) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;