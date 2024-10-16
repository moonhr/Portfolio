import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      aspectRatio: {
        "16/10": "16 / 10",
        "9/16": "9 / 16",
      },
      fontFamily: {
        "cutive-mono": ["Cutive Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
