/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF4F5',
          100: '#FBE6EB',
          200: '#F4C8D2',
          300: '#E99DB0',
          400: '#D56681',
          500: '#B83253',
          600: '#941B37',
          700: '#751128', // Primary deep Indian maroon
          800: '#5A0B1E', // Royal imperial maroon
          900: '#420614', // Deepest velvet maroon
          950: '#2A030C',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF5EC', // Primary Indian silk ivory / cream
          200: '#F3E8D3', // Sandstone cream
          300: '#E8D5B5',
          400: '#D9BC8F',
          500: '#C79F67',
        },
        gold: {
          50: '#FDFBF4',
          100: '#FAF3DE',
          200: '#F3E4B5',
          300: '#E9CD83',
          400: '#DBB353',
          500: '#C59B27', // Antique temple gold
          600: '#A77D18',
          700: '#825F11',
        },
        leaf: {
          50: '#F0F9F4',
          100: '#DCF1E5',
          500: '#2D6A4F',
          600: '#1B4332',
        },
        // Backwards compatibility aliases to preserve components
        sand: {
          50: '#FFFDF9',
          100: '#FAF5EC',
          200: '#F3E8D3',
        },
        crimson: {
          50: '#FDF4F5',
          400: '#D56681',
          500: '#751128',
          600: '#5A0B1E',
          700: '#420614',
        },
        marigold: {
          50: '#FAF3DE',
          100: '#F3E4B5',
          300: '#E9CD83',
          400: '#DBB353',
          500: '#C59B27',
          600: '#A77D18',
        },
        ink: {
          600: '#751128',
          700: '#5A0B1E',
          800: '#420614',
          900: '#2A030C',
          950: '#1D0208',
        },
      },
      fontFamily: {
        tamil: ['"Noto Serif Tamil"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        display: ['"Fraunces"', '"Cinzel"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 6px -1px rgba(90, 11, 30, 0.08), 0 10px 28px -6px rgba(90, 11, 30, 0.12)',
        'card-hover': '0 4px 12px -2px rgba(90, 11, 30, 0.12), 0 18px 36px -8px rgba(90, 11, 30, 0.18)',
        gold: '0 0 18px rgba(197, 155, 39, 0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
