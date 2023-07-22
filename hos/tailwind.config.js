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
}
