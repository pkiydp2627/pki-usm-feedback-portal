/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B1220',
          900: '#0F1729',
          800: '#141F38',
          700: '#1B2A4A',
          600: '#243560',
        },
        marigold: {
          50: '#FDF6E9',
          100: '#FBEBCC',
          300: '#F0C877',
          400: '#E8A33D',
          500: '#DB8E23',
          600: '#B8721A',
        },
        crimson: {
          50: '#FBEEF1',
          400: '#B4405C',
          500: '#8B1E3F',
          600: '#701731',
          700: '#571025',
        },
        sand: {
          50: '#FBF8F2',
          100: '#FAF7F2',
          200: '#F1EBDD',
        },
        leaf: {
          500: '#2F855A',
          600: '#276749',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        waveform: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='24' viewBox='0 0 120 24'%3E%3C/svg%3E\")",
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,41,0.06), 0 8px 24px -12px rgba(15,23,41,0.18)',
      },
    },
  },
  plugins: [],
};
