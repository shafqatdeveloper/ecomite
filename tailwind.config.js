/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shakeThreeTimes: "shakeThreeTimes 2.5s ease-in-out infinite", // 1.5s for shaking + 2s delay
      },
      keyframes: {
        shakeThreeTimes: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%": { transform: "translateX(5px)" },
          "70%": { transform: "translateX(0)" }, // End of shaking, then pause
        },
      },
    },
  },
  plugins: [],
};
