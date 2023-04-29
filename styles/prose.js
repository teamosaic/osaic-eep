import { fluid, inheritProseColor } from '../packages/style-utils'

// Base prose / typography styles
export const base = {

  // Stop prose from specifying it's own color values
  ...inheritProseColor,

  // Make all margins the same, for use in marketing type text.
  '> *': {
    marginTop: '1rem',
    marginBottom: '1rem',
  },

  // Re-apply the margin clearing on first/last
  '> :first-child': { marginTop: 0 },
  '> :last-child': { marginBottom: 0 },

  // Make fluid font sizes based on Cloak styleguide
  h1: {
    fontSize: fluid(100, 70),
    letterSpacing: '-0.07em',
    lineHeight: 1,
    fontWeight: 400,
  },
  h2: {
    fontSize: fluid(70, 50),
    letterSpacing: '-0.07em',
    lineHeight: 1,
    fontWeight: 400,
  },
  h3: {
    fontSize: fluid(50, 36),
    letterSpacing: '-0.06em',
    lineHeight: fluid(55, 40),
    fontWeight: 400,
  },
  h4: {
    fontSize: fluid(36, 28),
    letterSpacing: '-0.03em',
    lineHeight: fluid(40, 32),
    fontWeight: 400,
  },
  h5: {
    fontSize: fluid(28, 20),
    letterSpacing: '-0.02em',
    lineHeight: 1,
    fontWeight: 400,
  },
  h6: {
    fontSize: fluid(28, 14),
    lineHeight: fluid(28, 22),
    fontWeight: 600,
  },
  p: {
    fontSize: fluid(16, 14),
    lineHeight: fluid(24, 22),
  },
}

// Adds font-size relative margins to the elements for marketing use cases as
// well as a larger default text size
export const marketing = {

  h1: {
    marginTop: '0.4em',
    marginBottom: '0.4em',
  },
  h2: {
    marginTop: '0.45em',
    marginBottom: '0.45em',
  },
  h3: {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },
  h4: {
    marginTop: '0.6em',
    marginBottom: '0.6em',
  },
  h5: {
    marginTop: '0.7em',
    marginBottom: '0.7em',
  },
  h6: {
    marginTop: '0.8em',
    marginBottom: '0.8em',
  },
  p: {
    fontSize: fluid(20, 16),
    lineHeight: 1.6,
    marginTop: '0.9em',
    marginBottom: '0.9em',
    opacity: 0.7,
  },

  // Re-apply the margin clearing on first/last
  '> :first-child': { marginTop: 0 },
  '> :last-child': { marginBottom: 0 },

}


// Adds font-size relative margins to the elements for article-style cases
export const article = {

  // Make fluid font sizes based on Cloak styleguide
  h1: {
    marginTop: '0.7em',
    marginBottom: '0.7em',
  },
  h2: {
    marginTop: '0.8em',
    marginBottom: '0.8em',
  },
  h3: {
    marginTop: '0.9em',
    marginBottom: '0.9em',
  },
  h4: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  h5: {
    marginTop: '1.1em',
    marginBottom: '1.1em',
  },
  h6: {
    marginTop: '1.3em',
    marginBottom: '1.3em',
  },
  p: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },

  // Re-apply the margin clearing on first/last
  '> :first-child': { marginTop: 0 },
  '> :last-child': { marginBottom: 0 },

}
