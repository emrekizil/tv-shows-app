/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        f1: "#003459",
        f2: "#ffffff",
        f3: "#00171f",
        f4: "#007ea7",
        f5: "#00a8e8",
      },
    },
  },
  plugins: [],
};
