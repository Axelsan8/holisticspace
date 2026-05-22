import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        holistic: {
          50: '#f5f7fa',
          100: '#eef2f7',
          200: '#e0e7f1',
          300: '#c7d5e3',
          400: '#a8bbd2',
          500: '#7a94b8',
          600: '#5a7093',
          700: '#44536f',
          800: '#2d3a4f',
          900: '#1a2332',
        },
        sage: {
          50: '#f6faf8',
          100: '#edf5f1',
          200: '#d4e8e0',
          300: '#b1d4c7',
          400: '#7fbaaa',
          500: '#6aa89c',
          600: '#4d8f7e',
          700: '#3a6d62',
          800: '#2d544c',
          900: '#1f3d37',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config