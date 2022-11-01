/** @type {import('tailwindcss').Config} */

module.exports = {
  important: "body",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1890ff",
      },
    },
  },
  plugins: [],
};
