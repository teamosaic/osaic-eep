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

      // Make a custom theme for BasicPortableText
      typography: {
        basic: {
          css: {

            // Stop prose from specifying it's own color values
            ...inheritProseColor,

            // Make fluid font sizes based on Cloak styleguide
            h1: {
              fontSize: fluid(100, 70),
              letterSpacing: '-0.07em',
              lineHeight: fluid(100, 70),
              fontWeight: 400,
              marginTop: '0.7em',
              marginBottom: '0.7em',
            },
            h2: {
              fontSize: fluid(70, 50),
              letterSpacing: '-0.07em',
              lineHeight: fluid(70, 50),
              fontWeight: 400,
              marginTop: '0.8em',
              marginBottom: '0.8em',
            },
            h3: {
              fontSize: fluid(50, 36),
              letterSpacing: '-0.06em',
              lineHeight: fluid(55, 40),
              fontWeight: 400,
              marginTop: '0.9em',
              marginBottom: '0.9em',
            },
            h4: {
              fontSize: fluid(36, 28),
              letterSpacing: '-0.03em',
              lineHeight: fluid(40, 32),
              fontWeight: 400,
              marginTop: '1em',
              marginBottom: '1em',
            },
            h5: {
              fontSize: fluid(28, 20),
              letterSpacing: '-0.02em',
              lineHeight: fluid(28, 20),
              fontWeight: 400,
              marginTop: '1.1em',
              marginBottom: '1.1em',
            },
            h6: {
              fontSize: fluid(28, 14),
              lineHeight: fluid(28, 22),
              fontWeight: 600,
              marginTop: '1.3em',
              marginBottom: '1.3em',
            },
            p: {
              fontSize: fluid(16, 14),
              lineHeight: fluid(24, 22),
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },

            // Re-apply the margin clearing on first/last
            '> :first-child': { marginTop: 0 },
            '> :last-child': { marginBottom: 0 },
          }
        },
      },

      spacing: {

        // Adds "f" suffixed space values for the default scale.  Use like:
        // `py-8f`.
        ...makeFluidSpacingDefaults(),

        // Add spacing values that are used by BlockLayout
        sm: fluid(16),
        md: fluid(32),
        lg: fluid(64),

        // Add gutter values
        gutter: fluid(40, 16),
      },

      animation: {

        // Slide up and fade in with ease-out-quint
        'slide-up-in':
          'slide-up-in 1s ease-out-quint both',

        // Scale down slowly, like for backgrounds
        'slow-scale-down-in':
          'scale-down-in 3s ease-out-quint both',
      },

      keyframes: {

        // Fade in and slide up
        'slide-up-in': {
          'from': {
            opacity: 0,
            transform: 'translateY(min(30px, 1em))',
          }
        },

        // Fade in and scale down
        'scale-down-in': {
          'from': {
            opacity: 0,
            transform: 'scale(1.1)',
          },
        },

      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
