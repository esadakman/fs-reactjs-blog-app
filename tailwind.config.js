/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#050f24",
        // "secondary" : "#245d5b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '48': '48%',
        '80': '80vh',
      },
      height: {
        '82': '82vh',
        // '84': '84vh',
      },
      fontSize: {
        '10': '10rem', 
      } 
    },
  },
  plugins: [],
};
