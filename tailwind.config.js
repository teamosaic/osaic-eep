import { fluid, makeFluidSpacingDefaults } from './packages/style-utils'
import { base, article } from './styles/prose'

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

      // Make a custom themes for BasicPortableText
      typography: {
        basic: { css: base, },
        article: { css: article, },
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
