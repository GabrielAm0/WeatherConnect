/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      screens: {
        'cel' : '414px',
      },
    },
  },
  plugins: [],
}

