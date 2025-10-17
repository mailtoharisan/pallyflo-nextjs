import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pallyflo Brand Colors - Exact from documentation
        brand: {
          primary: "#05204D", // Primary Blue
          secondary: "#FF9A1F", // Secondary Orange
          light: "#DADFE7", // Light Blue
          dark: "#1D2839", // Dark Blue
          gray: "#606E85", // Gray
          "light-gray": "#E5E7EB", // Light Gray
          "medium-gray": "#D1D5DB", // Medium Gray
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      backgroundImage: {
        "gradient-subtle": "linear-gradient(135deg, #DADFE7 0%, #E5E7EB 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
