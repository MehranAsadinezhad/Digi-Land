/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8083FF",
        secondary: "#c7d2fe",
        third: "#d1d5db",
        dark: "#030712",
        medium: "#f3f4f6",
        grey: "#44403c",
        lightGrey: "#e5e7eb",
      },
      fontFamily: {
        vazir: "Vazir",
        cody: "Codystar",
        shabnam: "Shabnam",
        shabnamBold: "shabnamBold",
        skranji: "skranji",
        skranjiBold: "skranjiBold",
      },
      screens: {
        sm: "520px",
        // => @media (min-width: 576px) { ... }

        md: "700px",
        // => @media (min-width: 960px) { ... }

        lg: "929px",
        // => @media (min-width: 1440px) { ... }

        xl: "1022px",
        ml: "1311px",

        xxl: "1350px",
      },
    },
  },
  plugins: [],
};
