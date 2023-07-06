import 'styles/global.css'

import { AppProps } from 'next/app'
// Example of using Google fonts via @next/font with a variable width font
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GTM_ID}');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}
