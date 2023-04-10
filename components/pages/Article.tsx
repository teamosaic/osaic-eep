import { SettingsContext } from '~/providers/settings'
import { useContext } from 'react'
import BasicPortableText from '~/components/packages/portable-text/BasicPortableText'
import Head from 'next/head'

export default function Article({ page }) {
  const settings = useContext(SettingsContext),
    metaDescription = page.metaDescription || settings.metaDescription

    return (
    <>
      <Head>
        <title>{ page.title }</title>
        { metaDescription && <meta
          name='description'
          content={ metaDescription } /> }
      </Head>
      <article className='max-w-screen-md mx-auto px-8'>
        <h1>{ page.title }</h1>
        <BasicPortableText value={ page.body } />
      </article>
    </>
  )
}
