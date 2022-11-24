/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 98%)",
        gray: "hsl(0, 0%, 41%)",
        whiteblack: "hsl(0, 0%, 94%)",
        black: "hsl(0, 0%, 8%)"
      },
    },
  },
  plugins: [],
}
