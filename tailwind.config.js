/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Poppins, sans-serif",
        ubuntu: "Ubuntu, sans-serif",
        nunito: "Nunito, sans-serif",
        krona: "Krona One, sans-serif",
      },
      colors: {
        black: "#1D1D1B",
        yellow: "#FDCD50",
        white: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
