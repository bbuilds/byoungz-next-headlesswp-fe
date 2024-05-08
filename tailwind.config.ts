import type { Config } from "tailwindcss";

const colors = {
  //@TODO move to CSS vars
  white: "#EBF7F9", //white text and bg
  blurredWhite: "var(--c-blurred-white)",
  offBlack: "#1A1D1E", //black text and bg
  blurredBlack: "var(--c-blurred-off-black)", //black text and bg
  black: "#000000",
  burntOrange: "#F89938",
  teal: "#69C8C7",
  swampGreen: "#CCCC64",
  verdunGreen: "#50501B", //white theme link color
  foamGreen: "#99CC99",
  transparent: "transparent",
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
  darkMode: "class",
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
  plugins: [
    require("tailwindcss-fluid-type")({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.333, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.025],
        "3xl": [4, 1.025],
        "4xl": [5, 1],
        "5xl": [6, 1],
        "6xl": [7, 1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
  ],
  variants: {
    fluidType: ["responsive"],
  },
};
export default config;
