/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html, css, js}"],
  theme: {
    fontFamily:{
      alfa:["Alfa Slab One", "serif"],
      DMsans: ["DM Sans", "serif"],
    },
    extend: {
      colors:{
        "rose": "rgba(255, 132, 130, 1)",
        "black": "rgba(43, 43, 43, 1)",
        "white": "rgba(255, 255, 255, 1)",
        "fuchsia": "rgba(190, 99, 97, 1)",
        "yellow": "rgba(255, 242, 221, 1)"
      },
      fontSize:{
        "H1": "72px",
        "H2": "56px",
        "H3": "40px",
        "H4": "24px",
        "H5": "20px",
      },
      width:{
        "vw50": "50vw",
        "vw86": "86vw"
      }

    },
  },
  plugins: [],
}

