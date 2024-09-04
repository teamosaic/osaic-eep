import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://use.typekit.net/exd2wbj.css"></link>
      </Head>
      <body className='bg-white text-primary-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
