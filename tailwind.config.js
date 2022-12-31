module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        deep_orange_50: "#fbe6dc",
        blue_A400: "#1877f2",
        black_900_3f: "#0000003f",
        green_500: "#4caf50",
        teal_300: "#41b4ae",
        black_900: "#000000",
        deep_orange_502: "#ff5d24",
        yellow_800: "#f79e1b",
        orange_50_cc: "#fff5e0cc",
        deep_orange_500: "#ff6828",
        red_A701: "#eb001b",
        deep_orange_A400: "#ff3d00",
        red_A700: "#ff0000",
        deep_orange_500_4c: "#ff68284c",
        gray_500: "#a0a0a0",
        blue_700: "#1976d2",
        amber_500: "#ffc107",
        orange_A700: "#ff5f00",
        bluegray_100: "#d6d1d1",
        yellow_50: "#fef9ee",
        yellow_50_cc: "#fef9eecc",
        yellow_A700: "#ffdc00",
        gray_100: "#f0f2f5",
        deep_orange_500_e5: "#ff6828e5",
        bluegray_900: "#2a2848",
        cyan_300: "#62d3cd",
        white_A700: "#ffffff",
        deep_orange_500_cc: "#ff6828cc",
      },
      borderRadius: {
        radius1: "1px",
        radius2: "2px",
        radius10: "10px",
        radius15: "15px",
        radius151: "1.5px",
        radius20: "20px",
        radius26: "26px",
        radius30: "30px",
        radius32: "32px",
        radius35: "35px",
        radius38: "38px",
        radius50: "50%",
        radius195: "19.5px",
        radius265: "26.5px",
        radius275: "27.5px",
        radius335: "33.5px",
        radius473: "47.3px",
        radius1531: "15.31px",
      },
      borderWidth: { bw3: "3px", bw5: "5px" },
      boxShadow: {
        bs5: "0px 5px  4px 0px #0000003f",
        bs: "3px 5px  4px 0px #0000003f",
        bs3: "4px 4px  4px 0px #0000003f",
        bs4: "5px 5px  4px 0px #0000003f",
        bs1: "10px 10px  4px 0px #0000003f",
        bs2: "10px 10px  5px 0px #0000003f",
      },
      fontFamily: {
        ubuntu: "Ubuntu",
        poppins: "Poppins",
        telex: "Telex",
        tomorrow: "Tomorrow",
        merriweather: "Merriweather",
        akayakanadaka: "Akaya Kanadaka",
        tirobangla: "Tiro Bangla",
        baloo1: "Baloo",
        baloo: "Baloo 2",
        baloobhai: "Baloo Bhai 2",
      },
      textShadow: { ts: "20px 4px  4px #0000003f" },
      letterSpacing: {
        ls3: "3px",
        ls4: "4px",
        ls70: "70px",
        ls80: "80px",
        ls90: "90px",
        ls108: "108px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
