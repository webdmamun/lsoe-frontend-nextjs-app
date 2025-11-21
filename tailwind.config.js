/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#012759',
          secondary: '#26b2e6',
          accent: '#54a147',
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        lsoetheme: {
          primary: "#012759",
          "primary-content": "#ffffff",
          secondary: "#26b2e6",
          "secondary-content": "#ffffff",
          accent: "#54a147",
          "accent-content": "#ffffff",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
