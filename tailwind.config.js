/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5cc442",
        
"secondary": "#E3E5F2",
        
"accent": "#1683ff",
        
"neutral": "#19182A",
        
"base-100": "#ffffff",
        
"info": "#AACEE4",
        
"success": "#85E0A6",
        
"warning": "#AA5903",
        
"error": "#F31625",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

