import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["Quicksand", "sans-serif"],
      },
      colors: {
        "primary": "#ffffff38",
        "secondary": "#ffffff26",
        "accent": "#447290" ,
      },
    },
  },
  plugins: [],
};
export default config;
