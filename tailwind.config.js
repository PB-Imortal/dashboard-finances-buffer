/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblack: "#19191C",
        bgpurple: "#8E48EC",
        bggrey: "#EFEFF0",
        bgred: "#E4482B",
        bggreen: "#0CB97B",
        bglilac: "#0CB97B",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
