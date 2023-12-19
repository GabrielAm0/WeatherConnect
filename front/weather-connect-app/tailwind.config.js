/** @type {import('tailwindcss').Config} */
module.exports = {
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

