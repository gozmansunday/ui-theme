import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.2rem",
        sm: "1.5rem",
        smd: "1.8rem",
        md: "2rem",
      },
    },

    screens: {
      xs: "356px",
      sm: "400px",
      smd: "532px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    extend: {
      colors: {
        
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant('trigger', [
        '@media (min-width: 976px) { &:hover }',
        '&:active'
      ]);
      addVariant('group-trigger', [
        ':merge(.group):active &',
        '@media (min-width: 976px) { :merge(.group):hover & }'
      ])
      addVariant('peer-trigger', [
        ':merge(.peer):active ~ &',
        '@media (min-width: 976px) { :merge(.peer):lg:hover ~ & }'
      ])
    })
  ],
};

export default config;
