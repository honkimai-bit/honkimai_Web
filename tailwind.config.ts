import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kinari: "#F5F0E6",       
        "deep-green": "#244A36", 
        gold: "#B58A3A",         
        "sea-green": "#2D7774",  
        "text-main": "#252522",  
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
