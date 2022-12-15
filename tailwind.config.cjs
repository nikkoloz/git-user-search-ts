/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "xxsm": "11px",
      "xsm": "13px",
      'xsm14': "14px",
      'sm': '15px',
      'n': "16px",
      'base': '18px',
      'lg': "22px",
      'xl': "26px",
      '2xl': '28px',
    },
    extend: {
      colors: {
        "main-bg-light": "#F2F2F2",
        "main-blue": "#0079FF",
        "main-blue-light": "#4B6A9B",
        "main-gray": "#4B6A9B",
        "main-gray2": "#697C9A",
        "main-gray-dark": "#2B3442",
        "main-gray-light": "#F6F8FF",
        "main-red": "#F74646",

        "main-dark-bg": "#141D2F",
        "main-dark-light": "#1E2A47",
      },
      screens: {
        'sm400': '400px',
        'md800': '800px',
      },

    },
  },
  plugins: [],
};
