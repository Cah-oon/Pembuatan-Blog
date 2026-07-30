import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#dceeff',
          500: '#2563eb',
          600: '#1e4ed8',
          700: '#1736a8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
