/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {},
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
};
