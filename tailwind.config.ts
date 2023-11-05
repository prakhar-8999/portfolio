// "use client";
import type {Config} from "tailwindcss";
import {getRunTimeColor} from "./libs/colors";
import useColor from "./utils/useColor";

const primary = useColor.getState().primary;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: getRunTimeColor(),
    },
  },
  plugins: [],
};
export default config;
