/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          primary: "#0FCFEC",
          "primary-content": "#919191",
          secondary: "#E91E63",
          "secondary-content": "#DDDDDD",
          accent: "#50B446",
          "accent-content": "#DDDDDD",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
