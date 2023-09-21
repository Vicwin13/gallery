/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,jsx}"],
  theme: {
    colors: {
      primary: "#E6E6E6",
      secondary: "#FFFFFF",
      accent: "#6A0572",
    },
    extend: {
      screen: {
        phone: "535px",
      },
    },
  },

  plugins: [],
};
