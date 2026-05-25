/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F7F9FC',
          surface: '#EEF3FA',
          elevated: '#E4EAF5',
        },
        accent: {
          DEFAULT: '#1A4480',
          hover: '#143869',
          gold: '#B8882A',
        },
        border: '#D5E0EE',
        text: {
          primary: '#0C1B2E',
          secondary: '#4A6378',
          muted: '#8FA3B8',
        },
        success: '#15803D',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #1A4480 0%, #2D6FA3 100%)',
        'gradient-accent-r': 'linear-gradient(135deg, #2D6FA3 0%, #1A4480 100%)',
        'grid-pattern': 'linear-gradient(rgba(26,68,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,68,128,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 4px 20px rgba(26,68,128,0.18)',
        'glow-violet': '0 4px 20px rgba(45,111,163,0.15)',
        'card': '0 1px 2px rgba(26,68,128,0.04), 0 8px 28px rgba(26,68,128,0.07)',
        'card-hover': '0 4px 8px rgba(26,68,128,0.06), 0 20px 48px rgba(26,68,128,0.11), 0 0 0 1px rgba(26,68,128,0.12)',
        'sm': '0 1px 3px rgba(26,68,128,0.06), 0 2px 8px rgba(26,68,128,0.04)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
