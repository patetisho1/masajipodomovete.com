/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Тъмно зелен (като от Wix снимките) + светла бежова лента
        primary: {
          50: '#f0f4ef',
          100: '#dce5da',
          200: '#b8cbb5',
          300: '#8fa98b',
          400: '#6b8a66',
          500: '#4a684c',
          600: '#3d5a3f',
          700: '#324a34',
          800: '#2a3d2b',
          900: '#243325',
        },
        band: '#f5ede4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
