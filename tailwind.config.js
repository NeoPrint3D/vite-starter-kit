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
      },
      minHeight: {
        page: "calc(100vh - 6rem)",
      },


    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#0070f3",
        "secondary": "#ff4081",
        "accent": "#eab308",
        "neutral": "#191D24",
        "base-100": "#2A303C",
        "info": "#1d4ed8",
        "success": "#22c55e",
        "warning": "#FBBD23",
        "error": "#dc2626",
      },
    }]
  }
}
