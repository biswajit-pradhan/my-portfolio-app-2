/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        "blur-in-left": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateX(0)",
          },
        },
        "blur-in-right": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateX(0)",
          },
        },
        "blur-in-up": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateY(0)",
          },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        "blur-in": "blur-in 1s ease-out forwards",
        "blur-in-left": "blur-in-left 1s ease-out forwards",
        "blur-in-right": "blur-in-right 1s ease-out forwards",
        "blur-in-up": "blur-in-up 1s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
