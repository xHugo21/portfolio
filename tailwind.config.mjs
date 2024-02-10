/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A233B",
        secondary: "#DDD8D5",
        tertiary: "#02586F",
        quaternary: "#99CAD9",
      },
    },
  },
  plugins: [],
};
