import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'bg-pulse': {
          '0%': { backgroundColor: '#ECF8FB' },
          '50%': { backgroundColor: '#EFEFEF' },
          '100%': { backgroundColor: '#ECF8FB' },
        },
      },
      animation: {
        'bg-pulse': 'bg-pulse 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}