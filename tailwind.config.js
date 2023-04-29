import { fluid, makeFluidSpacingDefaults } from './packages/style-utils'
import * as proseStyles from './styles/prose'

// Use CSS min to make a value that is affected by the size of the text but
// never gets too big
const smTranslate = 'min(30px, 1em)'

// The main Tailwind config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    // Overriding fontFamily to use @next/font loaded families
    // See pages/_app.tsx
    fontFamily: {
      sans: 'var(--font-sans)',
    },

    extend: {

      // Make a custom themes for BasicPortableText
      typography: {
        default: { css: proseStyles.base, },
        marketing: { css: proseStyles.marketing, },
        article: { css: proseStyles.article, },
      },

      spacing: {

        // Adds "f" suffixed space values for the default scale.  Use like:
        // `py-8f`.
        ...makeFluidSpacingDefaults(),

        // Add spacing values that are used by BlockLayout
        xs: fluid(24),
        sm: fluid(48, 32),
        md: fluid(64, 48),
        lg: fluid(128, 64),

        // Add gutter values
        gutter: fluid(40, 16),

        // The header height
        header: fluid(80, 60),
      },

      animation: {

        // Slide in a direction direction and fade in with ease-out-quint
        'slide-up-in': 'slide-up-in 1s ease-out-quint both',
        'slide-down-in': 'slide-down-in 1s ease-out-quint both',
        'slide-left-in': 'slide-left-in 1s ease-out-quint both',
        'slide-right-in': 'slide-right-in 1s ease-out-quint both',

        // Scale down, like for CTAs
        'scale-down-in': 'scale-down-in 1s ease-out-quint both',

        // Scale down slowly, like for backgrounds
        'slow-scale-down-in': 'scale-down-in 3s ease-out-quint both',
      },

      keyframes: {

        // Fade in and slide up
        'slide-up-in': {
          'from': {
            opacity: 0,
            transform: `translateY(${smTranslate})`,
          }
        },

        // Fade in and slide down
        'slide-down-in': {
          'from': {
            opacity: 0,
            transform: `translateY(calc(-1 * ${smTranslate}))`,
          }
        },

        // Fade in and slide right
        'slide-right-in': {
          'from': {
            opacity: 0,
            transform: `translateX(calc(-1 * ${smTranslate}))`,
          },
        },

        // Fade in and slide left
        'slide-left-in': {
          'from': {
            opacity: 0,
            transform: `translateX(${smTranslate})`,
          },
        },

        // Fade in and scale down
        'scale-down-in': {
          'from': {
            opacity: 0,
            transform: 'scale(1.1)',
          },
        },

      },

      screens: {

        // Used with hideWhen layout option
        'when-mobile': { max: '767px' },
        'when-tablet': { min: '768px', max: '1024px' },
        'when-desktop': { min: '1025px' },
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
