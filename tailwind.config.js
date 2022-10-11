/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          eateryBrown: "#7F4726",
          eateryLightBrown: "#F1ECE8",
          smokehouseBrown: "#6B1E1B",
          smokehouseDarkRed: "#6E2724",
        },
      },

      animation: {
        popup: "popup 0.5s ease-in-out",
      },
      keyframes: {
        popup: {
          "0%": {
            display: "none",
            opacity: 0,
          },

          "3%": {
            display: "block",
            opacity: 0,
          },

          "100%": {
            display: "block",
            opacity: 1,
          },
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "arial"],
      title: ["'Diplomata SC'", "arial"],
    },
  },
  plugins: [],
};
