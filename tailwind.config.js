module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          lightest: "#d4d3d3",
          light: "#999",
          DEFAULT: "#767676",
          dark: "#333",
          darkest: "#1F1E1F"
        },
        orange: "#e1a87a",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Mulish", "sans-serif"],
      },
      keyframes: {
        unfoldIn: {
          "0%": { transform: "scaleY(.005) scaleX(0)" },
          "50%": { transform: "scaleY(.005) scaleX(1)" },
          "100%": { transform: "scaleY(1) scaleX(1)" },
        },
        unfoldOut: {
          "0%": { transform: "scaleY(1) scaleX(1)" },
          "50%": { transform: "scaleY(.005) scaleX(1)" },
          "100%": { transform: "scaleY(.005) scaleX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      gap: {
        5: "5px",
        12: "12px",
        24: "24px",
        36: "36px",
        60: "60px",
      },
      fontSize: {
        base: [
          "15px",
          {
            lineHeight: "30px",
          },
        ],
        secondary: [
            "20px"
        ],
        xs: [
          "10px",
          {
            lineHeight: 1,
          },
        ],
        sm: [
          "12px",
          {
            lineHeight: 1,
          },
        ],
        md: [
          "22px",
          {
            lineHeight: 1.4,
          },
        ],
        lg: [
          "25px",
          {
            lineHeight: 1.2,
            letterSpacing: "1px",
          },
        ],
        xl: [
          "30px",
          {
            lineHeight: 1.4,
          },
        ],
        "2xl": [
          "40px",
          {
            lineHeight: 1.4,
          },
        ],
        "3xl": [
          "55px",
          {
            lineHeight: 1.4,
          },
        ],
      },
      letterSpacing: {
        main: ".5px",
        md: "1.5px",
        lg: "2px",
      },
      flex: {
        2: "2"
      },
      width: {
        16: "16px",
        20: "20px",
        25: "25px",
        30: "30px",
        80: "80px",
        "1/2-18": "calc(50% - 18px)",
      },
      minWidth: {
        "1/2": "50%",
        135: "135px",
        200: "200px",
        300: "300px",
      },
      maxWidth: {
        "1/2-18": "calc(50% - 18px)",
        "4/5": "80%",
        300: "300px",
        400: "400px",
        600: "600px",
        960: "960px",
        1260: "1260px",
      },
      height: {
        2: "2px",
        4: "4px",
        20: "20px",
        25: "25px",
        30: "30px",
        400: "400px",
        850: "850px",
      },
      minHeight: {
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
      },
      maxHeight: {
        500: "500px",
      },
      margin: {
        5: "5px",
        10: "10px",
        20: "20px",
        32: "32px",
        48: "48px",
        50: "50px",
        80: "80px",
        100: "100px",
        150: "150px",
        300: "300px",
      },
      padding: {
        4: "4px",
        9: "9px",
        10: "10px",
        20: "20px",
        40: "40px",
        60: "60px",
        80: "80px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
      },
      boxShadow: {
        avatar: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
      },
      backgroundColor: {
        gray: {
          light: "#f8f8f8",
          dark: "rgba(0,0,0,.04)",
          darkest: "#1F1E1F"
        },
      },
      backgroundImage: {
        avatar: "url('/images/avatar.jpg')",
      },
      backgroundPosition: {
        "top-0": "center 0%",
      },
      animation: {
        modalIn:
          "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        modalOut:
          "unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
      },
      objectPosition: {
        avatar: "center 6%",
      },
      inset: {
        3: "3px",
        11: "11px",
        40: "40px",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
