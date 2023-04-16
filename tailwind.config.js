const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)", ...fontFamily.sans],
        sansBold: ["var(--font-raleway-bold)", ...fontFamily.sans],
      },
      colors: {
        jugend: "#5255B0",
        mini: "#FFCC15",
        "on-mini": "#492A01",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
