/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F2F2F2",

          secondary: "#BCBCBC",

          accent: "#3554D1",

          font: "#1D1E21",

          "base-100": "#F2F2F2",

          info: "#FFE54A",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#B9B8B8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
