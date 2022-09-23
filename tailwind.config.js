/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          eateryBrown: "#7F4726",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "arial"],
    },
  },
  plugins: [],
};
