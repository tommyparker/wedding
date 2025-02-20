/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'spot1': '#df6339',
      'spot2': '#f5ca4c',
      'spot3': '#90abad',
      'spot4': '#bd8f4f',
      'spot5': '#c8d5d6',
      'white': '#ffffff',
      'paper': '#ece3cf',
      'paper2': '#efdaa3',
      'paper3': '#f6f1e7',
      'black': '#2a2b1d',
      'ink1': '#3c1710',
      'ink2': '#8d542e',
    },
    fontFamily: {
      display: ['WS MODERN EPHEMERA', 'sans-serif'],
      sans1: ['WS WARBLER', 'sans-serif'],
      sans2: ['WS SPIRITIST', 'sans-serif'],
      serif1: ['SchoolBook', 'serif'],
      serif2: ['SchoolBook-Condensed', 'serif'],
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

