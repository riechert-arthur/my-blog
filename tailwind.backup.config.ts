import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
				"wtf-hero": "url('/images/thumbnails/wtf_hero.jpg')",
				"hello-hero": "url('/images/thumbnails/hello_hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search-icon": "url('/icons/search_icon.svg')",
        "landing-hero": "url('/images/landing_hero_image.jpg')",
        "image-cover-film": "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      },
      backgroundSize: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
export default config;
