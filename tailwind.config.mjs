/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        colorbg: "#f2f2f2",
        darkcolorbg: "#121212",
        primary: "#542c6d",
        secondary: "#b988d8",
        accent: "#782caa",
      },
    },
  },
  plugins: [],
};
