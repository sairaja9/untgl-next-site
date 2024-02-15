/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#000000",
        "blue": "#13273d",
        "grey": "#c2c8cc",
        "tan": "#e7d8cb",
        "white": "#ffffff",
        "transparent": "transparent",
      },
      fontFamily: {
        heading: ['var(--font-italiana)'],
        body: ['var(--font-mate)'],
      }
    },
  },
  plugins: [],
};
