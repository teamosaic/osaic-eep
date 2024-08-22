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

  // Clear default max-width
  maxWidth: 'none',

  // Break words if necessary
  overflowWrap: 'anywhere',

  // Make fluid font sizes based on Cloak styleguide
  h1: {
    fontSize: fluid(90, 76),
    lineHeight: fluid(90, 76),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  h2: {
    fontSize: fluid(80, 64),
    lineHeight: fluid(88, 64),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  h3: {
    fontSize: fluid(72, 42),
    lineHeight: fluid(72, 42),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  h4: {
    fontSize: fluid(55, 32),
    lineHeight: fluid(63.25, 40),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  h5: {
    fontSize: fluid(42, 26),
    lineHeight: fluid(50.4, 29.9),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  h6: {
    fontSize: fluid(30, 20),
    lineHeight: fluid(37.5, 25),
    fontWeight: 400,
    fontFamily: 'var(--font-marselis)'
  },
  p: {
    fontSize: fluid(16, 14),
    lineHeight: fluid(24, 22),
    fontFamily: 'cordale'
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
  },

  // Re-apply the margin clearing on first/last
  '> :first-child': { marginTop: 0 },
  '> :last-child': { marginBottom: 0 },

  'a:not(.btn)': {
    textDecoration: 'underline',
    textDecorationColor: '#CBFA40'
  },

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
