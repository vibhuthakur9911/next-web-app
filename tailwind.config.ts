import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "#509421",
        themeTextBlack : '#2A2A2A',
        darkCustomGreen: '#335E15',
        themeGreyBg: '#ECF2E9',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Add the Playfair Display font
        workSans: ['"Work Sans"','sans-serif'], // Add the Playfair Display font
        ubanTu: ['"Ubuntu"','sans-serif'], // Add the Playfair Display font
      },
    },
  },
  plugins: [],
} satisfies Config;
