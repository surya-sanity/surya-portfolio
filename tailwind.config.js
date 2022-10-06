module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark1: "black",
        blue: "#00AEFF",
        pink: "#E000E1",
        purple: "#AC00FF",
      },
      padding: {
        10: "10%",
        20: "20%",
        40: "40%",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        md: { max: "820px" },
        sm: { max: "639px" },
      },
    },
  },

  plugins: [],
};
