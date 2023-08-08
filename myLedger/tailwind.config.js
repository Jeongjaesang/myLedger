/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '350px',

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
