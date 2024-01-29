import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pallet': {
          '50': '#e2eeec',
          '100': '#cde4e2',
          '200': '#b3d5d4',
          '300': '#84c8c8',
          '400': '#488284',
          '500': '#336266',
          '600': '#28484d',
          '700': '#21363b',
          '800': '#1b282c',
          '900': '#161f22',
          '950': '#040606',
        },   
        'pallets': {
          '50': '#f5f8fa',
          '100': '#e9f1f5',
          '200': '#cfe2e8',
          '300': '#b6d3dd',
          '400': '#73abbd',
          '500': '#5291a5',
          '600': '#3f768a',
          '700': '#345f70',
          '800': '#2e505e',
          '900': '#2a4550',
          '950': '#1c2d35',
       },
      
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
  
  
};
export default config;
