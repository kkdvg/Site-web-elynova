import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0f172a',
        primary: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
        },
        accent: {
          DEFAULT: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
