import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F5",
        ink: {
          DEFAULT: "#12283D",
          light: "#25415A",
        },
        pine: {
          DEFAULT: "#2F6F62",
          dark: "#204A41",
          light: "#DCEAE5",
        },
        amber: {
          DEFAULT: "#E8A33D",
          dark: "#C7841F",
        },
        line: "#DDD8CC",
        stone: "#6E6A5F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        pulseLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulseLine: "pulseLine 2.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
