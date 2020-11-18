const {
  colors: { black, gray, indigo, white }, // We only use the colours, the rest can be removed.
} = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  theme: {
    colors: {
      black,
      gray,
      indigo,
      white,
    },
  },
}
