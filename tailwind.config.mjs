const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interDisplayBold: "InterDisplay-Bold",
        interDisplayMedium: "InterDisplay-Medium",
        interDisplayRegular: "InterDisplay-Regular",
        interDisplaySemiBold: "InterDisplay-SemiBold",
      },
      colors: {
        background: {
          DEFAULT: "#051215",
          // 100: "#191A1B",
          // 200: "#010102",
          // 300: "#1E2230",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          100: "#E6E6E6",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          100: "#B2B2B2",
          200: "#BEEC09",
          300: "#4F6204",
          400: "#C7E84C",
        },
        secondary: {
          DEFAULT: "#A1FFFF",
        }
      },
    },
  },
  plugins: [heroui()],
};
