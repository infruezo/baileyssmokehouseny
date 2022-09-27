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
    },
    fontFamily: {
      poppins: ["Poppins", "arial"],
      title: ["'Diplomata SC'", "arial"],
    },
  },
  plugins: [],
};
