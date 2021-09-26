const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ["Rubik", "sans-serif", ...fontFamily.sans] },

      colors: {
        /* Primary */

        "custom-blue": "var(--custom-blue)",

        "light-red-orange": "var(--light-red-orange)",
        "soft-blue": "var(--soft-blue)",
        "light-red": "var(--light-red)",
        "lime-green": "var(--lime-green)",
        "custom-violet": "var(--custom-violet)",
        "soft-orange": "var(--soft-orange)",

        /* Neutral */

        "very-dark-blue": "var(--very-dark-blue)",
        "dark-blue": "var(--dark-blue)",
        "desaturated-blue": "var(--desaturated-blue)",
        "pale-blue": "var(--pale-blue)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
