/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDE6ED",
        secondary: "#9DB2BF",
        tertiary: "#526D82",
        quaternary: "#27374D",
      },
    },
  },
  plugins: [],
};
