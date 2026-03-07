/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Estos colores se sobrescriben dinámicamente desde client-config
        primary: '#2563EB',
        secondary: '#10B981',
        gold: '#C9A84C',
        deep: '#0a0a0a',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
