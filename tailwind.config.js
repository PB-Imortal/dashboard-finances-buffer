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
        bglilac: "#6816D6",
        txwhite: "EFEFF0",
        bordergrey: "#DFDFE0"
      },
      fontFamily: {
        inter: ["Inter"],
      },
      screens: {
        md: "767px",
        sm: "320px",
      },
    },
  },
  plugins: [],
};
