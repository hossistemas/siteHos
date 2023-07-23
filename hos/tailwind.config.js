
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'tablet':'1024px',
    },
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
      animation: {
        'slide-down': 'slideDown 0.5s ease-in',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      colors:{
        'grafite': '#212121',
        'laranja': '#FF6251',
        'magenta': '#FF4358',
        'darker': '#4C1813',
        'vermelho': '#DA4536',
      }
    },
  },
  plugins: [],
};
