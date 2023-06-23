/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', ],
  theme: {
    extend: {
      colors: {
        primary: '#3e912b',
        "light-accent": '#fffdff',
        "dark-accent": "#333333",
      },
      minHeight: {
        'full-window': 'calc(100vh - 4rem)',
        "50vh": '50vh'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ['light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

