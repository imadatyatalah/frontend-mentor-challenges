/* eslint @typescript-eslint/no-var-requires: "off" */

const { fontFamily } = require("tailwindcss/defaultTheme");

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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
