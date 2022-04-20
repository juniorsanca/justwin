module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
        // Add quotes:
      'strasua': ['Strasua', 'sans-serif'],

      'sans': ['"Exo 2"'],
      'sans': ['Exo\\ 2'],
    },
    extend: {
      spacing: { '5px': '5px', }
    },
  },
  plugins: [],
}
