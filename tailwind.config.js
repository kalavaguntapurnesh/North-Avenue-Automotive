/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        colorOne: "#59d8fd",
        colorTwo: "#12477a",
      },
    },
  },
  plugins: [],
};
