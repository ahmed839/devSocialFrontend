/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // 👈 import it

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  plugins: [daisyui], // 👈 add the plugin here
};
