/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#133E87", 
    
      },
      container:{
      center: true,
      padding: '5rem',
      
    }},
  },
  plugins: [],
}