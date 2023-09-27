/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1280: "1280px",
      },
      backgroundColor: {
        primary: "#f5f5f5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
