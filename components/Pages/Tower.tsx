import Head from 'next/head'
import { groq } from 'next-sanity'
import { useContext } from 'react'

import { SettingsContext } from '~/lib/contexts'

import BlocksList from '../Blocks/BlocksList'

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
    <BlocksList {...{ blocks }} />
  </>)
}

export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri]{
    ...,
    'uri': uri.current
  }[0]
`
