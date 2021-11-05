module.exports = {
  purge: [
    // "./pages/**/*.{js,jsx}",
    // "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {

          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          350: '#808080',
          200: '#ebedef',
          150: '#F6F8F9',
          100: '#f2f3f5',
        },
        myblue: {
          900: "#15978B",
          800: "#3DA4A0",
          700: "#D9FFFD",
          600: "#FFF5FB",
          500: "#FAFEFD"
        },
        dark: {
          900: "#333726",
          800: "#4c5239",
          300: "#009a9a",
          400: "#ffffff",
          500: "#000000",
        },
        light: {
          900: "#333726",
          800: "#4c5239",
          300: "#ffffff",
          400: "#000000",
          500: "#ffffff",
        },
        limeGreen: {
          900: "#2b9348",
          800: "#55a630",
          300: "#ffffff",
          400: "#000000",
          500: "#CCCC00",
        },
        purple: {
          900: "#240046",
          800: "#5a189a",
          300: "#ffffff",
          400: "#000000",
          500: "#581845",
        },
        maroon: {
          900: "#8c2f39",
          800: "#fcb9b2",
          300: "#ffffff",
          400: "#000000",
          500: "#c8c8c8",
        },
        green: {
          900: "#4c5239",
          800: "#b0bf81",
          300: "#ffffff",
          400: "#000000",
          500: "#6a6c6d",
        },
        brown: {
          900: "#603808",
          800: "#6f4518",
          300: "#ffffff",
          400: "#000000",
          500: "#4100ff",
        },
      },
      spacing: {
        1.9: '0.2rem',
        2.5: '0.6rem',
        29: '7.5rem',
        38: '9rem',
        40: '10rem',
        42: '12rem',
        44: '14rem',
        89: '15rem',
        90: '16rem',
        91: '17rem',
        92: '18rem',
        93: '19rem',
        95: '21rem',
        96: '22rem',
        98: '24rem'


      },
      animation: {
        fade: 'fadeIn  .5s ease-in-out',
        fadeOut: 'fadeOut  .5s ease-out',
        motionSafe: 'motion-safe',
      },

      keyframes: theme => ({
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover', 'focus', 'active'],
      fontWeight: ['hover', 'focus', 'active'],
      textColor: ['visited', 'focus', 'active'],
      scale: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      animation: ['motion-safe'],
      fill: ['hover'],
      stroke: ['hover'],
      outline: ['hover', 'active', 'focus'],
      display: ['hover'],
      height: ["responsive", "hover", "focus", 'group-hover'],
      width: ["responsive", "hover", "focus", 'group-hover'],
      visibility: ["responsive", "hover", "focus", 'group-hover'],
      padding: ["responsive", "hover", "focus", 'group-hover'],
      transform: ['hover', 'group-hover'],
      boxShadow: ["responsive", "hover", "focus", 'group-hover'],
      position: ["responsive", "hover", "focus", 'group-hover'],
      top: ["responsive", "hover", "focus", 'group-hover'],
      bottom: ["responsive", "hover", "focus", 'group-hover'],

    }
  },
  plugins: [
    require('./plugins/shadow'),
    require("tailwindcss"),
    require("autoprefixer"),
    //require("@tailwindcss/ui"),
  ]
}
