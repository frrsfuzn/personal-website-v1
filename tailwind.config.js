/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        sliding: {
          "5%": {
            right: "100%",
            left: "0"
          },
          "25%": {
            right: "0",
            left: "0"
          },
          "75%": {
            right: "0",
            left: "0"
          },
          "95%": {
            right:"0",
            left: "100%"
          }
        }
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "sliding-width": "sliding 3s infinite"
      }, 
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
