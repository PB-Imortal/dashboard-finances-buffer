/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblack: "#19191C",
        bgwhite: "#FFFFFF",
        bgpurple: "#8E48EC",
        bggrey: "#EFEFF0",
        bgred: "#E4482B",
        bggreen: "#0CB97B",
        bglilac: "#0CB97B",
        txwhite: "#EFEFF0",
        txblack: "#19191C",
        borderln: "#DFDFE0",
        txinput: "#68686E",
        txtpurple: "#4E01B4",
        txtred: "#E02244",
        txtgreen: "#0CB97B",
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
