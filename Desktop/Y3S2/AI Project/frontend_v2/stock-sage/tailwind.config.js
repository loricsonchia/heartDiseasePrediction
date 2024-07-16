const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
        background: "#030417",
        stockSage: "#FF3600",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      padding: {
        152: "38rem",
      },
      margin: {
        140: "35rem",
      },
    },
  },
  plugins: [],
};
