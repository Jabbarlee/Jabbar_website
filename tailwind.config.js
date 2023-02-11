/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: ["class"],
  theme: {
    extend: {
      width: { "40-r": "40rem", "35-r": "30rem" },

      height: { "40-r": "40rem", "35-r": "30rem" },

      boxShadow: {
        "5xl": "20px 20px 50px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },

      colors: {
        "regal-blue":
          "[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900",
      },

      fontFamily: {
        GreatVibes: ["Great Vibes", " cursive"],
      },

      fontFamily: {
        PlayFair: ["Playfair Display", " serif"],
      },

      fontFamily: {
        GoblineOne: ["Goblin One", " cursive"],
      },

      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
