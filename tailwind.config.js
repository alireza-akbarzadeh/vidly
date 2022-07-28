module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#3D2941",
        bluePrimary: "#0254a9",
        redPrimary: "#ef0c1d",
        darkRedPrimary: "#b01935",
        garyPrimary: "#adb0A5",
        blackPrimary: "#06080b",
        bgSameColor: "#ff515a",
      },
      screens: {
        xss: "150px",
        xs: "375px",
        // => @media (min-width: 420px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "780px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
