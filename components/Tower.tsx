import Head from 'next/head'
import { groq } from 'next-sanity'
import { useContext } from 'react'

import { SettingsContext } from '~/lib/contexts'

import BlocksList from './Blocks/BlocksList'

export default function Tower({ page }) {
  const { blocks } = page,
    settings = useContext(SettingsContext)

  const metaDescription = page.metaDescription || settings.metaDescription

  return (<>
    <Head>
      <title>{ page.title }</title>
      { metaDescription && <meta
        name='description'
        content={ metaDescription } /> }
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
