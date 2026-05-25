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
          DEFAULT: '#09090E',
          surface: '#111118',
          elevated: '#16161F',
        },
        accent: {
          DEFAULT: '#5B6EF7',
          hover: '#4A5CE6',
          violet: '#A259FF',
        },
        text: {
          primary: '#F4F4F8',
          secondary: '#8B8BA7',
          muted: '#5A5A72',
        },
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #5B6EF7 0%, #A259FF 100%)',
        'gradient-accent-r': 'linear-gradient(135deg, #A259FF 0%, #5B6EF7 100%)',
        'grid-pattern': 'linear-gradient(rgba(91,110,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,110,247,0.04) 1px, transparent 1px)',
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
        'glow-accent': '0 0 40px rgba(91,110,247,0.25)',
        'glow-violet': '0 0 40px rgba(162,89,255,0.2)',
        'card': '0 1px 0 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(91,110,247,0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
