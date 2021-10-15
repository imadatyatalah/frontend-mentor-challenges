const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: { sans: ["Kumbh Sans", "sans-serif", ...fontFamily.sans] },

      colors: {
        "color-orange": "var(--color-orange)",
        "color-pale-orange": "var(--color-pale-orange)",

        "color-dark-blue": "var(--color-dark-blue)",
        "color-dark-grayish-blue": "var(--color-dark-grayish-blue)",
        "color-grayish-blue": "var(--color-grayish-blue)",
        "color-light-grayish-blue": "var(--color-light-grayish-blue)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
