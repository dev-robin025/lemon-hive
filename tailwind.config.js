/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#FFC93E",
      secondary: "#725114",
      blue: "#111D5E",
      transparent: "transparent",
      dark: "#0A142F",
      gray: "#0a142e",
      white: "#ffffff",
    },
    screens: {
      mac: { max: "1536px" },
      desktop: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      mobile: { max: "640px" },
    },
  },
  plugins: [],
};
