/* eslint @typescript-eslint/no-var-requires: "off" */

const { fontFamily, boxShadow } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...fontFamily.sans],
      },

      colors: {
        "dark-blue": "var(--dark-blue)",
        "very-dark-blue": "var(--very-dark-blue)",
        "very-dark-blue-darker": "var(--very-dark-blue-darker)",
        "dark-gray": "var(--dark-gray)",
        "very-light-gray": "var(--very-light-gray)",
      },
    },

    boxShadow: {
      ...boxShadow,
      custom: "0px 0px 5px 2.5px rgba(0,0,0,0.2)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
