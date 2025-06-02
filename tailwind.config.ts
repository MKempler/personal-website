import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-share-tech-mono)", "sans-serif"], // Default sans-serif to Share Tech Mono
        mono: ["var(--font-share-tech-mono)", "monospace"], // Default mono to Share Tech Mono
        orbitron: ["var(--font-orbitron)", "sans-serif"], // Specific class for Orbitron
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add cyberpunk color palette (example)
      colors: {
        'cyber-bg': '#0D0F12',         // Very dark, almost black
        'cyber-surface': '#1A1D24',    // Slightly lighter for cards/surfaces
        'cyber-primary': '#00FFFF',   // Cyan/Aqua (glowing accent)
        'cyber-secondary': '#FF00FF', // Magenta (another glowing accent)
        'cyber-accent': '#FFFF00',    // Yellow (for highlights)
        'cyber-text-dim': '#7F8C9A',  // Dimmed text
        'cyber-text': '#D0D6DB',      // Main text
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-pulse': 'subtlePulse 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(0, 255, 255, 0.3)' }, // cyber-primary glow
          '50%': { boxShadow: '0 0 25px 8px rgba(0, 255, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 