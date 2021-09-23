const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "dark-gray": "#8c8c8c",
        "Very-Dark-Gray": "#696969",
      },
      fontFamily: {
        Alata: ["Alata", ...fontFamily.sans],
        "Josefin-Sans": ["Josefin Sans", ...fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
