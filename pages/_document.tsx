import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black dark:bg-slate-900 dark:text-rose-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
