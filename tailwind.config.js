/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#1E3E85",
        secondary: "#52B4DA",
        dark: "#0F172A",
        light: "#F6F4FF",
      },

      boxShadow: {
        soft: "0px 10px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.6s ease-out",
        fadeIn: "fadeIn 0.6s ease-out",
      },
    },
  },
  plugins: [],
};