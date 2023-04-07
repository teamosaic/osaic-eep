import { groq } from 'next-sanity'
import { SettingsContext } from '~/lib/contexts'
import { useContext } from 'react'
import BasicPortableText from '~/components/PortableText/BasicPortableText'
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

export const getArticleBySlug = groq`
  *[_type == 'article' && slug.current == $slug]{
    ...,
    'slug': slug.current,
  }[0]
`
