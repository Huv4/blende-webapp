/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1964px",
    },
    darkMode: "media",
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      deer: "#e68e51",
      salmon: "#ff4152",
      fox: "#c34e2f",
      graylight: "#f9f9f9",
      graydark: "#3c3c3c",
      graymid: "#474747",
      imagegray: "#91a3ab",
      imagegreen: "#242b2a",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-montserrat-alternates)"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
