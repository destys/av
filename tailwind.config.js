/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px', 
      'xl': '1440px',
      '2xl': '1900px',
    },
    extend: {
      backgroundImage: {
        'primary': 'linear-gradient(77deg, #EFF3F5 16.98%, rgba(255, 255, 255, 0.00) 52.37%),#FFF',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'large': '30px',
        'x-large': '60px',
      },
      margin: {
        'medium': '15px',
        'space-large': '35px',
        'x-large': '60px',
      },
      padding: {
        'medium': '15px',
        'large': '35px',
        'x-large': '60px',
        'x2-large': '95px',
      },
      gap: {
        'medium': '15px',
        'space-large': '35px',
        'x-large': '60px',
      },
      colors: {
        "navy-100": "#F4FAFF",
        "navy-200": "#B2DAFF",
        "navy-300": "#70BAFF",
        "navy-400": "#2D9BFF",
        "navy": "#007AEA",
        "navy-600": "#006ACB",
        "navy-700": "#005AAD",
        "navy-800": "#004A8E",
        "navy-900": "#003A70",
        "sapphire": "#062847",
        "harlequin": "#28C800",
        "lynch-100": "#F1F3F5",
        "lynch-200": "#CDD4DC",
        "lynch-300": "#A9B6C2",
        "lynch": "#64798D",
        "lynch-700": "#4B5A69",
        "lynch-800": "#3E4B57",
        "danger": "#D22F27",
      },
      letterSpacing: {
        'little': '-0.48px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
