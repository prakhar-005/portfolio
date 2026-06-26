/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0D1117",
          card: "#161B22",
        },
        border: {
          DEFAULT: "#30363D",
        },
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
        },
        text: {
          primary: "#E6EDF3",
          muted: "#8B949E",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};