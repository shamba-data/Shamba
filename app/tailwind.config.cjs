/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
      },
      colors: {
        green: "#46783E",
        gold: "#CCB801",
      },
    },
  },
  plugins: [],
};
