import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070913',
        foreground: '#f8fafc',
        card: {
          DEFAULT: 'rgba(15, 23, 42, 0.6)',
          hover: 'rgba(30, 41, 59, 0.8)',
        },
        primary: {
          DEFAULT: '#06b6d4',
          glow: '#22d3ee',
          dark: '#0891b2',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          glow: '#a78bfa',
        },
        emerald: {
          glow: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(139, 92, 246, 0.8))' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
