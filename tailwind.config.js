/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1964px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      brown: "#cf9893ff",
      puce: "#bc7c9cff",
      violet1: "#a96da3ff",
      violet2: "#7a5980ff",
      space: "#3b3b58ff",
    },
    fontFamily: {
      mono: ["var(--font-montserrat)"],
    },
    extend: {
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
