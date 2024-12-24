/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
      // bg-CUSTOM = bg-img-oriane => utiliser cette classe dans le component 
        'img-oriane': "url('/images/portrait.png')",
      },
      colors: {
        // Échelle de violet pleine
        'white-purple': 'hsl(287, 100%, 96%)',   // #FBECFF 
        'light-purple': 'hsl(289, 21%, 81%)',    // #D4C3D8  
        'medium-purple': 'hsl(264, 25%, 61%)',   // #9783B4 
        'intense-purple': 'hsl(264,46%,27%)',  // #402666
        'dark-purple': 'hsl(266, 75%, 9%)',     // #150628

        // Échelle de violet avec transparence
        'white-purple-25': 'hsl(287, 100%, 96%, 0.25)',   // #FBECFF 
        'light-purple-50': 'hsl(289, 21%, 81%, 0.5)',     // #D4C3D8  
        'medium-purple-50': 'hsl(264, 25%, 61%, 0.5)',    // #9783B4 
        'intense-purple-70': 'hsl(264,46%,27%, 0.7)',     // #402666
        'dark-purple-90': 'hsl(266, 75%, 9%, 0.9)',      // #150628

        // Échelle de vert pleine
        'white-green': 'hsl(120, 100%, 100%)',      // #FCFFFC
        'light-green': 'hsl(120, 100%, 99%)',       // #DEE8E3
        'medium-green': 'hsl(151, 52%, 67%)',       // #7ED6AC
        'intense-green': 'hsl(187, 38%, 30%)',      // #30646B
        'dark-green': 'hsl(186, 95%, 8%)',          // #012428


        // Échelle de vert avec transparence
        'white-green-25': 'hsl(120, 100%, 100%, 0.25)',     // #FCFFFC
        'light-green-50': 'hsl(120, 100%, 99%, 0.25)',      // #DEE8E3
        'medium-green-50': 'hsl(151, 52%, 67%, 05)',        // #7ED6AC
        'intense-green-70': 'hsl(187, 38%, 30%, 0.7)',      // #30646B
        'dark-green-90': 'hsl(186, 95%, 8%, 0.9)',          // #012428
      },

      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        josefin: ["var(--font-josefin-sans)", "sans-serif"],
      },

      fontSize: {
        '2-5xl': '1.75rem',
      },
    },
  },
  plugins: 
    [require('@tailwindcss/forms')], 
    corePlugins: { preflight: false,},
    tailwindcss: {},
    autoprefixer: {},
};
