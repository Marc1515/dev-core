import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle, rgba(92, 70, 156, 1) 0%, rgba(29, 38, 125, 1) 35%, rgba(12, 19, 79, 1) 100%)",
        "gradient-200deg":
          "linear-gradient(200deg, rgba(92, 70, 156, 1) 0%, rgba(29, 38, 125, 1) 35%, rgba(12, 19, 79, 1) 100%)",
        "gradient-custom":
          "linear-gradient(200deg, rgba(119, 176, 170, 1) 0%, rgba(19, 93, 102, 1) 17%, rgba(0, 60, 67, 1) 35%)",
        "gradient-200deg-deepblue":
          "linear-gradient(200deg, rgba(83, 92, 145, 1) 0%, rgba(27, 26, 85, 1) 26%, rgba(7, 15, 43, 1) 52%)",
        "radial-custom":
          "radial-gradient(circle, rgba(83, 92, 145, 1) 0%, rgba(27, 26, 85, 1) 22%, rgba(7, 15, 43, 1) 41%)",
        "radial-darkblue":
          "radial-gradient(circle, rgba(7, 15, 43, 1) 53%, rgba(27, 26, 85, 1) 79%, rgba(83, 92, 145, 1) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
