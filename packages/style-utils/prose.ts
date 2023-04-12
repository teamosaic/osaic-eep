// Reset prose's setting of colors
// https://github.com/tailwindlabs/tailwindcss-typography/issues/102#issuecomment-952917210
export const inheritProseColor:object = {
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
