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
        "dark-primary": "#030637",
        "light-primary": "#9290c3",
        "light-secondary": "#910a67",
        "light-details": "#a5d8ff",
        "light-icons": "#eebefa",
        "text": "#fff"
      },
    },
  },
  plugins: [],
};
export default config;
