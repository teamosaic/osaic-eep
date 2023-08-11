import 'styles/global.css'

import GoogleTagManager from 'components/layout/GoogleTagManager'
import { AppProps } from 'next/app'
// Example of using Google fonts via @next/font with a variable width font
import { Inter } from 'next/font/google'

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: 'variable',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
          }
        `}
      </style>

      {/* Google Tag Manager Script */}
      <GoogleTagManager />

      <Component {...pageProps} />
    </>
  )
}
