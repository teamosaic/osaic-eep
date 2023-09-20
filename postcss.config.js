const { fluid } = require('./packages/style-utils/dist/fluid')

// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    'postcss-functions': {
      functions: {
        fluid
      }
    },
    'postcss-import': {},
    'postcss-easings': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
