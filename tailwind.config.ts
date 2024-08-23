import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
		colors: {
		  primary: "#0d1b2a",
		  secondary: "#e0e1dd",
		  dark: "#1b263b",
		  middle: "#415a77",
		  bright: "#778da9",
			  },
		fontFamily: {
			sans: ["var(--font-inter)"],
		},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
