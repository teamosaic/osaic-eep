/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    // Overriding fontFamily to use @next/font loaded families
    // See pages/_app.tsx
    fontFamily: {
      sans: 'var(--font-sans)',
    },

    extend: {

      // Add spacing values that are used by BlockLayout
      spacing: {
        sm: '8px',
        md: '32px',
        lg: '64px',
      },

      // Reset prose's setting of colors
      // https://github.com/tailwindlabs/tailwindcss-typography/issues/102#issuecomment-952917210
      typography: {
        DEFAULT: {
          css: {
            [
              [
                '[class~="lead"]',
                'strong',
                'ol > li::before',
                'blockquote',
                'h1',
                'h2',
                'h3',
                'h4',
                'figure figcaption',
                'code',
                'a',
                'a code',
                'thead'
              ].join(', ')
            ]: {
              color: 'inherit'
            },

            'ul > li::before': {
              backgroundColor: 'currentColor'
            },

            [
              [
                'hr',
                'blockquote',
                'thead',
                'tbody tr'
              ].join(', ')
            ]: {
              borderColor: 'currentColor'
            },
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
