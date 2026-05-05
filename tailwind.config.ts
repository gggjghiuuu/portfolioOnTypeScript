/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
      borderWidth: {
        "3": "3px",
      },
      colors: {
        "lies-dark": "#1a0f0a",
        "lies-brown": "#2c1a15",
        "lies-medium": "#3a2821",
        "lies-light": "#4a3429",
        "lies-gold-dark": "#b89b7b",
        "lies-gold": "#d4af37",
        "lies-gold-light": "#e4d5c3",
        "lies-green": "#2c5a2c",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at 30% 50%, var(--tw-gradient-stops))",
      },
      sepia: {
        30: ".3",
      },
    },
  },
  plugins: [],
};
