import type { Config } from "tailwindcss";

const colors = {
  white: "#EBF7F9", //white text and bg
  black: "#33132", //black text and bg
  burntOrange: "#F89938",
  teal: "69C8C7",
  swampGreen: "#CCCC64",
  foamGreen: "#99CC99",
  grey: {
    100: "#f8fafc",
    200: "#f1f5f8",
    300: "#dae1e7",
    default: "#b8c2cc",
    500: "#1C2021",
    600: "#606f7b",
    700: "#201c29",
  },
};

const fonts = {
  "noto-sans": ["Noto Sans", "Helvetica", "Arial", "sans-serif"],
  grenze: ["Grenze", "serif"],
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    fontFamily: fonts,
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
export default config;
