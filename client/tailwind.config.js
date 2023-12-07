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
        secondary2: "#7dde5f",
        secondary1: "#4a8ee0",
        secondary3: "#febb30",
        "over-lay-30": "rgba(0,0,0,0.3)",
        "over-lay-70": "rgba(0,0,0,0.7)",
      },
      maxWidth: {
        600: "600px",
      },
      backgroundImage: {
        "bg-auth":
          "url('https://img.freepik.com/premium-photo/abstract-white-background-with-smooth-lines_476363-276.jpg?w=826')",
      },
    },
  },
  plugins: [],
};
