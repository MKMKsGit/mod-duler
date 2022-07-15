/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    fontSize: {
      h1: "2em",
      h2: "1.5em",
      h3: "1.17em",
      h4: "1em",
      h5: "0.83em",
      h6: "0.67em",
    },
    colors: {
      primary: "#1c0c5b",
      ...colors,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
