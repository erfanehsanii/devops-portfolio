import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        panel: "#101c2e",
        cyan: "#4de3c1",
      },
      boxShadow: {
        glow: "0 0 50px rgba(77, 227, 193, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
