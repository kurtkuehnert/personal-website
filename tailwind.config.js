/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0e12',
        surface: '#0f141a',
        muted: '#9aa7b5',
        accent: '#5cc8ff',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl: '12px'
      }
    },
  },
  plugins: [],
}

