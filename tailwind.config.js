const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#f7941d",
        "brand-red": "#ea4815",
        "brand-blue": "#091353",
        orange: {
          "50": "#f9f4e4",
          "100": "#faeebf",
          "200": "#f7e383",
          "300": "#f3cf40",
          "400": "#ecb015",
          "500": "#e98e08",
          "600": "#da6a05",
          "700": "#ba5009",
          "800": "#993f10",
          "900": "#7e3312",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        xxs: "15rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-heropatterns")({
      variants: [],

      patterns: ["moroccan"],

      colors: {
        default: "#da6a05",
        red: "rgb(185, 28, 28)",
      },

      opacity: {
        default: 0.1,
      },
    }),
  ],
}
