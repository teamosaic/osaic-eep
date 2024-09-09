import { fluid, makeFluidSpacingDefaults } from './packages/style-utils'
import * as proseStyles from './styles/prose'

// Use CSS min to make a value that is affected by the size of the text but
// never gets too big
const smTranslate = 'min(30px, 1em)'

// Some constants to clean up the Hero Banner ANimations
const expandedRadius = fluid(60,45)
const compressedRadius = fluid(100,75)

// The main Tailwind config
/** @type {import('tailwindcss').Config} */
const twConfig = {
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
      sans: ['cordale', 'serif'], // Overwrite the default tailwind font
      cordale: ['cordale', 'serif'],
      marselis: 'var(--font-marselis)',
    },

    extend: {

      // Max Width
      maxWidth: {
        'osaic': '1350px'
      },

      // Add transition properties
      transitionProperty: {
        'greenDot': 'max-width, left, transform',
        'carousel-dot': 'height, width, opacity',
        'input-focus': 'font-size, top',
      },

      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },

      // Make a custom themes for BasePortableText
      typography: {
        base: { css: proseStyles.base, },
        marketing: { css: proseStyles.marketing, },
        article: { css: proseStyles.article, },
      },

      fontSize: {
        // Adds "f" suffixed space values for the default scale.  Use like:
        // `text-8f`.
        ...makeFluidSpacingDefaults(),

        // Font sizes pulled from style guid
        display: fluid(160, 64),
        h1: fluid(90, 76),
        h2: fluid(80, 64),
        h3: fluid(72, 42),
        h4: fluid(55, 32),
        h5: fluid(42, 26),
        h6: fluid(30, 20),
        label: fluid(16, 14),
        smallLabel: fluid(13, 12),
        large: fluid(21, 16),
        body: fluid(16, 16),

        'banner-point-lg': fluid(60,42),
        'banner-point-sm': fluid(42,31),
        'banner-point-sub': fluid(21,16),
        'home-heading': fluid(96,38),
        'enhancement-title': fluid(18, 16),
        'card-title': fluid(24, 20),

      },

      lineHeight: {
        // Letter spacing (leading) pulled from style guid
        display: fluid(160, 64),
        h1: fluid(90, 76),
        h2: fluid(88, 64),
        h3: fluid(72, 42),
        h4: fluid(63.25, 40),
        h5: fluid(50.4, 29.9),
        h6: fluid(37.5, 25),
        label: fluid(16, 14),
        smallLabel: fluid(15, 33),
        large: fluid(37.8, 25.6),
        body: fluid(25,25),

        'card-title': fluid(30, 25),
        'enhancement-title': fluid(25, 22),
        'home-heading': fluid(112,47),
      },

      width: {
        'home-panel': fluid(750,150)
      },

      letterSpacing: {
        label: fluid(1.6, 1.4),
        smallLabel: fluid(1.3, 1.2),
        large: fluid(1.05, 0.8),
        body: fluid(0.9, 0.8),
      },

      spacing: {

        // Adds "f" suffixed space values for the default scale.  Use like:
        // `py-8f`.
        ...makeFluidSpacingDefaults(),

        // Add spacing values that are used by BlockLayout
        xxs: fluid(30),
        xs: fluid(38),
        sm: fluid(48, 32),
        md: fluid(64, 48),
        lg: fluid(128, 64),

        // Add gutter values
        gutter: fluid(40, 20),
        'half-gutter': fluid(25, 15),

        // The header height
        header: fluid(90, 90),

        'button-h': fluid(67,44),
        button: fluid(60, 26),
        'icon-large': fluid(85, 52),
        icon: fluid(65, 44),
        'icon-small': fluid(36, 26),

        delimeter: fluid(96, 41), // The delimeter size
        'delimeter-gap': fluid(62, 15),

        // For Block corner radius
        'block-corner': fluid(64, 32),
        'xs-plus-block-corner': fluid(96),
        'sm-plus-block-corner': fluid(112, 64),
        'md-plus-block-corner': fluid(128, 80),
        'lg-plus-block-corner': fluid(192, 96),

        // Flexible Grid Gap
        'flex-grid-gap': fluid(43, 35),

      },

      borderRadius: {

        'default': 16,

        'large': 32,

        // Border radius
        'card-corner': fluid(42, 15),
        // Stories
        'stories': fluid(30,20),
        // Block
        'block-corner': fluid(64, 32),
        // Hero Banner
        'banner-point': fluid(100, 45.105),
        // Video
        'video': fluid(20,15),
        // Content Card
        'content-card-image-br': fluid(70, 40),
        'content-card-corner': fluid(30, 17),
      },

      colors: {
        // Aliases to colors for dev work
        "primary": "#15535E",
        "secondary": "#CBFA40",
        "muted-secondary": "#EAFF99",
        "accent": "#F8614B",
        "accent-dark": "#D7513E",
        "primary-text": "#555555",
        "light-grey": "#f8f8f8",
        "medium-grey": "#E9E6DC",
        // Brand guideline colors
        "lime": "#CBFA40",
        "evergreen": "#15535E",
        "evergreen-hover": "#217A8A",
        "light-satin-linen": "#E9E6DC",
        "satin-linen": "#DED9C4",
        "dark-screen-satin-linen": "#C4BFAD",
        "tower-gray": "#A3C1C1",
        "jonquil": "#EAFF99",
        "zircon": "#BACBFF",
        "ada-bitter-sweet": "#F8614B",
        "white": "#FFF",
        "black": "#000",
        "border-light": "#E9E9E9",
        "tower-grey": "#A0BFC2"
      },

      animation: {

        // Slide in a direction direction and fade in with ease-out-quint
        'slide-up-in': 'slide-up-in 1s ease-out-quint both',
        'slide-down-in': 'slide-down-in 1s ease-out-quint both',
        'slide-left-in': 'slide-left-in 1s ease-out-quint both',
        'slide-right-in': 'slide-right-in 1s ease-out-quint both',

        'fade-in': 'fade-in 0.3s linear both',

        // Scale down, like for CTAs
        'scale-down-in': 'scale-down-in 1s ease-out-quint both',

        // Scale down slowly, like for backgrounds
        'slow-scale-down-in': 'scale-down-in 3s ease-out-quint both',

        // Marquee animations
        'marquee': 'marquee 35s linear infinite',
        'marquee2': 'marquee2 35s linear infinite',

        // Mosaic Image
        'mosaic-image': 'mosaic-image 12s 0s infinite',
        'mosaic-image-2': 'mosaic-image 12s -4s infinite',
        'mosaic-image-4': 'mosaic-image 12s -8s infinite',

        'accordion': 'accordion 1s ease-in-out',

        // Hero Banner Points
        'hero-banner-point-1': 'banner-point-1 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
        'hero-banner-point-2': 'banner-point-2 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
        'hero-banner-point-3': 'banner-point-3 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
        'hero-banner-point-radius-1': 'banner-point-radius-1 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
        'hero-banner-point-radius-2': 'banner-point-radius-2 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
        'hero-banner-point-radius-3': 'banner-point-radius-3 8s cubic-bezier(0.530, 0.145, 0.4, 1.15) infinite',
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

        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },

        // Marquee
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)'}
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)'}
        },

        // Mosaic Images
        'mosaic-image': {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          '33%': { opacity: 1 },
          '53%': { opacity: 0 },
          '100%': { opacity: 0 }
        },

        accordion: {
          from: {
            height: '0%'
          },
          to: {
            height: '100%'
          }
        },

        'banner-point-1': {
          "9.00%": {
            'font-size': '7vw'
          },
          "33.33%": {
            'font-size': '7vw'
          },
          "42.42%": {
            'font-size': '3.5vw'
          },
          "66.67%": {
            'font-size': '3.5vw'
          },
          "75.76%": {
            'font-size': '3.5vw'
          },
          "100%, 0%": {
            'font-size': '3.5vw'
          },
        },
        'banner-point-2': {
          "9.00%": {
            'font-size': '3.5vw'
          },
          "33.33%": {
            'font-size': '3.5vw'
          },
          "42.42%": {
            'font-size': '7vw'
          },
          "66.67%": {
            'font-size': '7vw'
          },
          "75.76%": {
            'font-size': '3.5vw'
          },
          "100%, 0%": {
            'font-size': '3.5vw'
          },
        },
        'banner-point-3': {
          "9.00%": {
            'font-size': '3.5vw'
          },
          "33.33%": {
            'font-size': '3.5vw'
          },
          "42.42%": {
            'font-size': '3.5vw'
          },
          "66.67%": {
            'font-size': '3.5vw'
          },
          "75.76%": {
            'font-size': '7vw'
          },
          "100%, 0%": {
            'font-size': '7vw'
          },
        },
        'banner-point-radius-1': {
          "9.00%": {
            'border-radius': expandedRadius
          },
          "33.33%": {
            'border-radius': expandedRadius
          },
          "42.42%": {
            'border-radius': compressedRadius
          },
          "66.67%": {
            'border-radius': compressedRadius
          },
          "75.76%": {
            'border-radius': compressedRadius
          },
          "100%, 0%": {
            'border-radius': compressedRadius
          },
        },
        'banner-point-radius-2': {
          "9.00%": {
            'border-radius': compressedRadius
          },
          "33.33%": {
            'border-radius': compressedRadius
          },
          "42.42%": {
            'border-radius': expandedRadius
          },
          "66.67%": {
            'border-radius': expandedRadius
          },
          "75.76%": {
            'border-radius': compressedRadius
          },
          "100%, 0%": {
            'border-radius': compressedRadius
          },
        },
        'banner-point-radius-3': {
          "9.00%": {
            'border-radius': compressedRadius
          },
          "33.33%": {
            'border-radius': compressedRadius
          },
          "42.42%": {
            'border-radius': compressedRadius
          },
          "66.67%": {
            'border-radius': compressedRadius
          },
          "75.76%": {
            'border-radius': expandedRadius
          },
          "100%, 0%": {
            'border-radius': expandedRadius
          },
        },
      },

      screens: {

        // Used with hideWhen layout option
        'when-mobile': { max: '767px' },
        'when-not-mobile': { min: '768px' },
        'when-tablet': { min: '768px', max: '1024px' },
        'when-desktop': { min: '1025px' },
        'when-not-desktop': { max: '1024px' },

        // The banner layout needs to break earlier
        'when-banner-large': { min: '1201px'},
        'when-banner-small': { max: '1200px'},

        'when-desktop-header': { min: '1201px'},
        'when-mobile-header': { max: '1200px'},

        // The banner layout needs to break earlier
        'when-small-stories': { max: '1000px'},
        'when-large-stories': { min: '1001px'},
      },

      // Grid layout templating
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        'media-grid-desktop': '4.8% 21.2% 1.7% 16.1% 2.1% 26.2% 1.7% 26.2%',
        'media-grid-mobile': '47.1% 1.7% 4% 47.1%',
      },
      gridTemplateRows: {
        'media-grid-desktop': '6.8% 8.9% 31% 2.3% 8.7% 2.6% 30.6% 9.3%',
        'media-grid-mobile': '41.6% 2.6% 23.8%  2.5% 1% 2.5% 18.6% 7.5%',
      },
      gridTemplateAreas: {
        'media-grid-desktop': [
          '. . . card-1 card-1 card-1 . .',
          '. . . card-1 card-1 card-1 . card-6',
          'card-2 card-2 . card-1 card-1 card-1 . card-6',
          'card-2 card-2 . card-1 card-1 card-1 . .',
          'card-2 card-2 . card-1 card-1 card-1 . card-5',
          '. . . . . . . card-5',
          '. card-4 card-4 card-4 . card-3 . card-5',
          '. card-4 card-4 card-4 . card-3 . .'
        ],
        'media-grid-mobile': [
          'card-1 card-1 card-1 card-1',
          '. . . .',
          'card-2 . . card-3',
          '. . . card-3',
          'card-4 card-4 . card-3',
          'card-4 card-4 . .',
          'card-4 card-4 . card-5',
          '. . . card-5'
        ]
      }
    }
  },
  // Force tailwind to build some classes that may get missed
  safelist: [
    'grid-in-card-1',
    'grid-in-card-2',
    'grid-in-card-3',
    'grid-in-card-4',
    'grid-in-card-5',
    'grid-in-card-6',
    'w-icon',
    'h-icon',
    'w-icon-small',
    'h-icon-small',
    'pb-10f',
    'pb-6f',
    'pt-24f',
    'pt-12f',
    'pt-10f',
    'pb-30f',
    'pt-40f',
    'when-desktop:pb-46f',
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-400',
    'delay-500',

    // For Block Parent spacing
    'pt-xs',
    'pt-sm',
    'pt-md',
    'pt-lg',
    'pb-xs-plus-block-corner',
    'pb-sm-plus-block-corner',
    'pb-md-plus-block-corner',
    'pb-lg-plus-block-corner',
    'pt-xs-plus-block-corner',
    'pt-sm-plus-block-corner',
    'pt-md-plus-block-corner',
    'pt-lg-plus-block-corner',
    'mb-block-corner',
  ],
  plugins: [
    require('@tailwindcss/typography'),

    function ({ addUtilities, theme }) {

      const calcUtilities = {
        '.nav-pane-h-calc': {
          height: `calc(100vh - ${theme('spacing.header')})`,
        },
      };

      addUtilities(calcUtilities, ['responsive', 'hover']);
    },
  ],
}




export default twConfig;
