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
        "main-blue": "#4472C4",
        "light-gray": "#F5F5F5",
        "medium-gray": "#EAEAEA",
        "dark-gray": "#D9D9D9",
        "text-gray": "#A6A6A6",
      },
      screens: {
        md: { max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      height: {
        view: "calc(100vh-3rem)",
      },
    },
  },
  plugins: [],
};
export default config;
