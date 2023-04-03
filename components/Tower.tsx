import { groq } from 'next-sanity'
import BlocksList from './Blocks/BlocksList'
import Head from 'next/head'

export default function Tower({ page, settings }) {
  const { blocks } = page
  const metaDescription = page.metaDescription ||
    settings.defaultMetaDescription

  return (<>
    <Head>
      <title>{ page.title }</title>
      { metaDescription &&
        <meta name='description' content={ metaDescription } /> }
    </Head>
    <main>
      <BlocksList {...{ blocks }} />
   </main>
  </>)
}

export const getTowerBySlug = groq`
  *[_type == 'tower' && slug.current == $slug]{
    ...,
    'slug': slug.current
  }[0]
`
