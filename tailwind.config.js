/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary: "#72b360",
          secondary: "#183445",
        },
      fontFamily: {
        poppins: ["Poppins", "san-serif"]
      }
    },
  },
  plugins: [],
};


