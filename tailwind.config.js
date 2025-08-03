/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'futura': ['Futura', 'Nunito Sans', 'Avenir Next', 'Avenir', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'float-slow': 'float-slow 3s ease-in-out infinite',
        'float-medium': 'float-medium 2.5s ease-in-out infinite',
        'float-fast': 'float-fast 2s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-60px) translateX(60px)' },
          '50%': { transform: 'translateY(0px) translateX(120px)' },
          '75%': { transform: 'translateY(60px) translateX(60px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        'float-medium': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-80px) translateX(80px)' },
          '50%': { transform: 'translateY(0px) translateX(160px)' },
          '75%': { transform: 'translateY(80px) translateX(80px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        'float-fast': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-50px) translateX(50px)' },
          '50%': { transform: 'translateY(0px) translateX(100px)' },
          '75%': { transform: 'translateY(50px) translateX(50px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
} 