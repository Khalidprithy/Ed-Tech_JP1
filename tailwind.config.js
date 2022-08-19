/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6b7280",

          "secondary": "#0369a1",

          "accent": "#37CDBE",

          "neutral": "#9ca3af",

          "base-100": "#f3f4f6",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}