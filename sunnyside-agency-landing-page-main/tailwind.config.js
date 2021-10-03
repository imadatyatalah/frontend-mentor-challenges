const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif", ...fontFamily.sans],
        serif: ["Fraunces", "serif", ...fontFamily.serif],
      },

      colors: {
        "Soft-red": "var(--Soft-red)",
        Yellow: "var(--Yellow)",
        "Dark-desaturated-cyan": "var(--Dark-desaturated-cyan)",
        "Dark-blue": "var(--Dark-blue)",
        "Dark-moderate-cyan": "var(--Dark-moderate-cyan)",

        "Very-dark-desaturated-blue": "var(--Very-dark-desaturated-blue)",
        "Very-dark-grayish-blue": "var(--Very-dark-grayish-blue)",
        "Dark-grayish-blue": "var(--Dark-grayish-blue)",
        "Grayish-blue": "var(--Grayish-blue)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
