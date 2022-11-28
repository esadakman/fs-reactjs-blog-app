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
        48: "48%",
        80: "80vh",
        200: "38rem",
      },
      height: {
        82: "82.2vh",
        "80%": "80%",
        "600px": "600px",
        "480px": "480px",
        "544px": "544px",
      },
      minHeight: {
        "74vh": "74.4vh",
        "72vh": "78vh",
        81: "81.7vh",
        "38rem": "38rem",
        "40px": "40px",
        "20rem": "20rem",
      },
      maxHeight: {
        "700px": "700px",
        "400px": "400px",
        "30rem": "30rem",
      },
      minWidth: {
        "20rem": "20rem",
      },
      maxWidth: {
        "40rem": "40rem",
      },
      fontSize: {
        10: "10rem",
      },
      screens: {
        "2xl": "1920px",
        tall: { raw: "(min-height: 200px)" },
      },
      animation: {
        handshake: "handshake 2s cubic-bezier(0.4, 0, 0.6, 1) 1  ",
      },
      keyframes: {
        handshake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
