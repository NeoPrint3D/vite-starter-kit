/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#ff4081",
        tertiary: "#ff4081",
      },
      minHeight: {
        page : "calc(100vh - 6rem)",
      },


    },
  },
  plugins: [
    require("daisyui")
  ],
}
