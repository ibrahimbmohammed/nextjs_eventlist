

const plugin = require('tailwindcss/plugin')


module.exports = plugin.withOptions(() => {
  return function ({ addUtilities, theme }) {
    addUtilities({
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl',
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      },
      '.text-orientation': {
        textOrientation: 'upright'
      },
      '.text-gradient': {
        background: 'linear - gradient(to right, #30CFD0 0 %, #330867 100 %)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
      },
      '.content-area': {
        height: `calc(100vh - 4rem)`
      },
      '.my-shadow': {
        boxShadow: "1px 3px 8px -3px rgba(255,255,255,0.37)",
        webkitBoxShadow: "1px 2px 8px -3px rgba(255,255,255,0.37)",
        mozBoxShadow: "1px 2px 8px -3px rgba(255,255,255,0.37)"
      },
      '.myMax': {
        height: "max-content"
      },
      '.cus-width': {
        width: "70vw"
      },
      '.mflex': {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      '.logomenu': {
        display: 'visible',
        height: '8rem',
        '&:hover': {
          display: 'hidden'
        }
      }


    })
  }
})



 







