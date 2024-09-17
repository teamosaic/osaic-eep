import 'styles/global.css'

import GoogleTagManager from 'components/layout/GoogleTagManager'
import { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { SessionProvider } from "next-auth/react"

const marselis = localFont({
  variable: '--font-marselis',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/MarselisPro.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MarselisPro-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/MarselisPro-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MarselisPro-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../assets/fonts/MarselisPro-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MarselisPro-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/MarselisPro-LightItalic.otf',
      weight: '300',
      style: 'italic'
    },
  ]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-marselis: ${marselis.style.fontFamily};
          }
        `}
      </style>

      {/* Google Tag Manager Script */}
      <GoogleTagManager />

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
