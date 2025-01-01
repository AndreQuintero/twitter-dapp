import { defineConfig, defineGlobalStyles } from "@pandacss/dev";


const globalCss = defineGlobalStyles({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html': {
    fontSize: '62.5%'
  },
  'body': {
    fontFamily: 'token(fonts.body)',
    color: 'token(colors.text)'
  }
})


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    extend: {
      tokens: {
        colors: {
          primary: { value: '#0000FF' },
          secondary: { value: '#00CED1' },
          text: { value: '#010001' },
          label: { value: '#FFF'}
        },
        fonts: {
          body: { value: 'var(--font-poppins)' }
        }
      }
    }
  },

  globalCss,

  // The output directory for your css system
  outdir: "styled-system",
});
