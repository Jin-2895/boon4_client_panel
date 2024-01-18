/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        left: "0 20px 13px rgba(0, 0, 0, 0.1)",
        right: "0px 1px 35px rgba(220, 224, 249, 0.43)",
        up: "0 20px 13px rgba(0, 0, 0, 0.05)",
        down: "0px 5px 30px rgba(220, 224, 249, 0.3)",
        allSide: "0 20px 13px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};

// screens: {
//   xs: { max: "639px" },
//   // => @media (min-width: 320px and max-width: 639px) { ... }
//   sm: { min: "640px", max: "767px" },
//   // => @media (min-width: 640px and max-width: 767px) { ... }
//   md: { min: "768px", max: "1023px" },
//   // => @media (min-width: 768px and max-width: 1023px) { ... }
//   lg: { min: "1024px", max: "1279px" },
//   // => @media (min-width: 1024px and max-width: 1279px) { ... }
//   xl: { min: "1280px", max: "1535px" },
//   // => @media (min-width: 1280px and max-width: 1535px) { ... }
//   xxl: { min: "1536px" },
// },
