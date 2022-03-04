const { fontFamily, boxShadow } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
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
      "lg-center":
        "0 0px 25px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
};
