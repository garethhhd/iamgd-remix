module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000100",
        primary: "#4CC1AA",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#4CC1AA",
            },
            h2: {
              color: "#4CC1AA",
            },
            h3: {
              color: "#4CC1AA",
            },
            h4: {
              color: "#4CC1AA",
            },
            h5: {
              color: "#4CC1AA",
            },
            a: {
              color: "#d1d5db",
              "&:hover": {
                color: "#4CC1AA",
              },
            },
            pre: {
              backgroundColor: "#1d262f",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
