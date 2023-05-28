/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#C58011",

          "secondary": "#efa6fc",

          "accent": "#8bf4c7",

          "neutral": "#25212C",

          "base-100": "#FAF9FA",

          "info": "#54A5E3",

          "success": "#118D62",

          "warning": "#C58011",

          "error": "#F27064",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

