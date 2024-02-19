import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo:["Oleo Script", "system-ui"],
        primary:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
