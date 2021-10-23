module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './dist/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Be VietNam Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
