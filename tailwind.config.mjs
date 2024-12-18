/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        josefin: ["var(--font-josefin-sans)", "sans-serif"],

      colors: {
          // Échelle de violet pleine
          "white-purple": "hsla(276, 100%, 95%, 1)", // #FBECFF
          "light-purple": "hsla(276, 32%, 80%, 1)",  // #D4C3D8
          "medium-purple": "hsla(276, 25%, 62%, 1)", // #9783B4
          "intense-purple": "hsla(276, 38%, 40%, 1)",// #6C3D6D
          "dark-purple": "hsla(276, 38%, 20%, 1)",  // #301C4C
  
          // Échelle de violet avec transparence
          "white-purple-25": "hsla(276, 100%, 95%, 0.25)", 
          "light-purple-50": "hsla(276, 32%, 80%, 0.5)",
          "medium-purple-50": "hsla(276, 25%, 62%, 0.5)",
          "intense-purple-70": "hsla(276, 38%, 40%, 0.7)",
          "dark-purple-90": "hsla(276, 38%, 20%, 0.9)",
  
          // Échelle de vert pleine
          "white-green": "hsla(120, 100%, 98%, 1)", // #FCFFFC
          "light-green": "hsla(144, 34%, 90%, 1)",  // #DEEDE5
          "medium-green": "hsla(154, 47%, 68%, 1)", // #7ED5AC
          "intense-green": "hsla(186, 36%, 30%, 1)",// #306468
          "dark-green": "hsla(186, 38%, 20%, 1)",  // #244450
  
          // Échelle de vert avec transparence
          "white-green-25": "hsla(120, 100%, 98%, 0.25)",
          "light-green-50": "hsla(144, 34%, 90%, 0.5)",
          "medium-green-50": "hsla(154, 47%, 68%, 0.5)",
          "intense-green-70": "hsla(186, 36%, 30%, 0.7)",
          "dark-green-90": "hsla(186, 38%, 20%, 0.9)",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
