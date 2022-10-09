/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontSize: {
      h1: "40px",
      h2: "32px",
      h3: "28px",
      h4: "24px",
      h5: "20px",
      h6: "16px",
      body1: "16px",
      body2: "14px",
      subtitle1: "16px",
      subtitle2: "14px",
      button: "14px",
      caption: "12px",
    },
    colors: {
      primary: "#1c0c5b",
      ...colors,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
