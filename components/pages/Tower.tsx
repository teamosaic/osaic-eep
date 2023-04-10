import Head from 'next/head'
import { useContext } from 'react'

import { SettingsContext } from '~/lib/contexts'

import BlocksList from '~/components/blocks/BlocksList'

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

