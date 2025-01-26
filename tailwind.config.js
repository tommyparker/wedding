/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'spot1': {
        5: '#e75f3a',
        10: '#e75f3a',
      },
      'spot2': {
        5: '#e75f3a',
        10: '#e75f3a',
      },
      'spot3': {
        5: '#e75f3a',
        10: '#e75f3a',
      },
      'spot4': {
        5: '#e75f3a',
        10: '#e75f3a',
      },
      'white': '#ffffff',
      'paper': '#f7f4ea',
      'black': '#0e0e0e',
      'shade': 'rgba(0,0,0,0.2)',
      'tint': 'rgba(255,255,255,0.2)',
    },
    fontFamily: {
      sans: ['Athletics', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        'height': 'height',
      }
    },
  },
}

