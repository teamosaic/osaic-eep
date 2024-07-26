import type { Image } from 'sanity'

import BlocksList from '~/components/blocks/BlocksList'
import PageHead from '~/components/layout/PageHead'
import { Tower } from '~/types'

export default function Tower({ page }: { page: Tower }) {
  return (
    <>
      <PageHead { ...page } />
      <BlocksList blocks={ page.blocks } />
    </>
  )
}
