/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)"
      },
      fontFamily: {
        heading: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "sans-serif"
        ],
        body: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.4)"
      },
      // Tailwind's default spacing scale already follows an 8px-based system (0.5rem = 8px).
      // We rely on those spacing utilities (e.g. py-4, py-8, py-16, py-24) to implement the 8px system.
      spacing: {
        // Explicitly document a few commonly used multiples of 8px
        2: "0.5rem", // 8px
        4: "1rem", // 16px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        12: "3rem", // 48px
        16: "4rem", // 64px
        24: "6rem" // 96px
      }
    }
  },
  plugins: []
};

export default config;
