/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        colortext: "#130e16",
        colorbg: "#efe8f3",
        primary: "#542c6d",
        secondary: "#b988d8",
        accent: "#782caa",
      },
    },
  },
  plugins: [],
};
