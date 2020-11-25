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
  variants: {
    extend: {
      ringColor: ['focus'], // The ring-color utilities like ring-green-700
      ringOffsetColor: ['focus'], // The ring-offset-color utilities like ring-offset-green-700
      ringOffsetWidth: ['focus'], // The ring-offset-width utilities like ring-offset-2
      ringOpacity: ['focus'], // The ring-opacity utilities like ring-opacity-50
      ringWidth: ['focus'], // The ring-width utilities like ring-2
    },
  },
}
