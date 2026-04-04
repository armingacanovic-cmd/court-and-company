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
        cream: "#F5F0E8",
        sand: "#E8DFC8",
        beige: "#C4A882",
        forest: "#1A4731",
        lime: "#5DB940",
        anthracite: "#252525",
      },
    },
  },
  plugins: [],
};
export default config;
