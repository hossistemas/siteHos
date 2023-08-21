/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      backgroundImage: {
        'fundocta': "url('/public/fundoCta.png')",
      },
      colors:{
        'grafite': '#212121',
        'laranja': '#FF6251',
        'magenta': '#FF4358',
        'darker': '#4C1813',
        'vermelho': '#DA4536',
        'white': '#FBFBFB',
        'fundo': '#F7F7F7',
        'cinza': '#727070',
        'degradeUm': '#E34338',
        'degradeDois': '#D02C1C',
        'marcacao': '#E0E0E0',
        'fundofooter': '#F1F1F1',
        'fundoescuro': '#E3E3E3',
        'sub': '#B0392E',
        'subdark': '#621F18',
      },
      dropShadow: {
        'botao': [
            '-3px -5px 8px rgba(255, 255, 255, 0.9)',
            '4px 8px 8px rgba(0, 0, 0, 0.3)'
        ],
        'formulario': [
          '-3px -5px 8px rgba(0, 0, 0, 0.1)',
          '4px 8px 8px rgba(0, 0, 0, 0.2)'
      ]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
