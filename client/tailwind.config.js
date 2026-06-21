/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: '#C9943A', light: '#E8B86D', dim: '#A67C2E' },
        navy:  { DEFAULT: '#0a0e1a', card: '#111827', deep: '#060a12' },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer:      'shimmer 4s linear infinite',
        float:        'float 6s ease-in-out infinite',
        scrollBounce: 'scrollBounce 1.5s ease infinite',
        spin:         'spin 0.8s linear infinite',
      },
      keyframes: {
        shimmer:      { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        float:        { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        scrollBounce: { '0%,100%': { transform: 'translateY(0)', opacity: '1' }, '60%': { transform: 'translateY(10px)', opacity: '0.3' } },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
