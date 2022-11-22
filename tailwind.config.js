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
        '200': '38rem',
      },
      height: {
        '82': '82vh',
        '80%': '80%',
        '600px': '600px',

      },
      minHeight: {
        '82': '74.4vh',
        '72vh': '78vh',
        '81': '81.7vh',
        '38rem': '38rem',
      },
      maxHeight: {
        '548px': '548px',
        '400px': '400px',
        '30rem': '30rem',
      },
      minWidth: {
        '20rem': '20rem',
      },
      maxWidth: {
        '40rem': '40rem',
      },
      fontSize: {
        '10': '10rem', 
      },
      screens: {
        '2xl': '1920px',
      } 
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

