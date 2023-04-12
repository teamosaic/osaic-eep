import {
  fluid,
  inheritProseColor,
  makeFluidSpacingDefaults,
} from './packages/style-utils'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    // Overriding fontFamily to use @next/font loaded families
    // See pages/_app.tsx
    fontFamily: {
      sans: 'var(--font-sans)',
    },

    extend: {

      // Stop prose from specifying it's own color values
      ...inheritProseColor,

      spacing: {

        // Adds "f" suffixed space values for the default scale.  Use like:
        // `py-8f`.
        ...makeFluidSpacingDefaults(),

        // Add spacing values that are used by BlockLayout
        sm: '8px',
        md: '32px',
        lg: '64px',

        // Add gutter values
        gutter: fluid(40, 16),
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
