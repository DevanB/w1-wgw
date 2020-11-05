const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  purge: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
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
      maxWidth: {
        xxs: "15rem",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
}
