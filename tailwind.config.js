/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        RoseWhite: "hsl(330, 100%, 98%)",
        DarkCharcoal: "hsl(24, 5%, 18%)",
        Eggshell: "hsl(30, 54%, 90%)",
        LightGrey: "hsl(30, 18%, 87%)",
        WengeBrown: "hsl(30, 10%, 34%)",
        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: " hsl(332, 51%, 32%)",
      },
      fontFamily: {
        YoungSerif: ["Young Serif", "serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
