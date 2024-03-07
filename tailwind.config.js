export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Moved darkMode property to the correct position
  theme: {
    extend: {
      colors: {
        primary: "#f8981f",
        secondary: "#e54416",
        tertiary: "#f5ede3",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", 
          sm: "3rem", 
        },
      },
    },
  }, 
  plugins: [],
};


