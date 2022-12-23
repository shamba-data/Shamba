/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        green: "#46783E",
        gold: "#CCB801",
      },
    },
  },
  plugins: [],
};
