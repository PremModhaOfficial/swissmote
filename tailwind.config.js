/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ff4c6c0a",
          200: "#ff4c6c1a",
          300: "#ff4c6c",
        },
        accent: {
          100: "##2c046c",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#f75555",
      },
    },
  },
  plugins: [],
};
