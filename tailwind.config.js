/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        mdt: "946px",
        lgt: "1070px",
        xlg: "1335px",
        xl: "1440px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
