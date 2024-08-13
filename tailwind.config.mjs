/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customwhite: '#ebebd3',
        customblack: '#1D1E2C',
        primary: '#DDBDD5',
        secondary: '#59656F',
        tertiary: '#AC9FBB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
